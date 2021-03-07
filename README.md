# four-opus-sf-hacks-2021

SF-Hacks 2021 for team four opus

# Installation

**Environment Variables**

Make sure to add two .env files. One in root directory of backend and the other in frontend.

## Frontend (React)

**Install npm, node, and python**

1. `cd maybel`
2. `yarn`
3. `yarn start`

## Backend (Python Flask)

**Virtual env setup**

If first time, create virtual environment in root directory

1. python3 -m venv venv
(Pro tip: if that doesn't work, try using py instead!)

To activate

Windows
1. venv\Scripts\activate.bat

Linux/MacOS
1. source venv/bin/activate

2. install packages: pip install -r requirements.txt
3. Should you install a pip package, update requirements.txt with: pip freeze > requirements.txt
4. push requirements.txt to repo

**Flask**

1. Create a virutal environment with: `python3 -m venv venv` at the root directory
2. Activate virutal environment
   - _For Windows_ : `venv\Scripts\activate.bat`
   - _Linux/MacOS_ : `source venv/bin/activate`
3. Install required pacakges with: `pip install -r requirements.txt`
4. Should you install a pip package, update `requirements.txt` with: `pip freeze > requirements.txt`
5. After updating `requirements.txt`, push file to repo

**Running the flask app**

1. `cd backend`
2. Declare environment variables for Flask:
   - _For Windows_:
     - Command Prompt : `export FLASK_APP=flaskr` and `export FLASK_ENV=development`
     - Power Shell : `$env:FLASK_APP= "flaskr"` and `$env:FLASK_ENV= "development"`
   - _For Linux/MacOS_:
     - `export FLASK_APP=flaskr` and `export FLASK_ENV=development`
3. Run Flask app with: `flask run`

## Acknowledgements

# Music

All music come from [ChillHop](https://chillhop.com/).

# Photos

All photos are hosted open-source from this [collection](https://unsplash.com/collections/2194996/june-2018) on [Unsplash](https://unsplash.com/).
