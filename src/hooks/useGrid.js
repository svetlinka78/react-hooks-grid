import { useState, useEffect, useRef  } from 'react';
import { useFormat } from './useFormat';

export const useGrid = (initGrid,rowCountTotal, usePlugins) => {
  const [baseGrid, setBaseGrid] = useState(initGrid);
  const [outGrid, setOutGrid] = useState({ rows: [] });
  const [ticks, setTicks] = useState(0);

  const isMountedRef = useRef(null);

  const setUpdate = () => {
    setTicks(prev => (prev += 1));
  };

  const plugins = [...usePlugins, useFormat()].map(p => p(setUpdate));

  useEffect(() => {
    //isMountedRef.current = true;
    //if(isMountedRef.current){

    let newGrid = [...baseGrid];
    plugins
      .sort((a, b) => a.order - b.order)
      .forEach(p => {
        newGrid = p.setGrid(newGrid);
      });
    setOutGrid(newGrid);

    //}
    //return () => {
      //setTicks(100); // This worked for me
      //isMountedRef.current = false;
    //}
  }, [baseGrid, ticks]);

  const api = {
    grid: outGrid,
    setGrid: setBaseGrid,
    rowCount: rowCountTotal !==0 ? rowCountTotal: outGrid.length,
  };
  plugins.forEach(p => p.mixinApi(api));

  return api;
};
