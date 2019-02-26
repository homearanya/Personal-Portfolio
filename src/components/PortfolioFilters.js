import React from "react";

export default function PortfolioFilters(props) {
  return (
    <ul
      className="list-inline filter-control d-flex justify-content-center"
      role="group"
      aria-label="Filter Control"
    >
      {props.filters.map((filter, index) => {
        let tabClassName = "list-inline-item";
        if (index === props.activeTab) {
          tabClassName += " tab-active";
        }

        return (
          <li
            key={index}
            className={tabClassName}
            data-group={filter}
            onClick={() => props.handleClick(index)}
          >
            {filter}
          </li>
        );
      })}
    </ul>
  );
}
