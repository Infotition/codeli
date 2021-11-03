import Icon, { Icons } from '@element/Icon/Icon';

type Props = {
  href: string;
  className: string;
};

const Brand = ({ href, className }: Props) => (
  <a
    className={`${className} text-primary flex sm:text-center sm:align sm:items-center`}
    href={href}
  >
    <Icon
      icon={Icons.INFOTITION}
      size={{ width: 50, height: 50 }}
      hover={false}
    />
    <span className={'hidden sm:block sm:font-semibold sm:text-5xl sm:-m-4'}>
      NFOTITION
    </span>
  </a>
);

export default Brand;
