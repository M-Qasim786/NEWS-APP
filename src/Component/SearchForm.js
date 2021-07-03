import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
const SearchForm = ({ searchText }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    searchText(search);
  };
  return (
    <>
      <div class="wrapper">
        <form onSubmit={handleSubmit}>
          <div class="searchBar">
            <input
              id="searchQueryInput"
              type="text"
              name="searchQueryInput"
              placeholder="Search"
              onChange={handleChange}
              autoComplete="off"
            />
            <button
              id="searchQuerySubmit"
              type="submit"
              name="searchQuerySubmit"
            >
              <svg
                style={{
                  width: "28px",
                  height: "28px",
                  marginTop: "6px",
                  marginRight: "7px",
                }}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#f8465f"
                  d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchForm;
