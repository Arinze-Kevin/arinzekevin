// import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
// import logo from '../assets/img/logo.svg';
// import navIcon1 from '../assets/img/nav-icon1.svg';
// import navIcon2 from '../assets/img/nav-icon2.svg';
// import navIcon3 from '../assets/img/nav-icon3.svg';

// export const Footer = () => {
//     return (
//         <footer className="footer">
//             <Container>
//                 <Row className='align-item-center'>
//                   <MailchimpForm />
//                   <Col sm={6}>
//                       <img src={logo} alt="Logo" />
//                   </Col>
//                   <Col sm={6} className="text-center text-sm-end">
//                       <div className="social-icon">
//                           <a href=""><img src={navIcon1} /></a>
//                           <a href=""><img src={navIcon2} /></a>
//                           <a href=""><img src={navIcon3} /></a>
//                       </div>
//                       <p>CopyRight 2023. All Right Reserved</p>
//                   </Col>
//                 </Row>
//             </Container>
//         </footer>
//     )
// }


import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import navIcon1 from '../assets/img/linkedin.png';  // LinkedIn Icon
import navIcon2 from '../assets/img/github (2).svg';  // GitHub Icon
import navIcon3 from '../assets/img/nav-icon3.svg';  // Twitter Icon
// import navIcon4 from '../assets/img/github-icon.svg';  // GitHub Icon

export const Footer = () => {
    return (
        <footer className="footer" style={{ backgroundColor: '#0a0a0a', padding: '20px 0', color: '#fff', textAlign: 'center' }}>
            <Container>
                <Row>
                    <Col md={4} sm={12}>
                        <h5 style={{ marginBottom: '20px' }}>Quick Links</h5>
                        <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                            <li><a href="#home" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
                            <li><a href="#projects" style={{ color: '#fff', textDecoration: 'none' }}>Projects</a></li>
                            <li><a href="#skills" style={{ color: '#fff', textDecoration: 'none' }}>Skills</a></li>
                            <li><a href="https://arinzekevin.hashnode.dev" style={{ color: '#fff', textDecoration: 'none' }}>Blog</a></li>
                        </ul>
                    </Col>
                    <Col md={4} sm={12}>
                        <h5 style={{ marginBottom: '20px' }}>Follow Me</h5>
                        <div className="social-icon" style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                            <a href="https://www.linkedin.com/in/arinzekevin" target="_blank" rel="noopener noreferrer">
                                <img src={navIcon1} alt="LinkedIn" style={{ width: '30px', filter: 'invert(0%)' }} />
                            </a>
                            <a href="https://github.com/Arinze-Kevin" target="_blank" rel="noopener noreferrer">
                                <img src={navIcon2} alt="GitHub" style={{ width: '30px', filter: 'invert(0%)' }} />
                            </a>
                            {/* <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
                                <img src={navIcon3} alt="Twitter" style={{ width: '30px', filter: 'invert(100%)' }} />
                            </a> */}
                        </div>
                    </Col>
                    <Col md={4} sm={12}>
                        <h5 style={{ marginBottom: '20px' }}>Get In Touch</h5>
                        <p>Feel free to reach out for collaborations or just a friendly chat.</p>
                        <button onClick={() => window.location.href = 'https://www.linkedin.com/in/arinzekevin'} style={{ border: 'none', backgroundColor: '#1e90ff', color: '#fff', padding: '10px 20px', borderRadius: '50px', cursor: 'pointer' }}>
                            Let's connect <ArrowRightCircle size={25} />
                        </button>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center" style={{ marginTop: '30px' }}>
                        <p>&copy; {new Date().getFullYear()} Arinze Kevin. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
