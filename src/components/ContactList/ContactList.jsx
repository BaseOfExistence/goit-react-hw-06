import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"
export default function ContactList({ contacts, deleteContact }) {
    return (
        <ul className={css.container}>
            {contacts.map((data) => {
                return (
                    <li className={css.contact} key={data.id}>
                        <Contact data={data} deleteContact={deleteContact} />
                    </li>
                )
            })}
        </ul>
    )
}