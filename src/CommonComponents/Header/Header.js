// import React, { Component } from 'react'
// import { Table, Nav, Navbar, Form, Badge } from 'react-bootstrap';
// import user from 'assets/user.png';
// import { ArrowDown, Bell, Gear } from 'react-bootstrap-icons';

// export default class Header extends Component {
//     render() {
//         return (
//             <div className="flex-row">
//             <div className="flex-wrap">
//                 <Navbar className="navbar" expand="lg">
//                     <Navbar.Brand href="#home" className="logo-name">WhatsAutomate</Navbar.Brand>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Collapse id="basic-navbar-nav">
//                         <Nav className="justify-content-end ml-auto">
//                             <Nav.Item>
//                                 <Form.Label className="user-name">Hello! Steve Marshall</Form.Label>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <img className="user-photo" src={user} alt="user" />
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <div className="user-menu"><ArrowDown /></div>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <div className="user-notification">
//                                     <Bell /><Badge pill variant="success">3</Badge>
//                                 </div>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <div className="user-setting">
//                                     <Gear /><Badge pill variant="danger">3</Badge>
//                                 </div>
//                             </Nav.Item>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Navbar>
//             </div>
//         </div>
//         )
//     }
// }

import React, { Component } from 'react'
import { Table, Nav, Navbar, Form, Badge } from 'react-bootstrap';
import user from 'assets/user.png';
import { ArrowDown, Bell, Gear } from 'react-bootstrap-icons';

export default class Header extends Component {
    render() {
        return (
            <div className="flex-wrap">
                <Navbar className="navbar" expand="lg">
                    <Navbar.Brand href="#home" className="logo-name">WhatsAutomate</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-end ml-auto">
                            <Nav.Item>
                                <Form.Label className="user-name">Hello! Steve Marshall</Form.Label>
                            </Nav.Item>
                            <Nav.Item>
                                <img className="user-photo" src={user} alt="user" />
                            </Nav.Item>
                            <Nav.Item>
                                <div className="user-menu"><ArrowDown /></div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="user-notification">
                                    <Bell /><Badge pill variant="success">3</Badge>
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <div className="user-setting">
                                    <Gear /><Badge pill variant="danger">3</Badge>
                                </div>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

