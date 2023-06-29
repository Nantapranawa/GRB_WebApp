"use client";
import { useState, SyntheticEvent } from "react";
import axios from "axios";

import { useRouter } from "next/navigation";

//import type {book} from "@prisma/client";

//declare author 
type author = {
    AuthorID: number;
    authorName: string;
    yearBorn: number;
    yearDied: number;
};

const UpdateAuthor = ({author}: { author: author}) => {
    const [authorName, setAuthName] = useState(author.authorName);
    const [yearBorn, setBorn] = useState(author.yearBorn);
    const [yearDied, setDied] = useState(author.yearDied);

    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    const handleUpdate = async (e: SyntheticEvent) => {
        e.preventDefault();
        await axios.patch(`/api/author/${author.AuthorID}`, {
            authorName: authorName,
            yearBorn: Number(yearBorn),
            yearDied: Number(yearDied),
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
                        <label className="label font-bold">Author Name</label>
                        <input type="text" className="input input-bordered" value={authorName} onChange={(e) => setAuthName(e.target.value)} placeholder="Author Name"/>
                    </div>

                    <div className="form-control w-full">
                        <label className="label font-bold">Year Born</label>
                        <input type="text" className="input input-bordered" value={yearBorn} onChange={(e) => setBorn(Number(e.target.value))} placeholder="Year Born"/>
                    </div>

                    <div className="form-control w-full">
                        <label className="label font-bold">Year died / alive</label>
                        <input type="text" className="input input-bordered" value={yearDied} onChange={(e) => setDied(Number(e.target.value))} placeholder="Year Died"/>
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
export default UpdateAuthor;

