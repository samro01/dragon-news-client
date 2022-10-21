import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
    }
    return (
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
          </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Your Name</Form.Label>
          <Form.Control defaultValue={user?.displayName} type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control defaultValue={user?.photoURL} type="text" placeholder="photo URL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
};

export default Profile;