import { View, Text } from "react-native";
import React from "react";
import { SocialIcon } from "react-native-elements";

export default function GoogleForm() {
  return (
    <>
      <SocialIcon
        title="Iniciar sesion con tu correo institucional"
        button
        type="google"
      />
    </>
  );
}
