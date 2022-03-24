import React from "react";

import { InputText } from "../InputText";

import { Control, Controller } from "react-hook-form";

import { Container } from "./styles";

import { TextInputProps } from "react-native";

interface Props extends TextInputProps {
  control: Control;
  name: string;
}

export function InputTextForm({ control, name, ...rest }: Props) {
  return (
    <Container>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <InputText
            onChangeText={onChange}
            defaultValue={value && value.toString()}
            {...rest}
          />
        )}
      />
    </Container>
  );
}
