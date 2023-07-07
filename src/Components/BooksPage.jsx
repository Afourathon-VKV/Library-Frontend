import { useState } from "react";
import { AddBook } from "./BooksPage/AddBook";
import { BooksHeader } from "./BooksPage/BooksHeader";
import { BooksTable } from "./BooksPage/BooksTable";
export default function BooksPage(){
    
    const [searchBook, setSearchBook] = useState("");
    
    return (
        <div className="bg-blue-550 min-h-screen pb-6">
            <BooksHeader setSearchBook={setSearchBook}/>

            <div className="mt-4 grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
                <BooksTable searchBooks={searchBook}/>
                <div className="hidden lg:block">
                    <AddBook />
                </div>
            </div>
        </div>
    )
}