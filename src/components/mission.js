import PropTypes from 'prop-types';
import './styles/mission.css';
import { useDispatch } from 'react-redux';
import {
  reserveMission,
  leaveMission,
} from '../redux/missions/missionSlice';

export default function Mission(props) {
  const dispatch = useDispatch();

  const {
    Mission, Description, id, reserved,
  } = props;
  return (
    <>
      <td className="Mision_name">{Mission}</td>
      <td>{Description}</td>
      <td className='status'>
        {reserved ? (
          <span className="active-reserved"> Active Member </span>
        ) : (
          <span className="m-reserved">NOT A MEMBER </span>
        )}
      </td>
      <td>
        {reserved ? (
          <button
            type="submit"
            className="button-active"
            onClick={() => dispatch(leaveMission(id))}
          >
            Leave Mission
          </button>
        ) : (
          <button
            type="submit"
            className="button-desactive"
            onClick={() => dispatch(reserveMission(id))}
          >
            Join Mission
          </button>
        )}
      </td>
    </>
  );
}
Mission.propTypes = {
  Mission: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
  id: PropTypes.string.isRequired,
};

Mission.defaultProps = {
  reserved: false,
};
