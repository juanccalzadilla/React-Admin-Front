import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React,{useEffect,useState} from 'react'
import Pacientes from './components/Pacientes'
import NuevaCita from './components/NuevaCita'
import Cita from './components/Cita'
import clienteAxios from './config/axios'



function App() {
  // State de la app de

  const [citas, guardarCitas] = useState([])
  const [consultar,guardarConsulta] = useState(true);

  useEffect(()=>{
    if (consultar) {
      const consultarAPI = () =>{

        clienteAxios.get('/pacientes')
          .then(respuesta =>{
  
            // Colocar en el state
            guardarCitas(respuesta.data)

            // Deshabilitar consulta

            guardarConsulta(false)
          }).catch(error =>{console.error(error)})
      }
      consultarAPI()
    }
  },[consultar])

  
  
  return (
    <Router>
      <Switch>
        <Route 
          exact path="/"
          component={()=><Pacientes citas={citas}
          />}
        />
        <Route 
          exact path="/nueva-cita"
          component={()=><NuevaCita
            guardarConsultar = {guardarConsulta}
          />}
        />
        <Route 
          exact 
          path="/cita/:id"
          render={(props) =>{
            
            const cita = citas.filter(cita => cita._id === props.match.params.id)
            


            return (
              <Cita cita={cita[0]} guardarConsultar = {guardarConsulta}/>
                          
            )
          }} 

         
        />
      </Switch>
    </Router>
  );
}

export default App;
