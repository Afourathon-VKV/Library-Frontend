import { useState,useEffect } from "react"
import { Button } from "@material-tailwind/react"
import { Link } from "react-router-dom"
export const StudentTable=()=>{
    const [students, setStudents]=useState([{},{},{}])
    return (
        <div className="lg:col-span-2 xl:col-span-3 2xl:col-span-4 px-6">
            <div className="text-2xl font-bold text-white border-gray-400 border-b-2 pb-4 ">Students List</div>
            
            <div className="w-full">
                <div className="grid grid-cols-12 xl:mx-0 mx-4">
                    <div className="text-[12px] text-gray-400 text-left py-6  xl:col-span-1 xl:block hidden ">

                    </div>
                    <div className="text-[12px] text-gray-400 text-left py-6  col-span-2">
                        Name
                    </div>
                    <div className="text-[12px] text-gray-400 text-left py-6 lg:col-span-3 xl:col-span-2 col-span-2">
                        Email
                    </div>
                    <div className="text-[12px] text-gray-400 text-left py-6 col-span-2 ">
                        Phone
                    </div>
                    <div className="text-[12px] text-gray-400 text-left py-6 col-span-3">
                        ID
                    </div>
                    
                </div>

                {students.map((lib)=>(
                    <div className="grid grid-cols-12 bg-[#FFFFF0] rounded-xl mb-3 xl:px-0 px-4 py-2">
                        <div className="hidden xl:flex items-center pl-2 text-[10px] md:text-sm text-black text-left xl:col-span-1 mr-2">
                            <img src="/images/Student.png" className=""></img>
                        </div>
                        <div className="text-[10px] md:text-sm text-black text-left my-auto col-span-2 break-words pr-3 ">
                            John Cena
                        </div>
                        <div className="text-[10px] md:text-sm text-black text-left my-auto xl:col-span-2 lg:col-span-3 col-span-2 break-words pr-3">
                        jcena@cantseeme.com
                        </div>
                        <div className="text-[10px] md:text-sm text-black text-left my-auto col-span-2 break-words pr-3">
                        1234567890                    
                        </div>
                        <div className="text-[10px] md:text-sm text-black text-left my-auto col-span-2 break-words md:col-span-3  pr-3">
                        1234567305477760
                        </div>
                        <div className="  col-span-4 md:col-span-3 lg:col-span-2 flex-col my-auto pr-2">
                            <div className="flex md:justify-center ,md:items-center justify-end items-end">
                               <Link to={`/studentdetails/1`}><Button className="bg-blue-550 normal-case text-[10px] xl:text-sm font-normal rounded-2xl py-2 ">See Books</Button></Link> 
                            </div>
                            <div className="flex md:justify-center md:items-center justify-end items-end mr-6 md:mr-0 mt-1">
                                <img src="/images/Pen.png" className="contain my-auto xl:mr-6 mr-4 md:scale-100 scale-75 "></img>
                                <img src="/images/trash.png" className="contain my-auto md:scale-100 scale-75"></img>
                            </div>
                            
                        </div>
                </div>
                ))}
                
                
            </div>
            
        </div>
    )
}