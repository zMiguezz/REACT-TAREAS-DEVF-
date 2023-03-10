import Button from "./Button"

const Header = () => {

  const agregar = () => {
    console.log("agregar")
}
  
  const borrar = () => {
    console.log("borrar")
  }
  
  return (
    <header  className="header">
      <h1>Tareas</h1>
      <Button texto="Agregar" color="green" onClick={agregar} />
      <Button texto="Borrar" color="red" onClick={borrar} /> 
    </header>
  )
}

export default Header