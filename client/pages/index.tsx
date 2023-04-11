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
import { CreateButton } from "@/components/create-button";
import { GetAllButton } from "@/components/get-all-button";
import { EditButton } from "@/components/edit-button";
import { DeleteButton } from "@/components/delete-button";
import { GetOneButton } from "@/components/get-one-button";

export default function Home(this: any, {}) {
  return (
    <ChakraProvider>
      <Tabs variant="enclosed">
        <TabList>
          <Tab>Get All</Tab>
          <Tab>Get One</Tab>
          <Tab>Edit</Tab>
          <Tab>Delete</Tab>
          <Tab>Create</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <GetAllButton />
          </TabPanel>
          <TabPanel>
            <GetOneButton />
          </TabPanel>
          <TabPanel>
            <EditButton />
          </TabPanel>
          <TabPanel>
            <DeleteButton />
          </TabPanel>
          <TabPanel>
            <CreateButton />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ChakraProvider>
  );
}
