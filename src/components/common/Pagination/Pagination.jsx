import React, {useState} from 'react'
import s from './Pagination.module.css'
import cn from 'classnames'

const Pagination = ({totalItemsCount, pageSize, currentPage, onPageChange, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(totalItemsCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={s.pagination}>
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
                onPageChange((portionNumber - 2) * portionSize + 1)
            }}>PREV</button>}

            {pages
                .filter(p => (p >= leftPortionPageNumber && p <= rightPortionPageNumber))
                .map(page => {
                    return <span className={cn({
                        [s.selected]: currentPage === page
                    }, s.page)}
                                 key={page}
                                 onClick={(e) => {
                                     onPageChange(page)
                                 }}>{page}</span>
                })}

            {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
                onPageChange(rightPortionPageNumber + 1)
            }}>NEXT</button>}
        </div>
    )
}

export default Pagination