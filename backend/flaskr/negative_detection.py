# Checks if message sent by user is extremely negative. Sends appriopriate resources Ex. Depressive thoughts/suicidal thoughts

SCORE_THRESHOLD = -0.3
NEGATIVE_KEY_WORDS = ["die", "suicide", "depressed", "hate"]

RESOURCE_LINKS = [
    "https://www.nimh.nih.gov/health/find-help/index.shtml", 
    "https://www.samhsa.gov/find-help/national-helpline"
]


def is_extreme_negative(text, score):
    """
    Check if the text is extremely negative. Uses score and contents of the text. 

    text : String - The input text
    score : Float - The sentiment of the text

    return : Boolean - True if extremely negative. False if not
    """

    score_check = True if score < SCORE_THRESHOLD else False
    text_check = False

    for word in NEGATIVE_KEY_WORDS:

        if text.find(word) != -1:
            text_check = True
            break

    return score_check and text_check

def detect_negative(text, score):
    """
    If detects negative text, send appriopriate help resources. 

    text : String - The input text
    score : Float - The sentiment of the text

    Return : Array<String> - An array of string of resources or 
    """

    has_negative = is_extreme_negative(text, score)

    if has_negative:
        return RESOURCE_LINKS
    else:
        return []
