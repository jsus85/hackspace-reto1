var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

app.get('/', function (req, res) {
  res.send('Mi primer servidor!');
})


var generarUsuario = function(){

  var randomName = faker.name.findName();
  var randomEmail = faker.internet.email();
  var randomImage = faker.image.avatar();

  return {
    nombre: randomName,
    email: randomEmail,
    imagen: randomImage
  }

}

app.get('/friends', function (req, res) {

  var cantidad = _.random(5,10)
  
  var usuarios = _.times(cantidad, generarUsuario)
  res.json(usuarios);

})



var generarPosts = function(){

  var randomId = faker.random.uuid(); 
  var randomName = faker.name.findName();
  var randomContenido = faker.lorem.paragraph();
  var randomFecha  = faker.date.past();
  var randomImage = faker.image.avatar();

  return {
    id: randomId,    
    nombre: randomName,
    contenido: randomContenido,
    fecha: randomFecha,
    imagen: randomImage
  }

}

app.get('/posts', function (req, res) {

  var cantidad = _.random(5,10)
  
  var posts = _.times(cantidad, generarPosts)
  res.json(posts);

})


app.listen(3000);
