import revisarID from '../AsignarID';
import { useState } from "react";


const Formulario = ({ SetearAlerta, bdColaboradores, setearColaboradores, setHistorialId, historialId }) => {

  const [nuevoColaborador, setNuevoColaborador] = useState({
    id: revisarID(bdColaboradores, historialId, setHistorialId),
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: ""
  });

  
  const handleName = (value) => setNuevoColaborador({ ...nuevoColaborador, nombre: value, id: revisarID(bdColaboradores, historialId)});
  const handleEmail = (value) => setNuevoColaborador({ ...nuevoColaborador, correo: value, id: revisarID(bdColaboradores, historialId) });
  const handleEdad = (value) => setNuevoColaborador({ ...nuevoColaborador, edad: value, id: revisarID(bdColaboradores, historialId) })
  const handleCargo = (value) => setNuevoColaborador({ ...nuevoColaborador, cargo: value,id: revisarID(bdColaboradores, historialId)  })
  const handleTelefono = (value) => setNuevoColaborador({ ...nuevoColaborador, telefono: value,id: revisarID(bdColaboradores, historialId) })


  const handleSubmit = (e) => {
    e.preventDefault();

    if (nuevoColaborador.nombre === "" || nuevoColaborador.correo === "" || nuevoColaborador.edad === "" || nuevoColaborador.cargo === "" || nuevoColaborador.telefono === "") {
      SetearAlerta({
        error: true,
        mensaje: "Por favor, debe completar todos los campos",
        tipo: "danger"
      });
      return;
    }
    else {
      if (historialId.includes(Number(nuevoColaborador.id))) {
        const arregloIdFiltrado = historialId.filter((o) => { return o != nuevoColaborador.id })
        console.log(arregloIdFiltrado)
        setHistorialId(arregloIdFiltrado);
      }
      
      setNuevoColaborador({ id: revisarID(bdColaboradores, historialId), nombre: "", correo: "", edad: "", cargo: "", telefono: "" });

      const colaboradorTemporal = { ...nuevoColaborador }
      setearColaboradores([...bdColaboradores, colaboradorTemporal])

      SetearAlerta({
        error: true,
        mensaje: "Colaborador ingresado con exito",
        tipo: "light"
      });
      return;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Agregar Colaborador</h3>
      <input className="form-control my-3" type="text" placeholder="Nombre del colaborador" aria-label="default input example" value={nuevoColaborador.nombre} onChange={(e) => handleName(e.target.value)} />
      <input type="email" className="form-control mb-3" id="Email del colaborador" placeholder="Email del colaborador" aria-describedby="emailHelp" value={nuevoColaborador.correo} onChange={(e) => handleEmail(e.target.value.trim())} />
      <input className="input-numeric form-control mb-3" type="number" min="0" placeholder="Edad del colaborador" aria-label="default input example" value={nuevoColaborador.edad} onChange={(e) => handleEdad(e.target.value.trim())} />
      <input className="form-control mb-3" type="text" placeholder="Cargo del colaborador" aria-label="default input example" value={nuevoColaborador.cargo} onChange={(e) => handleCargo(e.target.value.trim())} />
      <input className="input-numeric form-control mb-3" type="number" placeholder="Teléfono del colaborador" aria-label="default input example" value={nuevoColaborador.telefono} onChange={(e) => handleTelefono(e.target.value.trim())} />
      <button type="submit" className="btn btn-primary mb-3">Agregar nuevo colaborador</button>
    </form>
  )
}

export default Formulario
