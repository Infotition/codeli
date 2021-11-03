import { useRef, useEffect } from 'react';

export enum TooltipDirection {
  LEFT = 'left',
  BOTTOM_LEFT = 'bottom_left',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  NONE = 'none',
}

type Props = {
  children: React.ReactNode;
  tooltip: string;
  direction?: TooltipDirection;
};

const Tooltip = ({
  children,
  tooltip,
  direction = TooltipDirection.NONE,
}: Props) => {
  const directions = {
    left: `origin-right right-arrow`,
    right: 'origin-left',
    bottom: `origin-top top-[130%]`,
    bottom_left: `origin-top-right top-[130%] top-right-arrow`,
    none: 'hidden',
  };

  const ref = useRef(null);
  useEffect(() => {
    switch (direction) {
      case TooltipDirection.BOTTOM_LEFT:
        ref.current.style.marginRight = `${0}px`;
        break;
      case TooltipDirection.LEFT:
        ref.current.style.marginRight = `${ref.current.offsetWidth / 2.5}px`;
        break;
      default:
        break;
    }
  });

  return (
    <div className={'group items-center flex relative flex-row-reverse'}>
      {children}
      <span
        ref={ref}
        className={`${directions[direction]} text-text-light bg-bg-light dark:text-text-dark dark:bg-bg3-dark w-max text-lg font-semibold absolute py-3 px-10 rounded-md shadow-md transition-all duration-300 scale-0 group-hover:scale-100`}
      >
        {tooltip}
      </span>
    </div>
  );
};

export default Tooltip;
