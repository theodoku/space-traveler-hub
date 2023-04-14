import PropTypes from 'prop-types';
import './styles/profile.css';
import Table from 'react-bootstrap/Table';

export default function ProfileMission({ mission }) {
  return (
    <div>
      {mission.reserved ? (
        // <div key={mission.mission_id} className="details">
        //   <div className="Mision_name">{mission.mission_name}</div>
        // </div>
        <Table bordered>
          <thead>
            {/* <tr>
            <th></th>
          </tr> */}
          </thead>
          <tbody>
            {/* {reservedRocket.map((rocket) => ( */}
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
            </tr>
            {/* ))} */}
          </tbody>
        </Table>
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
