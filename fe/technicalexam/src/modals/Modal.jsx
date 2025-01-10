import PropTypes from 'prop-types';

const Modal = ({ show, onClose, errorResponse, successMessage }) => {
    return (
        <>
            <div
                className={`modal  lg fade ${show ? 'show d-block' : ''}`}
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden={!show}
                style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                {errorResponse?.response?.data?.statusCode !== 0 ? `Error in ${errorResponse?.response?.data?.errorCode}` : `Success in Deleting Task`}
                            </h5>
                        </div>
                        <div className="modal-body">
                            {errorResponse?.response?.data?.statusCode !== 0 ? errorResponse?.response?.data?.message : successMessage}
                            <br />
                            <br />
                            <p className='text-break'>
                                {errorResponse?.response?.data?.statusCode !== 0 ? `${errorResponse?.response?.data?.originalErrorMessage}` : ""}
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" onClick={onClose}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    errorResponse: PropTypes.object.isRequired,
    successMessage: PropTypes.string.isRequired,
};

export default Modal;