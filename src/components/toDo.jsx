import React from 'react'
import To_DoBtn from './toDoBtn'

//ATENÇÃO na hora de criar um componente. TEM QUE COMEÇAR COM LETRA MAIUSCULA, caso ao contrário o react. não entende como component.

const To_Do = ({to_do, removeToDo, completeToDo}) => {
  return (
    <div className="to_do" style={{ textDecoration: to_do.isCompleted ? "line-through" : "" }}>
          <div className="content">
            <p>{to_do.text}</p>
            <p className='category'>({to_do.category})</p>
          </div>
        <div className='to_do_btn'>
            <div className="content">
                <To_DoBtn removeToDo={removeToDo} to_do={to_do} completeToDo={completeToDo} />
            </div>
            
        </div>
        </div>
  )
}

export default To_Do