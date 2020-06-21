import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

class LayoutPage extends Component {
    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">Tipos De Gastos</Menu.Item>
                        <Menu.Item key="2">Remuneraciones</Menu.Item>
                        <Menu.Item key="3">Usuarios</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px', height: '79vh' }}>
                    <div className="site-layout-content">{this.props.children}</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>©2020 Created by Sky</Footer>
            </Layout>
        );
    }
}

export default LayoutPage;
