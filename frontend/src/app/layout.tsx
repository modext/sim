"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import "@shopify/polaris/build/esm/styles.css";
import { AppProvider } from "@shopify/polaris";
import React from "react";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <AppProvider i18n={{}}>
      <div lang="en">
        <body className="{inter.className}">{props.children}</body>
      </div>
    </AppProvider>
  );
}
