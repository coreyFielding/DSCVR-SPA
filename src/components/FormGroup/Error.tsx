import React, { useState, useContext, useEffect } from "react";

interface IError {
  error: any;
}

export const Error = ({ error }: IError) => {
  return error ? (
    <div className="w-full">
      <p className="text-red-600">{error}</p>
    </div>
  ) : null;
};
