import React from 'react';
import PropTypes from 'prop-types';

function Categorylist({ categories }) {
  return (
    <div className="categorylist">
      {/* <h3>Categories list</h3> */}
      <p>{categories}</p>
    </div>
  );
}

Categorylist.propTypes = {
  categories: PropTypes.string.isRequired,
};

export default Categorylist;
