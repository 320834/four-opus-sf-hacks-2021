from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

def main():
    text = "hello HATE HATE HATE there"
    print(sentiment_score(text))

def sentiment_score(text):
    # Initialize VADER analyzer
    analyzer = SentimentIntensityAnalyzer()
    
    score = analyzer.polarity_scores(text)

    return score['compound']

if __name__ == "__main__":
    main()