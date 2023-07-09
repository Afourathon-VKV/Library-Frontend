import axios from "axios";

const BookLendingAppUrl = "http://52.66.255.140:80";

const axiosInstance = axios.create({
    withCredentials: true,
 })

export const fetchBooks = async (setBooks) => {
    try {
        const response = await axiosInstance.get(BookLendingAppUrl+ '/api/booklending/books',{headers: {
            'Authorization': "Bearer "+ localStorage.getItem("jwt")
        }});
        setBooks(response.data);
    } catch (error) {
        console.error('Error fetching books:', error);
    }
};

export const fetchBookDetails = async (setBook,code) => {
    try {
        const response = await axiosInstance.get(BookLendingAppUrl+ `/api/booklending/books/code/${code}`,{headers: {
            'Authorization': "Bearer "+ localStorage.getItem("jwt")
        }});
        setBook(response.data);
    } catch (error) {
        console.error('Error fetching book details', error);
    }
};

export const addBook = async (Book, setMessage) => {
    console.log(Book);
    try{
        const response=await axiosInstance.post(BookLendingAppUrl + "/api/booklending/books",Book, {headers: {
            'Authorization': "Bearer "+ localStorage.getItem("jwt")
        }})
        setMessage("Book Added Successfully")
    }
    catch(error){
        console.log(error);
        setMessage(error.message)
    }
}

export const deleteBook = async (code) => {
    try{
        const response = await axiosInstance.delete(BookLendingAppUrl+ `/api/booklending/books/code/${code}`,{headers: {
            'Authorization': "Bearer "+ localStorage.getItem("jwt")
        }});
    }catch (error){
        console.log(error)
    }
}

export const updateBook = async(Book) => {
    try{
        const response = await axiosInstance.put(BookLendingAppUrl + "/api/booklending/books", Book,{headers: {
            'Authorization': "Bearer "+ localStorage.getItem("jwt")
        }});
    }
    catch(error){
        console.log(error);
    }
}

