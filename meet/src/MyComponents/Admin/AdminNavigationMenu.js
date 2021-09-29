import { Container, Navbar, NavDropdown, NavLink, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router'
import {useEffect } from 'react';

function NavigationMenu() {
  const history = useHistory();
  function logout(){
    localStorage.clear();
    history.push("/login")
  }


  useEffect(() => {
    const token = localStorage.getItem("login");
    if(token==null){
      alert("please log in");
      history.push('/login');

    }
    console.log(token);
  });

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">Meet-Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink ><Link  to="/adminHome" className="btn sandy" style={{color :"#fff"}}>Home</Link></NavLink>
            <NavDropdown title="Add"  id="collasible-nav-dropdown" className="btn" style={{color :"#fff"}}>
              <NavDropdown.Item><Link to="/addUniversity" className=" btn">University</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/addDepartment" className=" btn">Department</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/addHod" className=" btn">Hod</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/addFaculty" className=" btn">Faculty</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/addStudent" className=" btn">Student</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/addCourse" className=" btn">Course</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/addEvent" className=" btn">Event</Link></NavDropdown.Item>
            </NavDropdown>
            {/* <NavDropdown title="Map" id="collasible-nav-dropdown">
              <NavDropdown.Item><Link to="/mapDepartment">Department</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/mapFaculty">Faculty</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/mapStudent">Student</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/mapRoll">Roll No</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/mapEvent">Event</Link></NavDropdown.Item>
            </NavDropdown> */}
            <NavDropdown  title="Show" id="collasible-nav-dropdown" className="btn" style={{color :" #fff"  }} >
              <NavDropdown.Item><Link to="/showUniversity" className=" btn">University</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/showDepartment" className=" btn">Department</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/showHod" className=" btn">Hod</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/showFaculty" className=" btn">Faculty</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/showStudent" className=" btn">Student</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/resultPoll" className=" btn">Poll Result</Link></NavDropdown.Item><NavDropdown.Divider />
              

              <NavDropdown.Item><Link to="/showCourse" className=" btn">Course</Link></NavDropdown.Item>
          
              
              <NavDropdown.Item><Link to="/showEvent" className=" btn">Event</Link></NavDropdown.Item>
            </NavDropdown>




            <NavDropdown  title="Poll" id="collasible-nav-dropdown" className="btn" style={{color :" #fff"}} >
              <NavDropdown.Item>
                <Link to="/showPoll" className=" btn"> Poll</Link>
                </NavDropdown.Item>
              
             
            </NavDropdown>



            







          </Nav>
          <Nav>
            <Nav.Link href="#" onClick={logout} style={{color :" #fff"}}>Log Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



  );
}

export default NavigationMenu;
