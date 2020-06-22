import React, { Component } from 'react'
// import { } from 'antd';
import { connect } from 'react-redux';
import * as remuneracionesActions from '../../Redux/actions/remuneracionActions';

class List extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.traerTodos();
    }

    render() {
        return (
            <div>
                <h1>Remuneraciones</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Usuario</th>
                            <th>Razon</th>
                            <th>Ganancia</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.remuneraciones.map(({ _id, Nombre: Razon, sueldo: Ganancia, fecha, usuario: { nombre: usuario } }) => (
                            <tr key={_id}>
                                <td>{usuario}</td>
                                <td>{Razon}</td>
                                <td>{Ganancia}</td>
                                <td>{new Date(fecha).toString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

const EstadosAPropiedades = ({ remuneracionReducer: { remuneraciones } }) => {
    return {
        remuneraciones
    }
}

export default connect(EstadosAPropiedades, remuneracionesActions)(List)
