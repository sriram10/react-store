import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "react-router-breadcrumbs-hoc";

const PureBreadcrumbs = ({ breadcrumbs }) => (
  <div className="breadcrumbs">
    {breadcrumbs.map(({ breadcrumb, match }, index) => (
      <div className="bc" key={match.url}>
        <Link to={match.url || ""}>{breadcrumb}</Link>
        {index < breadcrumbs.length - 1 && " »"}
      </div>
    ))}
  </div>
);

export default Breadcrumbs()(PureBreadcrumbs);