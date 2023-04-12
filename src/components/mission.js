import PropTypes from 'prop-types';
import './styles/mission.css';

export default function Mission(props) {
  const { Mission, Description } = props;
  return (
    <>
      <td className="Mision_name">{Mission}</td>
      <td>{Description}</td>
      <td>Not Member</td>
      <td><button type="submit" className="button">Join Mission</button></td>
    </>
  );
}
Mission.propTypes = {
  Mission: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  // id: PropTypes.string.isRequired,
};
