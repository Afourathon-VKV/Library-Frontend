import { StudentHeader } from "./StudentsPage/StudentsHeader";
import { StudentTable } from "./StudentsPage/StudentsTable";
import { AddStudent } from "./StudentsPage/AddStudent";
import { useState } from "react";

export default function StudentPage(){
    const [searchStudent, setSearchStudent] = useState("");

    return (
        <div className="bg-blue-550 min-h-screen pb-6">
            <StudentHeader setSearchStudent={setSearchStudent}/>

            <div className="mt-4 grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
                <StudentTable searchStudent={searchStudent}/>
                <div className="hidden lg:block">
                    <AddStudent />
                </div>
            </div>
        </div>
    )
}