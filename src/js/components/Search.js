import React, { PropTypes, Component} from 'react'
import { connect } from 'react-redux'

import Box from 'grommet/components/Box'
import Form from 'grommet/components/Form'
import FormField from 'grommet/components/FormField'
import TextInput from 'grommet/components/TextInput'
import { doSearch, DO_SEARCH, SEARCH_DONE } from '../lib/actions';
import store from '../lib/store'

class Search extends Component {
    constructor() {
        super()
        this.state = {
            query: '',
            input: null
        }
    }

    componentWillMount() {
        this.submitSearch()
    }

    componentWillReceiveProps(props) {
        if (props.search.searchFocused) {
            this.input.componentRef.focus()
        }
    }

    render() {
        return <Box justify='center' direction='row' pad='large'>
            <Form onSubmit={this.submitSearch.bind(this)}>
                <FormField>
                    <TextInput autoFocus ref={this.setRef.bind(this)} value={this.state.query} onDOMChange={this.setQuery.bind(this)} />
                </FormField>
            </Form>
        </Box>
    }

    setRef(ref) {
        this.input = ref
    }

    setQuery(e) {
        this.setState({
            query: e.target.value
        })
    }

    submitSearch(e) {
        e && e.preventDefault()
        this.props.dispatch({ type: DO_SEARCH })

        const uri = `http://localhost:2727/api/sounds?q=${this.state.query}`
        console.log('doing search:', uri)
        fetch(uri)
        .then(response => response.json())
        .then(response => {
            console.log('result:', response)
            this.props.dispatch({ type: SEARCH_DONE, response })
        })

        return false
    }

    focus() {

    }
}

const select = state => ({ search: state.search })
export default connect(select)(Search)