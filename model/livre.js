// models/Livre.js
import mongoose from 'mongoose';

const LivreSchema = new mongoose.Schema({
  title: String,
  price: String,
});

const Livre = mongoose.model('Livre', LivreSchema);

export default Livre;