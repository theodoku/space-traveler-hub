import React from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

export default function RocketsProfile() {
  const reservedRocket = useSelector((state) => state.rockets.filter((rocket) => rocket.reserved));

  return (
    <div className="reserved-rockets-table">
      <h2>My Rockets</h2>
      <Table bordered>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {reservedRocket.map((rocket) => (
            <tr key={rocket.id}>
              <td>{rocket.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
