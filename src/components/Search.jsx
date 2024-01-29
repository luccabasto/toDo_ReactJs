

const Search = ({search, setSearch}) => {
  return (
    <div className="search">
        <h2>Pesquisar: </h2>
        <input id="searchInpt" type="text" value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        placeholder="Pesquise sua tarefa..."></input>
    </div>
  )
}

export default Search