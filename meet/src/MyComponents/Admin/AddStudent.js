import React, { useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router'
import '../../index.css';
import exceller from '../../images/exceller.png'
const AddStudent = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [contactdetails, setContactdetails] = useState();
    const [yearofpassing, setYearofPassing] = useState();
    const history = useHistory();


    const AddStudent = async (e) => {
      e.preventDefault();

      const formField = {
        name,
        email,
        address,
        contactdetails,
        yearofpassing,
      }

        await axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/admin/addStudent/',
            data: formField

        }).then((response) => {
            console.log(response.data)
            alert("Student Added Successfully!");
            history.push('/showStudent')
            window.location.reload(false);
            
        }).catch((error) => {
            console.log(error);
            alert("Please Enter Valid Data");
    });
    }

    return (

    //     <div class="row">
    //         <div class="col-lg-6 col-md-6 col-sm-1"></div>
    //     <Container>
    //             <Row className="px-3">
    //                 <Col>
    //                     <Form className="p-2" onSubmit={AddStudent}>
    //                         <h1>Add Student</h1>
                    
    //                             <Form.Group className="mb-1" controlId="formBasicEmail">
    //                                 <Form.Label>Name</Form.Label>
    //                                 <Form.Control type="text" placeholder="Student Name" required name="name" value={name} onChange={(e) => setName(e.target.value)} />
    //                             </Form.Group>
    //                             <Form.Group className="mb-1" controlId="formBasicEmail">
    //                                 <Form.Label>Email address</Form.Label>
    //                                 <Form.Control type="email" placeholder="Email" required name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    //                             </Form.Group>
    //                             <Form.Group className="mb-1" controlId="formBasicAddress">
    //                                 <Form.Label>Address</Form.Label>
    //                                 <Form.Control type="multiline" placeholder="Address" required name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
    //                             </Form.Group>
    //                             <Form.Group className="mb-1" controlId="formBasicAddress">
    //                                 <Form.Label>Phone Number</Form.Label>
    //                                 <Form.Control type="number" placeholder="Phone Number" required name="contactdetails" value={contactdetails} onChange={(e) => setContactdetails(e.target.value)} />
    //                             </Form.Group>
    //                             <Form.Group className="mb-1" controlId="formBasicAddress">
    //                                 <Form.Label>Year of Passing</Form.Label>
    //                                 <Form.Control type="number" placeholder="Year of Passing" required name="yearofpassing" value={yearofpassing} onChange={(e) => setYearofPassing(e.target.value)} />
    //                             </Form.Group>

    //                             <button type="submit" className="button" >
    //                                 Add Student
    //                             </button>
                        
    //                     </Form>

    //                     <div></div>
    //                 </Col>
    //             </Row>
    //         </Container>
    //         <div class="col-lg-6 col-md-6 col-sm-1" style={{ backgroundImage: `url(${exceller})`, backgroundRepeat: 'no-repeat',backgroundSize:"cover" }}></div>
    //     </div>

    // )


    <section class="vh-100 my-5" >
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black pr" style={{borderRadius: "25px;"}}>
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add Student</p>

                  
                  <Form className="p-2" onSubmit={AddStudent}>
                    
                                 <Form.Group className="mb-1" controlId="formBasicEmail">
                                     <Form.Label>Name</Form.Label>
                                     <Form.Control type="text" placeholder="Student Name" required name="name" value={name} onChange={(e) => setName(e.target.value)} />
                                 </Form.Group>
                                 <Form.Group className="mb-1" controlId="formBasicEmail">
                                     <Form.Label>Email address</Form.Label>
                                     <Form.Control type="email" placeholder="Email" required name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                 </Form.Group>
                                 <Form.Group className="mb-1" controlId="formBasicAddress">
                                     <Form.Label>Address</Form.Label>
                                     <Form.Control type="multiline" placeholder="Address" required name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                                 </Form.Group>
                                 <Form.Group className="mb-1" controlId="formBasicAddress">
                                     <Form.Label>Phone Number</Form.Label>
                                     <Form.Control type="number" placeholder="Phone Number" required name="contactdetails" value={contactdetails} onChange={(e) => setContactdetails(e.target.value)} />
                                 </Form.Group>
                                 <Form.Group className="mb-1" controlId="formBasicAddress">
                                     <Form.Label>Year of Passing</Form.Label>
                                   <Form.Control type="number" placeholder="Year of Passing" required name="yearofpassing" value={yearofpassing} onChange={(e) => setYearofPassing(e.target.value)} />
                                </Form.Group>

                                 <button type="submit" className="button" >
                                     Add Student
                                 </button>
                        
                         </Form>

                  

                </div>
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                  {/* <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" class="img-fluid" alt="Sample image" /> */}
                  <img src="https://mdbootstrap.com/img/illustrations/undraw_grand_slam_0q5r.svg" class="img-fluid" alt="smaple image" />

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
export default AddStudent
