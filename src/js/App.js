import React, { Component } from 'react';

import App from 'grommet/components/App';

import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'
import Search from './components/Search'
import SearchResults from './components/SearchResults'

import store from './lib/store'
import { Provider } from 'react-redux'
import { FOCUS_SEARCH } from './lib/actions';

export default class BasicApp extends Component {
    render() {
        const search = <Search />

        return (
            <Provider store={store}>
                <App tabIndex='0' onKeyDown={this.detectHotKey.bind(this)}>
                    <Box pad='large' align='center' textAlign='center'>
                        <Heading>Noise Jockey</Heading>
                        <Paragraph size='large'>
                            Search for sounds. Press the "tab" key to use the numbered hotkeys.
                        </Paragraph>
                        {search}
                    </Box>
                    <SearchResults />

                    <Box pad='large' align='center' textAlign='center'>
                        <small>
                            Special thanks to <a target="_blank" href='https://www.soundy.top'>soundy</a> for
                            providing their free {'&'} public API. {'<3'}.
                        </small>
                    </Box>
                </App>
            </Provider>
        );
    }

    detectHotKey(e) {
        const { search } = store.getState()

        if (!search.searchFocused && e.keyCode === 83) {
            store.dispatch({ type: FOCUS_SEARCH })
        }
        return true
    }
}

