import ProfileMission from '../components/ProfileMisison';

describe('Testing the profile', () => {
  const component = (
    <ProfileMission mission={{
      mission_id: '1',
      mission_name: 'Test ',
      description: 'Test  description',
      reserved: true,
    }}
    />
  );

  test('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
