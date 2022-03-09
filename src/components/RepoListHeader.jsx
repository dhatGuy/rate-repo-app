import React from "react";
import FilterRepository from "./FilterRepository";
import SearchRepo from "./SearchRepo";

const RepoListHeader = ({ searchText, setText, sortBy, setSortBy }) => {
  return (
    <>
      <FilterRepository sortBy={sortBy} setSortBy={setSortBy} />
      <SearchRepo value={searchText} setValue={setText} />
    </>
  );
};

export default RepoListHeader;
