import React from "react";
import Header from "./Header";

export default function Hero({ navData, heroData }) {
  return (
    <section className="bg-primary h-screen">
      <Header navData={navData} heroData={heroData}></Header>
      {/* <section>
        <h1>Hero</h1>
      </section> */}
    </section>
  );
}
