const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const categorias = require('./routes/categorias')

const port = process.env.PORT || 3000

app.set('view engine','ejs')
app.use(bodyParser.urlencoded())


app.get('/', async (req, res) =>{
    const content = await axios.get('https://como-fazer-dev-full.firebaseio.com/categorias.json')
    res.render('index', {data: content.data})
})

app.use('/categorias',categorias)

app.listen(3000, (err) => {
    if (err) {
        console.log('erro')
    }else{
        console.log('Como-Faser is running... on port '+ port)
    }
})