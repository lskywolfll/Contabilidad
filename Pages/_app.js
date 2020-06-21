import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../Redux/store';
import Layout from '../components/Layout/Layout';

// Css global
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'sweetalert2/dist/sweetalert2.css'

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <Provider store={store}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        )
    }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);