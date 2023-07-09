import axios from "axios";

const BookLendingAppUrl="http://localhost:8080"

const axiosInstance = axios.create({
    withCredentials: true,
 })

export const getLendedBooks=async(rollNo,setBooks)=>{
    try{
        const response = await axiosInstance.get(BookLendingAppUrl+`/api/booklending/getBook/${rollNo}`, {headers: {
            'Authorization': "Bearer "+ localStorage.getItem("jwt")
        }})
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
        const response = await axiosInstance.get(BookLendingAppUrl+`/api/booklending/getStudent/${code}`, {headers: {
            'Authorization': "Bearer "+ localStorage.getItem("jwt")
        }})
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
        const response= await axiosInstance.post(BookLendingAppUrl+ `/api/booklending/lendBook`, values, {headers: {
            'Authorization': "Bearer "+ localStorage.getItem("jwt")
        }});
    }
    catch(error){
        console.log(error);
    }
}

export const returnBook=async(transactionId)=>{
    try{
        const response= await axiosInstance.put(BookLendingAppUrl+`/api/booklending/returnBook/${transactionId}`, null,{headers: {
            'Authorization': "Bearer "+ localStorage.getItem("jwt")
        }});
    }
    catch(error){
        console.log(error)
    }
}

export const getLibrarian=async(setLibrarian)=>{

    try{
        const response = await axiosInstance.get(BookLendingAppUrl+`/api/admin/getLibrarian`, {headers: {
            'Authorization': "Bearer "+ localStorage.getItem("jwt")
        }})
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
        const response=await axiosInstance.post(BookLendingAppUrl+ `/api/admin/addLibrarian`, Librarian, {headers: {
            'Authorization': "Bearer "+ localStorage.getItem("jwt")
        }})
    }
    catch(error){
        console.log(error);
    }
}

export const deleteLibrarian=async(email)=>{
    try{
        const response = await axiosInstance.delete(BookLendingAppUrl+ `/api/admin/deleteLibrarian/${email}`, {headers: {
            'Authorization': "Bearer "+ localStorage.getItem("jwt")
        }})
    }
    catch(error){
        console.log(error);
    }
}