                    /////// Variables ///////
const express = require("express");
const methodOverride = require("method-override");
const Pokemon = require("./models/pokemon.js");
const app = express();
const port = 3000;

                    /////// MIDDLEWARE ////////
app.use(methodOverride("_method") );
app.use(express.urlencoded( {extended: false}));

// app.use(( req, res, next) => {
//     console.log('I am running for all routes')
//     next()
// })

// SEED ROUTE //
app.get('/pokedex/seed', (req, res) => {
    Pokemon.deleteMany({}, (err) => {
        Pokemon.create(data, (err) => {
            res.redirect('/pokedex');
        });
    });
});

                      ////// GETS ///////
// app.get('/pokedex', (req, res ) => {
//     res.render("pokedex.ejs")
// })

////// Index //////
app.get('/pokedex', (req, res ) => {
    res.render("index.ejs", {
    myPokemon: Pokemon,
    });
});

/////// NEW ///////
app.get("/pokedex/new", (req, res ) => {
    res.render('new.ejs');
})
/////// DELETE ///////
app.delete("/pokedex/:index", (req, res ) => {
    Pokemon.splice(req.params.indexOfPokemonArray, 1)
    res.redirect("/pokedex");
});
/////// UPDATE ///////
app.put("/pokedex/:index", (req, res ) => {
    const myStats = {
        hp: req.body.hp,
        attack: req.body.attack,
        defense: req.body.defense, 
        spattack: req.body.spattack, 
        spdefense: req.body.spdefense,
        speed: req.body.speed
    };
    req.body.stats = myStats;
    Pokemon[req.params.indexOfPokemonArray] = req.body;
    res.redirect("/pokedex");
})

/////// CREATE ///////
app.post("/pokedex", (req, res ) => {
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
        res.redirect("/pokedex");
});



/////// EDIT ///////
app.get("/pokedex/:index/edit", (req, res ) => {
    res.render("edit.ejs", {
        myPokemon: Pokemon[req.params.index],
        index: req.params.indexOfPokemonArray,
    })
})

////// Show //////
app.get('/:id', (req, res ) => {
    res.render("show.ejs", { data: Pokemon[req.params.id] });
});


// Listen 

app.listen(port, () => {
    console.log(`listening to pokedex on port ${port}`)
});