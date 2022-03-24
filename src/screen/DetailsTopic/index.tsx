import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { FontAwesome } from "@expo/vector-icons";
import {
  Container,
  Content,
  ButtonContainer,
  Name,
  About,
  ContName,
  Main,
} from "./styles";
import { Header } from "../../components/Header";

import { useNavigation, useRoute } from "@react-navigation/native";
import api from "../../services/api";
import { ItemDTO } from "../../dtos/ItemDTO";
import { Footer } from "../../components/Footer";
import { Alert } from "react-native";

interface Params {
  idtopico: string;
}

export function DetailsTopic() {
  const navigation: any = useNavigation();
  const route = useRoute();
  const { idtopico } = route.params as Params;
  const [topic, setTopic] = useState<ItemDTO>(Object);

  useEffect(() => {
    async function loadData() {
      try {
        const reponse = await api.get(`/Topico/${idtopico}`);
        setTopic(reponse.data);
      } catch (error) {
        console.log(error);
      }
    }

    loadData();
  }, []);

  async function handleDeleteTopic() {
    try {
      await api.delete(`/Topico/${topic.idtopico}`);
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
  }

  function EditTopic(project: ItemDTO) {
    navigation.navigate("RegisterTopic", { topic });
  }
  async function DeleteTopic() {
    await api.delete(`/projects/${topic.idtopico}`).then(() => {
      navigation.navigate("Home");
    });
  }
  function openAlert() {
    Alert.alert(
      `Você deseja deletar?`,
      "",
      [
        { text: "Cancelar" },
        { text: "Deletar", onPress: () => handleDeleteTopic() },
      ],
      { cancelable: false }
    );
  }

  return (
    <Container>
      <Header title={topic.ds_topico} />

      <Main>
        <Content>
          <ContName>
            <FontAwesome name="user-circle-o" size={50} color="black" />
            <Name>{topic.nm_usuario}</Name>
          </ContName>

          <About>{topic.ds_mensagem}</About>
        </Content>

        <ButtonContainer>
          <Button
            title="Editar"
            color="#55BA43"
            onPress={() => EditTopic(topic)}
          />
          <Button title="Remover" color="#FA180C" onPress={openAlert} />
        </ButtonContainer>
      </Main>

      <Footer />
    </Container>
  );
}
