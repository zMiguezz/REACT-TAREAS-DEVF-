import Tarea from './Tarea.jsx' 

const Tareas = ({tareas}) => {
   
  return ( 
    <>
       {tareas.map((tarea) => (
            <Tarea key={tarea.id} tarea={tarea}/>
       ))}
    </>
  )
}

export default Tareas