import requests, json, random
from dotenv import load_dotenv
load_dotenv()
import os
TOKEN = os.getenv("PAPERQUOTES_API-TOKEN")
#Between -1 and -.75, hope,cheer
#Between -.75 and -.5 support,inspire
#Between -.5 and -.25,inspire,cheer 
#Between -.25 and 0, courage, determination
#Between 0 and 0.25 effort
#Between .25 and .5 reward
#Between .5 and .75 determination,reward
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
        tag = "effort"
    elif score >= .25 and score < .5:
        tag = "reward"
    elif score >= .5  and score < .75:
        tag = "determination,reward"
    else:
        tag = "success,wisdom"
    PAPERQUOTES_API_ENDPOINT = 'http://api.paperquotes.com/apiv1/quotes/?tags='+ tag + '&random=random&order=?'
    response = requests.get(PAPERQUOTES_API_ENDPOINT, headers={'Authorization': 'TOKEN {}'.format(TOKEN)})

    if response.ok:

        quote = json.loads(response.text).get('results')

        return random.choice(quote).get('quote')

if __name__ == "__main__":
    main()