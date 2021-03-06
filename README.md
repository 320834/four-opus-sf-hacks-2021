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

**Run flask Linux**

export FLASK_APP=flaskr

export FLASK_ENV=development

flask run

**Run flask windows**

set FLASK_APP=flaskr

set FLASK_ENV=development

flask run
