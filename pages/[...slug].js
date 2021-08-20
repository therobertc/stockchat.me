import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Profiler } from "react";
import {
  Elements,
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProfileTabs from "../Components/ProfileTabs";

import Screener from "../components/Screener";

import PaymentsForm from "../components/PaymentsForm";
import MobilePaymentsForm from "../components/MobilePaymentsForm";

const stripePromise = loadStripe("pk_test_g1bJ2jBaMjtb34TFV2BQNaip00GpsUf1Na");

const handleSubmit = (stripe, elements) => async () => {
  const cardElement = elements.getElement(CardElement);

  const { error, paymentMethod } = await stripe.createPaymentMethod({
    type: "card",
    card: cardElement,
  });

  if (error) {
    console.log("[error]", error);
  } else {
    console.log("[PaymentMethod]", paymentMethod);
    // ... SEND to your API server to process payment intent
  }
};

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {
        color: "#fce883",
      },
      "::placeholder": {
        color: "#87bbfd",
      },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

// const PaymentForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   return (
//     <>
//       <div>
//         <div
//           style={{
//             backgroundColor: "#FFF",
//             padding: 20,
//             fontSize: 30,
//             width: "100%",
//           }}
//         >
//           <CardElement
//             options={{
//               style: {
//                 base: {
//                   fontSize: "16px",
//                   flex: 1,
//                   display: "flex",
//                   width: "800px",

//                   color: "#424770",
//                   "::placeholder": {
//                     color: "#aab7c4",
//                   },
//                 },
//                 invalid: {
//                   color: "#9e2146",
//                 },
//               },
//             }}
//           />
//         </div>
//         <button
//           style={{
//             backgroundColor: "blue",
//             height: 50,
//             width: 200,
//             borderRadius: 30,
//             justifyContent: "center",
//             alignItems: "center",
//             flex: 1,
//             display: "flex",
//             fontWeight: 600,
//             fontSize: 20,

//             color: "#FFF",
//           }}
//           onClick={handleSubmit(stripe, elements)}
//         >
//           ✨ Subscribe
//         </button>

//         {/* <div
//           style={{
//             backgroundColor: "blue",
//             height: 50,
//             width: 200,
//             borderRadius: 30,
//             justifyContent: "center",
//             alignItems: "center",
//             flex: 1,
//             display: "flex",
//           }}
//         >
//           <a
//             href="https://apps.apple.com/us/app/stock-chat-group-messaging/id1464257050"
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{
//               fontWeight: 600,
//               fontSize: 20,

//               color: "#FFF",
//             }}
//           >
//             ✨ Subscribe
//           </a>
//         </div> */}
//       </div>
//     </>
//   );
// };

// const StripePaymentForm = () => (
//   <Elements stripe={stripePromise}>
//     <PaymentForm />
//   </Elements>
// );

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

const Profile = ({ data }) => {
  const router = useRouter();
  const slug = router.query.slug || [];

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "0 0.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        //height: "100vh",
        backgroundColor: "#000",
      }}
    >
      <Head>
        <title>{data.data ? data.data.username : ""} | StockChat</title>
        <meta name="description" content="Group chats with your friends" />
        <link rel="icon" href={data.data ? data.data.profile_image : ""} />
      </Head>

      <Desktop>
        <div>
          <main className={styles.main}>
            {/* <img width={250} height={50} src="../logotext.png" alt="next" /> */}
            <div
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: 300,
              }}
            >
              <img
                width={80}
                height={80}
                style={{ borderRadius: 40 }}
                src={data.data ? data.data.profile_image : ""}
                alt="next"
              />

              <p
                style={{
                  color: "#FFF",
                  fontSize: 20,
                  margin: 1,

                  fontWeight: 500,
                }}
              >
                @{data.data ? data.data.username : ""}
              </p>

              <p
                style={{
                  color: "#FFF",
                  fontSize: 18,
                  marginTop: 10,

                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                {data.data ? data.data.bio : ""}
              </p>

              {/* <PaymentsForm></PaymentsForm> */}

              <div style={{ display: "flex", flexDirection: "row" }}>
                <div
                  style={{
                    backgroundColor: "blue",
                    height: 50,
                    width: 250,
                    borderRadius: 25,
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                    display: "flex",
                    margin: 10,
                    padding: 20,
                  }}
                >
                  <a
                    href="https://apps.apple.com/us/app/stock-chat-group-messaging/id1464257050"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontWeight: 600,
                      fontSize: 20,

                      color: "#FFF",
                    }}
                  >
                    ✨ Subscribe
                  </a>
                </div>
              </div>
              <ProfileTabs></ProfileTabs>
            </div>
          </main>

          <footer className={styles.footer}>
            {/* <div
            style={{
              backgroundColor: "blue",
              height: 50,
              width: 250,
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              marginTop: 30,
              marginBottom: 20,
              padding: 20,
            }}
          >
            <a
              href="https://apps.apple.com/us/app/stock-chat-group-messaging/id1464257050"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontWeight: 600,
                fontSize: 20,
                textAlign: "center",

                color: "#FFF",
              }}
            >
              ✨ Subscribe
            </a>
          </div> */}

            <a
              href="https://twitter.com/stockchatme"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: 500, color: "lightgrey" }}
            >
              © 2021 Stock Software, Inc. All Rights Reserved.
            </a>
          </footer>
        </div>
      </Desktop>
      <Mobile>
        <footer className={styles.footer}>
          <img width={250} height={50} src="../logotext.png" alt="next" />
        </footer>
        <img
          width={80}
          height={80}
          style={{ borderRadius: 40, marginTop: 20 }}
          src={data.data ? data.data.profile_image : ""}
          alt="next"
        />
        <div style={{ marginTop: 20 }}>
          <p
            style={{
              color: "#FFF",
              fontSize: 30,
              fontFamily: "monospace",
              //marginBottom: 20,
              //flex: 1,

              fontWeight: 800,
            }}
          >
            @{data.data ? data.data.username : ""}
          </p>
        </div>

        {/* <Screener></Screener> */}

        <main className={styles.main}>
          {/* <Screener></Screener> */}

          <div
            style={{
              height: 100,
              width: "80%",
              borderRadius: 20,
              backgroundColor: "#000",
              marginRight: 100,
              marginLeft: 100,
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <a
              href="https://apps.apple.com/us/app/stock-chat-group-messaging/id1464257050"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#FFF",
                borderRadius: 20,
                padding: 0.5,
                margin: 30,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.5,
                shadowRadius: 5.46,
                elevation: 9,
              }}
            >
              <div>
                <img src="../app-store-button.svg" alt="next" />
              </div>
            </a>
          </div>
          {/* <MobilePaymentsForm></MobilePaymentsForm> */}
        </main>

        <footer className={styles.footer}>
          {/* <div
            style={{
              backgroundColor: "blue",
              height: 50,
              width: 250,
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              marginTop: 30,
              marginBottom: 20,
              padding: 20,
            }}
          >
            <a
              href="https://apps.apple.com/us/app/stock-chat-group-messaging/id1464257050"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontWeight: 600,
                fontSize: 20,
                textAlign: "center",

                color: "#FFF",
              }}
            >
              ✨ Subscribe
            </a>
          </div> */}

          <a
            href="https://twitter.com/stockchatme"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: 500, color: "lightgrey" }}
          >
            © 2021 Stock Software, Inc. All Rights Reserved.
          </a>
        </footer>
      </Mobile>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://sharestock.io/api/stockchat/user-profile/?user=${context.params.slug}`
  );
  const json = await res.json();
  return { props: { data: json } };
};

export default Profile;
