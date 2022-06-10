# CSC 366

Baseline web application for Admin functionality of the ONET Job Matching service.

Created for CSC 366, Cal Poly, 2022<br/>
Nick Hausman,
Nick Herzig,
Noah Otsuka,
McKenna Reed


Built on a React front end with a flask backend which connects to a mySQL database.

How to run:
Frontend:
> Run NPM Install in the Client Directory.<br/>
> Run NPM Start. <br/>
> Navigate to localhost:3000 on your browser. <br/>
  
Backend:
> source ./venv/bin/activate  - opens virtual environment <br/>
> Run "python3 backend.py" in the Backend Directory. <br/>
> Must be connected to CalPoly servers for connection to the database. <br/>


Current state of the application allows an admin user to create surveys with three different question types, develop new profile types, and view the
surveys already created. The database is built with full support to manage a wide array of users completeing multiple surveys.
