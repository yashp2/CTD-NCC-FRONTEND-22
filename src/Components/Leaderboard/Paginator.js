import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import Table from "react-bootstrap/Table";
import Table_row from "./table_row";
import "./Leaderboard.css";
// Example items, to simulate fetching from another resources.



// const items=[10,20,30,40];
function Items({ currentItems }) {
  return (
    <>
      <Table striped bordered hover variant="dark" className="leaderboard-table text-center">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Q1</th>
            <th>Q2</th>
            <th>Q3</th>
            <th>Q4</th>
            <th>Q5</th>
            <th>Q6</th>
            <th>Total Score</th>
          </tr>
        </thead>
        <tbody>
        {currentItems &&
        currentItems.map((item) => (
          <tr>
            <th>{item.Rank}</th>
            <th>{item.Username}</th>
            <th>{item[1]}</th>
            <th>{item[2]}</th>
            <th>{item[3]}</th>
            <th>{item[4]}</th>
            <th>{item[5]}</th>
            <th>{item[6]}</th>
            <th>{item.total_score}</th>
          </tr>
        ))}
        </tbody>
      </Table> 
    </>
  );
}

function PaginatedItems(props) {

const [items,updtitems] = useState(props.items);
const itemsPerPage=props.itemsPerPage;
console.log(items);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <div className="paginate-nav-bar m-0 text-white">
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={'paginationc'} /* as this work same as bootstrap class */
        subContainerClassName={'pagesc paginationcs'} /* as this work same as bootstrap class */
        activeClassName={'activec'}
      />
      </div>
    </>
  );
}

export default PaginatedItems;
