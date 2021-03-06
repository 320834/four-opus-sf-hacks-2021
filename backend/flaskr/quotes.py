import requests, json
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
        tage = "sucess"
    PAPERQUOTES_API_ENDPOINT = 'http://api.paperquotes.com/apiv1/quotes?tags='+ tag + '&limit=1&random=random&order=?'
    TOKEN = 'b0f87c6601666b8eeafdefd0d28b69c86119dc55'
    response = requests.get(PAPERQUOTES_API_ENDPOINT, headers={'Authorization': 'TOKEN {}'.format(TOKEN)})

    if response.ok:

        quote = json.loads(response.text).get('results')
        return quote[0].get('quote')

if __name__ == "__main__":
    main()