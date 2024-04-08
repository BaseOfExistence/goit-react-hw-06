import css from "./SearchBox.module.css"

export default function SearchBox({ value, onChange }) {
    return (
        <div className={css.container}>
            <p>Find contacts by name</p>
            <input type="text" name="filter" value={value} onChange={(event) => {
                onChange(event.target.value)
            }} />
        </div>
    )
}