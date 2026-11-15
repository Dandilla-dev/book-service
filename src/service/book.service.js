import * as bookRepository from "../repositories/book.repository.js";
import * as authorRepository from "../repositories/author.repository.js";
import * as publisherRepository from "../repositories/publisher.repository.js";
import {findBookWithAuthors} from "../repositories/book.repository.js";

export const addBook = async (book) => {
const {isbn, title} = book;
if (await bookRepository.findBookById(isbn)) {
    throw new Error("Book with same isbn already exists");
}
//Create or update publisher
    let publisher = await publisherRepository.findPublisherById(book.publisher);
    if (!publisher) {
        await publisherRepository.addPublisher(book.publisher);
    }

    // Process the authors
    const authors = [];
    for (const a of book.authors) {
        let author = await authorRepository.findAuthorById(a.name);
        if (!author) {
            author = await authorRepository.addAuthor(a);
        }
        authors.push(author);
    }
// Create new Book
    book = await bookRepository.addBook({isbn, title, publisher:book.publisher, authors});
    await book.setAuthors(authors);
}

export const getBookByIsbn = async (isbn) => {
    //TODO implement the service logic
}

export const deleteBook = async (isbn) => {
    const book = await bookRepository.findBookWithAuthors(isbn);
    if (!book) {
        throw new Error(`Book with isbn ${isbn} not found`);
    }
    await book.destroy();
    return book;
}

export const updateBook = async (isbn, title) => {
    const book = await bookRepository.findBookWithAuthors(isbn);
    if (!book) {
        throw new Error(`Book with isbn ${isbn} not found`);
    }
    book.title = title;
    await book.save();
    return book;
}

export const getBooksByAuthor = async (author) => {
    //TODO implement the service logic
}

export const getBooksByPublisher = async (publisher) => {
    //TODO implement the service logic
}

export const getBookAuthors = async (isbn) => {
    //TODO implement the service logic
}

export const getPublishersByAuthor = async (author) => {
    //TODO implement the service logic
}

export const deleteAuthor = async (author) => {
    //TODO implement the service logic
}

