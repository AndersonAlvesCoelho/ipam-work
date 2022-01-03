import React, { useState, useEffect } from 'react';
import { Alert, Button } from '@themesberg/react-bootstrap';
import {
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ alertShow, alertText, alertType }) => {

  const [hiddenAlerts, setHiddenAlerts] = useState(false);

  useEffect(() => {
    setHiddenAlerts(alertShow);
  }, [alertShow]);


  return (
    <Alert
      variant={alertType}
      show={hiddenAlerts}
      onClose={() => setHiddenAlerts(false)}>

      <div className="d-flex justify-content-between">
        <div>
          <FontAwesomeIcon icon={faAngleDown} className="me-2" />
          <strong>Green Work!</strong> {alertText}
        </div>
        <Button variant="close" size="sm" onClick={() => setHiddenAlerts(false)} />
      </div>
    </Alert>
  );
};