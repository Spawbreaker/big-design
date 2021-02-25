import { Button, H0, H1, Stepper, Text } from '@bigcommerce/big-design';
import React, { useState } from 'react';

import { Code, CodePreview } from '../../components';
import { StepperPropTable } from '../../PropTables';

const StepperPage = () => (
  <>
    <H0>Stepper</H0>

    <Text>
      The <Code primary>Stepper</Code> component is used to display a set number of steps. Useful for guiding an user
      through a multi-step operation.
    </Text>

    <CodePreview>
      {/* jsx-to-string:start */}
      {function Example() {
        const steps = ['Step 1', 'Step 2', 'Step 3'];
        const [currentStep, setCurrentStep] = useState(0);

        return (
          <>
            <Stepper steps={steps} currentStep={currentStep} />
            <Button onClick={() => setCurrentStep(0)} disabled={currentStep === 0}>
              Reset
            </Button>
            <Button onClick={() => setCurrentStep(currentStep + 1)} disabled={currentStep === steps.length - 1}>
              Next
            </Button>
          </>
        );
      }}
      {/* jsx-to-string:end */}
    </CodePreview>

    <H1>API</H1>
    <StepperPropTable />
  </>
);

export default StepperPage;
