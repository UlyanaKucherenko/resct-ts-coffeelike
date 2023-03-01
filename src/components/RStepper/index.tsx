import { createContext, useCallback, useMemo } from 'react';

import { DefaultProps, IStep } from 'types/common';
import { Main, Steps, Step, StepTitle, Icon } from './styled';

export const StepperContext = createContext({});

interface RStepperProps extends DefaultProps<HTMLDivElement> {
  steps: IStep[];
  currentStep: IStep;
  activeStep: IStep;
  setModifiedSteps: (modifiedSteps: IStep[]) => void;
  setCurrentStep: (currentStep: IStep) => void;
  setActiveStep: (activeStep: IStep) => void;
}

export function RStepper({
  steps,
  children,
  currentStep,
  activeStep,
  setModifiedSteps,
  setCurrentStep,
  setActiveStep,
  css,
}: RStepperProps) {
  const onSetComplete = useCallback(() => {
    const modifiedSteps = steps.map((step) => {
      if (step.id === currentStep.id) {
        return { ...step, completed: true };
      }
      return step;
    });
    setModifiedSteps(modifiedSteps);
  }, [currentStep.id]);

  const onNextStep = useCallback(() => {
    const nextStep =
      steps[steps.findIndex((step) => step.id === currentStep.id) + 1];
    onSetComplete();
    setCurrentStep(nextStep);
    if (currentStep.id === activeStep.id) setActiveStep(nextStep);
  }, [currentStep.id, activeStep.id]);

  const onPrevStep = useCallback(() => {
    const prevStep =
      steps[steps.findIndex((step) => step.id === currentStep.id) - 1];
    setCurrentStep(prevStep);
  }, [currentStep.id]);
  const renderSteps = () => {
    return steps.map(({ id, title, completed }) => (
      <Step
        key={id}
        active={id === activeStep.id}
      >
        <StepTitle
          active={id === activeStep.id}
          completed={completed}
        >
          {title}
        </StepTitle>
        {completed ? <Icon>✖</Icon> : null}
      </Step>
    ));
  };
  const contextObj = useMemo(
    () => ({ onNextStep, onPrevStep }),
    [onNextStep, onPrevStep]
  );

  return (
    <Main>
      <Steps css={css}>{renderSteps()}</Steps>
      <StepperContext.Provider value={contextObj}>
        {children}
      </StepperContext.Provider>
    </Main>
  );
}
