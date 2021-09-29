import React, { useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router'
import '../../index.css';


const AddHod = () => {

    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [id_hod, setIddepartment] = useState();
    const [address, setAddress] = useState();

    const history = useHistory();

    const AddHod = async (e) => {
        // let formField = new FormData();
        // formField.append('name', name);
        // formField.append('phone', phone);
        // formField.append('email', email);
        // formField.append('address', address);
        // formField.append('id_hod', id_hod);
        
        const data = {
          name,
          phone,
          email,
          address,
          id_hod,
        };


        

        axios.post('http://127.0.0.1:8000/api/admin/addHod/',{data}).then((response) => {
            console.log(response.data)
            alert("hOD Added Successfully!");
            history.push('/showHod')
            window.location.reload(false);
            
        }).catch((error) => {
            console.log(error);
           
            alert("Please Enter Valid Data");
    });
    }

return(
    <section class="vh-100 my-3" >
    <div class="container h-80">
      <div class="row d-flex justify-content-center align-items-center h-80">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black pr" style={{borderRadius: "25px;"}}>
            <div class="card-body p-md-3">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                  <p class="text-center h1 fw-bold mb-2 mx-1 mx-md-2 mt- ">Add Hod</p>

                  
                                  <Form className="p-5" onSubmit={AddHod}>
                        
                             <Form.Group className="mb-3" controlId="formBasicName">
                                 <Form.Label>Hod Name</Form.Label>
                                 <Form.Control type="text" placeholder="Enter Hod Name" required name="name" value={name} onChange={(e) => setName(e.target.value)} />
                             </Form.Group>
                             <Form.Group className="mb-3" controlId="formBasicEmail">
                                 <Form.Label>Hod Email</Form.Label>
                                 <Form.Control type="email" placeholder="Enter email" required name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                             </Form.Group>
                             <Form.Group className="mb-3" controlId="formBasicPhone">
                                 <Form.Label>Hod Phone</Form.Label>
                                 <Form.Control type="Number" placeholder="Enter Phone Number" required name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                             </Form.Group>

                             <Form.Group className="mb-3" controlId="formBasicEmail">
                                 <Form.Label>Address</Form.Label>
                                 <Form.Control type="text" placeholder="Address" required name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                             </Form.Group>
                             <Form.Group className="mb-3" controlId="formBasicPassword" >
                                 <Form.Label>Department Id</Form.Label>
                                 <Form.Control type="number" placeholder="Department Id" required name="id_hod" value={id_hod} onChange={(e) => setIddepartment(e.target.value)} />
                            </Form.Group>
                            <button type="submit" class="button" >
                                Add Hod
                            </button>
                        
                    </Form>

                  

                </div>
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                  {/* <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" class="img-fluid" alt="Sample image" /> */}
                  <img src="https://mdbootstrap.com/img/illustrations/drawkit-phone-conversation-colour.svg" class="img-fluid" alt="smaple image" />

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

export default AddHod
