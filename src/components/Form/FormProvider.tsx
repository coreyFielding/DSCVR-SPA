import React, { createContext, useState, useEffect } from "react";

export const FormContext = createContext(undefined);
export const FormDispatchContext = createContext(undefined);

export const FormProvider = ({ children, initialVals }: any) => {
  const [formDetails, setFormDetails] = useState({
    initialVals,
  });

  useEffect(() => {
    return setFormDetails(null);
  });

  return (
    <FormContext.Provider value={formDetails}>
      <FormDispatchContext.Provider value={setFormDetails}>
        {children}
      </FormDispatchContext.Provider>
    </FormContext.Provider>
  );
};
