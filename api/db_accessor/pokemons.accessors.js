import Pokemon from "../models/pokemon.js";
import mongoose from "mongoose";
import Connection from "../db/connection.js";

export default class PokemonsAccessor {
    static async getPokemonByName(pokeName) {
        await Connection.open("pokemons");
        const pokemonFound = await Pokemon.findOne({name: pokeName});
        return pokemonFound;
    }

    static async getAllPokemons() {
        await Connection.open("pokemons");
        const allPokemons = await Pokemon.find();
        return allPokemons;
    }

    static async postPokemon(pokemon) {
        Pokemon.create(pokemon);
    }
}