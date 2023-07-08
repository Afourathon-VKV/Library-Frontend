import { Link } from "react-router-dom"
export const BookStudentHeader = () => {
    return (
        <div>
            <div className="flex pt-8 px-6 lg:px-12 text-white">
            <div className="hover:cursor-pointer flex-auto font-bold text-xl">
                    <Link to={`/dashboard`}> Your Logo</Link>
                </div>
                {/* <div className=" pr-[28%] xl:pr-[19%] 2xl:pr-[16%] hidden lg:flex">
                    <input type="text" placeholder="Search" className="rounded-xl text-black text-sm"></input>
                </div> */}
                <div className="flex text-xl">
                    Logout
                </div>
            </div>
        </div>
    )
}