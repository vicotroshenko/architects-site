'use client';

import clsx from 'clsx';
import React from 'react';
import {
  Control,
  FieldPathByValue,
  FieldValue,
  FieldValues,
  PathValue,
  useController,
} from 'react-hook-form';

type TPath = FieldPathByValue<FieldValues, unknown | null | undefined>;

type FieldProps = {
  control: Control<FieldValue<FieldValues>>;
  defaultValue?: PathValue<FieldValues, TPath>;
  name: TPath;
  type: string;
  placeholder?: string;
  wrapperClassName?: string;
};

const Field: React.FC<FieldProps> = ({
  type,
  placeholder,
  wrapperClassName,
  ...props
}) => {
  const { field, fieldState } = useController(props);
  return (
    <>
      <input
        {...props}
        {...field}
        type={type}
        placeholder={placeholder}
        className={clsx(
          'py-[15px] px-[21px] w-full bg-gray-f3 text-gray-dark text-sm tracking-wider',
          wrapperClassName
        )}
      />
      {fieldState.invalid && <span>error massage</span>}
    </>
  );
};

export default Field;
