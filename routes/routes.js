import { Router } from 'express';
import {addBook, getBookByIsbn, deleteBook,
    updateBook, getBooksByAuthor, getBooksByPublisher,
    getBookAuthors, getPublishersByAuthor, deleteAuthor} from '../controllers/book.controllers.js';

const router = Router();

router.post('/book', addBook);
router.get('/book/:isbn', getBookByIsbn);
router.delete('/book/:isbn', deleteBook);
router.patch('/book/:isbn/title/:title', updateBook);
router.get('/books/author/:author', getBooksByAuthor);
router.get('/books/publisher/:publisher', getBooksByPublisher);
router.get('/authors/book/:isbn', getBookAuthors);
router.get('/publishers/author/:author', getPublishersByAuthor);
router.delete('/author/:author', deleteAuthor);

export default router;