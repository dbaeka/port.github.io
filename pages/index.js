import Head from 'next/head'
import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithubAlt, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faIdBadge, faTools} from '@fortawesome/free-solid-svg-icons'
import {Col, Row, Container} from "reactstrap";

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Delmwin Baeka</title>
                <link rel="icon" href="/favicon.svg"/>
                <meta http-equiv="X-UA-Compatible"/>
                <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no"/>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto:300,400" rel="stylesheet"/>
            </Head>
            <Container>
                <div className="page-content">
                    <div className="">
                        <div className="">
                            <div style={{textAlign: "left"}}>
                                <h1 className="">
                                    <span>Hi,</span>
                                </h1>
                                <h2>
                                    <span className="light-weight">I'm </span>
                                    <span className="name">Delmwin Baeka</span>
                                </h2>
                                <div className="hack-caps">
                                    <p>
                                        <span className="embolden">S</span>
                                        <span className="font-weight-lighter">oftware Engineer</span>
                                    </p>
                                    <p>
                                        <span className="embolden">G</span>
                                        <span className="font-weight-lighter">raphic Designer</span>
                                    </p>
                                    <p>
                                        <span className="embolden">C</span>
                                        <span className="font-weight-lighter">omputer Engineer</span>
                                    </p>
                                </div>
                            </div>
                            <br/>
                            <Row className="links">
                                <Col className="link-item" xs="12" sm="3" md="3">
                                    <a href="https://github.com/dbaeka" target="_blank">
                                        <FontAwesomeIcon icon={faGithubAlt}/> Github
                                    </a>
                                </Col>
                                <Col className="link-item" xs="12" sm="3" md="3">
                                    <a className="" href="/delmwin_resume.pdf"
                                       target="_self">
                                        <FontAwesomeIcon icon={faIdBadge}/> Resumé
                                    </a>
                                </Col>
                                <Col className="link-item" xs="12" sm="3" md="3">
                                    <a className=""
                                       href="https://www.linkedin.com/in/delmwinb/"
                                       target="_blank">
                                        <FontAwesomeIcon size="sm" icon={faLinkedinIn}/> LinkedIn
                                    </a>
                                </Col>
                                <Col className="link-item" xs="12" sm="3" md="3">
                                    <a className=""
                                       href="/projects_summary.pdf"
                                       target="_self">
                                        <FontAwesomeIcon size="sm" icon={faTools}/> Projects
                                    </a>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
