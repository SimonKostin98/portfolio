import { CustomTextField } from '@components/customizations/customTextField.component';
import { TextFieldProps } from '@mui/material';
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
} from 'react-hook-form';

interface FormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<ControllerProps<TFieldValues, TName>, 'render'> {
  label: string;
  textFieldProps?: Omit<
    TextFieldProps,
    'label' | 'error' | 'helperText' | 'value' | 'onChange' | 'onBlur' | 'name'
  >;
  required?: boolean;
}

const passWordManagerIgnoreProps = {
  'data-1p-ignore': true,
  'data-lpignore': 'true',
  'data-form-type': 'other',
  'data-bwignore': true,
} as const;

export const TextFormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  control,
  name,
  label,
  textFieldProps,
  required = false,
  ...controllerProps
}: FormFieldProps<TFieldValues, TName>) => {
  return (
    <Controller
      control={control}
      name={name}
      {...controllerProps}
      render={({ field, fieldState: { error } }) => (
        <CustomTextField
          {...field}
          {...textFieldProps}
          label={label}
          required={required}
          error={!!error}
          helperText={error?.message || ''}
          autoComplete="off"
          slotProps={{
            ...textFieldProps?.slotProps,
            htmlInput: {
              ...passWordManagerIgnoreProps,
              ...textFieldProps?.inputProps,
              ...textFieldProps?.slotProps?.htmlInput,
            },
          }}
        />
      )}
    />
  );
};
