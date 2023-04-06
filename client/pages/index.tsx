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
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { GetAll, GetOne } from "@/components/GetAll";
import { ListItem } from "@/components/list-item";
import { RenderModal } from "@/components/get-one-modal";
import { CreateButton } from "@/components/create-button";

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

  const { getDisclosureProps, getButtonProps } = useDisclosure();

  const buttonProps = getButtonProps();
  const disclosureProps = getDisclosureProps();

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
      {/* <>
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
      </> */}
      <Tabs variant="enclosed">
        <TabList>
          <Tab>Get All</Tab>
          <Tab>Get One</Tab>
          <Tab>Create</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Button colorScheme="teal" onClick={GetAll}>
              Get All
            </Button>
            {data &&
              data.map((d, i) => (
                <ListItem
                  key={`item-${i}`}
                  name={d.name}
                  description={d.description}
                />
              ))}
          </TabPanel>
          <TabPanel>
            <Button {...buttonProps} colorScheme="teal">
              Get One
            </Button>
            <Select
              {...disclosureProps}
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
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      {/* <Grid
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
            <Button {...buttonProps} colorScheme="teal">
              Get One
            </Button>
            <CreateButton name={""} description={""}/>
          </Stack>
        </GridItem>
        <GridItem pl="2" bg="white.300" area={"main"}>
          {data &&
            data.map((d, i) => (
              <ListItem
                key={`item-${i}`}
                name={d.name}
                description={d.description}
              />
            ))}
          <Select
            {...disclosureProps}
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
        </GridItem>
      </Grid> */}
    </ChakraProvider>
  );
}
