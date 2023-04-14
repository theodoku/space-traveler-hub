
import Mission from '../components/mission';

describe('Mission component test', () => {
    const component = (
        <Mission
          id="1"
          mission="ilyass"
          description="atlassi"
        />
      );
    
  it('Testing Mission page rendering', () => {
    expect(component).toMatchSnapshot();
  });
});