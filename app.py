from flask import Flask, jsonify, request
import pickle
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the trained model
pipe = pickle.load(open('pipe.pk1', 'rb'))

@app.route('/predict', methods=['POST'])
def predict():
    print('hello')
    data = request.json
    batting_team = data['batting_team']
    bowling_team = data['bowling_team']
    city = data['city']
    current_score = data['current_score']
    overs = data['overs']
    wickets = data['wickets']
    last_five = data['last_five']

    balls_left = 120 - (overs * 6)
    wickets_left = 10 - wickets
    crr = current_score / overs

    input_df = pd.DataFrame({
        'batting_team': [batting_team],
        'bowling_team': [bowling_team],
        'city': [city],
        'current_score': [current_score],
        'balls_left': [balls_left],
        'wickets_left': [wickets_left],
        'current_run_rate': [crr],
        'last_five_overs': [last_five]
    })

    result = pipe.predict(input_df)
    return jsonify({'predicted_score': int(result[0])})

if __name__ == '__main__':
    app.run(debug=True)

