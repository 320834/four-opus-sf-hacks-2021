import requests, json, random
from dotenv import load_dotenv
import os

load_dotenv()
TOKEN = os.getenv("PAPERQUOTES_API-TOKEN")

#Between -1 and -.5, hope
#Between -.5 and 0, motivational
#Between 0 and 0.5 happy
#Between .5 and 1, sucess
#Between -1 and -.75, hope,cheer
#Between -.75 and -.5 support,inspire
#Between -.5 and -.25,inspire,cheer 
#Between -.25 and 0, courage, determination
#Between 0 and 0.25 happy, motivate
#Between .25 and .5 caution,cheer
#Between .5 and .75 grateful
#Between .75 and 1, success,wisdom
def main():
    num = .8
    print (create_quote(num))
def create_quote(score):
    if score < -.75:
        tag = "hope,cheer"
    elif score >= -.75 and score < -.5:
        tag = "support,inspire"
    elif score >= -.5 and score < -.25:
        tag = "inspire,cheer"
    elif score >= -.25 and score < 0:
        tag = "courage,determination"
    elif score >= 0 and score < .25:
        tag = "happy,motivate"
    elif score >= .25 and score < .5:
        tag = "caution,cheer"
    elif score >= .5  and score < .75:
        tag = "grateful"
    else:
        tag = "success,wisdom"
    PAPERQUOTES_API_ENDPOINT = 'http://api.paperquotes.com/apiv1/quotes/?tags='+ tag + '&random=random&order=?'
    response = requests.get(PAPERQUOTES_API_ENDPOINT, headers={'Authorization': 'TOKEN {}'.format(TOKEN)})

    if response.ok:
        quote = json.loads(response.text).get('results')

        return random.choice(quote).get('quote')
    else:
        return "The world is full of wonders. Sometimes it takes time to see it all"

if __name__ == "__main__":
    main()