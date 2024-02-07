import Navbar from "./components/layout/Navbar"
import ItemListContainer from "./components/pages/ItemListContainer"


const App = ()=>{

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Bienvenido a nuestra página web, aquí encontrarás los mejores periféricos en base a tus necesidades."/>
    </div>
  )
}

export default App
