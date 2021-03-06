const dbHelper = require('../db');

const resolvers = {
  Query: {
    books: async (parent, args) => await dbHelper.getAllBooks(),
    book: async (parent, { id }) => await dbHelper.getBookById(id),
    authors: async (parent, args) => await dbHelper.getAllAuthors(),
    author: async (parent, { id }) => await dbHelper.getAuthorById(id)
  },
  Book: {
    author: async ({ authorId }, args) => await dbHelper.getAuthorById(authorId)
  },
  Author: {
    books: async ({ id }, args) => await dbHelper.getAllBooks({ authorId: id })
  },

  // MUTATION
  Mutation: {
    createAuthor: async (parent, args) => await dbHelper.createAuthor(args),
    createBook: async (parent, args) => await dbHelper.createBook(args)
  }
}

module.exports = resolvers
