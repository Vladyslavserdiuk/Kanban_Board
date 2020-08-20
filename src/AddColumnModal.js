import React, {useState} from 'react';
import {Modal, ModalHeader, ModalFooter, ModalBody, Label, Row, Col, Input, Button} from "reactstrap";


function AddColumnModal(props) {

    const {addNewColumn} = props

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [newTitle, setNewTitle] = useState('')

    const addButtonHandler = () => {
        addNewColumn(newTitle )
        setIsModalOpen(false)
    }

    return (
        <>
            <Button onClick={() => setIsModalOpen(true)}>Add new Column</Button>
            <Modal isOpen={isModalOpen}>
                <ModalBody>
                    <ModalHeader>Add new Column</ModalHeader>
                    <Label>New Title</Label>
                    <Input
                        type='text'
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}>
                    </Input>

                </ModalBody>
                <ModalFooter>
                    <Button onClick={addButtonHandler}>Add new Column</Button>
                    {' '}
                    <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default AddColumnModal;
