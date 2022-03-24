import React from "react";

import {
  Container,
  Content,
  Title,
  About,
  ButtonContainer,
  Error,
} from "./styles";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { InputTextForm } from "../../components/InputTextForm";

import { useNavigation, useRoute } from "@react-navigation/native";

import { useForm } from "react-hook-form";

import api from "../../services/api";
import uuid from "react-native-uuid";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Footer } from "../../components/Footer";

interface FormProps {
  ds_topico: string;
  ds_mensagem: string;
}

const schema = Yup.object().shape({
  ds_topico: Yup.string().required("O topico é obrigatorio"),
  ds_mensagem: Yup.string().required("A mensagem é obrigatoria"),
});

//

export function RegisterTopic() {
  const navigation: any = useNavigation();
  const route = useRoute();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: route.params?.topic,
  });

  async function handleRegisterTopico(form: FormProps) {
    const newTopic = {
      idtopico: String(uuid.v4()),
      ds_topico: form.ds_topico,
      ds_mensagem: form.ds_mensagem,
      nm_usuario: "Renner Alves",
    };

    try {
      if (route.params?.topic.idtopico) {
        await api.put(`/Topico/${route.params.topic.idtopico}`, {
          idtopico: route.params.topic.idtopico,
          ds_topico: form.ds_topico,
          ds_mensagem: form.ds_mensagem,
          nm_usuario: "Renner Alves",
        });
      } else {
        await api.post("/Topico", newTopic);
      }

      reset();
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Header title="Tópico" />

      <Content>
        <Title>Tópico</Title>
        <InputTextForm name="ds_topico" control={control} />
        {errors.ds_topico && <Error>{errors.ds_topico.message}</Error>}

        <About>Mensagem</About>
        <InputTextForm name="ds_mensagem" control={control} />
        {errors.ds_mensagem && <Error>{errors.ds_mensagem.message}</Error>}

        <ButtonContainer>
          <Button
            title="Postar"
            color="blue"
            onPress={handleSubmit(handleRegisterTopico)}
          />
        </ButtonContainer>
      </Content>

      <Footer />
    </Container>
  );
}
