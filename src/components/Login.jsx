import { useState } from "react";
import {useAuth} from "../context/authContext"
import { useNavigate } from "react-router-dom";
import { Alert } from "./Alert";
import logo from './logo.png';

export function Login() {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const {login} = useAuth ();
  const navigate = useNavigate();
  const [error, setErrror] = useState();

// cargar o actualizar el dato
  const handleChange = ({ target: {name, value} }) =>{
    setUser ({...user, [name]: value});
    // console.log(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrror('')
    try{
      await login(user.email, user.password);
      navigate('/');
    }catch(error){
      // console.log(error.code);
      if(error.code === "auth/invalid-email"){
        setErrror ('Escriba un Correo Válido')
      }
      else if(error.code === "auth/missing-password"){
        setErrror ('Escriba su Contraseña')
      }
      else if(error.code === "auth/wrong-password"){
        setErrror ('La Contraseña es Incorrecta')
      }
      else if(error.code === "auth/user-not-found"){
        setErrror ('Este Correo no Existe')
      }
      // setErrror(error.message);
    }
    
  }

  return (
      <div className="w-full max-w-xs m-auto">
        
        {/* <form className="bg-gray-600 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
          Motor de Unificacion de persona biometricas
        </form> */}

        <form onSubmit={handleSubmit} className="bg-gray-600 shadow-md rounded
        px-8 pt-6 pb-8 mb-4 w-96">
          
          <div className="mb-6 text-center font-roboto text-white font-bold">
            <div className="flex justify-center">
              <img 
              src={logo} 
              alt="logo"
              className="mx-auto h-14 w-auto" 
              />
            </div>
          </div>
          <div className="text-center text-6xl font-roboto font-extrabold text-white mb-16 ">
            MUPB
          </div>
          {error && <Alert message={error}/>}
          <div className="mb-6">
            <label htmlFor="email" className="block text-white text-2xl 
            font-fold mb-2 text-lg">Correo:</label>
            <input 
              className="shadow appearance-none border rounded w-full
              py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text" 
              name="email" 
              placeholder="nombre@email.com" 
              onChange={handleChange}
            />
          </div>
          <div className="mb-12">
            <label htmlFor="password" className="block text-white text-lg 
            font-fold mb-2"
            >Contraseña:</label>
            <input 
              className="shadow appearance-none border rounded w-full
              py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password" 
              name="password" 
              id="password" 
              onChange={handleChange}
              placeholder="**********"
            />
          </div>
          <div className="mb-4">
            <button className="bg-blue-400 hover:bg-blue-600 text-white font-bold
            py-2 px-4 rounded rounded focus:outline-none focus:shadow-outline">Login</button>
          </div>
        </form>
        <p></p>

      </div>
  )
}
