import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import Loading from '../Loading/Loading';
import { connect } from 'react-redux';
import * as usuarioActions from '../../Redux/actions/usuarioActions';
import Router from 'next/router';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

class login extends Component {

    onFinish = async values => {
        // console.log('Success:', values);
        try {
            await this.props.Login(values)
            Router.push('/Testing/testing_vars')
        } catch (error) {
            console.error(error);
        }
    };

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    render() {

        if (this.props.loading) {
            return (<Loading />)
        }

        if (this.props.error) {
            return (<div>{this.props.error}</div>)
        }

        return (
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: false }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
            >
                <Form.Item
                    label="Correo"
                    name="email"
                    rules={[{ required: true, message: 'Porfavor pone tu correo electronico!' }]}
                >
                    <Input type="email" />
                </Form.Item>

                <Form.Item
                    label="Contraseña"
                    name="password"
                    rules={[{ required: true, message: 'Porfavor pone tu contraseña!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Recordarme</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Logearte
              </Button>
                </Form.Item>
            </Form>
        )
    }
}

const EstadosAPropiedades = ({ usuarioReducer: { loading, error, usuarios, token, usuario } }) => {
    return {
        loading,
        error,
        usuarios,
        token,
        usuario
    }
}

export default connect(EstadosAPropiedades, usuarioActions)(login);
