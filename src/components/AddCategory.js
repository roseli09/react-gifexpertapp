import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputValue = ( e ) => {
        setinputValue(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(inputValue.trim().length>2){
                    // console.log('submit hecho')
                    setCategories(cats => [ inputValue, ...cats,]);
                    setinputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type = "text"
                value={inputValue}
                onChange={handleInputValue}
            />
        </form>
        
    )
}

AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}