const Listado = ({ bdColaboradores, setearColaboradores, search, historialId, setHistorialId }) => {

  const bdColaboradoresFiltrada = bdColaboradores.filter((colaborador) => {
    return (colaborador.id.toLowerCase().includes(search.toLowerCase()) || colaborador.nombre.toLowerCase().includes(search.toLowerCase()) || colaborador.correo.toLowerCase().includes(search.toLowerCase()) || colaborador.edad.toLowerCase().includes(search.toLowerCase()) || colaborador.cargo.toLowerCase().includes(search.toLowerCase()) || colaborador.telefono.toLowerCase().includes(search.toLowerCase()))
  })

  const bdColaboradoresFiltradaOrdenada = bdColaboradoresFiltrada.sort((p1, p2) => (p1.id > p2.id) ? 1 : (p1.id < p2.id) ? -1 : 0);

  const handleClickDelete = (id) => {

    const arregloTemporal = [...bdColaboradores]
    const index = arregloTemporal.findIndex((element) => element.id == id)
    arregloTemporal.splice(index, 1)
    setearColaboradores(arregloTemporal);

    setHistorialId([...historialId, Number(id)])
  }

  return (
    <>
    </>
  )
}

export default Listado