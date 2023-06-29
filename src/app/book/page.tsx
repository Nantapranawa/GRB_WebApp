import { PrismaClient } from "@prisma/client";
import AddBook from "./addBook";
import DeleteBook from "./deleteBook";
import UpdateBook from "./updateBook";
//import type {book} from "@prisma/client";

const prisma = new PrismaClient();


const getTheBooks = async () => {
    const res = await prisma.book.findMany({
        select: {
            BookID: true,
            bookName: true,
            publicationYear: true,
            publisherName: true,
            
        },
    });
    return res;
  };


const Book = async () => {
    const book = await getTheBooks();

  return (

    <div>
            <div className="navbar bg-base-300 rounded-lg">
                <div className="navbar-start">
                    <a className="btn btn-ghost normal-case text-l" href="http://localhost:3000">Home Page</a>
                </div>
                    <div className="navbar-center">
                        <a className="text-2xl shadow-lg font-extrabold">Books</a>
                    </div>
                <div className="navbar-end">
                    <a href="http://localhost:3000/author">
                        <svg className="w-10 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                        </svg>
                    </a>
                </div>
            </div>
            <br />

        <table className = "table w-full">
            <thead className="bg-info-content">
                <tr className="text-xl">
                    <th>ID</th>
                    <th>Title</th>
                    <th>Publication Year</th>
                    <th>Publisher Name</th>
                    <th className = "text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                {book.map((book, index)=> (
                    <tr key={book.BookID}>
                        <td>{index + 1}</td>
                        <td>{book.bookName}</td>
                        <td>{book.publicationYear}</td>
                        <td>{book.publisherName}</td>
                        <td className="flex justify-center space-x-1">
                            <UpdateBook book = {book} />
                            <DeleteBook book = {book} />
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>
        <br />

        <div className="mb-2">
            <AddBook/>
        </div>
        
    </div>
  )
}

export default Book;