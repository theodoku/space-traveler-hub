import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMission } from '../redux/missions/missionSlice';

export default function Missions() {
  // const { mission } = useSelector((state) => state.mission);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMission());
  }, [dispatch]);
  return (
    <div>hello</div>

  );
}
