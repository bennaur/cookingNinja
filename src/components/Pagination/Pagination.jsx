import userEvent from '@testing-library/user-event';
import React, { useEffect } from 'react'
import { useRef } from 'react';
import "./Pagination.css";

const Pagination = ({ pages, paginate, cp }) => {

    //array to map

    let numbers = []
    for (let i = 1; i <= pages; i++) {
        numbers.push(i);
    }



    return (
        <div className='pagination--container'>
            <div className='pagination'>
                <div className="pagination--ulcontainer">
                    <ul>
                        {numbers.map((numero, id) => (
                            //selects current page number on pagination list and updates currentPage home state
                            <li key={numero} className={cp === id + 1 ? "active" : " "} >
                                <a onClick={(e) => {
                                    paginate(numero);
                                }}>
                                    {numero}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Pagination