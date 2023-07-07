import { useState, useEffect } from "react"
import { getIssuedStudents } from "../../API/TransactionApi"
import { AddStudentModal } from "./AddStudentModal"
import { ConfirmBookDelete } from "./ConfirmBookDelete"
export const BookStudentTable = ({id}) => {
    const [students, setStudents] = useState([])
    const [deleteModal, setModal] = useState();
    const [trid, setIdToDelete] = useState();
    useEffect(()=>{
        async function fetchBooks(){
            await getIssuedStudents(id,setStudents);
        }
        fetchBooks();
    }, [])
    return (
        <div className="lg:col-span-2 xl:col-span-3 2xl:col-span-4 px-6">
            <div className="flex  text-2xl font-bold text-white border-gray-400 border-b-2 pb-4 ">Students List</div>

            <div className="w-full">
                <div className="grid grid-cols-12 lg:mx-0 mx-4">
                    <div className="text-[12px] text-gray-400 text-left py-6 lg:col-span-2 xl:col-span-1 lg:block hidden ">

                    </div>
                    <div className="text-[12px] text-gray-400 text-left py-6  col-span-2">
                        Name
                    </div>
                    <div className="text-[12px] text-gray-400 text-left py-6 lg:col-span-2 col-span-3">
                        Email
                    </div>
                    <div className="text-[12px] text-gray-400 text-left py-6 col-span-2 ">
                        Phone
                    </div>
                    <div className="text-[12px] text-gray-400 text-left py-6 col-span-1">
                        Roll No 
                    </div>
                    <div className=" col-span-4 lg:col-span-3 xl:col-span-4 flex justify-end items-center">
                        {/* <Button className="bg-[#F9D745] text-blue-550 rounded-3xl normal-case font-normal  text-[10px] md:text-sm xl:text-[16px] py-2">Add Student</Button> */}
                        <AddStudentModal bookCode={id}/>
                    </div>

                </div>

                {students.map((student,key) => (
                    <div key={key} className="grid grid-cols-12 bg-[#FFFFF0] rounded-xl h-16 lg:h-20 mb-3 lg:px-0 px-4">
                        <div className="text-center pl-2 items-center h-full hidden lg:flex text-[10px] md:text-sm text-black  lg:col-span-2 xl:col-span-1">
                            <img src="/images/Student.png" className="h-4/5 scale-90"></img>
                        </div>
                        <div className="text-[10px] md:text-sm text-black text-left my-auto col-span-2 break-words pr-3">
                            {student.name}
                        </div>
                        <div className="text-[10px] md:text-sm text-black text-left my-auto lg:col-span-2 col-span-3 break-words pr-3">
                            {student.email}
                        </div>
                        <div className="text-[10px] md:text-sm text-black text-left my-auto col-span-2 break-words pr-3">
                            {student.phone}                        
                        </div>
                        <div className="text-[10px] md:text-sm text-black text-left my-auto xl:col-span-4 col-span-3 break-words pr-3">
                            {student.rollNo}

                        </div>
                        <div className="col-span-2 lg:col-span-1  flex justify-end xl:pr-8 pr-4">
                            <img src="/images/trash.png" className="hover:cursor-pointer contain my-auto md:scale-100 scale-75" onClick={()=>{
                                 setModal('default');
                                 setIdToDelete(student.bookLendingEntity.transactionId);
                            }}></img>
                            <ConfirmBookDelete id={trid} openModal={deleteModal} setOpenModal={setModal}/>
                        </div>
                    </div>
                ))}


            </div>

        </div>
    )
}