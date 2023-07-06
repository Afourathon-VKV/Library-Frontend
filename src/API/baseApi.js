import axios from "axios";


export const fetchBooks = async (setBooks) => {
    try {
        const response = await axios.get('http://localhost:8080/api/booklending/books');
        setBooks(response.data);
    } catch (error) {
        console.error('Error fetching books:', error);
    }
};

export const fetchBookDetails = async (setBook,code) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/booklending/books/code/${code}`);
        setBook(response.data);
    } catch (error) {
        console.error('Error fetching book details', error);
    }
};

export const addBook = async (book, setMessage) => {
    try{
        const response = await axios.post("http://localhost:8080/api/boolending/books",book);
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
        const response = await axios.delete(`http://localhost:8080/api/booklending/books/code/${code}`);
    }catch (error){
        console.log(error)
    }
}

