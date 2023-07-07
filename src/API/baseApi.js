import axios from "axios";

const BookLendingAppUrl = "http://localhost:8080";

export const fetchBooks = async (setBooks) => {
    try {
        const response = await axios.get(BookLendingAppUrl+ '/api/booklending/books');
        setBooks(response.data);
    } catch (error) {
        console.error('Error fetching books:', error);
    }
};

export const fetchBookDetails = async (setBook,code) => {
    try {
        const response = await axios.get(BookLendingAppUrl+ `/api/booklending/books/code/${code}`);
        setBook(response.data);
    } catch (error) {
        console.error('Error fetching book details', error);
    }
};

export const addBook = async (book, setMessage) => {
    try{
        const response = await axios.post(BookLendingAppUrl+ "/api/boolending/books",book);
        setMessage("Book Added Successfully");
    }catch (error){
        if(error.response.data === "Null Fields in Body."){
            setMessage("Cannot add book due to empty fields.")
        }else if(error.response.data === "A Book with that code already exists."){
            setMessage("Cannot add book as a book with that code already exists.")
        }
    }
}

export const deleteBook = async (code) => {
    try{
        const response = await axios.delete(BookLendingAppUrl+ `/api/booklending/books/code/${code}`);
    }catch (error){
        console.log(error)
    }
}

export const updateBook = async(Book) => {
    try{
        const response = await axios.put(BookLendingAppUrl + "/api/booklending/books", Book);
    }
    catch(error){
        console.log(error);
    }
}

