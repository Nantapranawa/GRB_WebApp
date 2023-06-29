"use client";
import { useState, SyntheticEvent } from "react";
import axios from "axios";

import { useRouter } from "next/navigation";

//import type {book} from "@prisma/client";

//declare book 
type book = {
    BookID: number;
    bookName: string;
    publicationYear: number;
    publisherName: string;
};

const UpdateBook = ({book}: { book: book}) => {
    const [bookName, setTitle] = useState(book.bookName);
    const [publicationYear, setYear] = useState(book.publicationYear);
    const [publisherName, setPub] = useState(book.publisherName);

    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    const handleUpdate = async (e: SyntheticEvent) => {
        e.preventDefault();
        await axios.patch(`/api/book/${book.BookID}`, {
            bookName: bookName,
            publicationYear: Number(publicationYear),
            publisherName: publisherName,
          })
          
          router.refresh();
          setIsOpen(false);
    };

    const handleModal = () => {
        setIsOpen(!isOpen);
      }

  return (
<div>
    <button className="btn btn-info btn-sm" onClick={handleModal}>Edit</button>

        <div className={isOpen ? 'modal modal-open' : 'modal'}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">Update Producttt</h3>
                <form onSubmit={handleUpdate}>
                    <div className="form-control w-full">
                        <label className="label font-bold">Book Name</label>
                        <input type="text" className="input input-bordered" value={bookName} onChange={(e) => setTitle(e.target.value)} placeholder="Book Name"/>
                    </div>

                    <div className="form-control w-full">
                        <label className="label font-bold">Year Published</label>
                        <input type="text" className="input input-bordered" value={publicationYear} onChange={(e) => setYear(Number(e.target.value))} placeholder="Year Published"/>
                    </div>

                    <div className="form-control w-full">
                        <label className="label font-bold">Publisher</label>
                        <input type="text" className="input input-bordered" value={publisherName} onChange={(e) => setPub(e.target.value)} placeholder="Publisher"/>
                    </div>

                    {/* di sini ada yg mode select */}

                    <div className="modal-action">
                        <button type="button" className="btn" onClick={handleModal}>Close</button>
                        <button type="submit" className="btn btn-info">Update</button>
                    </div>

                </form>
            </div>
        </div>
</div>
  )
}
export default UpdateBook;

