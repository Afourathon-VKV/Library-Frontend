import { Button } from "@material-tailwind/react"
export const AddBook = () => {
    return (
        <div className="col-span-1 pt-6 lg:pr-8 bg-blue-550 min-h-screen lg:min-h-fit lg:bg-transparent ">
                <div className="flex pt-2 px-12 text-white lg:hidden">
                    <div className="flex-auto font-bold text-xl">
                        Your Logo
                    </div>
                    <div className=" pr-[20%] hidden lg:flex">
                        <input type="text" placeholder="Search" className="rounded-xl text-black text-sm"></input>
                    </div>
                    <div className="flex text-xl">
                        Logout
                    </div>
                </div>
                <div className="text-white font-bold text-2xl text-center pt-12">
                Add Book
                </div>
                <div className="lg:bg-[#F9D745] rounded-lg mt-3 py-3 ">
                <div className="w-full ">
                    <img src="/images/Pic1.png" className="object-contain flex mx-auto"></img>
                </div>
                <div className="mt-6 text-white lg:text-black">
                    <form>

                        <div className=" w-4/5 mx-auto">
                            <div className="text-sm lg:text-gray-600 text-white">Title</div>
                            <input type="email" className="border-0 border-b-2  border-white lg:border-black text-[16px] mt-1  focus:ring-0 focus:border-white lg:focus:border-black px-0 placeholder:text-white lg:placeholder:text-blue-550  bg-transparent w-full" placeholder="Enter Book Title" />
                        </div>
                        <div className="mt-8 w-4/5 mx-auto">
                            <div className="text-sm lg:text-gray-600 text-white">Author</div>
                            <input type="email" className="border-0 border-b-2   border-white lg:border-black text-[16px] mt-1  focus:ring-0 lg:focus:border-black focus:border-white px-0 placeholder:text-white lg:placeholder:text-blue-550  bg-transparent w-full" placeholder="Enter Author Name" />
                        </div>

                        <div className="mt-8 w-4/5 mx-auto">
                            <div className="text-sm lg:text-gray-600 text-white">Description</div>
                            <input type="password" className="border-0 border-b-2  border-white lg:border-black text-[16px] mt-1  focus:ring-0 px-0 placeholder:text-white lg:placeholder:text-blue-550  focus:border-black lg:focus:border-black bg-transparent w-full" placeholder="Enter Description" />
                        </div>
                        

                        <div className="flex justify-center mx-auto w-4/5 mt-12 mb-3">
                            <Button className="bg-[#F9D745] lg:bg-blue-550 w-full rounded-xl py-4 text-blue-550 lg:text-white">Add</Button>
                        </div>
                        
                    </form>
                </div>
                    
                </div>
            </div>
    )
}