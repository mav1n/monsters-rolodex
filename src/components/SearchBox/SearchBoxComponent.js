import React from 'react';
import './SearchBoxComponentStyles.css'

export const SearchBoxComponent = ({placeholder, handleChange}) => {
    return (
        <input
            className='search'
            type='search'
            placeholder={placeholder}
            onChange={handleChange}
        />
    )
}
