import React from 'react';
import Modal from 'react-modal';

const ConfirmRemoveModal = (props) => (
    <Modal
        isOpen={!!props.confirmDelete}
        contentLabel="Are you sure?"
        // onRequestClose={}
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Are you sure?</h3>
        <p className="modal__body">Please confirm you want to delete this expense.</p>
        <div className="modal__buttons">
            <button className="button" onClick={props.onConfirmDelete}> Confirm </button>
            <button className="button button--secondary" onClick={props.onCancelDelete} > Cancel </button>
        </div>
    </Modal>
);

export default ConfirmRemoveModal;

// <button className="button" onClick={}>Confirm</button>
// <button className="button" onClick={}>Cancel</button>