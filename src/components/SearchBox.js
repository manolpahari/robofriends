import React from 'react';

const SearchBox= ( {searchFilter} ) => {

    return(
        <div>
        <input className='pa2 ma3 b--light-green ba2 bg-lightest-blue'
               type='search' 
               placeholder='Search Robots'
               onChange = {searchFilter}
              />
        </div>
    );
}

export default SearchBox;