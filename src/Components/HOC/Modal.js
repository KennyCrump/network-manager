import React, { Component } from "react";
import PropTypes from 'prop-types';
import './Modal.scss'

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open || false
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.open !== this.props.open) {
      this.setState({ open: this.props.open });
    }
  }

  openModal = () => {
    this.setState({ open: true });
  };
  closeModal = () => {
    this.setState({ open: false });
  };
  render() {
    console.log(this.state)
    // const {open} = this.state
    const { render, open, closeModalFunc } = this.props;
    
    return (

        open &&
        <div className="modal-wrapper" onClick={closeModalFunc}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            { render(closeModalFunc) }
            <h3 className='cancel' onClick={closeModalFunc}>X</h3>
          </div>
        </div>
        
    );
  }
}

export default Modal;

Modal.propTypes = {
    render: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    closeModalFunc: PropTypes.func.isRequired
}
