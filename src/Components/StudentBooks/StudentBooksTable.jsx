import { useState,useEffect } from "react"
export const StudentBooksTable=()=>{
    const [students, setStudents]=useState([{},{},{}])
    return (
        <div className="lg:col-span-2 xl:col-span-3 2xl:col-span-4 px-6">
            <div className="flex text-center justify-center items-center text-2xl font-bold text-white border-gray-400 border-b-2 pb-4 ">Books List</div>
            
            <div className="w-full">
                <div className="grid grid-cols-12 lg:mx-0 mx-4">
                    <div className="text-[12px] text-gray-400 text-left py-6 lg:col-span-2 xl:col-span-1 lg:block hidden ">

                    </div>
                    <div className="text-[12px] text-gray-400 text-left py-6  col-span-2">
                        Title
                    </div>
                    <div className="text-[12px] text-gray-400 text-left py-6 lg:col-span-2 col-span-3">
                        Author
                    </div>
                    <div className="text-[12px] text-gray-400 text-left py-6 col-span-2 ">
                        Description
                    </div>
                    <div className="text-[12px] text-gray-400 text-left py-6 col-span-3">
                        Code
                    </div>
                    
                </div>

                {students.map((lib)=>(
                    <div className="grid grid-cols-12 bg-[#FFFFF0] rounded-xl h-16 lg:h-20 mb-3 lg:px-0 px-4">
                        <div className="flex text-center justify-center items-center h-full hidden lg:block text-[10px] md:text-sm text-black xl:col-span-1 lg:col-span-2">
                            <img src="/images/BookElement.png" className="h-4/5"></img>
                        </div>
                        <div className="text-[10px] md:text-sm text-black text-left my-auto col-span-2 break-all pr-3">
                            John Cena
                        </div>
                        <div className="text-[10px] md:text-sm text-black text-left my-auto lg:col-span-2 col-span-3 break-all pr-3">
                        jcena@cantseeme.com
                        </div>
                        <div className="text-[10px] md:text-sm text-black text-left my-auto col-span-2 break-all pr-3">
                        1234567890                    
                        </div>
                        <div className="text-[10px] md:text-sm text-black text-left my-auto xl:col-span-4 col-span-3 break-all pr-3">
                        1234567305477760
                        </div>
                        <div className="col-span-2 md:col-span-1 flex justify-end pr-8">
                            <img src="/images/trash.png" className="contain my-auto"></img>
                        </div>
                </div>
                ))}
                
                
            </div>
            
        </div>
    )
}