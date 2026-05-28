# Exam App API Documentation

## Base URL

http://localhost:5000/api/


### POST New Question


Request Headers
Content-Type
application/json
Body
raw (json)
json
{
  "question": "Mikä on Suomen pääkaupunki?",
  "question_type": "multiplechoise",
  "created_by": null
}

### Get All Questions

GET

New Request
http://localhost:5000/api/questions


### Get Question by id 
GET
New Request
http://localhost:5000/api/questions/1

Request Headers
Content-Type
application/json


### UPDATE Question by id
PUT
New Request
http://localhost:5000/api/questions/1

Body
raw (json)
json
{
  "question": "What is JSX?",
  "question_type": "multiplechoise"
}


### DELETE Question by id
DELETE
New Request
http://localhost:5000/api/questions/6





