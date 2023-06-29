"use client";
import { useState, SyntheticEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const AddAuthor = () => {
    const [authorName, setAuthName] = useState("");
    const [yearBorn, setBorn] = useState("");
    const [yearDied, setDied] = useState("");

    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        await axios.post("/api/author", {
            authorName: authorName,
            yearBorn: Number(yearBorn),
            yearDied: Number(yearDied),
          })
          
          setAuthName("");
          setBorn("");
          setDied("");
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
                        <h3 className="font-bold text-lg">Add New Author</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-control w-full">
                                <label className="label font-bold">Author Name</label>
                                <input type="text" className="input input-bordered" value={authorName} onChange={(e) => setAuthName(e.target.value)} placeholder="Author Name"/>
                            </div>
        
                            <div className="form-control w-full">
                                <label className="label font-bold">Year Born</label>
                                <input type="text" className="input input-bordered" value={yearBorn} onChange={(e) => setBorn(e.target.value)} placeholder="Born in?"/>
                            </div>
        
                            <div className="form-control w-full">
                                <label className="label font-bold">Year died / alive</label>
                                <input type="text" className="input input-bordered" value={yearDied} onChange={(e) => setDied(e.target.value)} placeholder="Died in? / Alive"/>
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

export default AddAuthor;