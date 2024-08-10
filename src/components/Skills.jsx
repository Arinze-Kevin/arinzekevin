import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                      <div className="skill-bx">
                        <h1>
                            Skills
                        </h1>
                        {/* <h3>Web Development</h3> */}
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h4>JavaScript</h4>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h4>TypeScript</h4>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h4>ReactJs</h4>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h4>NextJs</h4>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h4>Tailwind CSS</h4>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h4>Material UI</h4>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h4>Styled Components</h4>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h4>Chakra UI</h4>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h4>React Query</h4>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h4>Fetch API</h4>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h4>Axios</h4>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h4>GraphQL</h4>
                            </div>
                        </Carousel>
                      </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}