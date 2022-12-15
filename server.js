                    /////// Variables ///////
const express = require("express")
const app = express();
const port = 3000; 
const Pokemon = require('./pokedex/models/pokemon.js');

////// Listen //////
app.listen(port, () => {
    console.log(`listening to pokedex on port ${port}`)
});

                      ////// GETS ///////
app.get('/pokedex', (req, res ) => {
    res.render('pokedex.ejs')
})

////// Index //////
app.get('/', (req, res ) => {
    res.render('index.ejs', {data: Pokemon });
});

////// Show //////
app.get('/:id', (req, res ) => {
    res.render('show.ejs', { data: Pokemon[req.params.id] });
});

/////// NEW ///////
app.get('/pokedex/new', (req, res ) => {
    res.render('new.ejs');
})

/////// EDIT ///////
app.get('/pokedex/:index/edit', (req, res ) => {
    res.render('edit.ejs', {
        pokemon: Pokemon[req.params.index],
        index: req.params.indexOfPokemonArray
    })
})

/////// CREATE ///////
app.post('/pokedex', (req, res ) => {
    const myStats = {
        hp: req.body.hp,
        attack: req.body.attack,
        defense: req.body.defense, 
        spattack: req.body.spattack, 
        spdefense: req.body.spdefense,
        speed: req.body.speed
    };
        req.body.stats = myStats;
        Pokemon.push(req.body);
        res.redirect('/pokedex');
});
