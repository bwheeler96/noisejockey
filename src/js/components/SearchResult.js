import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'
import P from 'grommet/components/Paragraph'

class SearchResult extends Component {
    constructor() {
        super()
    }

    render() {
        const { result, ordinal } = this.props

        return <Box textAlign='center' pad='small' margin='small' colorIndex='light-2' basis='small'>
            <Button plain={true} onClick={this.props.onClick} label={ordinal.toString()} />
            {result.name}
        </Box>
    }
}

const select = state => ({ results: state.searchResults })
export default connect(select)(SearchResult)