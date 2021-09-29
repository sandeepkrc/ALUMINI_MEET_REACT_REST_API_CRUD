import React, { Component } from "react";
import axios from "axios";
import { Card,Button } from "react-bootstrap";
import { useHistory } from 'react-router'
// 




class Poll extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      option:'',
    };

    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      
      selectedOption: event.target.value,
    
    });
  }

  formSubmit(event) {
    event.preventDefault();
    const userObject = {
      option:this.state.selectedOption}
    




    
    axios.post('http://127.0.0.1:8000/api/ppp2', userObject)
    .then((res) => {
        console.log(res.data)
        
        alert("You voted successfully")
        
        window.location.reload(false);
    }).catch((error) => {
        console.log(error)
        alert("Please select Yes or No");
    });
    this.setState({ option:this.state.selectedOption})


    console.log(this.state.selectedOption);
  }

  render() {
    return (
       <div>
          
          
          <Card className="text-center">
            <Card.Header></Card.Header>
              <Card.Body>
               <Card.Title><h1>POLL EVENT</h1></Card.Title>
                 <Card.Text> <h2 style={{color:'green'}}>   Want ot attain the Alumni Meet ?</h2>   </Card.Text>
                   <form onSubmit={this.formSubmit}>

                   <div className="radio">
                     <label>
                       <input
                           type="radio"
                           value="YES"
                           
                           checked={this.state.selectedOption === "YES"}
                           onChange={this.onValueChange}
                           required


                        />
                        YES
                     </label>
                   </div>
                   <div className="radio">
                     <label>
                       <input
                          type="radio"
                          value="NO"
                          checked={this.state.selectedOption === "NO"}
                          onChange={this.onValueChange}
                       />
                     NO
                     </label>
                   </div>











                     
                                














                                


                            




                     










                      
                          <div>
                           Selected option is :<strong style={{color:'cyan'}}> {this.state.selectedOption}</strong>
                          </div>
                           
                              <button className="button" type="submit">
                              VOTE
                                </button>
                           

                         </form>




                       </Card.Body>
                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                      </Card>



   






           </div>
    );
  }
}

export default Poll;