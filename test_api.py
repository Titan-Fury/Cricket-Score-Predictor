import requests

# URL of the local Flask API
url = 'http://127.0.0.1:5000/predict'

# Example payload (adjust as needed)
data = {
    "batting_team": "India",
    "bowling_team": "Australia",
    "city": "Mumbai",
    "current_score": 80,
    "overs": 10,
    "wickets": 2,
    "last_five": 45
}

try:
    response = requests.post(url, json=data)
    print("Status Code:", response.status_code)
    print("Response JSON:", response.json())
except Exception as e:
    print("Error communicating with the API:", e) 