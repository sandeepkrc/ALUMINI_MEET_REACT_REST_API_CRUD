import React, { useState } from 'react'
import { Container, Form, Button,Spinner, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router'
import '../../index.css';
import tagit from '../../images/tagit.png'
const AddDepartment = () => {

    const [name, setName] = useState();
    const history = useHistory();

    const AddDepartment = async () => {
        let formField = new FormData();
        formField.append('name', name);

        await axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/admin/addDepartment/',
            data: formField
        }).then((response) => {
            console.log(response.data)
            console.log("=========")
            alert("Department Added Successfully!");
            history.push('/showDepartment')
            window.location.reload(false);
            
        }).catch((error) => {
            console.log(error);
            alert("Please Enter Valid Data");
    });
    }

    return (
        <section class="vh-100" >
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black pr" style={{borderRadius: "25px;"}}>
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add Department</p>

                  



                  <Form className="p-5" onSubmit={AddDepartment} >
                            

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Department Name</Form.Label>
                                    <Form.Control type="text" required placeholder="Enter Department Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                                </Form.Group>
                                <button type="submit" class="button">
                                    
                                    Add Department
                                </button>

                        </Form>

                </div>
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                  <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" class="img-fluid" alt="Sample image" />

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

export default AddDepartment;
