import React, { createContext, useContext, useState, ReactNode } from "react";

interface FormData {
  bust: string;
  waist: string;
  hips: string;
  shoulderWidth: string;
  armLength: string;
  height: string;
  customRequirements: string;
}

interface FormDataContextProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const initialFormData: FormData = {
  bust: "",
  waist: "",
  hips: "",
  shoulderWidth: "",
  armLength: "",
  height: "",
  customRequirements: "",
};

const FormDataContext = createContext<FormDataContextProps | undefined>(
  undefined
);

export const useFormData = (): FormDataContextProps => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error("useFormData must be used within a FormDataProvider");
  }
  return context;
};

export const FormDataProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
