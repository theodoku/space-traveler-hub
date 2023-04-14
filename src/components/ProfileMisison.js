import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { leaveMission } from '../redux/missions/missionSlice';
import './styles/profile.css'


export default function ProfileMission({ mission }) {
  const dispatch = useDispatch();

  return (
    <div>
      {mission.reserved ? (
        <div key={mission.mission_id} className="details">
          <div className='Mision_name'>{mission.mission_name}</div>
          <button type="button" className='button-active' onClick={() => dispatch(leaveMission(mission.mission_id))}>Leave Mission</button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

ProfileMission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string,
    mission_name: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};
