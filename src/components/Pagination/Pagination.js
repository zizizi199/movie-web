import React from 'react'
import ReactPaginate from 'react-paginate'

function Pagination({setPage}){
  const handleClick=(e)=>{
      setPage(e.selected+1);
  }
  return (
    <ReactPaginate 
        breakLabel={'...'}
        pageCount={1000}
        marginPagesDisplayed={3}
        pageRangeDisplayed={6}
        containerClassName={'pagination justify-content-center info'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
        onPageChange={handleClick}
        

    />
  )
}

export default Pagination