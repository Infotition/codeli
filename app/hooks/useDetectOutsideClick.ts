import { useState, useEffect, MutableRefObject } from 'react';

const useDetectOutsideClick = (
  element: MutableRefObject<any>,
  initialState: boolean
) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const onClick = (event: any) => {
      if (element.current !== null && !element.current.contains(event.target)) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener('click', onClick);
    }

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [isActive, element]);

  return [isActive, setIsActive] as const;
};

export default useDetectOutsideClick;
