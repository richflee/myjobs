import React from "react";

const JobsListHeaderBar = () => {
  return (
    <div className="row job-row">
      <span className="small-2 medium-2 large-2 columns table-header-label">
        Job num
      </span>
      <span className="small-4 medium-4 large-4 columns table-header-label">
        Client
      </span>
      <span className="small-6 medium-6 large-6 columns table-header-label">
        Date created
      </span>
    </div>
  );
};

export default JobsListHeaderBar;
