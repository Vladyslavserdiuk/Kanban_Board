import React, {useState} from 'react';
import {Modal, ModalHeader, ModalFooter, ModalBody, Label, Input, Button} from "reactstrap";


function Controller(props) {

    const {addNewTask} = props

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [newTitle, setNewTitle] = useState('')



    return (
        <>
            <Button onClick={() => setIsModalOpen(true)}>Add new Task</Button>
            <Modal isOpen={isModalOpen}>
                <ModalBody>
                    <ModalHeader>Add new Task</ModalHeader>
                    <Label>New Title</Label>
                    <Input
                        type='text'
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}>
                    </Input>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() =>addNewTask(newTitle) && setIsModalOpen(false)}>Do Something</Button>
                    {' '}
                    <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default Controller;
