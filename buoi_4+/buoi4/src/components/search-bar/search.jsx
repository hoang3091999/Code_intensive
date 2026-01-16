const Search = ({job, OnClick, OnChange}) => {

    return (
        <div>
            <input type="text" placeholder="mời bạn nhập" value={job} onChange={OnChange}/>
            <button onClick={OnClick} >Add</button>
        </div>

    )
}
export default Search