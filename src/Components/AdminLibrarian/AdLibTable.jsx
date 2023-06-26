import { useState,useEffect } from "react"
export const AdLibTable=()=>{
    const [librarians, setLibs]=useState([{},{},{}])
    return (
        <div className="lg:col-span-2 xl:col-span-3 px-6">
            <div className="text-2xl font-bold text-white border-gray-400 border-b-2 pb-4 ">Librarians</div>
            
            <div className="w-full">
                <div className="grid grid-cols-12 ">
                    <div className="text-[12px] text-gray-400 text-left py-6 ">

                    </div>
                    <div className="text-[12px] text-gray-400 text-left py-6 col-span-2">
                        Name
                    </div>
                    <div className="text-[12px] text-gray-400 text-left py-6 col-span-2">
                        Email
                    </div>
                    <div className="text-[12px] text-gray-400 text-left py-6 col-span-2">
                        Password
                    </div>
                    <div className="text-[12px] text-gray-400 text-left py-6 col-span-3">
                        ID
                    </div>
                    
                </div>

                {librarians.map((lib)=>(
                    <div className="grid grid-cols-12 bg-[#FFFFF0] rounded-xl h-18 mb-3">
                        <div className="text-sm text-black text-left col-span-1">
                            <img src="/images/Profile.png" className=" h-18 object-contain"></img>
                        </div>
                        <div className="text-sm text-black text-left my-auto col-span-2 break-all pr-3">
                            John Cena
                        </div>
                        <div className="text-sm text-black text-left my-auto col-span-2 break-all pr-3">
                        jcena@cantseeme.com
                        </div>
                        <div className="text-sm text-black text-left my-auto col-span-2 break-all pr-3">
                        1234567890                    
                        </div>
                        <div className="text-sm text-black text-left my-auto col-span-3 break-all pr-3">
                        1234567305477760
                        </div>
                        <div className="col-span-2 flex justify-end pr-8">
                            <img src="/images/trash.png" className="contain my-auto"></img>
                        </div>
                </div>
                ))}
                
                
            </div>
            
        </div>
    )
}