import { useState } from 'react'
import './App.css'
import './styles/To-doForm.css'
import To_Do from './components/toDo'
import ToDoForm from './components/toDoForm';

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
    text: "Estudar React",
    category: "Estudos",
    isCompleted: false,
  }
]); 

  const addToDo = (text, category) => {

    const newtoDo = [...to_dos, {

      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,

      },
  ];

  setTo_dos(newtoDo);
  }

  return <div className='app'> 
    <h1>Lista de Tarefas</h1>
    <div className='to_do-list'>
      {to_dos.map((to_do) => ( ///Aqui entrou uma aero function

        <To_Do key={to_do.id} to_do={to_do}/> 
        //Importei o componente To_Do e estou passando as props. 
      ))}
    </div>
    <ToDoForm addToDo={addToDo}/>
    </div>; 
}
export default App
