const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute('SELECT * FROM model_example.books;');

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

module.exports = {
  getAll,
};

const getByAuthorId = async () => {
  const query = 'SELECT * FROM model_examples.books WHERE author_id=?;'
  const [books] = await connection.execute(query, [author_id]);

  return books.map(({id, title, author_id}) =>({
    id,
    title,
    authorId: author_id,
  }));
}

module.exports = {
  getAll,
  getByAuthorId
}