"use client";
import { useState, SyntheticEvent } from "react";
import axios from "axios";

import { useRouter } from "next/navigation";

const AddBook = () => {
    const [bookName, setTitle] = useState("");
    const [publicationYear, setYear] = useState("");
    const [publisherName, setPub] = useState("");

    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        await axios.post("/api/book", {
            bookName: bookName,
            publicationYear: Number(publicationYear),
            publisherName: publisherName,
          })
          
          setTitle("");
          setYear("");
          setPub("");
          router.refresh();
          setIsOpen(false);
    };

    const handleModal = () => {
        setIsOpen(!isOpen);
      }

  return (
<div>

    <button className="btn btn-accent shadow-lg shadow-cyan-500/50" onClick={handleModal}>Add New</button>

        <div className={isOpen ? 'modal modal-open' : 'modal'}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">Add New Book</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-control w-full">
                        <label className="label font-bold">Book Name</label>
                        <input type="text" className="input input-bordered" value={bookName} onChange={(e) => setTitle(e.target.value)} placeholder="Book Name"/>
                    </div>

                    <div className="form-control w-full">
                        <label className="label font-bold">Year Published</label>
                        <input type="text" className="input input-bordered" value={publicationYear} onChange={(e) => setYear(e.target.value)} placeholder="Year Published"/>
                    </div>

                    <div className="form-control w-full">
                        <label className="label font-bold">Publisher</label>
                        <input type="text" className="input input-bordered" value={publisherName} onChange={(e) => setPub(e.target.value)} placeholder="Publisher"/>
                    </div>

                    {/* di sini ada yg mode select */}

                    <div className="modal-action">
                        <button type="button" className="btn" onClick={handleModal}>Close</button>
                        <button type="submit" className="btn btn-success">Save</button>
                    </div>

                </form>
            </div>
        </div>
</div>
  )
}
export default AddBook;

