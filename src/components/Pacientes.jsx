const Pacientes = ({paciente, setPaciente, eliminarPaciente}) => {

    const {nombre, propietario, email, fecha, sintomas, id} = paciente

    const handleEliminar = () =>{
        const respuesta = confirm('Deseas eliminar ese paciente?')

        if (respuesta){
            eliminarPaciente(id)
            alert('Se eliminó el paciente')
        }
    }
  return (
    <div className='bg-white shadow-md mx-5 my-10 px-5 py-10 rounded-xl'>
            <p className='uppercase font-bold'>Nombre: 
                <span className='font-normal normal-case'> {nombre}</span>
            </p>
            <p className='uppercase font-bold'>Nombre propietario: 
                <span className='font-normal normal-case'> {propietario}</span>
            </p>
            <p className='uppercase font-bold'>Email: 
                <span className='font-normal normal-case'> {email}</span>
            </p>
            <p className='uppercase font-bold'>Fecha alta: 
                <span className='font-normal normal-case'> {fecha}</span>
            </p>
            <p className='uppercase font-bold'>Sintomas: 
                <span className='font-normal normal-case'> {sintomas}</span>
            </p>
            <div className="flex justify-between mt-10">
                <button type="button" 
                        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg" 
                        onClick={() => setPaciente(paciente)}
                >
                    Editar
                </button>
                <button type="button" 
                        className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                        onClick={handleEliminar}>
                    Eliminar
                </button>
            </div>
    </div>
  )
}

export default Pacientes