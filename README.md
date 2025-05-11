## Afghan Proverbs & Sayings API
This is a RESTful API project that stores and manages traditional Afghan proverbs and sayings in Dari, Pashto, and English. It supports basic CRUD operations and helps in learning meaningful API development with Express.js.

Features

Get all proverbs

Get a single proverb by ID

Add new proverbs

Update existing proverbs

Delete proverbs

Filter by category (e.g., wisdom, advice)

Get a random proverb


Data Structure

Each proverb contains the following fields:

Field Type Description

id Integer Unique identifier for the proverb
textDari String Proverb in Dari
textPashto String Proverb in Pashto
translationEn String English translation
meaning String Explanation or interpretation
category String Type of proverb (e.g., wisdom, advice)


How to Run the Project Locally

1. Clone the repository:

git clone https://github.com/sareyaqubi/afghan-proverbs-api


2. Install dependencies:

npm install


3. Start the server:

node app.js


4. Open in browser or Postman:

http://localhost:3000/proverbs
