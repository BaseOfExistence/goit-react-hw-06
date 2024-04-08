import { useState } from "react"
import { useEffect } from "react"
import ContactList from "../ContactList/ContactList"
import SearchBox from "../SearchBox/SearchBox"
import ContactForm from "../ContactForm/ContactForm"
import css from "./App.module.css"

export default function App() {
  const [contacts, setContacts] = useState(() => {
    if (localStorage.getItem("contacts") !== null) {
      return (
        JSON.parse(localStorage.getItem("contacts"))
      )
    }
    return (
      [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    )
  })
  const [filter, setFilter] = useState("")
  const AddContact = (newContact) => {
    setContacts((contacts) => {
      return (
        [ ...contacts, newContact]
      )
    })
  }
  const DeletContact = (contactId) => {
    setContacts((contacts) => {
      return (
        contacts.filter((contact) => contact.id !== contactId)
      )
    })
  }
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts])
  const visibleContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase())
  })
  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={AddContact} />
      <SearchBox value={filter} onChange={setFilter} />
      <ContactList contacts={visibleContacts} deleteContact={DeletContact} />
    </div>
  )
}


