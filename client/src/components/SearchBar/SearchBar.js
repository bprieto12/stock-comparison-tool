import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import { updateValues } from '../../store/actions';
import styles from './SearchBar.module.css';

class SearchBar extends Component {
    state = {
        temp_search_text: this.props.search_text
    }

    render () {
        return (
            <div>
                <div className={styles.InputContainer}>
                    <input 
                        className={styles.SearchBar}
                        type="text"
                        data-testid="search-bar"
                        placeholder="Search" 
                        value={this.state.temp_search_text} 
                        onKeyPress={(event) => {
                            if (this.state.temp_search_text !== "" && event.key === "Enter") {
                                this.props.update(this.state.temp_search_text, this.props.chart_range_used);
                            }
                        }}
                        onChange={(event) => this.setState({temp_search_text: event.target.value})} />
                        <FontAwesomeIcon 
                            className={styles.SearchBtn}
                            onClick={() => {
                                this.props.update(this.state.temp_search_text, this.props.chart_range_used)
                            }}
                            icon={faSearch}
                        />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        search_text: state.search_text,
        chart_range_used: state.range
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        update: (symbol, range_used) => dispatch(updateValues(symbol, range_used))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);