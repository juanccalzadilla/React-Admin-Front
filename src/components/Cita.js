import React, { Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import clienteAxios from '../config/axios'
import Swal from 'sweetalert2';
const Cita = (props) => {
    if (!props.cita) {
        props.history.push('/')
        return null;
    }


    const eliminarCita = id => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Esto es irreversible",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Eliminado',
                    'Se ha eliminado correctamente',
                    'success'
                )
                clienteAxios.delete(`/pacientes/${id}`)
                    .then(response => {
                        props.guardarConsultar(true)
                        props.history.push('/')

                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        })

    }


    return (
        <Fragment >
            <h1 className="my-5 text-uppercase">{props.cita.nombre}</h1>
            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to="/" className="btn btn-success text-uppercase py-2 px-5 font-weight bold ">Inicio</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-8 mx-auto">
                <div className="list-group">
                    <div className="list-group-item p-5 list-group-item-action flex-column align-items-center">
                        <div className="d-flex w-100 justify-content-between mb-4">
                            <h3 >{props.cita.nombre}</h3>
                            <small className="fecha-alta">{props.cita.fecha} - {props.cita.hora}</small>
                        </div>
                        <p className="mb-0">{props.cita.sintomas}</p>
                        <div className="contacto py-3">
                            <p>Dueño:{props.cita.propietario}</p>
                            <p>Telefono:{props.cita.telefono}</p>
                        </div>

                        <div className="d-flex justify-content-center" >
                            <button type="button" className="btn btn-danger text-uppercase py-2 px-5 font-weight-bold col-6" onClick={() => eliminarCita(props.cita._id)}>Eliminar cita &times;</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default withRouter(Cita);