import React, { useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router'

import '../../index.css';

const AddUniversity = () => {

    



    
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [password, setPassword] = useState();

    const history = useHistory();

    const AddUniversity = async () => {
        let formField = new FormData();
        formField.append('name', name);
        formField.append('email', email);
        formField.append('address', address);
        formField.append('password', password);



  



        
      
        await axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/admin/addUniversity/',
            data: formField

        }).then((response) => {
            console.log(response.data)
            alert("University Added Successfully!");
            history.push('/showUniversity')
            window.location.reload(false);
           history.push('/')
        }).catch((error) => {
            console.log(error);
        alert("Please Enter Valid Data");
    });
     
      


    }



















    return (
    //    <div style={{marginLeft:"20%",marginRight:"20%",marginTop:"5%"}}>
    //        <Container>
    //            <Row className="px-3">
    //                <Col>
                    
    //                    <Form className="p-8" onSubmit={AddUniversity}>
    //                        <h1>Add University</h1>
                            
    //                            <Form.Group className="mb-3" controlId="formBasicEmail">
    //                                <Form.Label>University Name</Form.Label>




    //                                <Form.Control type="text" placeholder="Enter University Name" name="name" required  value={name} onChange={(e) => setName(e.target.value)} />
    //                            </Form.Group>

    //                            <Form.Group className="mb-3" controlId="formBasicEmail">
    //                                <Form.Label>Email</Form.Label>   
    //                                <Form.Control type="email" placeholder="Enter email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
    //                            </Form.Group>
    //                            <Form.Group className="mb-3" controlId="formBasicEmail">
    //                                <Form.Label>Address</Form.Label>
    //                                <Form.Control type="text" placeholder="Address" required name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
    //                            </Form.Group>
    //                            <Form.Group className="mb-3" controlId="formBasicPassword">
    //                                <Form.Label>Password</Form.Label>       
    //                                <Form.Control type="password" id="password" required placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    //                            </Form.Group>
    //                            <Form.Group className="mb-3" controlId="formBasicPassword">
    //                                <Form.Label>Confirm Password</Form.Label>
    //                                <Form.Control type="password" id="confirmPassword" required placeholder="Confirm Password" />
    //                            </Form.Group>
    //                            {/* <Button variant="primary" type="submit" className="mt-3" >
    //                                Add University
    //                            </Button> */}

    //                            <button class="button">Add University</button>
                            
    //                    </Form>
    //                </Col>
    //            </Row>
    //        </Container>
    //    </div>




        <>


<section class="vh-100 my-5" >
    <div class="container h-100 ">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black pr mb-20 pb-10" style={{borderRadius: "25px;"}}>
            <div class="card-body p-md-5 mb-20 pb-10">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add University</p>

                  
                  <Form className="p-8" onSubmit={AddUniversity}>
                           {/* <h1>Add University</h1> */}
                            
                               <Form.Group className="mb-3" controlId="formBasicEmail">
                                   <Form.Label>University Name</Form.Label>




                                   <Form.Control type="text" placeholder="Enter University Name" name="name" required  value={name} onChange={(e) => setName(e.target.value)} />
                               </Form.Group>

                               <Form.Group className="mb-3" controlId="formBasicEmail">
                                   <Form.Label>Email</Form.Label>   
                                   <Form.Control type="email" placeholder="Enter email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                               </Form.Group>
                               <Form.Group className="mb-3" controlId="formBasicEmail">
                                   <Form.Label>Address</Form.Label>
                                   <Form.Control type="text" placeholder="Address" required name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                               </Form.Group>
                               <Form.Group className="mb-3" controlId="formBasicPassword">
                                   <Form.Label>Password</Form.Label>       
                                   <Form.Control type="password" id="password" required placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                               </Form.Group>
                               <Form.Group className="mb-3" controlId="formBasicPassword">
                                   <Form.Label>Confirm Password</Form.Label>
                                   <Form.Control type="password" id="confirmPassword" required placeholder="Confirm Password" />
                               </Form.Group>
                               {/* <Button variant="primary" type="submit" className="mt-3" >
                                   Add University
                               </Button> */}

                               <button class="button">Add University</button>
                            
                         </Form>


                  

                </div>
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                  {/* <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" class="img-fluid" alt="Sample image" /> */}
                  <img src="https://mdbootstrap.com/img/illustrations/app-user-colour.svg" class="img-fluid" alt="smaple image" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 
        </>
    )
}

export default AddUniversity;



// import axios from 'axios';
// import React, { Component } from "react";
//import ReactSelect from "react-select";

// class AddUniversity extends Component {
//   constructor() {
//     super();

    
//     this.onChangeUserName = this.onChangeUserName.bind(this);
//     this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
//     this.onChangeUserAddress = this.onChangeUserAddress.bind(this);
//     this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
    

//     this.handleSubmit = this.handleSubmit.bind(this);






//     this.state = {
//       form: {
//         name: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//         Address: "",
//       },
//       formErrors: {
//         name: null,
//         email: null,
//         Address: null,
//         password: null,
//         confirmPassword: null,
//       }
//     };
    
//   }





  
// onChangeUserName(e) {
//     this.setState({ name: e.target.value })
// }

// onChangeUserEmail(e) {
//     this.setState({ email: e.target.value })
// }
// onChangeUserAddress(e) {
//   this.setState({ address: e.target.value })
// }
// onChangeUserPassword(e) {
//   this.setState({ password: e.target.value })
// }















//   validateNumber = evt => {
//     var theEvent = evt || window.event;

//    Handle paste
//     if (theEvent.type === "paste") {
//       key = theEvent.clipboardData.getData("text/plain");
//     } else {
//      Handle key press
//       var key = theEvent.keyCode || theEvent.which;
//       key = String.fromCharCode(key);
//     }
//     var regex = /[0-9]|\./;
//     if (!regex.test(key)) {
//       theEvent.returnValue = false;
//       if (theEvent.preventDefault) theEvent.preventDefault();
//     }
//   };

//   handleChange = e => {
//     const { name, value, checked } = e.target;
//     const { form, formErrors } = this.state;
//     let formObj = {};
//     if (name === "language") {
//      handle the change event of language field
//       if (checked) {
//        push selected value in list
//         formObj = { ...form };
//         formObj[name].push(value);
//       } else {
//        remove unchecked value from the list
//         formObj = {
//           ...form,
//           [name]: form[name].filter(x => x !== value)
//         };
//       }
//     } else {
//      handle change event except language field
//       formObj = {
//         ...form,
//         [name]: value
//       };
//     }
//     this.setState({ form: formObj }, () => {
//       if (!Object.keys(formErrors).includes(name)) return;
//       let formErrorsObj = {};
//       if (name === "password" || name === "confirmPassword") {
//         let refValue = this.state.form[
//           name === "password" ? "confirmPassword" : "password"
//         ];
//         const errorMsg = this.validateField(name, value, refValue);
//         formErrorsObj = { ...formErrors, [name]: errorMsg };
//         if (!errorMsg && refValue) {
//           formErrorsObj.confirmPassword = null;
//           formErrorsObj.password = null;
//         }
//       } else {
//         const errorMsg = this.validateField(
//           name,
//           name === "language" ? this.state.form["language"] : value
//         );
//         formErrorsObj = { ...formErrors, [name]: errorMsg };
//       }
//       this.setState({ formErrors: formErrorsObj });
//     });
//   };

//   validateField = (name, value, refValue) => {
//     let errorMsg = null;
//     switch (name) {
//       case "name":
//         if (!value) errorMsg = "Please enter Name.";
//         break;
//       case "address":
//             if (!value) errorMsg = "Please enter Address.";
//             break;  
//       case "email":
//         if (!value) errorMsg = "Please enter Email.";
//         else if (
//           !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//             value
//           )
//         )
//           errorMsg = "Please enter valid Email.";
//         break;
     
      
//       case "password":
//        refValue is the value of Confirm Password field
//         if (!value) errorMsg = "Please enter Password.";
//         else if (refValue && value !== refValue)
//           errorMsg = "Password and Confirm Password does not match.";
//         break;
//       case "confirmPassword":
//        refValue is the value of Password field
//         if (!value) errorMsg = "Please enter Confirm Password.";
//         else if (refValue && value !== refValue)
//           errorMsg = "Password and Confirm Password does not match.";
//         break;
//       default:
//         break;
//     }
//     return errorMsg;
//   };

//   validateForm = (form, formErrors, validateFunc) => {
//     const errorObj = {};
//     Object.keys(formErrors).map(x => {
//       let refValue = null;
//       if (x === "password" || x === "confirmPassword") {
//         refValue = form[x === "password" ? "confirmPassword" : "password"];
//       }
//       const msg = validateFunc(x, form[x], refValue);
//       if (msg) errorObj[x] = msg;
//     });
//     return errorObj;
//   };

//   handleSubmit = (e) => {
//     const { form, formErrors } = this.state;
//     const errorObj = this.validateForm(form, formErrors, this.validateField);
//     if (Object.keys(errorObj).length !== 0) {
//       this.setState({ formErrors: { ...formErrors, ...errorObj } });
//       return false;
//     }
//     console.log("Data: ", form);



//     axios.post('http://127.0.0.1:8000/api/admin/addUniversity/', form)
//             .then((res) => {
//                 console.log(res.data)
//             }).catch((error) => {
//                 console.log(error)
//             });











//   };

//   render() {
//     const { form, formErrors } = this.state;
//     return (
//       <>
//         <div className="signup-box">
//           <p className="title">Sign up</p>
//           <div className="row">
//           <form onSubmit={this.handleSubmit}>
//             <div className="col-md-6">
//               <div className="form-group">
                
//                 <label>
//                   Name:<span className="asterisk">*</span>
//                 </label>
//                 <input
//                   className="form-control"
//                   type="text"
//                   name="name"
//                   value={this.state.name}
//                   onChange={this.onChangeUserName}
//                  onBlur={this.handleChange}
//                 />
//                 {formErrors.name && (
//                   <span className="err">{formErrors.name}</span>
//                 )}
//               </div>
//               <div className="form-group">
//                 <label>
//                   Email:<span className="asterisk">*</span>
//                 </label>
//                 <input
//                   className="form-control"
//                   type="text"
//                   name="email"
//                   value={this.state.email}
//                   onChange={this.onChangeUserEmail}
//                   onBlur={this.handleChange}
//                 />
//                 {formErrors.email && (
//                   <span className="err">{formErrors.email}</span>
//                 )}
//               </div>
//               <div className="form-group">
//                 <label>
//                   Password:<span className="asterisk">*</span>
//                 </label>
//                 <input
//                   className="form-control"
//                   type="password"
//                   name="password"
//                   value={this.state.password}
//                   onChange={this.onChangeUserPassword}
//                   onBlur={this.handleChange}
//                 />
//                 {formErrors.password && (
//                   <span className="err">{formErrors.password}</span>
//                 )}
//               </div>
//               <div className="form-group">
//                 <label>
//                   Confirm Password:<span className="asterisk">*</span>
//                 </label>
//                 <input
//                   className="form-control"
//                   type="password"
//                   name="confirmPassword"
//                   value={form.confirmPassword}
                
//                  onBlur={this.handleChange}
//                 />
//                 {formErrors.confirmPassword && (
//                   <span className="err">{formErrors.confirmPassword}</span>
//                 )}
//               </div>
//               <div className="form-group">
//                 <label>
//                   Address:<span className="asterisk">*</span>
//                 </label>
//                 <input
//                   className="form-control"
//                   type="text"
//                   name="password"
//                   value={this.state.address}
//                   onChange={this.onChangeUserAddress}
//                  onBlur={this.handleChange}
//                 />
//                 {formErrors.address && (
//                   <span className="err">{formErrors.address}</span>
//                 )}
//               </div>
//             </div>
            
//             <div className="col-md-6">
              
              
              

//             </div>
//             </form>
//           </div>

//           <div className="form-group">
//             <input
//               type="button"
//               className="btn btn-primary"
    
//             />
//           </div>
//         </div>



        
        
//         <h3 style={{ textAlign: "center" }}>
//           <a href="http://www.cluemediator.com/form-validation-in-reactjs" target="_blank">
//            Here is the step by step explanation of form validation in React JS
//           </a>
//         </h3>
//       </>
//     );
//   }
// }

// export default AddUniversity;