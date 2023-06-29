"use client";
import { useState, SyntheticEvent } from "react";
import axios from "axios";

import { useRouter } from "next/navigation";
import type {author} from "@prisma/client";


const DeleteAuthor = ({author}: { author: author }) => {
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    const handleDelete = async (AuhtorID: number) => {
        await axios.delete(`/api/author/${AuhtorID}`);

          router.refresh();
          setIsOpen(false);
    };

    const handleModal = () => {
        setIsOpen(!isOpen);
      }

  return (
<div>
    <button className="btn btn-error btn-sm" onClick={handleModal}>Delete</button>

        <div className={isOpen ? 'modal modal-open' : 'modal'}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">Are you sure to delete "{author.authorName}" ? </h3>

                    <div className="modal-action">
                        <button type="button" className="btn" onClick={handleModal}>No</button>
                        <button type="button" className="btn btn-error" onClick={()=>handleDelete(author.AuthorID)}>Yes</button>
                    </div>

            </div>
        </div>
</div>
  )
}
export default DeleteAuthor;

