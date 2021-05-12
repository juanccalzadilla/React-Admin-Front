import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'



const Pacientes = (props) => {

    if (props.citas.length === 0) return (
        <Fragment>
            <h1 className="my-5"> Administrador de pacientes </h1>
            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to="/nueva-cita" className="btn btn-success text-uppercase py-2 px-5 font-weight bold ">Crear Cita</Link>
                    </div>
                </div>
            </div>
                    <p className="text-white text-center text-uppercase text-weight-bold ">No tiene ninguna cita empiece creando una</p>
        </Fragment>

    );

    console.log(props.citas)

    return (
        <Fragment>
            <h1 className="my-5"> Administrador de pacientes </h1>
            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to="/nueva-cita" className="btn btn-success text-uppercase py-2 px-5 font-weight bold ">Crear Cita</Link>
                    </div>
                    <div className="col-md-8 mx-auto">
                        <div className="list-group">
                            {props.citas.map((citas => {
                                return <Link key={citas._id} to={`/cita/${citas._id}`} className="p-5 list-group-item flex-column align-items-start">
                                    <div className="d-flex w-100 justify-content-between mb-4">
                                        <h3 >{citas.nombre}</h3>
                                        <small className="fecha-alta">{citas.fecha} - {citas.hora}</small>
                                    </div>
                                    <p className="mb-0">{citas.sintomas}</p>
                                    <div className="contacto py-3">
                                        <p>Dueño:{citas.propietario}</p>
                                        <p>Telefono:{citas.telefono}</p>
                                    </div>
                                </Link>


                            }))}

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Pacientes;
