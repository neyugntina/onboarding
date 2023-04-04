import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
const inter = Inter({ subsets: ["latin"] });
import {
  Button,
  Center,
  ChakraProvider,
  Grid,
  GridItem,
  Select,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { GetAll } from "@/components/GetAll";

export default function Home(this: any, {}) {
  const [data, setData] = useState<any[]>([]);

  const loadData = async () => {
    setData(await GetAll());
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  // const getOne = async ({ request }) => {
  //   const response = await axios.get("http://localhost:3333/api/items/:id");
  //   const test = response.data;
  //   console.log(test);
  //   const { id } = request.params;

  //   let temp: any[] = [];
  //   response.data.forEach((item: any) => {
  //     temp.push(<div>Name: {item.name}</div>);
  //   });
  //   setItemListJSX(temp);

  //   return {
  //     props: {
  //       response: test,
  //     },
  //   };
  // };

  return (
    <ChakraProvider>
      <>
        <Select
          placeholder="Select"
          onChange={(event) => {
            console.log("Selected the ID", event.target.value);
          }}
        >
          {data &&
            data.map((d, i) => (
              <option key={`item-${i}`} value={d.id}>
                {d.name}
              </option>
            ))}
        </Select>
      </>
      <Grid
        templateAreas={`"header header"
                  "nav main"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        h="200px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="orange.300" area={"header"}>
          <Center>Items in a list</Center>
        </GridItem>
        <GridItem pl="2" bg="papayawhip" area={"nav"}>
          <Stack direction="column" spacing={2} align="center">
            <Text>Buttons</Text>
            <Button colorScheme="teal" onClick={GetAll}>
              Get All
            </Button>
            <Button colorScheme="teal" onClick={GetAll}>
              Get One
            </Button>
          </Stack>
        </GridItem>
        <GridItem pl="2" bg="white.300" area={"main"}>
          {data &&
            data.map((d, i) => (
              <Text id={`item-${i}`} key={`item-${i}`}>
                {d.name}
              </Text>
            ))}
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}
