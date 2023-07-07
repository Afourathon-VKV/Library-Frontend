import axios from "axios";

const BookLendingAppUrl="http://localhost:8080"

const axiosInstance = axios.create({
    withCredentials: true,
 })

export const getLendedBooks=async(rollNo,setBooks)=>{
    try{
        const response = await axiosInstance.get(BookLendingAppUrl+`/api/booklending/getBook/${rollNo}`)
        .then(res=>{
            setBooks(res.data);
        })
    }
    catch(error){
        console.log(error);
    }
}

export const getIssuedStudents=async(code,setStudents)=>{
    try{
        const response = await axiosInstance.get(BookLendingAppUrl+`/api/booklending/getStudent/${code}`)
        .then(res=>{
            setStudents(res.data);
        })
    }
    catch(error){
        console.log(error);
    }
}

export const lendBook=async(values)=>{
    try {
        const response= await axiosInstance.post(BookLendingAppUrl+ `/api/booklending/lendBook`, values);
    }
    catch(error){
        console.log(error);
    }
}

export const returnBook=async(transactionId)=>{
    try{
        const response= await axiosInstance.post(BookLendingAppUrl+`/api/booklending/returnBook/${transactionId}`);
    }
    catch(error){
        console.log(error)
    }
}

export const getLibrarian=async(setLibrarian)=>{

    try{
        const response = await axiosInstance.get(BookLendingAppUrl+`/api/admin/getLibrarian`)
        .then(res=>{
            setLibrarian(res.data);
        })
    }
    catch(error){
        console.log(error)
    }
}

export const addLibrarian=async(Librarian)=>{
    try{
        const response=await axiosInstance.post(BookLendingAppUrl+ `/api/admin/addLibrarian`, Librarian)
    }
    catch(error){
        console.log(error);
    }
}

export const deleteLibrarian=async(email)=>{
    try{
        const response = await axiosInstance.delete(BookLendingAppUrl+ `/api/admin/deleteLibrarian/${email}`)
    }
    catch(error){
        console.log(error);
    }
}