import React from 'react';
import Modal from 'react-modal';

const ConfirmRemoveModal = (props) => (
    <Modal
        isOpen={!!props.confirmDelete}
        contentLabel="Are you sure?"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Are you sure?</h3>
        <p className="modal__body">Please confirm you want to delete this expense.</p>
        <div className="modal__buttons">
            <button className="button" name="removeConfirmButton" onClick={props.onConfirmDelete}> Confirm </button>
            <button className="button button--secondary" name="removeCancelButton"onClick={props.onCancelDelete} > Cancel </button>
        </div>
    </Modal>
);

export default ConfirmRemoveModal;