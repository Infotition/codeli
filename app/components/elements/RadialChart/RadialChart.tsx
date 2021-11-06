import { useState } from 'react';

type RadialChartProps = {
  radius?: number;
  progress?: number;
  strokeWidth?: number;
  dimension?: number;
};

const RadialChart = ({
  radius = 75,
  progress = 75,
  strokeWidth = 23,
  dimension = 180,
}: RadialChartProps) => {
  const [showPercentage, setShowPercentage] = useState(false);
  setTimeout(() => setShowPercentage(true));

  const circleRadius = Math.min(radius, 85);
  const circumference = 2 * Math.PI * circleRadius;
  const strokeLength = showPercentage ? (circumference / 100) * progress : 0;

  return (
    <svg
      viewBox="0 0 180 180"
      className="relative inline-block transition-all duration-300 ease-in"
      width={dimension}
      height={dimension}
    >
      <circle
        className="opacity-30"
        stroke={'currentColor'}
        strokeWidth={strokeWidth}
        fill="none"
        cx="90"
        cy="90"
        r={circleRadius}
      />
      <circle
        className={`${
          strokeLength === 0 && 'opacity-0'
        } rotate-90 origin-center transition-all duration-500 delay-200`}
        stroke={'currentColor'}
        strokeWidth={strokeWidth}
        strokeDasharray={`${strokeLength},${circumference}`}
        strokeLinecap="round"
        fill="none"
        cx="90"
        cy="90"
        r={circleRadius}
      />
    </svg>
  );
};

export default RadialChart;
