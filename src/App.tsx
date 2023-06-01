//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

const Pesquisa = () => {
  return (
    <>
      <form action="javascript:void(0);">
        <input type="text" className="form-control add-task" placeholder="New Task..." />
      </form>
    </>
  )
}
const Botoes = () => {
  const listabotoes = [
    "All",
    "Active",
    "Completed"
  ]
  return (
    <>
    <ul className="nav nav-pills todo-nav">
      {listabotoes.map((nome, index) => <li key={index} role="presentation"
      className="nav-item all-task active"> <a href="#" className="nav-link">{nome}</a> </li>)}
    </ul>

    
    </>
  )
}
const Lista = () => {
  const listaitem = [
    "Create theme",
    "Work on wordpress",
    "Organize office main department",
    "Error solve in HTML template"
  ];
  return( 

    <div className="todo-list">

        {listaitem.map((nome) => 
          <div className="todo-item">
            <div className="checker">
              <span><input type="checkbox" /></span>
            </div>
            <span>{nome}</span>
            <a href="javascript:void(0);" className="float-right remove-todo-item" ><i className="icon-close"></i></a>
          </div>
        )}

    </div>
  )
}


const App = () => {
  return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card card-white">
                <div className="card-body">

                  <Pesquisa/>

                  <Botoes/>

                  <Lista/>

                </div>
              </div>
            </div>
          </div>
        </div>

    </>
  )
}

export default App
