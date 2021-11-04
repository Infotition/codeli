import { useRef, useEffect } from 'react';

export enum TooltipDirection {
  LEFT = 'left',
  BOTTOM_LEFT = 'bottom_left',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  NONE = 'none',
}

type TooltipProps = {
  children: React.ReactNode;
  tooltip: string;
  direction?: TooltipDirection;
};

const Tooltip = ({
  children,
  tooltip,
  direction = TooltipDirection.NONE,
}: TooltipProps) => {
  const directions = {
    left: `origin-right right-arrow`,
    right: 'origin-left',
    bottom: `origin-top top-[130%]`,
    bottom_left: `origin-top-right top-[130%] top-right-arrow`,
    none: 'hidden',
  };

  const tooltipRef = useRef(null);
  useEffect(() => {
    switch (direction) {
      case TooltipDirection.BOTTOM_LEFT:
        tooltipRef.current.style.marginRight = `${0}px`;
        break;
      case TooltipDirection.LEFT:
        tooltipRef.current.style.marginRight = `${
          tooltipRef.current.offsetWidth / 2.5
        }px`;
        break;
      default:
        break;
    }
  }, [direction]);

  return (
    <div className="relative flex flex-row-reverse group">
      {children}
      <span
        ref={tooltipRef}
        className={`${directions[direction]} absolute px-10 py-3 text-lg font-semibold shadow-md text bg3 rounded-md transition-all duration-300 scale-0 lg:group-hover:scale-100`}
      >
        {tooltip}
      </span>
    </div>
  );
};

export default Tooltip;
