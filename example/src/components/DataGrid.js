import React from 'react';
import { Table, Row, Container } from 'reactstrap';
import { useGrid, useSorting, usePaging } from 'react-hooks-grid';

import PagingComponent from './PagingComponent';

  const DataGrid = ({data,pages,onPagesChanged,pageOutIndex,setOutPageIndex}) => {
  const [[{rowCountTotal}],dataModel] = data;

     const {
      grid,
      sortDesc,
      setSort,
      rowCount,
      pageCount,
      pageIndex,
      pageSize,
      setIndex,
      setSize,
  } = useGrid(dataModel,rowCountTotal, [
      useSorting('userName', true),
      usePaging(pages.pageRows)
    ]);

  
    return ( 
      <>
        <Container>
          <Row>
            <Table>
              <thead>
                <tr>
                  <th key={'userName'}>
                    <div onClick={e => setSort('userName', !sortDesc)}>Name</div>
                  </th>
                   <th key={'userSurName'}>
                    <div onClick={e => setSort('userSurName', !sortDesc)}>Sur Name</div>
                  </th>
                  <th key={'projectName'}>
                    <div onClick={e => setSort('projectName', !sortDesc)}>Project</div>
                  </th>
                  <th key={'dh'}>
                    <div onClick={e => setSort('dh', !sortDesc)}>Time Log Start Date</div>
                  </th> 
                  <th key={'dh'}>.
                    <div onClick={e => setSort('dh', !sortDesc)}>Time Log End Date</div>
                  </th>
                  <th key={'projectId'}>
                    <div onClick={e => setSort('hours', !sortDesc)}>projectId</div> 
                  </th>
                </tr> 
              </thead>
              <tbody>
                {grid.rows.map((row, index) => (
                  <tr key={index}>
                    {row.cells.map(cell => (
                      <td key={cell.key}>{cell.value instanceof Date ? cell.value.toLocaleDateString() : cell.value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          </Row>
          <Row>
            <PagingComponent
              page={(pageIndex  || pageOutIndex) +1 }
              pageIndex={pageIndex || pageOutIndex}
              setIndex={setIndex}
              setSize={setSize}
              pageSize={pageSize}
              pageCount={pageCount}
              rowCount={rowCount}
              onPagesChanged={onPagesChanged}
              setOutPageIndex={setOutPageIndex}
            />
          </Row>
        </Container>
      </>
    );
  };

  export default DataGrid;