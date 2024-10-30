// "use client"
import Image from "next/image";
import Header from "./component/header/header"
import Innovation from "./component/innovation/innovation"
import Benefit from "./component/benefit/benefit.js"
import Step from "./component/step/step"
import PriceCard from "./component/pricecard/pricecard"
import Faq from "./component/faq/faq"
import Testmonial from './component/testmonial/testmonial';
import Footer from './component/footer/footer';
import { currentUser } from "@clerk/nextjs/server";
// import { loadStripe } from '@stripe/stripe-js'
// import { Elements } from '@stripe/react-stripe-js'
// import "./Editor.css"

// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
// )

export default async function Home() {

  const user = await currentUser();
  const userLogin = user ? true : false;

  return (
    // <Elements stripe={stripePromise}>
    <div>
      <Header />
      <Innovation />
      <Benefit />
      <Step />
      <PriceCard user={userLogin} />
      <Faq />
      <Testmonial />
      <Footer />
    </div>
    // </Elements>
  );
}
