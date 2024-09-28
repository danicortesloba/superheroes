import { useState } from 'react'
import './App.css'

function App() {
  const initialSuperhero = {
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmar:""
  }
  const [superhero, setSuperhero] = useState(initialSuperhero)
  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState("")
  const [registro, setRegistro] = useState([])

const handleChange = (e) => {
   const {name, value} = e.target
  setSuperhero({...superhero,[name]: value
  })
}

const handleSubmit = (e) => {
  e.preventDefault()
  if(!superhero.name || !superhero.lastname || !superhero.email || !superhero.password) {
    setError('Todos los campos son obligatorios')
    return
  }
  if(superhero.name.length < 10) {
    setError("El nombre debe tener al menos 10 caracteres")
    return
  }
  if(superhero.lastname.length < 10) {
    setError("El apellido debe tener al menos 10 caracteres")
    return
  }
  if(superhero.email.length < 10 || !superhero.email.includes("@")) {
    setError("El email debe tener al menos 10 caracteres y debe incluir una @")
    return
  }

  if(superhero.password < 10) {
    setError("La contraseña debe tener al menos 10 caracteres")
    return
  }

  if(superhero.password !== superhero.confirmar) {
    setError("Las contraseñas no coinciden")
    return
  }

  try{
    setRegistro([...registro, superhero])
    setEnviado(true)
    setError("")
  } catch(error) {
    console.log(error)
  }

  setSuperhero (initialSuperhero)
}




  return (
    <div className="main">
    <h1>{!enviado ? `Bienvenido a la liga de Superheroes` : `¡Ya eres un superheroe!`}</h1>
    <h3>Registro de Superhéroes</h3>
    {error && <p className='error'>{error}</p>}
    <form className="form" onSubmit={(e)=>{handleSubmit(e)}}>
      <label htmlFor='name'>
        <input
          className="field"
          value= {superhero.name}
          type='text'
          name='name'
          id='name'
          placeholder='Nombre'
          onChange={(e) => {
            handleChange(e)
          }}
        />
    </label>
    <label htmlFor='lastname'>
        <input
          className="field"
          value= {superhero.lastname}
          type='text'
          name='lastname'
          id='lastname'
          placeholder='Apellido'
          onChange={(e) => {
            handleChange(e)
          }}
        />
    </label>
    <label htmlFor='email'>
        <input
          className="field"
          value= {superhero.email}
          type='text'
          name='email'
          id='email'
          placeholder='Email'
          onChange={(e) => {
            handleChange(e)
          }}
        />
    </label>
    <label htmlFor='password'>
        <input
          className="field"
          value= {superhero.password}
          type='password'
          name='password'
          id='password'
          placeholder='Contraseña'
          onChange={(e) => {
            handleChange(e)
          }}
        />
    </label>
    <label htmlFor='confirmar'>
        <input
          className="field"
          value= {superhero.confirmar}
          type='password'
          name='confirmar'
          id='confirmar'
          placeholder='Confirmar Contraseña'
          onChange={(e) => {
            handleChange(e)
          }}
        />
    </label>
    <button type="submit">Enviar</button>
    </form>
    <h1>Registro</h1>
    {registro.map((r, index) => {
      return (
        <div key={index} className="card">
          <p>Nombre: {r.name}</p>
          <p>Apellido: {r.lastname}</p>
          <p>Email: {r.email}</p>
        </div>
      )
    })}
  
     
    </div>
  )
}

export default App
