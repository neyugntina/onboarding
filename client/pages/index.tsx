import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { GetAll, GetOne } from "@/pages/api";

const inter = Inter({ subsets: ["latin"] });

export default function Home(this: any, {}) {
  return (
    <div>
      <button onClick={GetAll}>GetAll</button>
      {/* let userId =
      <input type="text" name="idx" value={} placeholder="Enter the idx..." />
      <button onClick={GetOne({ id: userId })}>GetOne</button> */}
    </div>
  );
}
