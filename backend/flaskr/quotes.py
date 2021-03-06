import requests, json, random
from dotenv import load_dotenv
load_dotenv()
import os
TOKEN = os.getenv("PAPERQUOTES_API-TOKEN")
#Between -1 and -.5, hope
#Between -.5 and 0, motivational
#Between 0 and 0.5 happy
#Between .5 and 1, sucess
def main():
    num = -.7
    print (quote(num))
def create_quote(score):
    if score < -.5:
        tag = "hope"
    elif score >= -.5 and score < 0:
        tag = "motivational"
    elif score >= 0  and score < .5:
        tag = "happy"
    else:
        tag = "success"
    PAPERQUOTES_API_ENDPOINT = 'http://api.paperquotes.com/apiv1/quotes/?tags='+ tag + '&random=random&order=?'
    response = requests.get(PAPERQUOTES_API_ENDPOINT, headers={'Authorization': 'TOKEN {}'.format(TOKEN)})

    if response.ok:

        quote = json.loads(response.text).get('results')
        print(len(quote))

        return random.choice(quote).get('quote')

if __name__ == "__main__":
    main()