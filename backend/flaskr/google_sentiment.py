from google.cloud import language_v1

def get_google_sentiment(text):

    client = language_v1.LanguageServiceClient()

    # Transform to text
    document = language_v1.Document(content=text, type_=language_v1.Document.Type.PLAIN_TEXT)

    # Detects the sentiment of the text
    sentiment = client.analyze_sentiment(request={'document': document}).document_sentiment

    return sentiment.score