import Pokemon from "../models/pokemon.js";
import mongoose from "mongoose";
import Connection from "../db/connection.js";

export default class PokemonAccessor {
    async getPokemonByName(pokeName) {
        await Connection.open("pokemons");
        const pokemonFound = await Pokemon.findOne({name: pokeName});
        return pokemonFound;
    }

    async getAllPokemon() {
        await Connection.open("pokemons");
        const allPokemon = await Pokemon.find();
        return allPokemon;
    }
}