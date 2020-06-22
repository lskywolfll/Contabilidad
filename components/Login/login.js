import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import Loading from '../Loading/Loading';
import { connect } from 'react-redux';
import * as usuarioActions from '../../Redux/actions/usuarioActions';
import Router from 'next/router';
import Styles from './login.module.css';
import Link from 'next/link';

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

    render() {

        if (this.props.loading) {
            return (<Loading />)
        }

        if (this.props.error) {
            return (<div>{this.props.error}</div>)
        }

        return (
            <Form
                name="normal_login"
                className={Styles['login-form']}
                initialValues={{
                    remember: true,
                }}
                onFinish={this.onFinish}
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor ingresa tú correo!',
                        },
                    ]}
                >
                    <Input type="email" prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Correo" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor ingresa tú Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Recordarme</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        Olvitaste tu contraseña ?
                </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className={Styles['login-form-button']}>
                        Log in
                </Button>
                O <Link href="/Usuarios/Crear">
                        <a>Registrarte ahora!</a>
                    </Link>
                </Form.Item>
            </Form>
        );
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
