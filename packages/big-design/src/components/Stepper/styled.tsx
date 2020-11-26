import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled, { css } from 'styled-components';

import { DashProps, LightProps, TextProps } from './Stepper';

export const StyledStepper = styled.div`
  display: grid;
  margin-bottom: 1.5rem;
  text-align: left;
  ${({ theme }) => theme.breakpoints.tablet} {
    grid-auto-flow: column;
    grid-template-columns: repeat(auto-fit, minmax(6rem, 14.25rem));
  }
`;

export const StyledStep = styled.div`
  display: grid;
  ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: 1.5rem 1fr;
    grid-template-rows: 1.5rem 1fr;
    grid-template-areas:
      'light dash'
      'text text';
    gap: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const StyledLight = styled.div<LightProps>`
  display: none;
  ${({ theme }) => theme.breakpoints.tablet} {
    display: inline-grid;
    user-select: none;
    grid-area: light;
    max-width: 1.5rem;
    max-height: 1.5rem;
    background-color: ${({ theme, active }) => (active ? theme.colors.primary : theme.colors.secondary50)};
    border-radius: 50%;
    text-align: center;
  }
`;

export const StyledLightText = styled.span`
  padding-top: 3px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledDash = styled.div<DashProps>`
  display: none;
  ${({ theme }) => theme.breakpoints.tablet} {
    display: block;
    height: 2px;
    min-width: 0.5rem;
    width: 100%;
    align-self: center;
    background-color: ${({ theme }) => theme.colors.secondary30};
    grid-area: dash;
    ${({ active, theme }) =>
      active &&
      css`
        background-color: ${theme.colors.primary};
      `}
  }
`;

export const StyledText = styled.div<TextProps>`
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.medium};
  padding-right: 1rem;
  ${({ active }) =>
    !active &&
    css`
      display: none;
    `}
  ${({ theme }) => theme.breakpoints.tablet} {
    display: block;
    grid-area: text;
    color: ${({ active, theme }) => (active ? theme.colors.secondary70 : theme.colors.secondary50)};
  }
`;

export const StyledMobileLight = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  border-radius: 20px;
  height: 1.25rem;
  padding: 0.25rem 0.5rem;
  margin-bottom: 0.25rem;
  width: fit-content;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  ${({ theme }) => theme.breakpoints.tablet} {
    display: none;
  }
`;

export const StyledMobileLightText = styled.span`
  display: block;
  padding-top: 2px;
`;

StyledStep.defaultProps = { theme: defaultTheme };
StyledLight.defaultProps = { theme: defaultTheme };
StyledLightText.defaultProps = { theme: defaultTheme };
StyledDash.defaultProps = { theme: defaultTheme };
StyledText.defaultProps = { theme: defaultTheme };
StyledStepper.defaultProps = { theme: defaultTheme };
StyledMobileLight.defaultProps = { theme: defaultTheme };
StyledMobileLightText.defaultProps = { theme: defaultTheme };
