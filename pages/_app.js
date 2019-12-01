import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { ThemeProvider } from "styled-components";
import theme from "../constants/theme";
import { initStore } from "../redux/store";

export default withRedux(initStore, { debug: true })(
    class MyApp extends App {
        render() {
            const { Component, pageProps, store } = this.props;
            return (
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <Component {...pageProps} />
                    </ThemeProvider>
                </Provider>
            );
        }
    }
);