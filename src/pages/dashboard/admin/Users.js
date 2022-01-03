
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Col,
  Row,
  Form,
  Button,
  ButtonGroup,
  Card,
  Nav, Pagination,
  InputGroup,
  Dropdown,
  Table
} from '@themesberg/react-bootstrap';
import { faCheck, faCog, faUserPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

import transactions from "../../../data/transactions";

export default () => {
  const totalTransactions = transactions.length;

  const TableRow = (props) => {
    const { invoiceNumber, name, issueDate, dueDate, status } = props;
    const statusVariant = status === "ativo" ? "success"
      // : status === "Due" ? "warning"
      : status === "inativo" ? "danger" : "primary";

    return (
      <tr>
        <td>
          <span className="fw-normal">
            {invoiceNumber}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {name}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {issueDate}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {dueDate}
          </span>
        </td>
        <td>
          <span className={`fw-normal text-${statusVariant}`}>
            {status}
          </span>
        </td>
        {/* <td>
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
              <span className="icon icon-sm">
                <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faEye} className="me-2" /> Visualizar
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faEdit} className="me-2" /> Editar
              </Dropdown.Item>
              <Dropdown.Item className="text-danger">
                <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Deletar
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td> */}
      </tr>
    );
  };

  return (
    <>

      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <h4>Lista de Usuários</h4>
          <p className="mb-0">Lista contendo todos os usuários do sistema.</p>
        </div>
        <div className="btn-toolbar mb-2 mb-md-0">
          <Button variant="primary" className="m-1">
            <Card.Link href="/dashboard/users/register" className="text-primary fw-bold">
              <FontAwesomeIcon icon={faUserPlus} className="me-2" /> Novo Usuário
            </Card.Link>
          </Button>
        </div>
      </div>

      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={8} md={6} lg={3} xl={4}>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Search" />
            </InputGroup>
          </Col>
          <Col xs={4} md={2} xl={1} className="ps-md-0 text-end">
            <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle split as={Button} variant="link" className="text-dark m-0 p-0">
                <span className="icon icon-sm icon-gray">
                  <FontAwesomeIcon icon={faCog} />
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-xs dropdown-menu-right">
                <Dropdown.Item className="fw-bold text-dark">Limite</Dropdown.Item>
                <Dropdown.Item className="d-flex fw-bold">
                  10 <span className="icon icon-small ms-auto"><FontAwesomeIcon icon={faCheck} /></span>
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold">20</Dropdown.Item>
                <Dropdown.Item className="fw-bold">30</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </div>

      <Card border="light" className="table-wrapper table-responsive shadow-sm">
        <Card.Body className="pt-0">
          <Table hover className="user-table align-items-center">
            <thead>
              <tr>
                <th className="border-bottom">#</th>
                <th className="border-bottom">Nome</th>
                <th className="border-bottom">Data do Agendamento</th>
                <th className="border-bottom">Hora do Agendamento</th>
                <th className="border-bottom">Status</th>
                {/* <th className="border-bottom">Ações</th> */}
              </tr>
            </thead>
            <tbody>
              {transactions.map(t => <TableRow key={`transaction-${t.invoiceNumber}`} {...t} />)}
            </tbody>
          </Table>
          <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
            <Nav>
              <Pagination className="mb-2 mb-lg-0">
                <Pagination.Prev>
                  Anterior
                </Pagination.Prev>
                <Pagination.Item active>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item>3</Pagination.Item>
                <Pagination.Item>4</Pagination.Item>
                <Pagination.Item>5</Pagination.Item>
                <Pagination.Next>
                  Próximo
                </Pagination.Next>
              </Pagination>
            </Nav>
            <small className="fw-bold">
              Mostrando <b>{totalTransactions}</b> de <b>25</b> entradas
            </small>
          </Card.Footer>
        </Card.Body>
      </Card>


    </>
  );
};
