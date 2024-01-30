
const Filter = ({filter, setFilter, setSort}) => {
  return (
    <div className="filter">
        <h2>Filtrar: </h2>
        <div className="filter-options">
            <div className="filter-container">
                <p>Status:</p>
                <select id="filterOpts" value={filter} onChange={(e) => setFilter(e.target.value)}> {/** O meu state vai ser alterado com os valores do select */}
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incomplete">Incompletas</option>
                </select>
            </div>
            <div className="order">
                <p>Ordem alfabeticas: </p>
                <button onClick={() => setSort("Asc")}>Asc</button>
                <button onClick={() => setSort("Desc")}>Desc</button>
            </div>
        </div>
    </div>
  )
}

export default Filter