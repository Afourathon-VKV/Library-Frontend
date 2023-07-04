import { StudentBooksHeader } from "./StudentBooks/StudentBooksHeader";
import { StudentBooksTable } from "./StudentBooks/StudentBooksTable";
import { Button } from "@material-tailwind/react";
import { StudentDetails } from "./StudentBooks/StudentDetails";
import {useParams} from "react-router-dom";
export default function StudentDetailsPage(){
    const {id} = useParams();
    // Query database and get all other details from id.
    return (
        <div className="bg-blue-550 min-h-screen pb-6">
        
            <StudentBooksHeader/>

            <div className="mt-4 grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
                
                {/* Student details component for smaller screens */}
                <div className="lg:hidden">
                    <StudentDetails name="John Cena" email="Jcena@cantseeme.com" id={id} phone="123456789"/>
                </div>

                <StudentBooksTable/>

                <div className="lg:block hidden">
                    <StudentDetails name="John Cena" email="Jcena@cantseeme.com" id={id} phone="123456789"/>
                </div>

            </div>
            
        </div>
    )
}