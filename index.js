const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const categorias = require('./routes/categorias')
const publicacoes = require('./routes/publicacoes')

const port = process.env.PORT || 3000

app.set('view engine','ejs')
app.use(bodyParser.urlencoded())


app.get('/', async (req, res) =>{
    res.render('index')
})

app.use('/categorias',categorias)
app.use('/publicacoes',publicacoes)

app.listen(3000, (err) => {
    if (err) {
        console.log('erro')
    }else{
        console.log('Como-Faser is running... on port '+ port)
    }
})