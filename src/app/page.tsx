"use client";

import { useEffect } from "react";
import Head from "next/head";

export default function RootPage() {
  useEffect(() => {
    window.location.replace("/hu/");
  }, []);

  return (
    <>
      <Head>
        <title>CyberLabs Web - Céges Weboldal Készítés Garanciával</title>
        <meta name="description" content="Professzionális weboldal készítés garanciával. Modern, AI-optimalizált weboldalak céges ügyfeleknek Budapesten." />
        <link rel="canonical" href="https://cyberlabsweb.com/hu/" />
        <meta httpEquiv="refresh" content="0;url=/hu/" />
      </Head>
      <main className="min-h-screen bg-[#040812] flex items-center justify-center text-white">
        <div className="w-8 h-8 rounded-full border-2 border-[#4F8AFF] border-t-transparent animate-spin" />
      </main>
    </>
  );
}
