import { PrismaClient } from "@prisma/client";
import AddAuthor from "./addAuthor";
import DeleteAuthor from "./deleteAuthor";
import UpdateAuthor from "./updateAuthor";

const prisma = new PrismaClient();

const getTheAuthor = async () => {
    const res = await prisma.author.findMany({
        select: {
            AuthorID: true,
            authorName: true,
            yearBorn: true,
            yearDied: true,
            
        },
    });
    return res;
  };

  const Author = async () => {
    const author = await getTheAuthor();

    return (
        
    <div>
            <div className="navbar bg-base-300 rounded-lg">
                <div className="navbar-start">
                    <a className="btn btn-ghost normal-case text-l" href="http://localhost:3000">Home Page</a>
                </div>
                    <div className="navbar-center">
                        <a className="text-2xl shadow-lg font-extrabold">Authors</a>
                    </div>
                <div className="navbar-end">
                    <a href="http://localhost:3000/book">
                        <svg className="w-10 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                        </svg>
                    </a>
                </div>
            </div>
            <br/>
    
        <div>
            <table className = "table w-full">
                <thead className="bg-info-content">
                    <tr className="text-xl">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Year Born</th>
                        <th>Year Died</th>
                        <th className = "text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {author.map((author, index)=> (
                        <tr key={author.AuthorID}>
                            <td>{index + 1}</td>
                            <td>{author.authorName}</td>
                            <td>{author.yearBorn}</td>
                            <td>{author.yearDied}</td>
                            <td className="flex justify-center space-x-1">
                                <UpdateAuthor author = {author} />
                                <DeleteAuthor author = {author} />
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

            <br />
            <div className="mb-2">
                <AddAuthor/>
            </div>

        </div>
      )
  }

export default Author;



