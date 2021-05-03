
import React, { useState} from 'react';
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  ButtonGroup,
  Button,
  Col,
  ButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from 'reactstrap';

const PagingComponent = ({ page, pageIndex, setIndex, setSize, pageSize, pageCount, rowCount,onPagesChanged,setOutPageIndex}) => {
  const [sizeOpened, setSizeOpened] = useState(false);

  const nextIndex = pageIndex + 1;
  const doubleNextIndex = pageIndex + 2;
  const previousIndex = pageIndex - 1;
  const doublePeviousIndex = pageIndex - 2;

  const handleClick = (indx) =>
  {
    setIndex(indx);
    onPagesChanged(indx+1)
    setOutPageIndex(indx);
  } 


  return (
    <>
      <Col>
        <ButtonGroup>
          <Button color="primary">Row Count</Button>
          <Button outline color="primary">
            {rowCount}
          </Button>
          <Button color="primary">Page Count</Button>
          <Button outline color="primary">
            {pageCount}
          </Button>
          <ButtonDropdown isOpen={sizeOpened} toggle={() => setSizeOpened(!sizeOpened)}>
            <DropdownToggle color="primary" caret>
              Page Size
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => setSize(10)}>10</DropdownItem>
              <DropdownItem onClick={() => setSize(20)}>20</DropdownItem>
              <DropdownItem onClick={() => setSize(50)}>50</DropdownItem>
              <DropdownItem onClick={() => setSize(100)}>100</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
          <Button outline color="primary">
            {pageSize}
          </Button>
        </ButtonGroup>
      </Col>
      <Col>
        <Pagination aria-label="Paging">
          <PaginationItem disabled={pageIndex === 0}>
            <PaginationLink first href="#" onClick={() => {
              handleClick(0)
              }} />
          </PaginationItem>
          {doublePeviousIndex >= 0 ? (
            <PaginationItem>
              <PaginationLink href="#" onClick={() => {
                handleClick(doublePeviousIndex)
                //setPage(p=>({pageNumber:doublePeviousIndex + 1, pageRows:p.pageRows})); 
              }} >
                {doublePeviousIndex + 1}
              </PaginationLink>
            </PaginationItem>
          ) : null}
          {previousIndex >= 0 ? (
            <PaginationItem>
              <PaginationLink href="#" onClick={() => {
                handleClick(previousIndex)
                }}>
                {previousIndex + 1} 
              </PaginationLink>
            </PaginationItem>
          ) : null}
          <PaginationItem active>
            <PaginationLink href="#" onClick={() => {
              handleClick(pageIndex)
              }}>
              {page}
            </PaginationLink>
          </PaginationItem>
          {nextIndex < pageSize ? (
            <PaginationItem>
              <PaginationLink href="#" onClick={() => {
                handleClick(nextIndex)
              }} >
                {nextIndex + 1}
              </PaginationLink>
            </PaginationItem>
          ) : null}
          {doubleNextIndex < pageSize ? (
            <PaginationItem>
              <PaginationLink href="#" onClick={() => {
                handleClick(doubleNextIndex)
                }} >
                {doubleNextIndex + 1}
              </PaginationLink>
            </PaginationItem>
          ) : null}
           <PaginationItem > 
           {/* disabled={page === pageCount || pageCount === 1} */}
            <PaginationLink last href="#" onClick={() => {
              handleClick(pageCount - 1)
            }}/>
          </PaginationItem>
        </Pagination>
      </Col>
    </>
  );
};
export default PagingComponent;
