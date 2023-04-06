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
import { GetAll } from "@/components/client-calls";
import { ListItem } from "@/components/list-item";
import { RenderModal } from "@/components/get-one-modal";
import { CreateButton } from "@/components/create-button";
import { GetAllButton } from "@/components/get-all-button";
import { EditButton } from "@/components/edit-button";

export default function Home(this: any, {}) {
  // const [data, setData] = useState<any[]>([]);

  // const loadData = async () => {
  //   setData(await GetAll());
  // };

  // useEffect(() => {
  //   loadData();
  // }, []);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

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
      <Tabs variant="enclosed">
        <TabList>
          <Tab>Get All</Tab>
          <Tab>Edit/Delete</Tab>
          <Tab>Create</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <GetAllButton/>
          </TabPanel>
          <TabPanel>
            <EditButton/>
            {/* <Select
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
            </Select> */}
          </TabPanel>
          <TabPanel>
            <CreateButton />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ChakraProvider>
  );
}
