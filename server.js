const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const favicon = require("serve-favicon");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");




const setNonceMiddleware = ( request, response, next ) => {
  try {
    response.locals.nonce = uuidv4()
    next()
  } catch ( error ) {
    console.error ( 'error from setNonceMiddleware: ', error )
  }
}

dotenv.config();
const app = express();
connectDB();
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/users", require("./routes/auth"));
app.use('/meals', require('./routes/meal.route'));
app.use('/diet', require('./routes/diet.route'));
app.use('/recipe', require('./routes/recipe.route'));

app.listen(process.env.PORT || 5000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

