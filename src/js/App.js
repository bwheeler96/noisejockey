import React, { Component } from 'react';

import App from 'grommet/components/App';
import Title from 'grommet/components/Title';

import Search from './components/Search'

import store from './lib/store'
import { Provider } from 'react-redux'

export default class BasicApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <App>
                    <Search />
                    <Title>Hello World</Title>
                    <p>Hello from a Grommet page!</p>
                </App>
            </Provider>
        );
    }
}
