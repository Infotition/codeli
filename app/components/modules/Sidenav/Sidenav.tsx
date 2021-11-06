import { useSidenav } from '@context/sidenavContext';
import useWindowSize from '@hook/useWindowSize';
import { AnimatePresence, motion } from 'framer-motion';
import Icon, { Icons } from '@element/Icon/Icon';
import RadialChart from '@element/RadialChart/RadialChart';
import { useState } from 'react';

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

type SidenavLayoutProps = {
  children: React.ReactNode;
  width: number;
};

const SidenavLayout = ({ children, width }: SidenavLayoutProps) => {
  const { state, dispatch } = useSidenav();

  const variants = {
    active: {
      width,
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    inactive: {
      width: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  return (
    <AnimatePresence>
      {state.isActive && (
        <>
          <motion.div
            key={state.isActive ? 'nav-open' : 'nav-closed'}
            variants={variants}
            initial={'inactive'}
            animate={'active'}
            exit={'inactive'}
            className="absolute z-20 h-full overflow-hidden shadow-xl bg1 2xl:static color-transition whitespace-nowrap"
          >
            {children}
          </motion.div>
          <motion.div
            key={state.isActive ? 'backdrop-on' : 'backdrop-off'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            onClick={() => dispatch({ type: 'toggle' })}
            className="absolute z-10 w-full h-full bg-black opacity-20 2xl:hidden"
          ></motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const TaskItem = ({ task }: { task: Task }) => {
  return (
    <div className="flex items-center px-5 py-1 text-lg lg:text-2xl text-text2-light dark:text-text2-dark">
      <span className="mr-9 text-primary">
        {task.done ? (
          <Icon icon={Icons.CHECK_CIRCLE} hover={false} />
        ) : (
          <Icon className="opacity-30" icon={Icons.CIRCLE} hover={false} />
        )}
      </span>

      <span className="mr-3">
        {task.type === 'code' ? (
          <Icon icon={Icons.CODE} />
        ) : (
          <Icon icon={Icons.BOOK_OPEN} />
        )}
      </span>

      {task.title}
    </div>
  );
};

type ChapterItemProps = {
  course: Course;
  active: boolean;
  onClick: VoidFunction;
};

const ChapterItem = ({ course, active, onClick }: ChapterItemProps) => {
  const progress =
    (course.tasks.reduce((prev, task) => prev + (task.done ? 1 : 0), 0) /
      course.tasks.length) *
    100;

  const variants = {
    active: { height: 'auto', transition: { duration: 0.3 } },
    inactive: { height: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className=" border-b-[1px] border-hr">
      <div
        className="relative flex items-center p-5 cursor-pointer shadow-sm text"
        onClick={onClick}
      >
        <div className="text-primary">
          <RadialChart progress={progress} dimension={30} />
        </div>
        <div className="pl-5">
          <h2 className="font-bold tracking-wide text">{course.title}</h2>
          <p className="hidden text-text2-light dark:text-text2-dark md:block">
            {course.desc}
          </p>
        </div>
        <div className="absolute top-2 right-2">
          <Icon
            icon={Icons.CHEVRON_DOWN}
            className={`${
              active && '-rotate-90'
            } transition-all duration-200 ease-in-out`}
          />
        </div>
      </div>
      <AnimatePresence>
        {active && (
          <motion.nav
            layout
            className="overflow-hidden bg2"
            key={active ? `${course.title}-active` : `${course.title}-close`}
            variants={variants}
            initial={'inactive'}
            animate={'active'}
            exit={'inactive'}
          >
            <div className="py-7">
              {course.tasks.map((task) => (
                <TaskItem key={task.title} task={task} />
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

const ChapterList = ({ courses }: { courses: Course[] }) => {
  const [activeItem, setActiveItem] = useState(-1);

  const toggleCourse = (index: number) => {
    if (index === activeItem) setActiveItem(-1);
    else setActiveItem(index);
  };

  return (
    <>
      {courses.map((course, index) => (
        <ChapterItem
          key={course.title}
          course={course}
          active={activeItem === index}
          onClick={() => toggleCourse(index)}
        />
      ))}
    </>
  );
};

const Sidenav = () => {
  const { width } = useWindowSize();

  const getNavWidth = (width: number) => {
    if (width <= 500) return width * 0.65;
    if (width <= 1000) return width / 2;
    if (width <= 1500) return 550;
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
    {
      title: 'Kontrollstrukturen',
      desc: 'Zählschleifen, While-Schleifen',
      tasks: [
        { done: false, type: 'theory', title: 'Was sind Schleifen' },
        { done: false, type: 'theory', title: 'Was sind Zählschleifen' },
        { done: false, type: 'code', title: 'Roboter laufen' },
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
