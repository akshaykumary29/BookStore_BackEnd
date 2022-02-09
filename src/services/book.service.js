import Book from '../models/book.model';

// create new book
export const newBook = async (body) => {
    let response = {
        status: 201,
        success: true,
        message: '',
        data: ''
    };

    let foundBook = await Book.findOne({ bookName: body.bookName });

    if (!foundBook) {
        let newBook = new Book ({
            bookName: body.bookName,
            author: body.author,
            description: body.description,
            quantity: body.quantity,
            price: body.price,
            wishlist: body.wishlist
        });

        const data = await Book.create(newBook);

        response.status = 201;
        response.success = true;
        response.message = 'Book Added Successful';
        response.data = data;
        return response;
    } else {
        response.status = 200;
        response.success = false;
        response.message = 'Book is Alreary Exists';
        response.data = body;
        return response;
    }
};

// get all books
export const getBooks = async () => {
    const data = await Book.find();

    let response = {
        status: 201,
        success: true,
        message: '',
        data: ''
    };

    response.status = 200;
    response.success = true;
    response.message = 'Get All Books';
    response.data = data;
    return response;
};