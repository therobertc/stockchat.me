import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { ReactElement } from "react";
import NewsTabs from "../Components/NewsTabs";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "0 0.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#000",
        marginTop: 10,
      }}
    >
      <Head>
        <title>#STOCKCHAT</title>
        <meta name="description" content="Group chats with your friends" />
        <link rel="icon" href="/icon.png" />
        {/* <script
          async
          src="https://unpkg.com/emojisplosion/lib/easy.js"
        ></script> */}
      </Head>

      <Desktop>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
            //flex: 1,
            width: "200vh",
            alignItems: "center",
          }}
        >
          <p
            style={{
              color: "#FFF",
              fontSize: 24,
              fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
              //marginBottom: 50,
              textAlign: "center",
              fontWeight: 600,
              marginLeft: 10,
            }}
          >
            GOATFEED
          </p>
          {/* <img width={250} height={70} src="../logotext.png" alt="next" /> */}
          <div
            style={{
              //   flex: 1,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              //width: 200,
              height: 50,
              borderWidth: 2,
              borderColor: "#FFF",
              backgroundColor: "grey",
              borderRadius: 25,
              padding: 30,
            }}
          >
            <div
              style={{
                backgroundColor: "green",
                height: 20,
                width: 20,
                borderRadius: 10,
              }}
            ></div>
            <p
              style={{
                color: "#FFF",
                fontSize: 18,
                fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                //marginBottom: 50,
                textAlign: "center",
                fontWeight: 600,
                marginLeft: 10,
              }}
            >
              0x23823238732872342132
            </p>
          </div>
        </div>
        <main className={styles.dmain}>
          <div
            style={{
              width: 300,
              //height: "70%",
              borderRadius: 20,
              //   justifyContent: "inherit",
              backgroundColor: "#FFF",
              padding: 20,
              //alignSelf: "flex-end",
              margin: 10,
            }}
          >
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                //justifyContent: "center",
                flex: 1,
                paddingBottom: 80,
              }}
            >
              <p
                style={{
                  color: "#000",
                  fontSize: 18,
                  fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                  //marginBottom: 50,
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                Portfolio
              </p>
            </div>

            <div
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  color: "#000",
                  fontSize: 18,
                  fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                  //marginBottom: 50,
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                FEED
              </p>
              <p
                style={{
                  color: "#000",
                  fontSize: 18,
                  fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                  //marginBottom: 50,
                  textAlign: "center",
                  fontWeight: 600,
                  marginLeft: 10,
                }}
              >
                $10.29
              </p>
            </div>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  color: "#000",
                  fontSize: 18,
                  fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                  //marginBottom: 50,
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                FEED
              </p>
              <p
                style={{
                  color: "#000",
                  fontSize: 18,
                  fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                  //marginBottom: 50,
                  textAlign: "center",
                  fontWeight: 600,
                  marginLeft: 10,
                }}
              >
                $10.29
              </p>
            </div>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  color: "#000",
                  fontSize: 18,
                  fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                  //marginBottom: 50,
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                FEED
              </p>
              <p
                style={{
                  color: "#000",
                  fontSize: 18,
                  fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                  //marginBottom: 50,
                  textAlign: "center",
                  fontWeight: 600,
                  marginLeft: 10,
                }}
              >
                $10.29
              </p>
            </div>

            <div
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  color: "#000",
                  fontSize: 18,
                  fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                  //marginBottom: 50,
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                FEED
              </p>
              <p
                style={{
                  color: "#000",
                  fontSize: 18,
                  fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                  //marginBottom: 50,
                  textAlign: "center",
                  fontWeight: 600,
                  marginLeft: 10,
                }}
              >
                $10.29
              </p>
            </div>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  color: "#000",
                  fontSize: 18,
                  fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                  //marginBottom: 50,
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                FEED
              </p>
              <p
                style={{
                  color: "#000",
                  fontSize: 18,
                  fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                  //marginBottom: 50,
                  textAlign: "center",
                  fontWeight: 600,
                  marginLeft: 10,
                }}
              >
                $10.29
              </p>
            </div>
          </div>
          <div
            style={{
              //width: 800,
              //height: "80%",
              backgroundColor: "#FFF",
              padding: 10,
              //alignSelf: "flex-end",
              margin: 10,
              borderRadius: 20,
              flex: 1,
            }}
          >
            <NewsTabs></NewsTabs>
          </div>
        </main>
        <footer className={styles.footer}>
          <a
            href="https://twitter.com/stockchatme"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: 500, color: "lightgrey" }}
          >
            © 2021 Stock Software, Inc. All Rights Reserved.
          </a>
        </footer>
      </Desktop>
      <Mobile>
        <main className={styles.main}>
          <img width={250} height={70} src="../logotext.png" alt="next" />

          <div
            style={{
              //   flex: 1,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              //width: 200,
              height: 50,
              borderWidth: 2,
              borderColor: "#FFF",
              backgroundColor: "grey",
              borderRadius: 25,
              padding: 30,
            }}
          >
            <div
              style={{
                backgroundColor: "lightgrey",
                height: 20,
                width: 20,
                borderRadius: 10,
              }}
            ></div>
            <p
              style={{
                color: "#FFF",
                fontSize: 18,
                fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                //marginBottom: 50,
                textAlign: "center",
                fontWeight: 600,
                marginLeft: 10,
              }}
            >
              Connect Wallet
            </p>
          </div>
        </main>
        <footer className={styles.footer}>
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
}
