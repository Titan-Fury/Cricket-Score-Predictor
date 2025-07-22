@echo off
REM Create a virtual environment named 'venv'
python -m venv venv

REM Activate the virtual environment
call venv\Scripts\activate

REM Upgrade pip
python -m pip install --upgrade pip

REM Install required dependencies
pip install flask flask-cors pandas scikit-learn xgboost matplotlib seaborn tqdm pyyaml requests

echo.
echo Environment setup complete!
echo To activate the environment later, run:
echo   venv\Scripts\activate
echo. 