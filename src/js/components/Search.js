import React, { PropTypes, Component} from 'react'
import { connect } from 'react-redux'

import Box from 'grommet/components/Box'
import Form from 'grommet/components/Form'
import FormField from 'grommet/components/FormField'
import TextInput from 'grommet/components/TextInput'
import { doSearch } from '../lib/actions';

class Search extends Component {
    constructor() {
        super()
        this.state = {
            query: ''
        }
    }

    render() {
        return <Box>
            <Form onSubmit={this.submitSearch.bind(this)}>
                <FormField>
                    <TextInput onDOMChange={this.setQuery.bind(this)} />
                </FormField>
            </Form>
        </Box>
    }

    setQuery(e) {
        this.setState({
            query: e.target.value
        })
    }

    submitSearch(e) {
        e.preventDefault()

        const uri = `https://www.soundy.top/api/sounds?q=${query}`
        fetch(uri)
        .then(response => {
            dispatch({ type: SEARCH_DONE, response })
        })

        return false
    }
}

const select = state => ({ search: state.search })
export default connect(select)(Search)