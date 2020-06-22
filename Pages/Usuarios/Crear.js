import React, { Component } from 'react'
import SingUp from '../../components/Usuarios/crear';
import { Row } from 'antd';

class Crear extends Component {
    render() {
        return (
            <div>
                <Row className="justify-content-center pt-5">
                    <SingUp />
                </Row>
                <style jsx global>
                    {`
                        .ant-layout-content{
                            height: 100vh;
                        }

                        .ant-form-item-label{
                            margin-right: 1vw;
                        }
                    `}
                </style>
            </div>
        )
    }
}

export default Crear
