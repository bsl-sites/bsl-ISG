import Head from "next/head";
import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";
import HeroBackgroundImage from "../components/HeroBackgroundImage";
import HomePageLayout from "../components/HomePageLayout";
import Services1 from "../components/Services1";
import Services2 from "../components/Services2";
import Services3 from "../components/Services3";

export default function Home() {
  return (
    <HomePageLayout>
      <HeroBackgroundImage />
      <Services1 />
      <Services2 />
      <Services3 />
      <Footer />
    </HomePageLayout>
  );
}
