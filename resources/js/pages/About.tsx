import React, { useEffect } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { LoremIpsum, Avatar, fullname, username } from "react-lorem-ipsum";
import { useHolderjs } from "use-holderjs";
import { links } from "../components/AppRouter";
import { Layout } from "../components/Layouts/_Default/Layout";

const Company = () => {
    return (
        <Row>
            <Col
                xs={{ span: 12, order: "last" }}
                md={{ span: 6, order: "first" }}
            >
                <Row>
                    <Col>
                        <h1>About</h1>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ fontWeight: "bold" }}>
                        <LoremIpsum p={1} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <LoremIpsum p={2} />
                    </Col>
                </Row>
            </Col>

            <Col>
                <Row
                    className="justify-content-center"
                    style={{ height: "100%" }}
                >
                    <Col
                        xs={{ span: 10, order: "first" }}
                        sm={{ span: 7, order: "first" }}
                        md={6}
                        className="d-flex align-items-center justify-content-center"
                    >
                        <Image
                            className="holder-js-img"
                            data-src="holder.js/300x180"
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

const EmploysSection = () => {
    return (
        <Row className="justify-content-md-center">
            <Col style={{ textAlign: "center" }} sm="12" md="4">
                <Avatar className="rounded-circle"></Avatar>
                <h3>{fullname()}</h3>

                <div style={{}}>{username()}</div>
            </Col>
            <Col style={{ textAlign: "center" }} sm="12" md="4">
                <Avatar className="rounded-circle"></Avatar>
                <h3>{fullname()}</h3>

                <div style={{}}>{username()}</div>
            </Col>
            <Col style={{ textAlign: "center" }} sm="12" md="4">
                <Avatar className="rounded-circle"></Avatar>
                <h3>{fullname()}</h3>

                <div style={{}}>{username()}</div>
            </Col>
        </Row>
    );
};

const DarkerSection = () => {
    return (
        <Row className="bg-dark text-light p-4">
            <Col>
                <Row className="bg-dark text-light p-4 text-center">
                    <Col>
                        <Image data-src="holder.js/171x180" roundedCircle />
                    </Col>
                    <Col>
                        <h4>Heading</h4>
                    </Col>
                    <Col></Col>
                </Row>

                <div style={{ textAlign: "left" }}>
                    <LoremIpsum p={1} />
                </div>
            </Col>
        </Row>
    );
};

export const About = () => {
    useHolderjs();

    return (
        <Layout links={links}>
            <Container>
                <Company></Company>
                <EmploysSection></EmploysSection>
            </Container>

            <Container fluid>
                <DarkerSection></DarkerSection>
            </Container>
        </Layout>
    );
};

export default About;
