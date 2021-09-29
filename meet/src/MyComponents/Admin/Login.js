import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import LoginNavigation from './LoginNavigation';
import axios from 'axios';

function Login(){
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")

        const history = useHistory();

        useEffect(() => {
            if (localStorage.getItem('user-info')){
                history.push("/adminHome")
            }
        },[])



      const login = async (e) =>{
        e.preventDefault();

        const dat = {
          email,
          password,
        };

        axios
        .post("http://localhost:8000/api/admin/login/", dat)
        .then((res) =>{ 
          console.log("datadda")
          console.log(res.data)
          console.log(res.data.access)
          localStorage.setItem("login",res.data.access)
          history.push("/adminHome");
        })
        .catch((err) =>{ 
          console.log(err)
          alert("please enter valid credential")
          history.push('/login');
          window.location.reload(false);
         


        })
    };

      
    
        
    






        return(
            <>
            <LoginNavigation/>
           

            <section class="vh-100 my-5" >
        <div class="container h-100">
        
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black pr" style={{borderRadius: "25px;"}}>
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
    
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">SignIn</p>
    
                      
                      <form onSubmit={login}>
                     <input type="text" placeholder="email" required onChange={(e) => setEmail(e.target.value)} className="form-control" /> <br />

                     <input type="password" placeholder="password" required onChange={(e) => setPassword(e.target.value)} className="form-control" /> <br />

                     <button class="button"  type="submit">LOGIN</button>
                     </form>
    
                      
    
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
      </>
        )

}
export default Login


