import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Loading from "../Loading";
import { useFetch } from "../../hooks/redux/useFetch";

export default (Wrapped: any, params: any) => {
  const LoadingHOC = (props: any) => {
    const [loading, setLoading] = useState(true);

    const { data, pending } = useFetch({
      type: params.type,
      query: params.query,
    });

    setLoading(pending);

    return (
      <Loading loading={loading}>
        <Wrapped {...props} />
      </Loading>
    );
  };
};
