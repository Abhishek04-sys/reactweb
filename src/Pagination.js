import React from 'react';

const Pagination = ({notes,currentPage, totalPages, onPageChange}) => {

    return ( 
        <div className="pagination">
            {/* <p>{totalPages==0 ? 0 : currentPage}...{totalPages}</p> */}
            <button className='prev'
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1 || notes.length === 0 }
            >
                Previous
            </button>
            <button className='next'
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages || notes.length === 0}
            >
                Next
            </button>
        </div>
     );
}
 
export default Pagination;