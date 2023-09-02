import PropTypes from 'prop-types';

const Button = ({ children }) => (
  <button type="button" className="button">
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
