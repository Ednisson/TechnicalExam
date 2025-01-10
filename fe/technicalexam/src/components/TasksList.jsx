import { useState } from 'react';
import { useCrudTasks } from '../crud/crudTasks';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Modal from '../modals/Modal';
import UpdateModal from '../modals/UpdateModal';
import CreateModal from '../modals/CreateModal';

const TasksList = () => {
    const { tasks, loading, err, deleteTask, createTask, successMessage, updateTask, resetSuccessMessage } = useCrudTasks();
    const [showModal, setShowModal] = useState(true);
    const [showUpdateTaskModal, setShowUpdateTaskModal] = useState(false);
    const [showCreateTaskModal, setShowCreateTaskModal] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [taskTobeUpdate, setTaskTobeUpdate] = useState({
        _id: "",
        __v: 0,
        name: "",
        description: "",
        message: ""
    });

    const handleClose = () => {
        setShowModal(false);
        setTimeout(() => {
            window?.location?.reload();
        }, 900);
        
    };

    const handleCloseUpdateModal = () => {
        setShowUpdateTaskModal(false);
    };

    const showUpdateModalInput = (task) => {
        setShowUpdateTaskModal(true);
        setTaskTobeUpdate(task);
    };

    const showCreateTaskModalInput = () => {
        setShowCreateTaskModal(true);
    };

    const handleCloseCreateTaskModal = () => {
        setShowCreateTaskModal(false);
    };

    if (loading) return (
        <div className="d-flex flex-column align-items-center">
            <div className="spinner-border text-primary spinner-border-sm" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-2">Please wait...</p>
        </div>
    );

    // Error from frontend axios
    if (err?.code === "ERR_NETWORK") return <p>{err?.message}</p>;

    // Error from backend
    if (err?.response?.data?.statusCode !== 0) {
        return (
            <>
            <Modal show={showModal} onClose={handleClose} errorResponse={err} successMessage={successMessage} />
            </>
        );
    }

    const deleteSpecificTask = async(data) => {
        await Promise.all([
            await deleteTask(data._id)
        ])
        setIsSuccess(true);

        setTimeout(() => {
            setIsSuccess(false);    
            resetSuccessMessage()
        }, 3000);

    }

    return (
        <>
            <CreateModal
                show={showCreateTaskModal}
                onClose={handleCloseCreateTaskModal}
                onCreate={createTask}
                successMsg={successMessage}
                onResetSuccessMsg={resetSuccessMessage}
            />
            <UpdateModal
                show={showUpdateTaskModal}
                onClose={handleCloseUpdateModal}
                taskTobeUpdate={taskTobeUpdate}
                onUpdate={updateTask}
                successMsg={successMessage}
                onResetSuccessMsg={resetSuccessMessage}
            />
            <button
                type="button"
                className="btn btn-primary position-fixed"
                style={{
                    bottom: '20px',
                    right: '20px',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '24px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    zIndex: 1050,
                }}
                onClick={showCreateTaskModalInput}
            >
                <i className="fas fa-plus"></i> {/* Icon can be changed */}
            </button>
            <section className="vh-100 gradient-custom-2">
                {isSuccess && (
                    <div
                        className="alert alert-success position-fixed"
                        role="alert"
                        style={{
                            top: '10px',
                            right: '10px',
                            zIndex: 1050,
                            width: '300px',
                        }}
                    >
                        {successMessage}
                    </div>
                )}
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-12 col-xl-10">
                            <div className="card mask-custom">
                                <div className="card-body p-4 text-white">
                                    <div className="text-center pt-3 pb-2">
                                        <h2 className="my-4">Task List</h2>
                                    </div>
                                    <table className="table text-white mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tasks.map(task => (
                                                <tr key={task._id} className='fw-normal'>
                                                    <th>
                                                        <span className="ms-2">{task.name}</span>
                                                    </th>
                                                    <td className="align-middle">
                                                        <span>{task.description}</span>
                                                    </td>
                                                    <td className="align-middle">
                                                        <a type='button' data-mdb-tooltip-init title="Edit" onClick={() => showUpdateModalInput(task)}>
                                                            <i className="fas fa-edit fa-lg text-primary me-3"></i>
                                                        </a>
                                                        <a type='button' data-mdb-tooltip-init title="Remove" onClick={() => deleteSpecificTask(task)}>
                                                            <i className="fas fa-trash-alt fa-lg text-danger"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TasksList;