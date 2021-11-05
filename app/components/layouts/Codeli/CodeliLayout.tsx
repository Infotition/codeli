import Navbar from '@module/Navbar/Navbar';
import Sidenav from '@module/Sidenav/Sidenav';
import { SidenavProvider } from '@context/sidenavContext';
import MetaTags from '@element/Metatags/Metatags';

type CodeliLayoutProps = {
  children: React.ReactNode;
};

const NavigationLayout = ({ children }: CodeliLayoutProps) => {
  return (
    <div className="h-screen min-h-screen bg1 color-transition">
      <SidenavProvider>
        <div className="lg:h-full lg:flex">
          <Sidenav />
          <div className="w-full">
            <Navbar />
            <div>{children}</div>
          </div>
        </div>
      </SidenavProvider>
    </div>
  );
};

const CodeliLayout = ({ children }: CodeliLayoutProps) => {
  return (
    <>
      <MetaTags />
      <NavigationLayout>{children}</NavigationLayout>
    </>
  );
};

export default CodeliLayout;
