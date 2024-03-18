import "../main.css"
import { useState } from 'react'
import Listado from './components/Listado.jsx'
import Alert from './components/Alert.jsx'
import Buscador from './components/Buscador.jsx'
import Formulario from './components/Formulario.jsx'
import { BaseColaboradores } from "./BaseColaboradores.js"

function App() {

  const [historialId, setHistorialId] = useState([]);
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [search, setSearch] = useState("");
  const [alert, setAlert] = useState({ error: false, mensaje: "asda", tipo: "danger" })

  return (
    <>
      <div className=" container-fluid row m-0 p-5 justify-content-center text-center column-gap-xl-5">
        <div className="container col-11 mb-5 col-xl-8 m-xl-0 ">
          <h2 className="text-xl-start">Lista de colaboradores</h2>
          <div className="col-7 mx-auto mx-xl-0 mt-4 mb-3">
            <Buscador setSearch={setSearch} />
          </div>
          <div className="table-responsive">
            <Listado bdColaboradores={colaboradores} setearColaboradores={ setColaboradores } search={search} historialId={historialId} setHistorialId={setHistorialId} />
          </div>
        </div>
        <div className="col-8 col-xl-3 ">
          <Formulario SetearAlerta={setAlert} bdColaboradores={colaboradores} setearColaboradores={setColaboradores} historialId={historialId} setHistorialId={setHistorialId} />
          <Alert alerta={alert} />
        </div>
      </div>
    </>
  )
}
export default App
