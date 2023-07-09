import { Button } from "@material-tailwind/react"
import { Link,useNavigate } from "react-router-dom"
import { Logout } from "../../API/StudentApi"
export const BooksHeader = ({setSearchBook}) => {
    const navigate=useNavigate();
    return (
        <div>
            <div className="flex pt-8 px-6 lg:px-12 text-white">
                <div className="hover:cursor-pointer flex-auto font-bold text-xl">
                    <Link to={`/dashboard`}> Your Logo</Link>
                </div>
                <div className=" pr-[28%] xl:pr-[19%] 2xl:pr-[16%] hidden lg:flex">
                    <input onChange={(e) => setSearchBook(e.target.value)} type="text" placeholder="Search by Title" className="rounded-xl text-black text-sm"></input>
                </div>
                <div className="flex text-xl hover:cursor-pointer" onClick={async()=>{
                    await Logout();
                    navigate("/login");
                }}>
                    Logout
                </div>
            </div>

            <div className="lg:hidden">
                <img src="/images/Pic2.png" className="object-contain flex mx-auto my-4"></img>
                <div className="mb-6 mt-10 flex">
                    <div className="flex-auto px-6">
                        <Link to={`/addbook`}>
                            <Button className="bg-[#F9D745] rounded-2xl px-8 text-black">Add</Button>
                        </Link>
                    </div>
                    <div className="flex">
                        <input onChange={(e) => setSearchBook(e.target.value)} type="text" placeholder="Search By Title" className="rounded-xl text-black text-sm w-[90%]"></input>
                    </div>
                </div>
            </div>
        </div>
    )
}