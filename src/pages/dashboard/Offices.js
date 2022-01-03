
import React, { useEffect } from "react";
import { Row, Col } from '@themesberg/react-bootstrap';
import { connect } from 'react-redux';

import { CardOfficeIPAM, LoadingCardOffice } from "../../components/Widgets";

import * as officeActions from '../../actions/office.actions';
import OFFICES_JSON from '../../data/offices.json'

const Offices = ({ getOffice, loading, dataOffice }) => {

  useEffect(() => {
    getOffice();
  }, []);

  console.log("dataOffice ", dataOffice)
  return (
    <>

      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <h4>Escritórios do IPAM</h4>
          <p className="mb-0">Todos os escritórios do IPAM aqui.</p>
        </div>
      </div>

      <Row className="justify-content-md-center">

        {OFFICES_JSON.map((item, index) => (
          <Col xs={12} sm={6} xl={4} className="mb-4" key={index}>
            <CardOfficeIPAM
              name={item.off_name}
              municipio={item.off_city}
              uf={item.off_uf}
              endereco={item.off_address}
              codLink={item.off_cod}
            />
          </Col>
        ))}

      </Row>
    </>
  );
}

const mapStateToProps = (state) => ({
  loading: state.office.loading,
  dataOffice: state.office.dataOffice,
});

const mapDispatchToProps = {
  getOffice: officeActions.getOffice,
};

export default connect(mapStateToProps, mapDispatchToProps)(Offices);

// export default Offices;