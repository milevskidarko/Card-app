import React from "react";

const SearchBar = ({ cards, setCards }) => (
    <div className="searchBar">
        <form>
            <div className='input'>
                <i className="fas fa-search"></i>
                <input
                    type="text"
                    onKeyUp={e => {
                        let filtered = cards.filter(c => {
                            if (
                                c.cardName
                                    .toLowerCase()
                                    .indexOf(e.target.value.toLowerCase()) !== -1 ||
                                c.location
                                    .toLowerCase()
                                    .indexOf(e.target.value.toLowerCase()) !== -1
                            ) {
                                return c;
                            }
                            return false;
                        });
                        setCards(filtered);
                    }}
                    placeholder="Search here .."
                />
            </div>
            <div className='innnerSearch'>
                <div className='select'>
                    <select>
                        <option>Category</option>
                    </select>
                </div>
                <div className='btn'>
                    <a href={'http://google.com'}>Search</a>
                </div>
            </div>
        </form>
    </div>
);

export default SearchBar;