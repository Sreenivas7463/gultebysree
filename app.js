const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');

const app = express()
const port = process.env.PORT || 5000

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

// Templating Engine
// app.set('views', './src/views')
app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended : true }))

// Routes
const newsRouter = require('./src/routes/news')

app.use('', newsRouter)
app.use('/article', newsRouter)
app.use('/page', newsRouter)
app.use('/slug', newsRouter)


// Listen on port 5000
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
