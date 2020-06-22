import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
const { Header, Content, Footer } = Layout;

class LayoutPage extends Component {
    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['4']}>
                        <Menu.Item key="1">Tipos De Gastos</Menu.Item>
                        <Menu.Item key="2">
                            <Link href="/Remuneracion/List">
                                <a>Remuneraciones</a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">Usuarios</Menu.Item>
                        <Menu.Item key="4">Mi perfil</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px', height: '79vh' }}>
                    <div className="site-layout-content">{this.props.children}</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}></Footer>
            </Layout>
        );
    }
}

export default LayoutPage;
