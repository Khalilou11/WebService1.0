// controllers/livreController.js
import Livre from '../model/livre.js';

export const getAllLivres = async (req, res) => {
  try {
   // const livres = await Livre.find();
    const livres = await Livre.find().sort({ title: -1 }); // 1 for ascending order

    
    res.status(200).json(livres);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createLivre = async (req, res) => {
  const { title, price } = req.body;
  const livre = new Livre({ title, price });
    console.log("livre get ",req.body);
  try {
    const savedLivre = await livre.save();
    res.json({ message: 'Livre created successfully', livre: savedLivre });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getLivreById = async (req, res) => {
  const { id } = req.params;

  try {
    const livre = await Livre.findById(id);
    if (!livre) {
      return res.status(404).json({ error: 'Livre not found' });
    }
    res.json(livre);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateLivre = async (req, res) => {
  const { id } = req.params;
  const { title, price } = req.body;

  try {
    const updatedLivre = await Livre.findByIdAndUpdate(
      id,
      { title, price },
      { new: true }
    );

    if (!updatedLivre) {
      return res.status(404).json({ error: 'Livre not found' });
    }

    res.json({ message: 'Livre updated successfully', livre: updatedLivre });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteLivre = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedLivre = await Livre.findByIdAndDelete(id);

    if (!deletedLivre) {
      return res.status(404).json({ error: 'Livre not found' });
    }

    res.json({ message: 'Livre deleted successfully', livre: deletedLivre });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
