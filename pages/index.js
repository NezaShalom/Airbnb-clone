import Head from 'next/head'
import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
import Footer from "../components/Footer";


export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />

      {/* Main: explore nearby */}

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* Pull some data from a server - API endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map(({ img, location, distance }, index) => (
                <SmallCard
                key={index}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div
            className="flex space-x-3 
          overflow-scroll scrollbar-hide p-3 -ml-3"
          >
            {cardsData?.map(({ img, title }, index) => (
              <MediumCard 
                key={index}
                img={img} 
                title={title}
             />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get inspired."
        />

      </main>
      
      <Footer />
    </div>
  );
}

//Static server rendering: Static generation of data

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then(
    (res) => res.json()
  );

  return {
    props: { exploreData, cardsData },
  };
}
