import mongoose from "mongoose";

const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  name: { type: String, unique: true, required: true },
  type: { type: String, required: true },
  owner: { type: String, required: true },
  description: { type: String, required: true },
});
