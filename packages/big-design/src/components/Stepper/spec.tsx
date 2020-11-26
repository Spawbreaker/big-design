import 'jest-styled-components';
import { render } from '@testing-library/react';
import React from 'react';

import { Stepper } from './';

const steps: string[] = ['Step 1', 'Step 2', 'Step 3'];

test('renders Stepper', () => {
  const { container } = render(<Stepper steps={steps} currentStep={1} />);
  expect(container.firstChild).toMatchSnapshot();
});

test('does not forward styles', () => {
  const { container } = render(
    <Stepper steps={steps} currentStep={0} className="test" style={{ backgroundColor: 'red' }} />,
  );
  expect(container.getElementsByClassName('test').length).toBe(0);
  expect(container.firstChild).not.toHaveStyle('background: red');
});
