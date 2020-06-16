import React, { Component } from 'react';
import { connect } from 'react-redux';
// import fontawesome from '@forteawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import actionTypes from '../../store/actionTypes';
import styles from './SearchBar.module.css';
import axios from 'axios';
// library.add(faSearch);

class SearchBar extends Component {
    state = {
        temp_search_text: this.props.search_text
    }

    render () {
        return (
            <div style={{textAlign: "left", marginLeft: 48, display: "inline-block"}}>
                <div style={{display: 'inline-block', position: "relative"}}>
                   
                    <input 
                    className={styles.SearchBar}
                    type="text"
                    data-testid="search-bar"
                    placeholder="Search" 
                    value={this.state.temp_search_text} 
                    onChange={(event) => this.setState({temp_search_text: event.target.value})} />
                     <FontAwesomeIcon 
                        style={{position: "absolute", right: 12, top: 16, cursor: "pointer"}} 
                        onClick={() => this.props.onUpdateSearchText(this.state.temp_search_text)}
                        icon={faSearch}/>
                </div>
                {/* <div className={styles.SearchBtn}
                     >
                    <FontAwesomeIcon icon={faSearch} />
                </div> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        search_text: state.search_text
    }
}

const updateValues = async (new_text, dispatch) => {
    dispatch({type: actionTypes.UPDATE_SEARCH_TEXT, value: new_text});
    try {
        let response = await axios.get(`/api/getCharts?symbol=${new_text}`);
        console.log(response);
        dispatch({type: actionTypes.UPDATE_SELECTED_INSTRUMENT, value: response.data});
    } catch (err) {
        console.log(err);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateSearchText: (new_text) => updateValues(new_text, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);