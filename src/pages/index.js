import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <section className="bg-green-200 text-blue-800 py-16">
        <div className="w-10/12 lg:w-8/12 mx-auto flex">
          <article className="mr-5">
            <p className="text-left text-sm mt-4 mb-8 font-medium">SPOTIFY PREMIUM</p>
            <h1 className="text-6xl font-black">Get 3 months of Premium for free</h1>
            <h2 className="mt-8 text-2xl">Enjoy ad-free music, offline listening, and more. Cancel anytime.</h2>
            <div>
              <button className="mt-9 text-sm py-4 px-12 bg-blue-800 text-white font-bold rounded-3xl tracking-wider">
                GET 3 MONTHS FREE
              </button>
            </div>
          </article>
          <StaticImage
            width={400}
            height={400}
            className="flex flex-shrink-0"
            alt=""
            src="https://i.scdn.co/image/ab671c3d0000f430f0d170dfe2d4f4e2ec3eadde"
          />
        </div>
      </section>
      <section className="bg-home-pattern">
        <div className="mx-auto w-10/12 flex">
          <article className="mr-5">
            <p className="text-left text-sm mt-4 mb-8 font-medium">SPOTIFY PREMIUM</p>
            <h1 className="text-6xl font-black">Get 3 months of Premium for free</h1>
            <h2 className="mt-8 text-2xl">Enjoy ad-free music, offline listening, and more. Cancel anytime.</h2>
            <div>
              <button className="mt-9 text-sm py-4 px-12 bg-blue-800 text-white font-bold rounded-3xl tracking-wider">
                GET 3 MONTHS FREE
              </button>
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
};
export default IndexPage;
