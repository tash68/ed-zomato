import React from 'react';
import FilterItem from "./filterItem";
import "./filter.css";

function Filters({ filterList }) {
    return (
        <div  className="filters"> 
         {filterList &&
        filterList.map((filter) => {
          return <FilterItem filter={filter} key={filter.id} />;
        })}
        </div>
    );
};

export default Filters;