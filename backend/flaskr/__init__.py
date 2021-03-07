import os
import requests, json
from flask import Flask, render_template, request, jsonify, make_response
from flaskr.sentiment import sentiment_score
from flaskr.quotes import create_quote
import dialogflow

def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # Landing page for the app
    @app.route('/') # default route
    def new():
        score = ""
        return render_template('index.html', score=score) # Renders template: index.html with argument score = ""

    # Test page to return sentiment score based on text input
    @app.route('/sentiment', methods = ('GET', 'POST')) # /sentiment route, allowed request methods: POST, and GET
    def getSentiment():  # The getSentiment view
        if request.method == 'POST':
            text = request.form['text']  # Fetches data from <input name='text'> from index.html
            score = sentiment_score(text)
            quote = create_quote(score)
            
            return render_template('index.html', score=score, quote=quote)

        else:
            return render_template('index.html')


    @app.route('/sentiment-json', methods=['POST'])
    def jsonSentiment():

        data = json.loads(request.data.decode("utf-8"))
        data_json = request.get_json()
        
        if("text" in data.keys()):
            text = data["text"]
            score = sentiment_score(text)
            # quote = "Some random quote"
            quote = create_quote(score)

            return make_response(jsonify(score=score, quote=quote), 200)

        return make_response(jsonify(score=0), 301)


    @app.route('/chatbox', methods=['GET', 'POST'])
    def chatbox():
        return render_template('chatbox.html')


    @app.route('/webhook', methods=['POST'])
    def webhook():
        data = request.get_json(silent=True)
        if data['queryResult']['queryText'] == 'yes':
            reply = {
                "fulfillmentText": "Okay. Sending out help resources",
            }
            return jsonify(reply)

        elif data['queryResult']['queryText'] == 'no':
            reply = {
                "fulfillmentText": "Okay. Simply cheering you on.",
            }
            return jsonify(reply)


    @app.route('/send_message', methods=['POST'])
    def send_message():
        message = request.form['message']
        project_id = os.getenv('DIALOGFLOW_PROJECT_ID')
        fulfillment_text = detect_intent_texts(project_id, "unique", message, 'en')
        response_text = { "message":  fulfillment_text }
        return jsonify(response_text)

    return app

def detect_intent_texts(project_id, session_id, text, language_code):
    session_client = dialogflow.SessionsClient()
    session = session_client.session_path(project_id, session_id)

    if text:
        text_input = dialogflow.types.TextInput(
            text=text, language_code=language_code)
        query_input = dialogflow.types.QueryInput(text=text_input)
        response = session_client.detect_intent(
            session=session, query_input=query_input)
        return response.query_result.fulfillment_text
    
