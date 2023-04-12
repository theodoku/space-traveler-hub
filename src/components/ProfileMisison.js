import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { leaveMission } from '../redux/missions/missionSlice';
export default function ProfileMission ({mission}){
    const dispatch = useDispatch();

  return (
    <div>
      {mission.reserved ? (
        <div key={mission.mission_id} className="details">
          <div>{mission.mission_name}</div>
          <button type="button" onClick={() => dispatch(leaveMission(mission.mission_id))}>Leave Mission</button>
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