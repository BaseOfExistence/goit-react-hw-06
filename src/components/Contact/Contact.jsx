import css from "./Contact.module.css"
import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
export default function Contact({ data, deleteContact }) {
    const handleClick = () => {
        deleteContact(data.id)
    }
    return (
        <>
            <div>
                <div className={css.item}>
                    <IoPersonSharp />
                    <p>{data.name}</p>
                </div>
                <div className={css.item}>
                    <FaPhoneAlt />
                    <p>{data.number}</p>
                </div>
            </div>
            <button onClick={handleClick}>Delete</button>
        </>
    )
}