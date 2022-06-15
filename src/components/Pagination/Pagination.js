import React from 'react'
import ReactPaginate from 'react-paginate'
import './Pagination.css'

function Pagination({setPage}){
  const handleClick=(e)=>{
      setPage(e.selected+1);
  }
  return (
    <ReactPaginate 
        breakLabel={'...'}
        pageCount={1000}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        containerClassName={'pagination justify-content-center info'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item display'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item display'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
        onPageChange={handleClick}
        

    />
  )
}

export default Pagination