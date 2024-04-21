import classes from "./ThemeIcon.module.css";

export interface ThemeIconProps {
  onClick: () => void;
}

export const ThemeIcon = (props: ThemeIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 311.99 311.99"
      className={classes.icon}
      onClick={() => props.onClick()}
    >
      <g>
        <path d="M156.22,0c86.13,.19,155.88,70.1,155.77,156.13-.12,86.24-70.33,156.21-156.41,155.86C69.43,311.65-.26,241.63,0,155.67,.26,69.54,70.24-.19,156.22,0Zm-12.45,287.07V24.85C83.04,29.03,22.9,82.38,24.09,158.09c1.18,75.11,61.95,125.39,119.68,128.99Z" />
      </g>
    </svg>
  );
};
