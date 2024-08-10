import { Container, Row, Tab, Col, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg9 from "../assets/img/supportticket.png";
import projImg8 from "../assets/img/noteapp.png";
import projImg7 from "../assets/img/todoapp.png";
import projImg6 from "../assets/img/hangmangame.png";
import projImg5 from "../assets/img/ecommerce.png";
import projImg4 from "../assets/img/socialmedia.png";
import projImg3 from "../assets/img/gpt3.png";
import projImg2 from "../assets/img/youtubeclone.png";
import projImg1 from "../assets/img/restaurant.png";

export const Projects = () => {

    const projects1 = [
        {
            title: "Restaurant Web-App",
            description: "Modern fully responsive restaurant web app built with React",
            imgUrl: projImg1,
            url: "https://restaurant-web-app-omega.vercel.app/",
        },
        {
            title: "Youtube Clone Web-App ",
            description: "Modern fully responsive fullstack YouTube clone web app built with React and Axios",
            imgUrl: projImg2,
            url: "https://youtube-clone-nine-xi.vercel.app/"
        },
        {
            title: "GPT-3 Web-App ",
            description: "Modern fully responsive UI/UX AI web app built with React",
            imgUrl: projImg3,
            url: "https://gpt-3-web-app-henna.vercel.app/"
        }
    ];

    const projects2 = [
        {
            title: "Social Media Web-App",
            description: "This is a social media app built with TypeScript and NextJs",
            imgUrl: projImg4,
            url: "https://social-media-app-01.vercel.app/"
        },
        {
            title: "E-Commerce Store Web-App",
            description: "This is a full stack e-commerce web application built with MERN",
            imgUrl: projImg5,
            url: "https://ecommerce-store-amber.vercel.app/"
        },
        {
            title: "Hangman Game Web-App",
            description: "A word guessing game to play and have fun built with JavaScript",
            imgUrl: projImg6,
            url: "https://hangman-game-livid.vercel.app/"
        }
    ];

    const projects3 = [
        {
            title: "To-Do Web-App",
            description: "A web app to list what to do for the day built with JavaScript",
            imgUrl: projImg7,
            url: "https://todo-app-ari-kevin.vercel.app/"
        },
        {
            title: "Note Web-App",
            description: "A webb app to jot down quick thoughts or to save longer notes built with JavaScript",
            imgUrl: projImg8,
            url: "https://note-app-orcin.vercel.app/"
        },
        {
            title: "Support Ticket Web-App",
            description: "This is a support ticket web app built with the MERN stack",
            imgUrl: projImg9,
            url: "https://support-ticket-app-b.vercel.app/"
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                      <h2>Projects</h2>
                      <p>Personal private projects I've built</p>
                      <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab Three</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects1.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                  key={index}
                                                  {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <Row>
                                    {
                                        projects2.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                  key={index}
                                                  {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <Row>
                                    {
                                        projects3.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                  key={index}
                                                  {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                      </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}