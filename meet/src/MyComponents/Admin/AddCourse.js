import React, { useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router'

import '../../index.css';

const AddCourse = () => {

    const [name, setName] = useState();
    const [departmentid, setDepartmentId] = useState();

    const history = useHistory();

    const AddCourse = async () => {
        let formField = new FormData();
        formField.append('name', name);
        formField.append('departmentid', departmentid);

        await axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/admin/addCourse/',
            data: formField

        }).then((response) => {
            console.log(response.data)
            alert("New Course Added ")
            history.push('/showCourse')
            window.location.reload(false);
        }).catch((error) => {
            console.log(error);
            alert("Please Enter Valid Data");
    });
    }
    return (
        // <div>
        //     <Container className="py-4">
        //         <Row className="px-5 py-3">
        //             <Col>
        //                 <Form className="p-5">
        //                     <h1>Add Course</h1>
        //                     <Form className="pt-2">
        //                         <Form.Group className="mb-3" controlId="formBasicEmail">
        //                             <Form.Label>Course Name</Form.Label>
        //                             <Form.Control type="text" placeholder="Enter Course Name" required name="name" value={name} onChange={(e) => setName(e.target.value)} />
        //                         </Form.Group>
        //                         <Form.Group className="mb-3" controlId="formBasicPassword">
        //                             <Form.Label>Department Id</Form.Label>
        //                             <Form.Control type="number" placeholder="Department Id" required name="departmentid" value={departmentid} onChange={(e) => setDepartmentId(e.target.value)} />
        //                         </Form.Group>
        //                         <button type="submit" className="button" onClick={AddCourse}>
        //                             Add Course
        //                         </button>
        //                     </Form>
        //                 </Form>
        //             </Col>
        //         </Row>
        //     </Container>
        // </div>

        <section class="vh-100 my-5" >
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black pr" style={{borderRadius: "25px;"}}>
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
    
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add Course</p>
    
                      
                      <Form className="pt-2">
                                 <Form.Group className="mb-3" controlId="formBasicEmail">
                                     <Form.Label>Course Name</Form.Label>
                                     <Form.Control type="text" placeholder="Enter Course Name" required name="name" value={name} onChange={(e) => setName(e.target.value)} />
                                 </Form.Group>
                                 <Form.Group className="mb-3" controlId="formBasicPassword">
                                     <Form.Label>Department Id</Form.Label>
                                     <Form.Control type="number" placeholder="Department Id" required name="departmentid" value={departmentid} onChange={(e) => setDepartmentId(e.target.value)} />
                                 </Form.Group>
                                 <button type="submit" className="button" onClick={AddCourse}>
                                     Add Course
                                 </button>
                         </Form>
    
                      
    
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
    
                      {/* <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" class="img-fluid" alt="Sample image" /> */}
                      <img src="https://mdbootstrap.com/img/illustrations/undraw_basketball_agx4.png" class="img-fluid" alt="smaple image" />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default AddCourse
