import React from 'react'
import s from './Pagination.module.css'

const Pagination = ({totalUsersCount, pageSize, currentPage, onPageChange}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map(page => {
                return <span key={page} className={currentPage === page ? (s.page + ' ' + s.selected) : s.page}
                             onClick={(e) => {
                                 onPageChange(page)
                             }}>{page}</span>
            })}
        </div>
    )
}

export default Pagination