import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styles from './portal.module.css'

export class Portal extends Component {

  el = document.createElement('div')

  componentDidMount() {
    document.body.appendChild(this.el)
  }

  componentWillUnmount() {
    document.body.removeChild(this.el)
  }

  render() {
    const modal = 
    <div className={styles.modalOverlay} onClick={this.props.exitHandler}>
        <div className={styles.modalCross}>
          <i className="material-icons" onClick={this.props.exitHandler}>clear</i>
        </div>
        <img className={styles.modalImage} src={this.props.img} alt="img" />
    </div>
    return ReactDOM.createPortal(modal, this.el)
  }
}

export default Portal
