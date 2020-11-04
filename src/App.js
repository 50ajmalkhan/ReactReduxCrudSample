import React, { useState } from 'react';
import { Container, Form, Row, Col, Button, Table, Modal } from 'react-bootstrap';
import Input from "./Components/UI/Input/index";
import { useDispatch, useSelector } from 'react-redux';
import { Add, deleteIndex, updateIndex } from "./actions/index"

const App = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const { error, setError } = useState('');
  const add = useSelector(state => state.add)
  const [selectdata, setSelectdata] = useState({})
  const [indexs, setindex] = useState(null)


  const handleShow = (index, value) => {
    setSelectdata(value)
    setShow(true)
    setindex(index)


  };



  const userSignup = (e) => {

    e.preventDefault();
    const user = { firstName, lastName, email, phone }



    dispatch(Add(user));

  }

  // const updateArray = (k) => {
  //   const user = { firstName, lastName, email, phone }
  //   dispatch(updateIndex(user, indexs))
  // }


  const deleteArray = (k) => {

    dispatch(deleteIndex(k))

  };
  let a
  const dsfFirstname = (v) => {
    a = add.users.find((res, k) => k == indexs)
    a.firstName = v
    setFirstName(a.firstName)
  }
  const dsfLastname = (v) => {
    a = add.users.find((res, k) => k == indexs)
    a.lastName = v
    setLastName(a.lastName)
  }
  const dsfemail = (v) => {
    a = add.users.find((res, k) => k == indexs)
    a.email = v
    setEmail(a.email)
  }
  const dsfphone = (v) => {
    a = add.users.find((res, k) => k == indexs)
    a.phone = v
    setPhone(a.phone)
  }


  return (
    <div>

      <Container>

        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userSignup}>
              <Row>
                <Col md={6}>
                  <Input
                    label="fristName"
                    placeholder="First Name"
                    value={firstName}
                    type="text"
                    onChange={(e) => { setFirstName(e.target.value) }}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="lastName"
                    placeholder="Last Name"
                    value={lastName}
                    type="text"
                    onChange={(e) => { setLastName(e.target.value) }}
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Input
                    label="email"
                    placeholder="Email"
                    value={email}
                    type="email"
                    onChange={(e) => { setEmail(e.target.value) }}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="phone"
                    placeholder="Phone"
                    value={phone}
                    type="tel"
                    onChange={(e) => { setPhone(e.target.value) }}
                  />


                </Col>
              </Row>

              <Button variant="primary" type="submit">
                Submit
          </Button>

            </Form>
          </Col>
        </Row>


      </Container>
      { add.loading ?
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>firstName</th>
              <th>lastName</th>
              <th>email</th>
              <th>phone</th>
            </tr>
          </thead>
          <tbody>
            {add.users.map((res, k) => {

              return (
                <tr>
                  <td>{res.firstName}</td>
                  <td>{res.lastName}</td>
                  <td>{res.email}</td>
                  <td>{res.phone}</td>
                  <Button variant="primary" onClick={() => deleteArray(res)}>
                    DELETE
          </Button>
                  <Button variant="primary" onClick={() => { handleShow(k, res) }}>
                    UPDATE
          </Button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Updating</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Row>
                        <Col md={6}>
                          <Input
                            label="fristName"
                            placeholder="First Name"
                            value={firstName}
                            type="text"
                            onChange={(e) => dsfFirstname(e.target.value)}
                          />
                        </Col>
                        <Col md={6}>
                          <Input
                            label="lastName"
                            placeholder="Last Name"
                            value={lastName}
                            type="text"
                            onChange={(e) => dsfLastname(e.target.value)}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Input
                            label="email"
                            placeholder="Email"
                            value={email}
                            type="email"
                            onChange={(e) => dsfemail(e.target.value)}
                          />
                        </Col>
                        <Col md={6}>
                          <Input
                            label="phone"
                            placeholder="Phone"
                            value={phone}
                            type="tel"
                            onChange={(e) => dsfphone(e.target.value)}
                          />
                        </Col>
                      </Row>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                      <Button variant="primary" onClick={handleClose}>
                        Save Changes
          </Button>
                    </Modal.Footer>
                  </Modal>
                </tr>
              )
            })}



          </tbody>
        </Table> :
        null}
    </div>


  )
};


export default App;