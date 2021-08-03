import React, { Component } from 'react'
import { Modal, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class UpdateFormModel extends Component {

    
    render() {
        return (
            <div>
                
                {this.props.showModal && (

                    <Modal show={this.props.showModal} onHide={this.props.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Update Modal</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={this.props.updateData}>
                                <Form.Group className="mb-3" >
                                    <Form.Label> Name</Form.Label>
                                    <Form.Control type="text"  name="name" defaultValue={this.props.theName}/>
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label>level</Form.Label>
                                    <Form.Control type="text"  name="level" defaultValue={this.props.theLevel}/>
                                </Form.Group>
                                
                                <Form.Group className="mb-3" >
                                    <Form.Label> Image</Form.Label>
                                    <Form.Control type="text"  name="img"  defaultValue={this.props.theImg}/>
                                </Form.Group>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.props.handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="success" type="submit" >
                                        Update
                                    </Button>
                                </Modal.Footer>
                            </Form>
                        </Modal.Body>

                    </Modal>
                )}
            </div>
        )
    }
}

export default UpdateFormModel