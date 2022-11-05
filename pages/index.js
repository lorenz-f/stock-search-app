import React from "react";
import Head from "next/head";
import StockInfo from "./components/StockInfo";
import StockList from "./components/StockList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 
const isBrowser = typeof window !== "undefined";

export default function Home() {
  return isBrowser ? (
    <>
      <BrowserRouter>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"/>
        </Head>
        <Routes>
          <Route path="/" element={<StockList />}></Route>
          <Route path="/:symbol" element={<StockInfo />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  ) : null;
}
