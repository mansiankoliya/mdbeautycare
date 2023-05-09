import React, { Fragment } from "react";
import moment from "moment";
import './partialscss.css';

const AdminFooter = (props) => {
  return (
    <Fragment>
      <footer
        // style={{ background: "#821D30", color: "white" }}
        // style={{ background: "white", color: "#b21368", borderTop:"1px solid black" }}
        className="z-10 py-6 px-4 md:px-12 text-center footercss"
      >
        M & D Beauty Care {moment().format("YYYY")}
      </footer>
    </Fragment>
  );
};

export default AdminFooter;
