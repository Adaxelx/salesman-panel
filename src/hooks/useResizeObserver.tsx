import * as React from 'react';

export default function useResizeObserver(elRef: any) {
  const [dimensions, setDimenstions] = React.useState<[number, number]>([0, 0]);
  const observer = React.useRef(
    new ResizeObserver(entries => {
      // Only care about the first element, we expect one element ot be watched
      const { width, height } = entries[0].contentRect;

      setDimenstions([width, height]);
    })
  );

  React.useEffect(() => {
    if (elRef.current) {
      observer.current.observe(elRef.current);
    }

    return () => {
      elRef?.current && observer.current.unobserve(elRef.current);
    };
  }, [elRef, observer]);

  return dimensions;
}
