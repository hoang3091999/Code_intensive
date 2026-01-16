import './header.css';
const Header = () => {
    return (
        <div className="toolbar">
            <input type="text" className="search-input" placeholder="Search items"/>
            <button className="new-btn">New items</button>
        </div>
    )
}
export default Header