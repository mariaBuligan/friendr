const express = require('express')
const usersRouter=require('./router/users.router')


const app = express()
const port = 3000

app.use(express.json());


//Routers
app.use('/users',usersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})











/* app.post('/users/', (req, res) => {
  console.log(req.body);
  const userToBeCreated = req.body;
  console.log(userToBeCreated.firstName);
  res.send('The user will be created');
  console.log(req.headers);
})
 */

//GET -> pune in url == read
//POST -> ==creare
//PUT -> ==update (pt mai multe?), actualizezi tot
//DELETE -> == delete
//PATCH -> ==update , pt actualizarea unui singur atribute


//Crud-> create,read,update,delete

//cookies-> retine preferintele utilizatorului, retine ca userul este conectat,
//          datele sunt stocate pe laptopul tau 