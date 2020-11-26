import React from 'react';

import { Prop, PropTable, PropTableWrapper } from '../components';

const stepperProps: Prop[] = [
  {
    name: 'steps',
    types: 'string[]',
    description: 'Titles for each segment of the Stepper.',
  },
  {
    name: 'currentStep',
    types: 'number',
    description: 'Sets which step is currently active. Starts at 0',
  },
];

export const StepperPropTable: React.FC<PropTableWrapper> = (props) => (
  <PropTable title="Stepper" propList={stepperProps} {...props} />
);
