import {useParams} from "react-router-dom";
import { BookDetails } from "./BookStudents/BookDetails";
import { BookStudentHeader } from "./BookStudents/BookStudentHeader";
import { BookStudentTable } from "./BookStudents/BookStudentTable";
export default function BookDetailsPage(){
    const {id} = useParams();
    // Query database and get all other details from id.
    return (
        <div className="bg-blue-550 min-h-screen pb-6">
        
            <BookStudentHeader/>

            <div className="mt-4 grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
                
                <div className="lg:hidden">
                    <BookDetails name="John Cena" email="Jcena@cantseeme.com" id={id} phone="123456789"/>
                </div>

                <BookStudentTable/>

                <div className="lg:block hidden">
                    <BookDetails name="John Cena" email="Jcena@cantseeme.com" id={id} phone="123456789"/>
                </div>

            </div>
            
        </div>
    )
}