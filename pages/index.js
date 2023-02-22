import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Price from "@/components/Price";
import Trainer from "@/components/Trainer";
import Welcome from "@/components/Welcome";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <Features />
        <Welcome />
        <Gallery />
        <Trainer />
        <Price />
        <Contact />
      </main>
    </>
  );
}
