import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import axios from "axios";
const inter = Inter({ subsets: ["latin"] });
import {
  Button,
  Center,
  ChakraProvider,
  Grid,
  GridItem,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";

export const GetAll = async () => {
  const response = await axios.get("http://localhost:3333/api/items");
  return response.data;
};
