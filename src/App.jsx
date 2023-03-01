import Header from "./componets/Header"
import Tareas from "./componets/Tareas"
import { useState } from "react"

function App() {

  const [tareas, setTareas] = useState([
    {
       id: 1,
       texto: 'Ir al cine',     
       fecha: '15 de Febrero de 2023',
       terminada: true,
    },
    {  
       id: 2,
       texto: 'Comprar en el supermercado', 
       fecha: '15 de Febrero de 2023', 
       terminada: false,
    },
    {
       id: 3,
       texto: 'Hacer app en React',
       fecha: '15 de Febrero de 2023', 
       terminada: false,
       
    }
    ])

  return (
    <div className="container">
      <Header />
      <Tareas tareas={tareas}/>
    </div>
  )
}

export default App
