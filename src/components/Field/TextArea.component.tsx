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

import ErrorText from './ErrorText.component';

type TPath = FieldPathByValue<FieldValues, unknown | null | undefined>;

type TextAreaProps = {
  control: Control<FieldValue<FieldValues>>;
  defaultValue?: PathValue<FieldValues, TPath>;
  name: TPath;
  placeholder?: string;
  wrapperClassName?: string;
};

const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  wrapperClassName = '',
  ...props
}) => {
  const { field, fieldState } = useController(props);
  return (
    <>
      <textarea
        {...props}
        {...field}
        placeholder={placeholder}
        className={clsx(
          'py-[15px] px-[21px] w-full bg-gray-f3 text-gray-dark text-sm tracking-wider h-[147px]',
          wrapperClassName
        )}
      />
      {fieldState.invalid && <ErrorText error={fieldState.error?.message} />}
    </>
  );
};

export default TextArea;
