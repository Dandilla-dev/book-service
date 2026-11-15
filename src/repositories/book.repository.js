import {Book, Author} from '../models/index.js'

const BOOK_VIEW = {
    attributes: ['isbn', 'title', 'publisher'],
    include: {
        model: Author,
        as: 'authors',
        attributes: ['name', ['birth_date', 'birthDate']],
        through: { attributes: [] }
    }
};

export const addBook = async (book) => Book.create(book);

export const findBookById = async (id) => Book.findByPk(id);

export const findBookWithAuthors = async (isbn) => Book.findByPk(isbn, BOOK_VIEW);