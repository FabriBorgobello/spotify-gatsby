import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";
import { useWindowSize } from "../hooks/useWindowSize";

const IndexPage = () => {
  const { width } = useWindowSize();

  return (
    <Layout pageTitle="Home">
      <section className="bg-green-light text-blue py-16 px-4	md:px-0">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center xl:items-start xl:flex-row ">
          <article className="md:mr-5 pb-12 xl:pb-0 px-4">
            <p className="text-xs md:text-sm text-center xl:text-left mt-4 mb-8 font-medium">SPOTIFY PREMIUM</p>
            <h1 className="text-2xl md:text-6xl text-center xl:text-left font-black">Get 3 months of Premium for free</h1>
            <h2 className="mt-8 text-lg md:text-2xl text-center xl:text-left">
              Enjoy ad-free music, offline listening, and more. Cancel anytime.
            </h2>
            <div className="flex justify-center xl:justify-start">
              <button className="mt-9 text-sm py-4 px-12 bg-blue text-white font-bold rounded-3xl tracking-wider transform hover:scale-105 transition-transform">
                GET 3 MONTHS FREE
              </button>
            </div>
          </article>
          {width >= 768 ? (
            <StaticImage
              placeholder="dominantColor"
              layout={"fixed"}
              width={400}
              className="flex md:flex-shrink-0 pb-12 xl:pb-0"
              alt=""
              src="https://i.scdn.co/image/ab671c3d0000f430f0d170dfe2d4f4e2ec3eadde"
            />
          ) : (
            <StaticImage
              placeholder="dominantColor"
              layout={"fixed"}
              width={320}
              className="flex md:flex-shrink-0 pb-12 xl:pb-0"
              alt=""
              src="https://i.scdn.co/image/ab671c3d0000f430f0d170dfe2d4f4e2ec3eadde"
            />
          )}
        </div>
      </section>

      <section className="bg-home-pattern xl:bg-home-pattern-xl bg-cover bg-no-repeat bg-blue-light text-green bg-center xl:bg-right">
        <article className="max-w-screen-lg mx-auto pt-16 pb-48 xl:pb-80 px-4">
          <p className="text-center xl:text-left text-xs md:text-sm mt-4 mb-24 xl:mb-8 font-medium">SPOTIFY FREE</p>
          <h1 className="text-center xl:text-left text-2xl md:text-6xl font-black">Listening is everything</h1>
          <h2 className="text-center xl:text-left mt-8 text-lg md:text-2xl">Millions of songs and podcasts. No credit card needed.</h2>
          <div className="flex justify-center xl:justify-start">
            <button className="mt-9 text-sm py-4 px-12 text-blue bg-green font-bold rounded-3xl tracking-wider transform hover:scale-105 transition-transform">GET SPOTIFY FREE</button>
          </div>
        </article>
      </section>
    </Layout>
  );
};
export default IndexPage;
