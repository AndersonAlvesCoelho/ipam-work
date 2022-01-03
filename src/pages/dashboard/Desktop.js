
import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { Link } from 'react-router-dom';

import {
  Container,
  Col,
  Row,
  Card,
  Nav,
  Tab,
  Modal,
  Button,
  InputGroup,
  Form,
  Accordion,
  Breadcrumb,
  OverlayTrigger,
  Tooltip,
  ListGroup
} from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faTable,
  faLaptop,
  faCalendar,
  faInfoCircle,
  faCalendarAlt,
  faLaptopHouse,
  faDotCircle,
  faChair
} from "@fortawesome/free-solid-svg-icons";
import Alerts from "../../components/Alerts";
import bg from '../../assets/img/office/bg-office.jpg';
import avatar from "../../assets/img/avatar.png";

import DESK_JSON from '../../data/offices.json'

export default (props) => {

  const { match } = props;
  const { params } = match;

  const [validated, setValidated] = useState(false);
  const [dataDesktop, setDataDesktop] = useState([]);
  const [dateScheduling, setDateScheduling] = useState();
  const [infoDesk, setInfoDesk] = useState();
  const [timeCourse, setTimeCourse] = useState();

  // ESTADOS DA MODAL
  const [showDefault, setShowDefault] = useState(false);
  // ESTADFOS DO ALERTA
  const [alertShow, setAlertShow] = useState(false);
  const [alertText, setAlertText] = useState();
  const [alertType, setAlertType] = useState();

  const handleClose = () => setShowDefault(false);

  var yesterday = moment().subtract(1, 'day');

  var valid = function (current) {
    return current.isAfter(yesterday);
  };

  // VERIFICAR SE JA AGENDOU ALGUMA MESSA ou SALA, CONFORME ABRE O AGENDAMENTO
  const handleScheduling = () => {
    let scheduling = localStorage.getItem("scheduling");

    if (scheduling) {
    } else {
      setShowDefault(true)
    }

  };

  // GET DESKs
  useEffect(() => {
    if (params?.office) {
      const resDesktop = DESK_JSON.find(cod => cod.off_cod === params.office)
      setDataDesktop(resDesktop);
    }
  }, [params])

  // REALIZAR O AGENDAMENTO
  const handleSubmit = (event, type) => {

    event.preventDefault();
    if (type === "desk") {

      let date = moment(dateScheduling).format("DD/MM/YYYY")
      if (date && timeCourse) {
        localStorage.setItem("scheduling", JSON.stringify({ date, timeCourse }));

        setAlertText('O seu agendamento foi marcado com sucesso!');
        setAlertType('success');
        setAlertShow(true);
        handleClose();
      }

    } else {

    }
    setValidated(true);
  }

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><Link to="/dashboard/offices"><FontAwesomeIcon icon={faLaptopHouse} /></Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to="/dashboard/offices">Escritórios</Link></Breadcrumb.Item>
            <Breadcrumb.Item active>Mesas</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Mesas</h4>
          <p className="mb-0">Escolha a mesa ou sala mais adequada para você.</p>
        </div>
        <div className="btn-toolbar mb-2 mb-md-0">
          <Button variant="primary" className="m-1">
            <Card.Link onClick={() => setShowDefault(true)} className="text-light fw-bold">
              <FontAwesomeIcon icon={faDesktop} className="me-2" /> Visualizar Agendamento
            </Card.Link>
          </Button>
        </div>
      </div>


      {dataDesktop ? (
        <Container className="px-0">

          <Alerts
            alertShow={alertShow}
            alertText={alertText}
            alertType={alertType}
          />

          <Card border="light" className="bg-white shadow-sm mb-4">
            {/* <div style={{ backgroundImage: `url(${bgOffice})` }} className="profile-cover rounded-top" /> */}
            <Card.Body>
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center" >
                <div className="d-block mb-md-0">
                  <h1 className="mb-4">{dataDesktop.off_name}</h1>
                </div>
                <div className="btn-toolbar mb-2 mb-md-0">
                  <OverlayTrigger placement="top" trigger={['hover', 'focus']} overlay={<Tooltip>Cadeira disponível para agendamento.</Tooltip>}>
                    <Card.Link href="#" target="_blank" className="me-5">
                      <FontAwesomeIcon icon={faDotCircle} className="me-2 text-success" /> Disponível
                    </Card.Link>
                  </OverlayTrigger>
                  <OverlayTrigger placement="top" trigger={['hover', 'focus']} overlay={<Tooltip>Cadeira já ocupada por outra pessoa.</Tooltip>}>
                    <Card.Link href="#" target="_blank" className="me-5">
                      <FontAwesomeIcon icon={faDotCircle} className="me-2 text-danger" /> Ocupado
                    </Card.Link>
                  </OverlayTrigger>
                  <OverlayTrigger placement="top" trigger={['hover', 'focus']} overlay={<Tooltip>Cadeira indisponível para agendamento.</Tooltip>}>
                    <Card.Link href="#" target="_blank" className="me-5">
                      <FontAwesomeIcon icon={faDotCircle} className="me-2 text-light" /> Indisponível
                    </Card.Link>
                  </OverlayTrigger>
                </div>
              </div>

              <Tab.Container defaultActiveKey="tables">
                <Row>
                  <Col lg={12}>
                    <Nav fill variant="pills" className="flex-column flex-sm-row">
                      <Nav.Item>
                        <Nav.Link eventKey="tables" className="mb-sm-3 mb-md-0">
                          <FontAwesomeIcon icon={faDesktop} className="me-2" /> Mesas
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="rooms" className="mb-sm-3 mb-md-0">
                          <FontAwesomeIcon icon={faTable} className="me-2" /> Salas de Reuniões
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col lg={12}>
                    <Tab.Content>
                      <Tab.Pane eventKey="tables" className="py-4">
                        {dataDesktop.des_desk && dataDesktop.des_desk.map((desk, x) => (<>
                          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center" key={x}>
                            <div className="d-block mb-md-0">
                              <h4>{desk.naemDesk}</h4>
                            </div>
                          </div>

                          <Row className="justify-content-center mt-5 mt-lg-6" >
                            {desk.desk && desk.desk.map((item, y) => (
                              <Col xs={6} md={2} className="text-center" key={y}>
                                <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-1">
                                  <Card.Link
                                    onClick={() => {
                                      handleScheduling();
                                      setInfoDesk(item);
                                    }}
                                    className="text-primary fw-bold">
                                    <FontAwesomeIcon icon={faLaptop} className={`text-${item.sit_color}`} />
                                  </Card.Link>
                                </div>
                                <h3 className="fw-bolder">{item.des_number}</h3>
                              </Col>
                            ))}
                          </Row>
                        </>))}
                      </Tab.Pane>

                      <Tab.Pane eventKey="rooms" className="py-4">
                        <Accordion defaultActiveKey="0">
                          {dataDesktop.roo_room && dataDesktop.roo_room.map((room, index) => (
                            <Accordion.Item eventKey={index} key={index}>
                              <Accordion.Header>{room.roo_name}</Accordion.Header>
                              <Accordion.Body>
                                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                                  <div className="d-block mb-4 mb-md-0">
                                    {room.roo_description}
                                  </div>
                                  <div className="btn-toolbar mb-2 mb-md-0">
                                    <div className="media d-flex align-items-center">
                                      <ListGroup.Item className="px-0">
                                        <Row className="align-items-center">
                                          <Col className="ms--2">
                                            <h4 className="h6 mb-0">
                                              <a href="#!">Total de cadeiras</a>
                                            </h4>
                                            <span className={`text-success`}>● </span>
                                            <small>Status</small>
                                          </Col>
                                          <Col className="col-auto">
                                            <Button variant="tertiary" size="sm">
                                              <FontAwesomeIcon icon={faChair} className="me-1" /> {room.roo_chair}
                                            </Button>
                                          </Col>

                                        </Row>
                                      </ListGroup.Item>
                                    </div>
                                  </div>
                                </div>
                                <Row className="justify-content-md-center">
                                  <Col lg={12}>
                                    <Button variant="secondary" type="submit" >
                                      Agendar
                                    </Button>
                                  </Col>
                                </Row>
                              </Accordion.Body>
                            </Accordion.Item>
                          ))}
                        </Accordion>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Card.Body>
          </Card>

          {infoDesk && (
            <Modal as={Modal.Dialog} size="lg" centered show={showDefault} onHide={handleClose}>
              <Modal.Header>
                <Modal.Title className="h6"><FontAwesomeIcon icon={faCalendar} className="me-2" /> Informe a Data e Hora</Modal.Title>
                <Button variant="close" aria-label="Close" onClick={handleClose} />
              </Modal.Header>
              <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e, 'desk')}>
                <Modal.Body>
                  <Row className="align-items-center">
                    <Col md={6} className="mb-3">
                      <Form.Group id="date">
                        <Form.Label>Data</Form.Label>
                        <Datetime
                          timeFormat={false}
                          onChange={setDateScheduling}
                          isValidDate={valid}
                          renderInput={(_, openCalendar) => (
                            <InputGroup>
                              <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                              <Form.Control
                                required
                                type="text"
                                value={dateScheduling ? moment(dateScheduling).format("DD/MM/YYYY") : ""}
                                placeholder="dd/mm/yyyy"
                                onFocus={openCalendar}
                              />
                              <Form.Control.Feedback type="invalid">Campo obrigatório</Form.Control.Feedback>
                            </InputGroup>
                          )} />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group id="gender">
                        <Form.Label>Período de trabalho</Form.Label>
                        <Form.Select required onChange={(e) => setTimeCourse(e.target.value)} value={timeCourse}>
                          <option value="">Selecione o horário</option>
                          <option value="matutino">Manhã: 6:00 às 11:59 </option>
                          <option value="vespertino">Tarde: 12:00 (Meio-dia) às 17:59</option>
                          <option value="noturno">Noturno 18:00 às 23:59</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">Campo obrigatório</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <h4><FontAwesomeIcon icon={faInfoCircle} className="icon icon-xs me-3" /> Informações técnicas</h4>
                  {infoDesk?.inf_info.map((item, index) => (<>
                    <div key={index} className={`d-flex align-items-center justify-content-between pb-1 mt-3 ${index !== 2 && 'border-bottom border-light'}`}>
                      <h6>{item.inf_peripherals}</h6>
                      <div >
                        <Card.Link href="#" className="text-primary fw-bold">
                          {item.inf_count !== 0 ? `${item.inf_count}x` : 'não tem!'}
                        </Card.Link>
                      </div>
                    </div>
                  </>))}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" type="submit" >
                    Agendar
                  </Button>
                  <Button variant="link" className="text-gray ms-auto" onClick={handleClose}>
                    Fechar
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal>
          )}

        </Container>
      ) : null
      }
    </>
  );
};
