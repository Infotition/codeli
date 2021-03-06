export enum Icons {
  INFOTITION = 'infotition',
  BURGER = 'burger',
  CHEVRON_LEFT = 'chevron_left',
  CHEVRON_RIGHT = 'chrevron_right',
  CHEVRON_DOWN = 'chrevron_down',
  SETTINGS = 'settings',
  CHAT = 'chat',
  SUN = 'sun',
  MOON = 'moon',
  BOOK_OPEN = 'book_open',
  CODE = 'code',
  CHECK_CIRCLE = 'check_circle',
  CIRCLE = 'circle',
}

const icons = {
  infotition: (
    <g transform="translate(-19 -15) scale(0.27)">
      <path d="m95.188 101.22c0 0.94809-0.43546 1.8342-1.1644 2.4405-0.98943 0.82407-1.6192 2.0643-1.6192 3.452 0 1.8769 1.1507 3.4851 2.7836 4.1562 0.52503 0.21359 1.0983 0.33073 1.7005 0.33073 0.60358 0 1.1768-0.11714 1.7019-0.33073 1.633-0.67111 2.7836-2.2793 2.7836-4.1562 0-1.3877-0.62976-2.6279-1.6192-3.452-0.7276-0.60634-1.1644-1.4924-1.1644-2.4405v-37.735h-6.9563c-0.93844 0-1.7005 0.76068-1.7005 1.7005s0.76205 1.7005 1.7005 1.7005h3.554z" />
      <path d="m89.934 58.38c0 0.93982 0.76205 1.7005 1.7005 1.7005h39.667c0.93844 0 1.7005-0.76068 1.7005-1.7005s-0.76206-1.7005-1.7005-1.7005h-39.667c-0.93844 0-1.7005 0.76068-1.7005 1.7005" />
      <path d="m91.634 142.21h39.667c0.93844 0 1.7005-0.76067 1.7005-1.7005 0-0.93983-0.76206-1.7019-1.7005-1.7019h-39.667c-0.93844 0-1.7005 0.76205-1.7005 1.7019 0 0.93982 0.76205 1.7005 1.7005 1.7005" />
      <path d="m98.591 135.4h9.7193v-48.872c0-1.1203 0.42581-2.2269 1.265-2.9669 0.93155-0.82131 1.5186-2.0243 1.5186-3.3638 0-1.8769-1.152-3.4892-2.7836-4.1562-0.52504-0.21773-1.0983-0.33486-1.7019-0.33486-0.6022 0-1.1755 0.11713-1.7005 0.33486-1.633 0.66697-2.785 2.2793-2.785 4.1562 0 1.3395 0.58842 2.5425 1.5186 3.3638 0.84061 0.74001 1.2664 1.8466 1.2664 2.9669v45.471h-6.3169v-15.322c0-0.92604-0.75792-1.6826-1.684-1.6812h-0.03443c-0.92604-1e-3 -1.684 0.75516-1.684 1.6812v15.322h-3.554c-0.93845 0-1.7005 0.76068-1.7005 1.7005s0.76205 1.7005 1.7005 1.7005z" />
      <path d="m118.03 63.483h-13.12v7.192c0 0.92191 0.76068 1.6399 1.6826 1.6371h0.0358c0.92192 0.0028 1.6826-0.7152 1.6826-1.6371v-3.791h6.3183v48.309c0 1.1217-0.42582 2.2283-1.2664 2.971-0.93018 0.82269-1.5186 2.0257-1.5186 3.3652 0 1.8769 1.152 3.4851 2.785 4.1562 0.52503 0.21222 1.0983 0.32935 1.7005 0.32935 0.60221 0 1.1755-0.11713 1.7005-0.32935 1.633-0.6711 2.785-2.2793 2.785-4.1562 0-1.3394-0.58842-2.5425-1.5186-3.3652-0.8406-0.74276-1.2664-1.8493-1.2664-2.971z" />
      <path d="m124.35 63.483v27.982c0 0.50574-0.23978 0.9977-0.66973 1.265-1.2706 0.79237-2.1153 2.2007-2.1153 3.8075s0.84474 3.0152 2.1153 3.8075c0.42995 0.26734 0.66973 0.75792 0.66973 1.265v30.391h-6.3183v-0.94809c0-0.90537-0.73449-1.6385-1.6399-1.6371h-0.12127c-0.90537-1e-3 -1.6399 0.73174-1.6399 1.6371v4.3491h16.674c0.93982 0 1.7005-0.76206 1.7005-1.7005 0-0.93982-0.76068-1.7005-1.7005-1.7005h-3.554v-30.391c0-0.50712 0.2384-0.9977 0.66834-1.265 1.2706-0.79237 2.1167-2.2007 2.1167-3.8075s-0.84612-3.0152-2.1167-3.8075c-0.42994-0.26734-0.66834-0.7593-0.66834-1.265v-24.581h3.554c0.93982 0 1.7005-0.76068 1.7005-1.7005s-0.76068-1.7005-1.7005-1.7005z" />
    </g>
  ),
  book_open: (
    <path
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  ),
  code: (
    <path
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  ),
  circle: <circle cx="12" cy="12" r="9" fill="none" strokeWidth={2} />,
  check_circle: (
    <path
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  ),
  chevron_left: (
    <path
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 19l-7-7 7-7"
    />
  ),
  chrevron_right: (
    <path
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 5l7 7-7 7"
    />
  ),
  chrevron_down: (
    <path
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    />
  ),
  chat: (
    <path
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
    />
  ),
  settings: (
    <g fill="none">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </g>
  ),
  burger: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h16"
    />
  ),
  sun: (
    <path
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  ),
  moon: (
    <path
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  ),
};

type IconProps = {
  icon: Icons;
  className?: string;
  onClick?: VoidFunction;
  size?: {
    width: number;
    height: number;
  };
  hover?: boolean;
};

const Icon = ({ icon, onClick, className, size, hover = true }: IconProps) => {
  return (
    <svg
      onClick={onClick}
      className={`${className} ${hover && 'hover-icon'} select-none`}
      width={size?.width || 25}
      height={size?.height || 25}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      focusable="false"
    >
      {`${icon} icon`}
      {icons[icon]}
    </svg>
  );
};

export default Icon;
