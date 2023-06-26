import { Button } from "@material-tailwind/react"
import { Link } from "react-router-dom"

export const SignIn=()=>{
    return (
        <div>
            <div className="nlg:hidden font-bold text-xl ml-[15%] mt-10">
                Your Logo
            </div>
        <div className=" mt-10 nlg:mt-[15vh] ml-[15%]">
            <div className="font-bold text-3xl">
                Sign in
            </div>
            <div className="mt-6">
                If you don’t have an account register
            </div>

            <div className="mt-2">
                You can <Link to={`/signup`} className="text-blue-250 font-extrabold">Register Here!</Link>
            </div>

            <div className="mt-14 w-4/5">
                <form>
                    <div className="mt-2">
                        <div className="text-sm text-gray-600">Email</div>
                        <input type="email" className="border-0 border-b-2  border-black text-sm mt-1  focus:ring-0 focus:border-black px-0 placeholder:text-blue-550  w-full" placeholder="Enter your email addresss" />
                    </div>

                    <div className="mt-12">
                        <div className="text-sm text-gray-600">Password</div>
                        
                        <input type="password" className="border-0 border-b-2  border-black text-sm mt-1  focus:ring-0 px-0 placeholder:text-blue-550 focus:border-black w-full" placeholder="Enter your password" />
                    </div>
                    <div className="flex mt-4">
                        <div className="flex-auto">
                            <input type="checkbox"/>
                            <span className="mx-2 text-sm ">Remember me</span>
                        </div>

                        <div className="flex mt-[7px] text-sm text-gray-600">
                            Forgot Password?
                        </div>
                    </div>

                    <div className="flex justify-center mt-12">
                        <Button className="bg-blue-250 w-full rounded-xl py-4">Login</Button>
                    </div>
                    
                    <div className="text-gray-600 text-center mt-6">
                        or continue with
                    </div>

                    <div className="flex justify-center mt-6 ">
                        <img src="/images/Facebook.png" className="mr-2 hover:cursor-pointer"/>
                        <img src="/images/apple.png" className="mr-2 hover:cursor-pointer"/>
                        <img src="/images/google.png" className="hover:cursor-pointer"/>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}