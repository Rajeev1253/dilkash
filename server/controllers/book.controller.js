import {bookService} from '../services/book.services.js'
import {errorHandler} from '../lib/utils.js'

const addbook = async (req,res) => {
    try{
        const response = await bookService.addbook(req);
        console.log("response",response)
        return res.status(201).send({
            success:true,
            message: 'Book added succefully',
            book: response
        })
    }
    catch(error)
    {
        errorHandler(res,error);
    }
}
const getbook = async (req,res) => {
    try{
        const response = await bookService.getBook(req);
        console.log("response",response)
        return res.status(200).send({
            success:true,
            message: 'Book Fetched succefully',
            book: response
        })
    }
    catch(error)
    {
        errorHandler(res,error);
    }
}
const deletebook = async (req,res) => {
    try{
        const response = await bookService.deleteBook(req);
        console.log("response",response)
        return res.status(200).send({
            success:true,
            message: 'Book deleted succefully',
            book: response
        })
    }
    catch(error)
    {
        errorHandler(res,error);
    }
}
const getAllBook = async (req,res) => {
    try{
        const response = await bookService.getAllBook(req);
        console.log("response",response)
        return res.status(200).send({
            success:true,
            message: 'Book deleted succefully',
            book: response
        })
    }
    catch(error)
    {
        errorHandler(res,error);
    }
}

const bookController = {
    addbook,
    getbook,
    deletebook,
    getAllBook
}

export default bookController;
