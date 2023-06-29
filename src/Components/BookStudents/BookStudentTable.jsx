import { useState,useEffect } from "react"
export const BookStudentTable=()=>{
    const [students, setStudents]=useState([{},{},{}])
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
                    <div className="text-[12px] text-gray-400 text-left py-6 col-span-3">
                        ID number
                    </div>
                    
                </div>

                {students.map((lib)=>(
                    <div className="grid grid-cols-12 bg-[#FFFFF0] rounded-xl h-16 lg:h-20 mb-3 lg:px-0 px-4">
                        <div className="text-center pl-2 items-center h-full hidden lg:flex text-[10px] md:text-sm text-black  lg:col-span-2 xl:col-span-1">
                            <img src="/images/Student.png" className="h-4/5 scale-90"></img>
                        </div>
                        <div className="text-[10px] md:text-sm text-black text-left my-auto col-span-2 break-all pr-3">
                            John Cena
                        </div>
                        <div className="text-[10px] md:text-sm text-black text-left my-auto lg:col-span-2 col-span-3 break-all pr-3">
                        jcena@cantseeme.com
                        </div>
                        <div className="text-[10px] md:text-sm text-black text-left my-auto col-span-2 break-all pr-3">
                        1234567305477760                        </div>
                        <div className="text-[10px] md:text-sm text-black text-left my-auto xl:col-span-4 col-span-3 break-all pr-3">
                        1234567890    
                       
                        </div>
                        <div className="col-span-2 lg:col-span-1  flex justify-end xl:pr-8 pr-4">
                            <img src="/images/Pen.png" className="contain my-auto xl:mr-6 mr-4 md:scale-100 scale-75 "></img>
                            <img src="/images/trash.png" className="contain my-auto md:scale-100 scale-75"></img>
                        </div>
                </div>
                ))}
                
                
            </div>
            
        </div>
    )
}