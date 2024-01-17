import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

export function PaginatedItems({ itemsPerPage = 10, onClick, totalItems = items.length }) {
  const [, setItemOffset] = useState(0)

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % totalItems
    setItemOffset(newOffset)
    onClick(event.selected)
  }

  return (
    <div className="pagination-container mx-auto w-max">
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={Math.ceil(totalItems / itemsPerPage)}
        previousLabel="Prev"
        renderOnZeroPageCount={null}
        containerClassName="paginationButtons"
        activeClassName="activePaginate"
      />
    </div>
  )
}
