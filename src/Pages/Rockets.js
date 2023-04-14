import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRockets,
  reserveRocket,
  cancelReserve,
} from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  const handleReserveRocket = (rocketId, rocketName) => {
    dispatch(reserveRocket(rocketId, rocketName));
  };

  const handleCancelReserve = (rocketId) => {
    dispatch(cancelReserve(rocketId));
  };

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <section className="rockets-container">
      {rockets.map((rocket) => (
        <li className="rocket" key={rocket.id}>
          <img className="rocket-img" src={rocket.flickr_images} alt={rocket.name} />
          <article className="rocket-info">
            <h2 className="rocket-name">{rocket.name}</h2>
            <p className="rocket-des">
              {rocket.reserved ? (
                <span className="reserve-tag">Reserved</span>
              ) : null}
              {rocket.description}
            </p>
            {rocket.reserved ? (
              <button
                type="button"
                className="rocket-reserve-btn"
                onClick={() => handleCancelReserve(rocket.id, rocket.name)}
              >
                cancel Reservation
              </button>
            ) : (
              <button
                type="button"
                className="reserved"
                onClick={() => handleReserveRocket(rocket.id, rocket.name)}
              >
                Reserve rocket
              </button>
            )}
          </article>
        </li>
      ))}
    </section>
  );
};

export default Rockets;
