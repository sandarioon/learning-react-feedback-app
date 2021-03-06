import PropTypes from 'prop-types';

function Header({ text }) {
  return (
    <header style={{backgroundColor: "red"}}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'Feedback UI default one',
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
