
// import { render, screen, fireEvent } from '@testing-library/react';
// import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
// import Missions from '../components/missions';
// import '@testing-library/jest-dom';
// import { reserveMission } from '../redux/missions/missionSlice';

// const mock = configureMockStore([]);

// describe('Mission component', () => {
//     let store;
//     beforeEach(() => {
//         store = mock({
//           missions: {
//             missions: [
//               {
//                 mission_id: 1,
//                 mission_name: 'Test First mission',
//                 description: 'Test First description',
//                 reserved: false,
//               },
//               {
//                 mission_id: 2,
//                 mission_name: 'Test Second Mission',
//                 description: 'Test Second description',
//                 reserved: false,
//               },
//             ],
//             isLoading: true,
//           },
//         });
//         store.dispatch(reserveMission(1));
//   });
//   it('should render the Mission component', () => {
//     render(
//       <Provider store={store}>
//         <Missions />
//       </Provider>,
//     );
//     expect(screen.getByText('Test First mission')).toBeInTheDocument();
//     expect(screen.getByText('Test Second Mission')).toBeInTheDocument();
//   });
//   it('test for Mission component with button click', () => {
//     const btn = render(
//       <Provider store={store}>
//         <Missions />
//       </Provider>,
//     );

//     fireEvent.click(btn.getAllByText('Join Mission')[0]);

//     expect(store.getActions()[0]).toEqual({ type: 'mission/reserveMission', payload: 1 });
//   });
// })
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Mission from '../components/mission';
// import store from '../redux/configureStore';
    // let store;
    // beforeEach(() => {
    //     store = mock({
    //       missions: [
    //         {mission_id: 1,
    //             mission_name: 'Test First mission',
    //             description: 'Test First description',
    //             reserved: false,},
    //             {
    //             mission_id: 2,
    //             mission_name: 'Test Second Mission',
    //             description: 'Test Second description',
    //             reserved: false, 
    //             }
    //       ]
    //     });
        // store.dispatch(reserveMission(1));
//   });

// const App = () => {
//   <Provider store={store}>
//     <Missions />
//   </Provider>;
// };

describe('Mission component test', () => {
    const component = (
        <Mission
          id="1"
          mission="ilyass"
          description="atlassi"
        />
      );
    
  it('Testing Mission page rendering', () => {
    // const MissionComponent = renderer.create(<App />).toJSON();
    expect(component).toMatchSnapshot();
  });
});