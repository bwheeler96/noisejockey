import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Box from 'grommet/components/Box'
import SearchResult from './SearchResult'

import { Howl } from 'howler'
import apihost from '../lib/apihost';

class SearchResults extends Component {
    constructor() {
        super()
        this.state = {
            playing: null
        }
    }

    render() {
        const { results } = this.props

        const visible = results.slice(0, 10)
        const boxes = visible.map((result, i) => {
            const ordinal = (i + 1) % 10
            return <SearchResult
                        onClick={this.playResult.bind(this, result)}
                        key={result.id}
                        ordinal={ordinal}
                        result={result} />
        })
        console.log(results)
        return <Box style={{outline: 'none'}} tabIndex="0" onKeyDown={this.detectHotKey.bind(this)} wrap={true} direction='row' justify='center'>
            {boxes}
        </Box>
    }

    detectHotKey(e) {
        const s = 83
        const numeral = e.keyCode - 48
        const index = numeral == 0 ? 9 : numeral - 1

        if (index >= 0 && index < 10) {
            this.playResult(this.props.results[index])
        }
    }

    playResult(result) {
        const src = result.url.replace('soundyapp.s3.amazonaws.com', apihost())

        if (this.state.playing !== null) {
            this.state.playing.stop()
        }

        let howl = new Howl({
            src: [src]
        })
        howl.play()
        this.setState({
            playing: howl
        })
    }
}

SearchResults.defaultProps = {
    results: []
}

SearchResults.propTypes = {
    results: PropTypes.array.isRequired
}

const select = state => {
    return { results: state.search.searchResults }
}
export default connect(select)(SearchResults)