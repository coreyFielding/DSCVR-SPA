import React, { useEffect } from "react";
import { withRouter, useLocation } from "react-router-dom";
import { connect } from "react-redux";

const Dashboard: React.FC = (props: any) => {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return <div>dashboard</div>;
};

export default withRouter(connect(null)(Dashboard));
