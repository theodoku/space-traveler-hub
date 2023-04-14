import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMission } from '../redux/missions/missionSlice';
import Mission from './mission';
import './styles/mission.css';

export default function Missions() {
  const  {mission}  = useSelector((state) => state.mission);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMission());
  }, [dispatch]);
  return (
    <div>
      <table className="table-mission">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {mission && mission.map((item) => (
            <tr key={item.mission_id}>
              <Mission
                Mission={item.mission_name}
                Description={item.description}
                id={item.mission_id}
                reserved={item.reserved}
              />
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}
