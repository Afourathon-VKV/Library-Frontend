export const StudentBooksHeader = ({setSearchBook}) => {
    return (
        <div>
            <div className="flex pt-8 px-6 lg:px-12 text-white">
                <div className="flex-auto font-bold text-xl">
                    Your Logo
                </div>
                <div className=" pr-[28%] xl:pr-[19%] 2xl:pr-[16%] hidden lg:flex">
                    <input onChange={(e)=>setSearchBook(e.target.value)} type="text" placeholder="Search By Book Title" className="rounded-xl text-black text-sm"></input>
                </div>
                <div className="flex text-xl">
                    Logout
                </div>
            </div>
        </div>
    )
}