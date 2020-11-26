import { CheckIcon } from '@bigcommerce/big-design-icons';
import React, { HTMLAttributes, memo, useEffect, useState } from 'react';

import {
  StyledDash,
  StyledLight,
  StyledLightText,
  StyledMobileLight,
  StyledMobileLightText,
  StyledStep,
  StyledStepper,
  StyledText,
} from './styled';

export interface StepProps {
  number: number;
  text?: string;
  state?: 'pending' | 'current' | 'done';
  isLast?: boolean;
}

export interface StepperProps extends HTMLAttributes<HTMLDivElement> {
  steps: Array<string>;
  currentStep: number;
}

export interface LightProps {
  active?: boolean;
}
export interface DashProps {
  active?: boolean;
}
export interface TextProps {
  active?: boolean;
}

export const Step: React.FC<StepProps> = ({ number, text, state, isLast }) => {
  const [isCurrent, setIsCurrent] = useState(state === 'current');
  const [isDone, setIsDone] = useState(state === 'done');
  useEffect(() => {
    setIsCurrent(state === 'current');
    setIsDone(state === 'done');
  }, [state]);

  return (
    <StyledStep>
      <StyledLight active={isCurrent || isDone}>
        {isDone ? (
          <CheckIcon color="white" size="large" style={{ padding: '2px' }} />
        ) : (
          <StyledLightText>{number}</StyledLightText>
        )}
      </StyledLight>
      <StyledDash active={isDone} hidden={isLast} />
      <StyledText active={isCurrent}>{text}</StyledText>
    </StyledStep>
  );
};

export const Stepper: React.FC<StepperProps> = memo(({ className, style, ...props }) => {
  const determineStep = (index: number) => {
    if (props.currentStep === index) return 'current';
    else if (props.currentStep < index) return 'pending';
    else return 'done';
  };

  return (
    <StyledStepper>
      <StyledMobileLight>
        <StyledMobileLightText>
          Step {props.currentStep + 1} of {props.steps.length}
        </StyledMobileLightText>
      </StyledMobileLight>
      {props.steps.map((text, i) => (
        <Step number={i + 1} text={text} state={determineStep(i)} isLast={i + 1 === props.steps.length} key={i + 1} />
      ))}
    </StyledStepper>
  );
});

Stepper.defaultProps = {
  steps: [],
  currentStep: 0,
};

Step.defaultProps = {
  number: 0,
  text: '',
  state: 'pending',
  isLast: false,
};

Stepper.displayName = 'Stepper';
