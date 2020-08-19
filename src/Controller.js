import React, {useState} from 'react';
import {Modal, ModalHeader, ModalFooter, ModalBody, Button} from "reactstrap";


function Controller(props) {

    const [isModalOpen, setIsModalOpen] = useState(false)


    return (
        <>
            <Button onClick={() => setIsModalOpen(true)}>Add new Task</Button>
            <Modal isOpen={isModalOpen}>
                <ModalHeader>Add new Task</ModalHeader>
                <ModalBody> </ModalBody>
                <ModalFooter>
                    <Button>Do Something</Button>
                    {' '}
                    <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default Controller;
