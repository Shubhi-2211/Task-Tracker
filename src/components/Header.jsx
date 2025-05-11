import Button from "./Button"
const Header=({title,onAdd,showAdd})=>{
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button
                color={showAdd ?'red':'green'}
                title={showAdd ?'Close':'Add'}
                onClick={onAdd}
                />
        </header>
    )
}
export default Header;