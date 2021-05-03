import useAxiosHook from "../../src/services/useAxiousHook";
import React,{useState} from 'react';
import DataGrid from './DataGrid';

const AHGrid =({options, refetchOptions}) => {
    const [pages, setPage] = useState({pageNumber:1, pageRows: 10, checkCount:true});
    const [pageOutIndex, setOutPageIndex] = useState(0);
    //const pages = {pageNumber:1, pageRows: 10, checkCount:true};

    const [{ data: getData, loading: getLoading, error: getError }] 
    = useAxiosHook(options,pages)

    const [{ data: putData, loading: putLoading, error: putError },refetch] 
    = useAxiosHook(options,pages)

    

    debugger;
      function onPagesChanged(pgs) {
        setPage(pages => ({
            ...pages,
            pageNumber: pgs,
         }));
        refetch({
          data: {
              pageNumber:pages.pageNumber,
              pageRows:pages.pageRows,
              checkCount: pages.checkCount
          },
          options
        })
      }
    

    //debugger;
    if (getLoading || putLoading) return <p>Loading...</p>
    if (getError || putError) return <p>Error!</p>
  
    
    return (
      <div>
        <DataGrid 
        data={putData || getData}
        pages={pages} 
        onPagesChanged = {onPagesChanged}
        setOutPageIndex = {setOutPageIndex}
        pageOutIndex ={pageOutIndex}
        />
      </div>
      
    )
  }

export default AHGrid;