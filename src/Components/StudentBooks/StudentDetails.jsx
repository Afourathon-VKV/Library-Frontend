export const StudentDetails = ({name,email,phone,id}) => {
    return (
        <div className="col-span-1 pt-6 lg:pr-8 bg-blue-550 lg:min-h-fit lg:bg-transparent">
                
                <div className="text-white font-bold text-2xl text-center pt-2">
                    Student Details
                </div>

                
                <div className="lg:ms-0 lg:me-0 ms-4 me-4 bg-[#F9D745] rounded-lg mt-3 py-3 ">
                    <div className="w-full ">
                        <img src="/images/StudentAvatar.png" className="object-contain flex mx-auto"></img>
                    </div>
                    <div className="mt-6 text-black">
                        <div className=" w-4/5 mx-auto">
                            <div className="text-sm text-gray-600">Name</div>
                            {name}
                        </div>
                        <div className="mt-8 w-4/5 mx-auto">
                            <div className="text-sm text-gray-600">Email</div>
                            {email}
                        </div>

                        <div className="mt-8 w-4/5 mx-auto">
                            <div className="text-sm text-gray-600">Phone</div>
                            {phone}
                        </div>

                        <div className="mt-8 w-4/5 mx-auto">
                            <div className="text-sm text-gray-600">Id</div>
                            {id}
                        </div>
                    </div>
                    
                </div>

                <div className="mt-8 mb-8 flex justify-center w-full pt-2 px-12 text-white lg:hidden">
                    <div className="flex justify-center">
                        <input type="text" placeholder="Search" className="rounded-xl text-black text-sm"></input>
                    </div>
                </div>
                
            </div>
    )
}