import React from 'react'
import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper';
import { initializeStore } from '../src/redux/store';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css'; 
class MyApp extends App {
    render() {
        const { Component, pageProps, store } = this.props;

        return (
            
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            
        )
    }
}

export default withRedux(initializeStore)(MyApp);