export const Design = ()=>{
    // Blue box component in login screen
    return (
        <div className="bg-blue-550 h-[93vh] rounded-2xl m-6 hidden nlg:block">
            <div className="flex">
                <div className="flex-auto text-white font-bold text-xl p-8">
                    Your Logo
                </div>
                <div className="text-white p-8">
                    +94 0116 789 754
                </div>
            </div>
         
            <div className="flex mt-[4%] w-full justify-center  ">
                <img src="/images/book.png" className="scale-75 xl:scale-90"/>
            </div>

            <div className=" mx-16 2xl:mx-28 mt-[6%] xl:mt-[5%]">
                <div className="text-white text-4xl xl:text-5xl font-semibold"> Sign in to Library</div>
            </div>
        </div>
    )
}