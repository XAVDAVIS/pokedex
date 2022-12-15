/////// Variables ///////
const express = require("express")
const app = express();
const port = 3000; 
const Pokemon = require('./models/pokemon.js');

////// Listen //////
app.listen(port, () => {
    console.log(`listening to pokedex on port ${port}`)
});


////// Index //////
app.get('/', (req, res ) => {
    res.render('index.ejs', {data: Pokemon });
});

////// Show //////
app.get('/:id', (req, res ) => {
    res.render('show.ejs', { data: Pokemon[req.params.id] });
});



