import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRockets,
  reserveRocket,
  cancelReservation,
} from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);

  const handleReserve = (id) => {
    dispatch(reserveRocket(id));
  };

  const handleCancelReservation = (id) => {
    dispatch(cancelReservation(id));
  };

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <section className="rockets-container">
      {rockets.map((rocket) => (
        <li className="rocket" key={rocket.id}>
          <img className="rocket-img" src={rocket.image} alt={rocket.name} />
          <article className="rocket-info">
            <h2 className="rocket-name">{rocket.name}</h2>
            <p className="rocket-des">
              {rocket.reserved && <span className="reserve-tag">Reserved</span>}
              {rocket.description}
            </p>
            {rocket.reserved ? (
              <button
                className="rocket-reserve-btn reserved"
                type="button"
                onClick={() => handleCancelReservation(rocket.id)}
              >
                Cancel Reservation
              </button>
            ) : (
              <button
                className="rocket-reserve-btn"
                type="button"
                onClick={() => handleReserve(rocket.id)}
              >
                Reserve Rocket
              </button>
            )}
          </article>
        </li>
      ))}
    </section>
  );
};

export default Rockets;
