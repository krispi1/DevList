/* Dev Model

"id": string
"firstName": string
"lastName": string
"userName": string
"gender": radio ->> string
"age": number
"email": email
"phoneNumber": string
"picture": url
"country": string
"city": string
"employed":> boolean
"company": string
"techStack": array
"position": string
"createdAt": date
*/

const dev1 = {
  "id": 1,
  "firstName": "chris",
  "lastName": "mado",
  "userName": "chrismado",
  "gender": "male",
  "age": 24,
  "email": "chrismado@email.com",
  "phoneNumber": "0734909090",
  "picture": "/file://nonexistent",
  "country": "Aweland",
  "city": "Farfaraway",
  "employed": true  ,
  "company": "Fairfield",
  "techStack": "MEAN",
  "position": "Fullstack Developer",
  "createdAt": Date.now(),
};

const dev2 = {
  "id": 1,
  "firstName": "jane",
  "lastName": "doe",
  "userName": "janedoe",
  "gender": "female",
  "age": 22,
  "email": "janedoe@email.com",
  "phoneNumber": "0743090909",
  "picture": "/file://wasexistent",
  "country": "Wowland",
  "city": "Notfaraway",
  "employed": false,
  "company": "FunLand",
  "techStack": "MERN",
  "position": "Junior Developer",
  "createdAt": Date.now(),
};

const dev3 = {
  "id": 1,
  "firstName": "john",
  "lastName": "smith",
  "userName": "jsmith",
  "gender": "male",
  "age": 27,
  "email": "jsmith@email.com",
  "phoneNumber": "0776923534",
  "picture": "/file://willfindit",
  "country": "Canada",
  "city": "Vancouver",
  "employed": true,
  "company": "Flight",
  "techStack": "MEVN",
  "position": "Senior Developer",
  "createdAt": Date.now(),
};

const devsList = [dev1, dev2, dev3];

export default devsList;
