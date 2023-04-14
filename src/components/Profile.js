import { useSelector } from 'react-redux';
import ProfileMission from './ProfileMisison';
import './styles/profile.css';
import RocketsProfile from '../Pages/RocketsProfile';

export default function Profile() {
  const { mission, isLoading } = useSelector((state) => state.mission);
  return (
    <div className="container">
      <div className="Task">
        <h2>My Missions</h2>
        <p id="mission-not-taken" />
        {mission
        && mission.find((item) => 'reserved' in item && item.reserved === true) ? (
            mission.map(
              (item) => item.reserved && (
                <div key={item.mission_id} className="item">
                  <ProfileMission mission={item} />
                </div>
              ),
            )
          ) : (
            <div>No Missions Taken</div>
          )}
        {isLoading && <div>Loading...</div>}
        <RocketsProfile />
      </div>
    </div>
  );
}
