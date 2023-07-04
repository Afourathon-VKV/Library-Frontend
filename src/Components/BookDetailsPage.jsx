import { useParams } from "react-router-dom";
import { BookDetails } from "./BookStudents/BookDetails";
import { BookStudentHeader } from "./BookStudents/BookStudentHeader";
import { BookStudentTable } from "./BookStudents/BookStudentTable";
import { fetchBookDetails } from "../API/baseApi";
import { useEffect,useState } from "react";

export default function BookDetailsPage(){
    const {id} = useParams();
    const [book, setBook] = useState({});
    
    useEffect(() => {
        async function getBookDetails(){
            await fetchBookDetails(setBook,id);
        }
        getBookDetails();
    }, []);

    return (
        <div className="bg-blue-550 min-h-screen pb-6">
        
            <BookStudentHeader/>

            <div className="mt-4 grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
                
                <div className="lg:hidden">
                    <BookDetails title={book.title} author={book.author} code={book.code} description={book.description}/>
                </div>

                <BookStudentTable/>

                <div className="lg:block hidden">
                    <BookDetails title={book.title} author={book.author} code={book.code} description={book.description}/>
                </div>

            </div>
            
        </div>
    )
}