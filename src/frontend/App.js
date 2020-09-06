import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class App extends Component {

    constructor(){
        super()
            this.state={
                usuario:'',
                contraseña:'',
                UsuariosCargados:[]
            }

        // captura las funciones para que funcionen una vez que las utilice
        this.AgregarUsuario = this.AgregarUsuario.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
  

    obtenerUsuarios(e){
        fetch('api').then(res => res.json())
                    .then(datos => {
                        this.setState({UsuariosCargados:datos})
                        console.log(this.state.UsuariosCargados)
                    })
    }

    // metodo componentdidmount es para que cuando se monte la app, llame a obtenerUsuarios y
    // muestre los datos del servidor por la consola del navegador
    componentDidMount(){
        this.obtenerUsuarios()
    }

    AgregarUsuario(e){      
        fetch('/api', {
            method:'POST',
            body:JSON.stringify(this.state),
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
          .then(datos => {
            console.log(datos)
            // Propiedad M de materialize que abre una ventana en el navegador con el dato 
            //almacenado
            M.toast({html:'usuario guardado'})

            // aqui limpiamos el formulario
            this.setState({usuario:'',contraseña:''})
          })
          .catch(err => console.log(err))
        e.preventDefault()
    }

    // captura el user y la contraseña del formulario
    handleChange(e){
       const {name, value}= e.target
       this.setState({
           [name]: value
       })
    

    }




    render(){
        return (
            
            <div>
                {/* NAVEGACION  */}
                <nav className="light-blue darken-4">
                    <div className="container">
                        <a className="brand-logo" href="/"> MERN Stack</a>
                    </div>
                </nav>


                <div className="container">
                    <div className="row">
                         <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.AgregarUsuario}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="usuario" value={this.state.usuario} onChange={this.handleChange} type="text" placeholder="Usuario"/>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="contraseña" value={this.state.contraseña} onChange={this.handleChange}type="text" placeholder="Contraseña"/>
                                            </div>
                                        </div> 

                                        <button type="submit" className="btn btn-light darken-4">
                                            Login
                                        </button>
                                    </form>
                                </div>
                            </div>
                         </div>
                         
                    </div>
                </div>

            </div>
        )
    }
}

export default App