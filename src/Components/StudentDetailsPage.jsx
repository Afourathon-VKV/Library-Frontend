import { StudentBooksHeader } from "./StudentBooks/StudentBooksHeader";
import { StudentBooksTable } from "./StudentBooks/StudentBooksTable";
import { Button } from "@material-tailwind/react";
import { StudentDetails } from "./StudentBooks/StudentDetails";
import {useParams} from "react-router-dom";
import { useEffect,useState } from "react";
import { fetchStudentDetails } from "../API/StudentApi";
export default function StudentDetailsPage(){
    const {id} = useParams();
    const [student, setStudent]=useState();
    // Query database and get all other details from id.

    useEffect(()=>{
        async function getStudentDetails(){
            await fetchStudentDetails(setStudent,id);
        }
        getStudentDetails();
    },[])

    return (
        <div className="bg-blue-550 min-h-screen pb-6">
        
            <StudentBooksHeader/>

            <div className="mt-4 grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
                
                {/* Student details component for smaller screens */}
                <div className="lg:hidden">
                    <StudentDetails name={student?.name} email={student?.email} id={student?.rollNo} phone={student?.phone}/>
                </div>

                <StudentBooksTable id={id}/>

                <div className="lg:block hidden">
                    <StudentDetails name={student?.name} email={student?.email} id={student?.rollNo} phone={student?.phone}/>
                </div>

            </div>
            
        </div>
    )
}