// Declarations
var express = require('express')
var exphbs  = require('express-handlebars')
var bodyParser = require('body-parser')
var express = require('express')
var app = express()

const Sequelize = require('sequelize');
const sequelize = new Sequelize('pet_store_development', 'postgres', null, { 'dialect': 'postgres' });
const sync = () => {
  return sequelize.sync({ force: true })
}

app.use(express.static('public'))
app.set('view engine', 'handlebars')
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

require('./controllers/petController.js')(app)

app.listen(3000, function () {
  console.log('Pet Store App listening on port 3000!')
  sync()
    .then(() => console.log('... and Database synced!'))
    .catch( e => console.log(e))
})
