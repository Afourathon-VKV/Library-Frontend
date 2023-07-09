import { Link } from "react-router-dom"
import { Logout } from "../../API/StudentApi"
import { useNavigate } from "react-router-dom"
export const StudentBooksHeader = ({setSearchBook}) => {
    const navigate=useNavigate();
    return (
        <div>
            <div className="flex pt-8 px-6 lg:px-12 text-white">
                <div className="flex-auto font-bold text-xl">
                   <Link to={`/dashboard`}> Your Logo</Link>
                </div>
                <div className=" pr-[28%] xl:pr-[19%] 2xl:pr-[16%] hidden lg:flex">
                    <input onChange={(e)=>setSearchBook(e.target.value)} type="text" placeholder="Search By Book Title" className="rounded-xl text-black text-sm"></input>
                </div>
                <div className="flex text-xl hover:cursor-pointer" onClick={async()=>{
                    await Logout();
                    navigate("/login");
                }}>
                    Logout
                </div>
            </div>
        </div>
    )
}