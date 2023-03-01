const Tareas = ({tareas}) => {
   
  return ( 
    <>
       {tareas.map((tarea) => (<h3 key={tarea.id}>{tarea.texto}</h3>))}
    </>
  )
}

export default Tareas