# Application
Node.js Application with MongoDB and Express

full program will made on codespace github

first connect with MongoDB database
url :- mongodb+srv://satyam:satyam903@cluster.3uhfvwv.mongodb.net

then type npm run start

Database connected successully.
server is running on port 5000

Schema for api is
{
  "title":"everything do it",
  "author":"Akshat Mishra",
  "description":"everyone this is my life strong",
  "release_date":"05/06/23",
  "category":"Books"
}

note:- date can we writen less than or equal to actual date and category are  Books and Movies.

then you can check the implement of api
all the api will check through postman application

1. create using POST api.  url:- https://shiny-space-couscous-v6vr7j7px6v52w4w5-5000.app.github.dev/api/feature/create
2. get single item using GET api.  url:- https://shiny-space-couscous-v6vr7j7px6v52w4w5-5000.app.github.dev/api/feature/single/:id
3. get all items using GET api.  url:- https://shiny-space-couscous-v6vr7j7px6v52w4w5-5000.app.github.dev/api/feature/getAll
4. update the item using PUT api.  url:- https://shiny-space-couscous-v6vr7j7px6v52w4w5-5000.app.github.dev/api/feature/update/:id
5. delete the item using DELETE api.  url:- https://shiny-space-couscous-v6vr7j7px6v52w4w5-5000.app.github.dev/api/feature/delete/:id
6. filter the item using category like Books, Movies using GET api.  url:- https://shiny-space-couscous-v6vr7j7px6v52w4w5-5000.app.github.dev/api/feature/category/Books

single item, update, delete all the url you can write id at place of (/:id)
in category you can change in the link 
you enter category/books for finds all books
and enter category/Movies for find all movies

we also use joi for validation library

and those item can't found get message ("its doesn't exist")



