
const Filter = () => {
  return (
    <div className="filter">
        <h2>Filtrar: </h2>
        <div className="filter-options">
            <div className="filter-container">
                <p>Status:</p>
                <select id="filterOpts">
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incomplete">Incompletas</option>
                </select>
            </div>
            <div className="order">
                <p>Ordem alfabeticas: </p>
                <button>Asc</button>
                <button>Desc</button>
            </div>
        </div>
    </div>
  )
}

export default Filter