import os
import requests, json
from flask import Flask, render_template, request, jsonify, make_response
from flask_cors import CORS
from flaskr.sentiment import sentiment_score
from flaskr.quotes import create_quote
from flaskr.google_sentiment import get_google_sentiment

def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    CORS(app)
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
            score_google = get_google_sentiment(text)
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
            score_vader = sentiment_score(text)
            score_google = get_google_sentiment(text)
            
            # Use vader sentiment and google sentiment and find average
            score = (score_vader + score_google)/2

            quote = create_quote(score)

            return make_response(jsonify(score=score, quote=quote), 200)

        return make_response(jsonify(score=0), 301)

    return app