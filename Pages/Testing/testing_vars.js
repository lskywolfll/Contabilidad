import React, { useEffect } from 'react'
import * as usuariosActions from '../../Redux/actions/usuarioActions';
import { connect } from 'react-redux';

function testing_vars(props) {

    useEffect(() => {
        console.log(props)
    })

    return (
        <div>
            <h1>Info</h1>
            <h6>Nombre</h6>
            <p>{props.usuario.nombre} {props.usuario.apellido}</p>
            <h6>Estado</h6>
            <p>{props.usuario.estado.toString()}</p>
            <h6>Email</h6>
            <p>{props.usuario.email}</p>
            <h6>Fecha de Creacion</h6>
            <p>{props.usuario.fecha}</p>
            <br></br>
            <br></br>
            <br></br>
            <h2>Token</h2>
            <p>{props.token}</p>
        </div>
    )
}

const EstadosAPropiedades = ({ usuarioReducer: { loading, error, token, usuario } }) => {
    return {
        loading,
        error,
        token,
        usuario
    }
}

export default connect(EstadosAPropiedades, usuariosActions)(testing_vars)
