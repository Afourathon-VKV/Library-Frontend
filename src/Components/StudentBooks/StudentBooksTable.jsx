import { useState, useEffect } from "react"
import { Button } from "@material-tailwind/react"
import { AddBookModal } from "./AddBookModal"
import { getLendedBooks } from "../../API/TransactionApi"
import { ConfirmBookDelete } from "./ConfirmBookDelete"
export const StudentBooksTable = ({id,searchBook}) => {

    const [books, setBooks] = useState([])
    const [deleteModal, setModal]=useState();
    const [trid, setIdToDelete]=useState();
    useEffect(()=>{
        async function fetchBooks(){
            await getLendedBooks(id,setBooks);
        }
        fetchBooks();
    }, [])
    return (
        <div className="lg:col-span-2 xl:col-span-3 2xl:col-span-4 px-6">
            <div className="flex  text-2xl font-bold text-white border-gray-400 border-b-2 pb-4 ">Books List</div>

            <div className="w-full">
                <div className="grid grid-cols-12 lg:mx-0 mx-4">
                    <div className="text-[12px] text-gray-400 text-left py-6 lg:col-span-2 xl:col-span-1 lg:block hidden ">

                    </div>
                    <div className="text-[12px] text-gray-400 text-left py-6  col-span-2 ">
                        Title
                    </div>
                    <div className="text-[12px] text-gray-400 text-left py-6  col-span-2">
                        Author
                    </div>
                    <div className="text-[12px] text-gray-400 text-left py-6 col-span-2 ">
                        Code
                    </div>
                    <div className="text-[12px] text-gray-400 text-left py-6 col-span-2">
                        Description
                    </div>

                    <div className=" lg:col-span-2 xl:col-span-3 col-span-4  flex justify-end items-center">
                        {/* <Button className="bg-[#F9D745] text-blue-550 rounded-3xl normal-case font-normal  text-[10px] md:text-[12px] xl:text-[16px] py-2">Add Book</Button> */}
                        <AddBookModal rollNo={id}/>
                    </div>
                </div>

                {books.map((lib,key) => (
                    (searchBook==="" || lib.title.includes(searchBook)) && 
                    <div key={key} className="grid grid-cols-12 bg-[#FFFFF0] rounded-xl h-16 lg:h-20 mb-3 lg:px-0 px-4">
                        <div className="text-center pl-2 items-center h-full hidden lg:flex text-[10px] md:text-sm text-black  lg:col-span-2 xl:col-span-1">
                            <img src="/images/BookElement.png" className="h-4/5 xl:scale-90 scale-75"></img>
                        </div>
                        <div className="text-[10px] md:text-sm text-black text-left my-auto col-span-2 break-words pr-3">
                            {lib.title}
                        </div>
                        <div className="text-[10px] md:text-sm text-black text-left my-auto col-span-2  break-words pr-3">
                            {lib.author}
                        </div>
                        <div className="text-[10px] md:text-sm text-black text-left my-auto col-span-2 break-words pr-3">
                            {lib.code}                       </div>
                        <div className="text-[10px] md:text-sm text-black text-left my-auto xl:col-span-4 lg:col-span-3 col-span-4 break-words pr-3">
                            {lib.description}

                        </div>
                        <div className="col-span-2 lg:col-span-1  flex justify-end xl:pr-8 pr-4">

                            <img src="/images/trash.png" className="hover:cursor-pointer contain my-auto md:scale-100 scale-75" onClick={()=>{
                                 setModal('default');
                                 setIdToDelete(lib.bookLendingEntity.transactionId);
                            }}></img>

                            <ConfirmBookDelete id={trid} openModal={deleteModal} setOpenModal={setModal}/>
                        </div>
                    </div>
                ))}


            </div>

        </div>
    )
}