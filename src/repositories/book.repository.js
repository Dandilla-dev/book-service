import {Book} from '../models/index.js'

export const addBook = async (book, options = {}) => Book.create(book, options);

export const findBookById = async (id, options = {}) => Book.findByPk(id, options);