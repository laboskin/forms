import React from 'react';
import { FieldInputProps } from 'formik';
import { ErrorWrapper, StyledInput } from './styled';

type InputProps = {
  type: string;
  placeholder?: string;
  field: FieldInputProps<string>;
  form: {
    touched: Record<string, boolean>;
    errors: Record<string, string | string[]>;
  };
};

export const Input: React.FC<InputProps> = ({ placeholder, type, field, form, ...props }) => {
  return (
    <div>
      <StyledInput
        autoComplete={field.name}
        placeholder={placeholder}
        type={type}
        {...field}
        {...props}
      />
      <ErrorWrapper>{form.touched[field.name] && form.errors[field.name]}</ErrorWrapper>
    </div>
  );
};
