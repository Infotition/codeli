import { motion, Transition } from 'framer-motion';

type MenuButtonProps = {
  isOpen?: boolean;
  width?: string | number;
  height?: string | number;
  onClick?: VoidFunction;
  className?: string;
  strokeWidth?: string | number;
  transition?: Transition;
  lineProps?: any;
};

const MenuButton = ({
  isOpen = false,
  width = 30,
  height = 30,
  onClick = null,
  className = '',
  strokeWidth = 2.5,
  transition = { type: 'spring', stiffness: 260, damping: 20 },
  lineProps = { strokeLinecap: 'round' },
  ...props
}: MenuButtonProps) => {
  const variant = isOpen ? 'opened' : 'closed';

  const top = {
    closed: { rotate: 0, translateY: 0 },
    opened: { rotate: 45, translateY: 2 },
  };

  const center = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };

  const bottom = {
    closed: { rotate: 0, translateY: 0 },
    opened: { rotate: -45, translateY: -2 },
  };

  const line = {
    stroke: 'currentColor',
    strokeWidth: strokeWidth as number,
    vectorEffect: 'non-scaling-stroke',
    initial: 'closed',
    animate: variant,
    transition,
    ...lineProps,
  };

  const unitHeight = 4;
  const unitWidth = (unitHeight * (width as number)) / (height as number);

  return (
    <motion.svg
      className={className}
      onClick={onClick}
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow="visible"
      preserveAspectRatio="none"
      width={width}
      height={height}
      {...props}
    >
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="0"
        y2="0"
        variants={top}
        {...line}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="2"
        y2="2"
        variants={center}
        {...line}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="4"
        y2="4"
        variants={bottom}
        {...line}
      />
    </motion.svg>
  );
};

export default MenuButton;
