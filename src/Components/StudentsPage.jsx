import { StudentHeader } from "./StudentsPage/StudentsHeader";
import { StudentTable } from "./StudentsPage/StudentsTable";
import { Button } from "@material-tailwind/react";
import { AddStudent } from "./StudentsPage/AddStudent";
export default function StudentPage(){
    return (
        <div className="bg-blue-550 min-h-screen pb-6">
            <StudentHeader/>

            <div className="mt-4 grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
                <StudentTable/>
                <div className="hidden lg:block">
                    <AddStudent />
                </div>
            </div>
        </div>
    )
}