const express = require('express');
const { Books } = require('../models');
const router = express.Router();

router.get('/:id', async (req, res)=> {
  try {
    const { id } = req.params;
    const books = await Books.findByPk(id);
    if(!books) return res.status(404).json({message: 'Livro não encontrado'});
    return res.status(200).json(books);
  } catch(error) {
    res.status(500).json({message: 'Algo deu errado'});
  };
});

module.exports = router;