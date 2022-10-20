import { ChangeEvent, useState } from "react";

export const useForm = <T>(initialState: T) => {
  const [formData, setFormData] = useState(initialState);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return {
    formData,
    ...formData,
    onChange
  };
};
