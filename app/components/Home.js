// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import NavBar from '../containers/NavBar';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
        	<NavBar />
        </div>
      </div>
    );
  }
}
