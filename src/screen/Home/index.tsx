import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { StatusBar } from "react-native";
import { Header } from "../../components/Header";
import { TopicItem } from "../../components/TopicItem";
import { ItemDTO } from "../../dtos/ItemDTO";
import { Footer } from "../../components/Footer";
import api from "../../services/api";

import { Container, Content, ContentCard, TopicList } from "./styles";

export function Home() {
  const [topic, setTopic] = useState<ItemDTO[]>();

  useFocusEffect(
    useCallback(() => {
      async function loadDate() {
        try {
          const response = await api.get("/Topico");

          setTopic(response.data);
        } catch (error) {
          console.log(error);
        }
      }

      loadDate();
    }, [])
  );
  function handleTopic(idtopico: string) {
    navigation.navigate("DetailsTopic", { idtopico });
  }

  const navigation: any = useNavigation();
  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <Header title="Últimas Postagens" />

      <Content>
        <ContentCard>
          <TopicList
            data={topic}
            keyExtractor={(item) => item.idtopico}
            renderItem={({ item }: { item: ItemDTO }) => (
              <TopicItem
                data={item}
                onPress={() => handleTopic(item.idtopico)}
              />
            )}
          />
        </ContentCard>
      </Content>

      <Footer />
    </Container>
  );
}
