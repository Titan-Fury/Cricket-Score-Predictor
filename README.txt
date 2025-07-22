# Cricket T20 Score Predictor

## Project Overview
This project predicts the final score of a T20 cricket match innings using machine learning. It leverages historical T20 match data from Cricsheet, processes and extracts features, trains a regression model, and provides a web interface for users to input match situations and get score predictions.

## Features
- Data extraction and feature engineering from YAML match files
- Machine learning pipeline for score prediction (XGBoost regressor)
- Flask API backend for prediction
- Modern web frontend for user interaction
- Ready-to-use test script for API validation

## Directory Structure
```
Score Predictor Project 2/
├── app.py                  # Flask backend API
├── app/
│   ├── frontend/           # Frontend HTML/CSS/JS
│   ├── templates/          # Flask HTML templates
│   ├── css/, js/           # (if used) Static assets
├── Data-Extraction.ipynb   # Data extraction and cleaning
├── Feature-Extraction.ipynb# Feature engineering and model training
├── T20 Data/               # Raw Cricsheet YAML match files
├── dataset_level1.pk1      # Intermediate processed data
├── dataset_level2.pk1      # Feature-engineered data
├── pipe.pk1                # Trained ML pipeline
├── test_api.py             # Script to test the API
├── setup_env.bat           # Windows environment setup script
├── README.txt              # (This file)
```

## Setup Instructions
1. **Clone the repository and extract Cricsheet data**
   - Place all YAML files from Cricsheet's T20 dataset in the `T20 Data/` directory.
2. **Set up the environment (Windows):**
   - Run `setup_env.bat` to create a virtual environment and install dependencies.
3. **Data Preparation:**
   - Run `Data-Extraction.ipynb` to parse YAML files and create `dataset_level1.pk1`.
   - Run `Feature-Extraction.ipynb` to engineer features and train the model, producing `pipe.pk1`.
4. **Start the API:**
   - Run `python app.py` to launch the Flask server.
5. **Access the Web App:**
   - Open `app/frontend/index.html` in your browser, or use the Flask templates at `http://127.0.0.1:5000/` if integrated.
6. **Test the API:**
   - Run `python test_api.py` to send a sample prediction request.

## Usage
- **Web Interface:**
  - Select teams, city, and input current match stats to get a predicted final score.
- **API:**
  - Send a POST request to `/predict` with JSON:
    ```json
    {
      "batting_team": "India",
      "bowling_team": "Australia",
      "city": "Mumbai",
      "current_score": 80,
      "overs": 10,
      "wickets": 2,
      "last_five": 45
    }
    ```
  - Response: `{ "predicted_score": 168 }`

## Machine Learning Pipeline
- Data is extracted and normalized from YAML files (`Data-Extraction.ipynb`).
- Features are engineered (teams, city, current score, balls left, wickets left, run rate, last 5 overs) in `Feature-Extraction.ipynb`.
- An XGBoost regressor is trained and saved as `pipe.pk1`.
- The Flask API loads this model for real-time predictions.

## Data Source
- Match data: [Cricsheet T20 YAML files](https://cricsheet.org/downloads/)
- Data format: See [Cricsheet format documentation](https://cricsheet.org/format/)

---
For questions or contributions, please refer to the code comments and notebooks for further details.
