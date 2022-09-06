import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import Table from "react-bootstrap/Table";
import Table_row from "./table_row";
import "./Leaderboard.css";
// Example items, to simulate fetching from another resources.
const items = [{
  Rank:1,
  Username:"yashp05",
  s1:50,
  s2:35,
  s3:65,
  s4:100,
  s5:60,
  s6:90,
},{
  Rank:2,
  Username:"shubhamshelar",
  s1:90,
  s2:75,
  s3:85,
  s4:90,
  s5:10,
  s6:0,
},{
  Rank:3,
  Username:"kushalbhattad",
  s1:30,
  s2:40,
  s3:50,
  s4:80,
  s5:50,
  s6:40,
},{
  Rank:4,
  Username:"tejasambekar",
  s1:70,
  s2:57,
  s3:34,
  s4:98,
  s5:49,
  s6:0,
},{
  Rank:5,
  Username:"harshjain",
  s1:50,
  s2:35,
  s3:65,
  s4:0,
  s5:0,
  s6:90,
},{
  Rank:6,
  Username:"prathmeshk",
  s1:50,
  s2:35,
  s3:15,
  s4:0,
  s5:0,
  s6:90,
},{
  Rank:7,
  Username:"rhutuj",
  s1:50,
  s2:35,
  s3:65,
  s4:100,
  s5:60,
  s6:90,
},{
  Rank:8,
  Username:"prerna",
  s1:45,
  s2:35,
  s3:35,
  s4:90,
  s5:40,
  s6:20,
},{
  Rank:9,
  Username:"bhavnabafna",
  s1:50,
  s2:35,
  s3:65,
  s4:0,
  s5:0,
  s6:0,
},{
  Rank:10,
  Username:"meghadandapat",
  s1:50,
  s2:35,
  s3:0,
  s4:0,
  s5:0,
  s6:0,
},{
  Rank:11,
  Username:"gauri23",
  s1:50,
  s2:0,
  s3:0,
  s4:0,
  s5:0,
  s6:0,
},{
  Rank:12,
  Username:"mansi08",
  s1:0,
  s2:0,
  s3:0,
  s4:0,
  s5:0,
  s6:0,
}];
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
            <th>{item.s1}</th>
            <th>{item.s2}</th>
            <th>{item.s3}</th>
            <th>{item.s4}</th>
            <th>{item.s5}</th>
            <th>{item.s6}</th>
            <th>{item.s1 + item.s2 + item.s3 + item.s4 + item.s5 + item.s6}</th>
          </tr>
        ))}
        </tbody>
      </Table> 
    </>
  );
}

function PaginatedItems({ itemsPerPage }) {
  // We start with an empty list of items.
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
