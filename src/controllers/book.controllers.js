import * as bookService from '../service/book.service.js'

export const addBook = async (req, res, next) => {
    try {
        await bookService.addBook(req.body);
        return res.status(200).json(true);
    }catch(e) {
        return next(e);
    }
}

export const getBookByIsbn = async (req, res, next) => {
    try {
        const book = await bookService.getBookByIsbn(req.params.isbn);
        return res.status(200).json(book);
    }catch(e) {
        return next(e);
    }
}

export const deleteBook = async (req, res, next) => {
    try {
       const book =  await bookService.deleteBook(req.params.isbn);
        return res.status(200).json(book);
    }catch(e) {
        return next(e);
    }
}

export const updateBook = async (req, res, next) => {
   try {
       const updated = await bookService.updateBook(req.params.isbn, req.params.title);
       return res.status(200).json(updated);
   }catch(e) {
       return next(e);
   }
}

export const getBooksByAuthor = async (req, res, next) => {
    try {
        const books = await bookService.getBooksByAuthor(req.params.author);
        return res.status(200).json(books);
    }catch(e) {
        return next(e);
    }

}

export const getBooksByPublisher = async (req, res, next) => {
    try {
        const books = await bookService.getBooksByPublisher(req.params.publisher);
        return res.status(200).json(books);
    }catch(e) {
        return next(e);
    }
}

export const getBookAuthors = async (req, res, next) => {
    try {
        const authors = await bookService.getBookAuthors(req.params.isbn);
        return res.status(200).json(authors);
    }catch(e) {
        return next(e);
    }
}

export const getPublishersByAuthor = async (req, res, next) => {
    try {
        const publishers = await bookService.getPublishersByAuthor(req.params.author);
        return res.status(200).json(publishers);
    }catch(e) {
        return next(e);
    }
}

export const deleteAuthor = async (req, res, next) => {
    try {
        const author = await bookService.deleteAuthor(req.params.author);
        return res.status(200).json(author);
    }catch(e) {
        return next(e);
    }
}

