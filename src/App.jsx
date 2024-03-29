import { useState } from 'react'
import './App.css'
import './styles/To-doForm.css'

 ///Componentes 

import To_Do from './components/toDo'
import ToDoForm from './components/toDoForm';
import Search from './components/Search';
import Filter from './components/Filter';

/// Começamos utilizando a abordagem de usar o useState,
/// pois ao contrario das variável, é permitido a atualização quando renderiza. Usamos essa abordagem quando queremos manipular valores
function App() {
  const [to_dos, setTo_dos] = useState([

{ //Aqui estou instanciando uma array contendo 3 objetos.Cada obj tem suas propriedade. 
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
  },
  {
    id: 2,    
    text: "Ir para academia",
    category: "Pessoal",
    isCompleted: false,
  },
  {
    id: 3,
    text: "Estudar Reac t",
    category: "Estudos",
    isCompleted: false,
  }
]); 

//Add toDO

const addToDo = (text, category) => {
  const newToDo = [
    ...to_dos,
    {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    }
  ];

  setTo_dos(newToDo);
};
  
///Remove toDo

  const removeToDo = (id) => {
    const newtoDo = [...to_dos]
    const filteredToDo = newtoDo.filter((to_do) => to_do.id !== id ? to_do : null
    );
    setTo_dos(filteredToDo);
    };


///Complete toDo
    
      const completeToDo = (id) => {
        const newtoDo = to_dos.map((to_do) =>
          to_do.id === id ? { ...to_do, isCompleted: !to_do.isCompleted } : to_do
        );
        setTo_dos(newtoDo);
      };
 /// funcionalidade Search 
 
 const [search, setSearch] = useState("");

 ///Filter

 const [filter, setFilter] = useState("All");
 const [sort, setSort] = useState("Asc");



  return <div className='app'> 
    <h1>Lista de Tarefas</h1>
    
    <Search search={search} setSearch={setSearch}/>
    <Filter filter={filter} setFilter={setFilter} setSort={setSort} />

    <div className='to_do-list'>
      {to_dos

      .filter((to_do) => 
      filter === "All" 
        ? true 
        : filter 
        === "Completed" 
        ? to_do.isCompleted 
        : !to_do.isCompleted 
        
        )
      .filter((to_dos) => 
      to_dos.text.toLowerCase().includes(search.toLowerCase())
      ) /// Barra de pesquisa em tempo real.

      .sort((a, b) => 
        sort === "Asc" 
        ? a.text.localeCompare(b.text)
        : b.text.localeCompare(a.text)
        
        )
      .map((to_do) => ( ///Aqui entrou uma aero function

        <To_Do key={to_do.id} 
        to_do={to_do} 
        removeToDo={removeToDo} 
        completeToDo={completeToDo}/> 
        //Importei o componente To_Do e estou passando as props. 
      ))}
    </div>

    <ToDoForm addToDo={addToDo}/>
    </div>; 
}

export default App
