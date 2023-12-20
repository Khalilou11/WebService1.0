// routes/livreRoutes.js
import express from 'express';
import {
  getAllLivres,
  createLivre,
  getLivreById,
  updateLivre,
  deleteLivre,
} from '../controllers/livrecontroller.js';

const Livrerouter = express.Router();

Livrerouter.get('/livres', getAllLivres);
Livrerouter.post('/livre', createLivre);
Livrerouter.get('/livre/:id', getLivreById);
Livrerouter.put('/livre/:id', updateLivre);
Livrerouter.delete('/livre/:id', deleteLivre);

export default Livrerouter;