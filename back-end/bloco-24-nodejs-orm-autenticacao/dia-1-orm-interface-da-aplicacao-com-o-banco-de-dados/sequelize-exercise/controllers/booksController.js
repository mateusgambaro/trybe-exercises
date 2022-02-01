const { Book } = require('../models');

const getAll = async (req, res) => {
  try {
    const books = await Book.findAll(); // Bônus: Crie uma ordenação no endpoint GET /books para ordenar por ordem alfabética e por data de criação;

    res.status(200);
    res.json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getById = async (req, res)=> {
  try {
    const { id } = req.params;
    const books = await Book.findByPk(id);
    if(!books) return res.status(404).json({message: 'Livro não encontrado'});
    return res.status(200).json(books);
  } catch(error) {
    res.status(500).json({message: 'Algo deu errado'});
  };
};

module.exports = {
  getById,
  getAll,
};