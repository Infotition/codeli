import { useSidenav } from '@context/sidenavContext';
import useWindowSize from '@hook/useWindowSize';
import { AnimatePresence, motion } from 'framer-motion';
import Icon, { Icons } from '@element/Icon/Icon';
import RadialChart from '@element/RadialChart/RadialChart';

type SidenavLayoutProps = {
  children: React.ReactNode;
  width: number;
};

const SidenavLayout = ({ children, width }: SidenavLayoutProps) => {
  const { state, dispatch } = useSidenav();

  return (
    <AnimatePresence>
      {state.isActive && (
        <>
          <motion.nav
            key={state.isActive ? 'nav-open' : 'nav-closed'}
            initial={{ width: 0 }}
            animate={{ width }}
            exit={{
              width: 0,
              transition: { duration: 0.3 },
            }}
            className="absolute z-20 h-full shadow-xl bg1 w-96 xl:static color-transition"
          >
            <motion.div
              initial={{ x: -width, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -width, opacity: 0, transition: { duration: 0.3 } }}
            >
              {children}
            </motion.div>
          </motion.nav>
          <motion.div
            key={state.isActive ? 'backdrop-on' : 'backdrop-off'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            onClick={() => dispatch({ type: 'toggle' })}
            className="absolute z-10 w-full h-full bg-black opacity-20 xl:hidden"
          ></motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

type Task = {
  done: boolean;
  type: 'theory' | 'code';
  title: string;
};

type Course = {
  title: string;
  desc: string;
  tasks: Task[];
};

type ChapterItemProps = {
  course: Course;
};

const ChapterItem = ({ course }: ChapterItemProps) => {
  return (
    <div className="flex items-center p-5">
      <div className="text-primary">
        <RadialChart progress={65} dimension={30} />
      </div>
      <div className="pl-5">
        <h2 className="font-bold tracking-wide text">{course.title}</h2>
        <p className="text-xl font-normal text-text2-light dark:text-text2-dark">
          {course.desc}
        </p>
      </div>
    </div>
  );
};

type ChapterListProps = {
  courses: Course[];
};

const ChapterList = ({ courses }: ChapterListProps) => {
  return (
    <>
      {courses.map((course) => (
        <div key={course.title}>
          <ChapterItem course={course} />
          <hr />
        </div>
      ))}
    </>
  );
};

const Sidenav = () => {
  const { width } = useWindowSize();

  const getNavWidth = (width: number) => {
    if (width <= 400) return 200;
    if (width <= 700) return 250;
    if (width <= 1000) return 300;
    if (width <= 1500) return 450;
    return 600;
  };

  const courses: Course[] = [
    {
      title: 'Einführung',
      desc: 'Variablen, Bedingungen, Konsolenausgaben',
      tasks: [
        { done: true, type: 'theory', title: 'Was sind Variablen' },
        { done: false, type: 'code', title: 'Roboter konfigurieren' },
      ],
    },
  ];

  return (
    <SidenavLayout width={getNavWidth(width)}>
      <div>
        <div className="flex items-center p-5 font-semibold tracking-wide text">
          <Icon icon={Icons.CHEVRON_LEFT} size={{ width: 35, height: 35 }} />
          Zurück zur Kurswahl
        </div>
        <hr className="border-hr" />
        <ChapterList courses={courses} />
      </div>
    </SidenavLayout>
  );
};

export default Sidenav;
