import { Button } from "@material-tailwind/react"
export const AdLibDetails=()=>{
    return (
        <div className="col-span-1 pt-6 lg:pr-8">
                <div className="text-black font-bold text-2xl text-center pt-12">
                Add Librarian
                </div>
                <div className="lg:bg-[#F9D745] rounded-lg mt-3 py-3 ">
                <div className="w-full ">
                    <img src="/images/Pic1.png" className="object-contain flex mx-auto"></img>
                </div>
                <div className="mt-6 ">
                    <form>

                        <div className=" w-4/5 mx-auto">
                            <div className="text-sm text-gray-600">Name</div>
                            <input type="email" className="border-0 border-b-2  border-black text-[16px] mt-1  focus:ring-0 focus:border-black px-0 placeholder:text-blue-550 bg-transparent w-full" placeholder="Enter librarian name" />
                        </div>
                        <div className="mt-8 w-4/5 mx-auto">
                            <div className="text-sm text-gray-600">Email</div>
                            <input type="email" className="border-0 border-b-2  border-black text-[16px] mt-1  focus:ring-0 focus:border-black px-0 placeholder:text-blue-550 bg-transparent w-full" placeholder="Enter email addresss" />
                        </div>

                        <div className="mt-8 w-4/5 mx-auto">
                            <div className="text-sm text-gray-600">Password</div>
                            
                            <input type="password" className="border-0 border-b-2  border-black text-[16px] mt-1  focus:ring-0 px-0 placeholder:text-blue-550 focus:border-black bg-transparent w-full" placeholder="Enter password" />
                        </div>
                        

                        <div className="flex justify-center mx-auto w-3/5 mt-12">
                            <Button className="bg-[#F9D745] lg:bg-blue-550 w-full rounded-xl py-4">Add</Button>
                        </div>
                        
                    </form>
                </div>
                    
                </div>
            </div>
    )
}