import { render } from '@testing-library/react';
import Navbar from './Navbar';

describe('Module Header', () => {
  it('should render component', () => {
    const header = render(<Navbar />);
    expect(header).toMatchSnapshot();
  });
});
