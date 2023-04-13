import { useSelector } from 'react-redux';
import ProfileMission from './ProfileMisison';

export default function Profile() {
  const { mission, isLoading } = useSelector((state) => state.mission);
  return (
    <div className="main-container">
      <div className="content">
        <h2>My Missions</h2>
        <p id="mission-not-taken" />
        {mission && mission.find((item) => 'reserved' in item && item.reserved === true) ? (
          mission.map((item) => (item.reserved && (
            <div key={item.mission_id} className="item">
              <ProfileMission mission={item} />
            </div>
          )
          ))
        ) : (
          <div>No Missions Taken</div>
        )}
        {isLoading && <div>Loading...</div>}
      </div>
    </div>
  );
}
