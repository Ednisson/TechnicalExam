import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';

const UpdateModal = ({ show, onClose, taskTobeUpdate, onUpdate, successMsg, onResetSuccessMsg }) => {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            name: "",
            description: ""
        }
    });

    useEffect(() => {
        if (show && taskTobeUpdate) {
            reset({
                name: taskTobeUpdate.name,
                description: taskTobeUpdate.description
            });
        }
    }, [show, taskTobeUpdate, reset]);

    const onSubmit = async (data) => {
        await Promise.all([
            taskTobeUpdate.name = data.name,
            taskTobeUpdate.description = data.description,
            onUpdate(taskTobeUpdate._id, taskTobeUpdate)
        ]);

        setTimeout(() => {
            onClose();
            onResetSuccessMsg();
        }, 3000);
    };

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
                                Update Task
                            </h5>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="modal-body">
                                {/* Success Message */}
                                {successMsg && (
                                    <div className="alert alert-success" role="alert">
                                        {successMsg}
                                    </div>
                                )}

                                {/* Name Field */}
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Name
                                    </label>
                                    <Controller
                                        name="name"
                                        control={control}
                                        rules={{
                                            required: 'Name is required',
                                            minLength: {
                                                value: 2,
                                                message: 'Name must be at least 2 characters long',
                                            },
                                            maxLength: {
                                                value: 50,
                                                message: 'Name must not exceed 50 characters',
                                            },
                                        }}
                                        render={({ field }) => (
                                            <input
                                                disabled={successMsg !== ""}
                                                {...field}
                                                id="name"
                                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                                placeholder="Enter task name"
                                            />
                                        )}
                                    />
                                    {/* Error Message */}
                                    {errors.name && (
                                        <div className="invalid-feedback">{errors.name.message}</div>
                                    )}
                                </div>
                                {/* Description Field */}
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">
                                        Description
                                    </label>
                                    <Controller
                                        name="description"
                                        control={control}
                                        rules={{
                                            required: 'Description is required',
                                            minLength: {
                                                value: 10,
                                                message: 'Description must be at least 10 characters long',
                                            },
                                            maxLength: {
                                                value: 200,
                                                message: 'Description must not exceed 200 characters',
                                            },
                                        }}
                                        render={({ field }) => (
                                            <textarea
                                                disabled={successMsg !== ""}
                                                {...field}
                                                id="description"
                                                className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                                                placeholder="Enter task description"
                                            />
                                        )}
                                    />
                                    {/* Error Message */}
                                    {errors.description && (
                                        <div className="invalid-feedback">{errors.description.message}</div>
                                    )}
                                </div>
                            </div>
                            <div className="modal-footer">
                                {/* Submit Button */}
                                <button type="submit" className="btn btn-primary" disabled={isSubmitting || successMsg !== ""}>
                                    {isSubmitting ? 'Updating...' : 'Update'}
                                </button>
                                <button type="button" className="btn btn-danger" onClick={onClose} disabled={successMsg !== ""}>
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

UpdateModal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    taskTobeUpdate: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired,
    successMsg: PropTypes.string.isRequired,
    onResetSuccessMsg: PropTypes.func.isRequired,
};

export default UpdateModal;