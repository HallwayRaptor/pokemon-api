const express = require('express')
const app = express()
const PORT = 8000

const pokemon = {
	'bulbasaur': {
		'type': "grass / poison",
		'pokedex': 1,
		'evolves': true,
	},
};

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
	const pokemonName = req.params.name.toLowerCase()
	if (pokemon[pokemonName]) {
		res.json(pokemon[pokemonName])
	}
})

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`)
})

