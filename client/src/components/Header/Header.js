import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Header.module.css';

class Header extends Component {
    render () {
        return (
            <div className={styles.Header}>
                <div className={styles.Logo}>
                    <b>Simple Stock Analysis</b>
                </div>
                <SearchBar />
            </div>
        );
    }
}

export default Header;