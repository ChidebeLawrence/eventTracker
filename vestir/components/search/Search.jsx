import React from 'react'
import { BsSearch } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import SearchItem from './SearchItem';
import { openSearchProduct } from '../Store';

const Search = () => {
  const { products, searchItem } = useSelector((state) => state.item);
  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }
  const filterSearch = search === "" ? [] : products.filter(
    product =>
      product.brand.toLowerCase().includes(search.toLowerCase())
      ||
      product.name.toLowerCase().includes(search.toLowerCase())
  );
  const dispatch = useDispatch();
  const openItem = (id) => {
    dispatch(openSearchProduct({ id }))
  };

  return (
    <>
      {
        !searchItem ?
          <>
            <div className='search'>
              <div className='component-header'>
                <h4><BsSearch />Search</h4>
              </div>
              <div className='sub-header'>
                <div className='search-search'>
                  <input type="search" placeholder='Search Product' autoFocus onChange={handleSearch} />
                </div>
              </div>
              <div className='search-body'>
                <button onClick={() => filterSearch}>Search</button>
              </div>

              <div className='search-result'>
                {filterSearch.map((item) => <div className='results' key={item.id} onClick={() => openItem(item.id)}>
                  <img src={item.src} alt={item.alt} />
                  <div>
                    <p className='brand'>{item.brand}</p>
                    <p className='name'>{item.name}</p>
                  </div>
                </div>)}
              </div>
            </div>
          </>
          : <SearchItem id={searchItem.id} />
      }
    </>
  )
}

export default Search