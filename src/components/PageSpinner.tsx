import React from 'react';
import { Spinner } from 'reactstrap';

const PageSpinner = ({ color = 'primary' }) => {
  return (
    <div className="cr-page-spinner">
      <Spinner color={color} />
    </div>
  );
};

export default PageSpinner;
