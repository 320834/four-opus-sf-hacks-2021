# four-opus-sf-hacks-2021
SF-Hacks 2021 for team four opus

# Installation

## Frontend (React)

**Install npm, node, and python**

1. cd maybel
2. yarn 
3. yarn start

## Backend (Python Flask)

**Virtual env setup**

If first time, create virtual environment in root directory

1. python3 -m venv venv

To activate

Windows
1. venv\Scripts\activate.bat

Linux/MacOS
1. source venv/bin/activate

3. cd backend
4. pip install -r requirements.txt (install packages)
5. pip freeze > requirements.txt (Should you install a pip package, update requirements.txt)
6. push requirements.txt to repo

**Flask**

**Run flask Linux**

cd backend

export FLASK_APP=flaskr

export FLASK_ENV=development

flask run

**Run flask windows**

cd backend
_for command prompt_:
`set FLASK_APP=flaskr`
`set FLASK_ENV=development`
$env:FLASK_APP= "flaskr"

$env:FLASK_ENV= "development"

flask run
