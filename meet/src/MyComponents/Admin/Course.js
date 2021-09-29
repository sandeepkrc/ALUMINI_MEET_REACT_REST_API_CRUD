import React,{useState, useEffect}from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import '../../index.css';

const Course = () => {

  const [alldata, setalldata] = useState([]);

  const getUsers = async() => {
    
    const response = await axios.get(`http://127.0.0.1:8000/api/getCourse/`)
    const result = await response.data;
    setalldata(result)
  }

  useEffect(() => {
    getUsers();
  }, [])



  const deleteRow = (id, e)=>{  
    axios.delete(`http://127.0.0.1:8000/api/pdcourse/${id}/`)  
      .then(res => {  
        console.log(res);  
        console.log(res.data); 
        window.location.reload(false);
      }
      )
    }
        

        // <Redirect to="/showStudent" />
        // window.location.reload(false);


return(
    <div class="centert">
      <h1>SHOW ALL COURSES</h1>
     <table>
  <tr>
  <th>Course Id</th>
    <th>Department Id</th>
    <th>Name</th>
    <th>Action</th>
   
  </tr>
  {
    alldata.map((curel)=>{
      return(
        <tr key={curel.name}>
          <td>{curel.id}</td>
        <td>{curel.departmentid}</td>
        <td>{curel.name}</td>
        <td>


        <span>
          <button class="upd" >UPDATE</button>
          </span>

        <span>
          <button class="del" onClick={(e) => deleteRow(curel.id, e)}>Delete</button>
          </span>
        </td>
        
        
      </tr>

      )
  })}
</table>
  </div>
  )
}
export default Course;
