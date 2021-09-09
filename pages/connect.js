import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { ReactElement } from "react";
import NewsTabs from "../Components/NewsTabs";
import {
  faWallet,
  faHome,
  faTrending,
} from "@fortawesome/free-solid-svg-icons";

import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import Lock from "@material-ui/icons/Lock";

import StockAlerts from "../components/StockAlerts";
import Chat from "@material-ui/icons/Chat";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WSBTrends from "../Components/WSBTrends";

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
        backgroundColor: "#F5F5F5",
        // marginTop: 10,
        flex: 1,
      }}
    >
      <Head>
        <title>COINCHAT</title>
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
              color: "#000",
              fontSize: 24,
              fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
              //marginBottom: 50,
              textAlign: "center",
              fontWeight: 600,
              marginLeft: 10,
            }}
          >
            COINCHAT
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
              border: "solid",
              borderWidth: 1,
              borderColor: "#000",
              //backgroundColor: "grey",
              borderRadius: 25,
              padding: 20,
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
                color: "#000",
                fontSize: 18,
                fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                //marginBottom: 50,
                textAlign: "center",
                fontWeight: 400,
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
              // width: 300,
              //height: "70%",
              borderRadius: 20,
              //   justifyContent: "inherit",
              backgroundColor: "#FFF",
              padding: 10,
              //alignSelf: "flex-end",
              margin: 10,
              alignItems: "center",
            }}
          >
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                flex: 1,
                //paddingBottom: 80,
              }}
            >
              {/* <p
                style={{
                  color: "#000",
                  fontSize: 18,
                  fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                  //marginBottom: 50,
                  //textAlign: "center",
                  fontWeight: 600,
                }}
              >
                Portfolio
              </p> */}

              <img
                width={50}
                height={50}
                style={{
                  backgroundColor: "green",
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                  marginRight: 10,
                }}
                src="../punk.png"
                alt="next"
              />

              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                  //width: 200,
                  height: 50,
                  border: "solid",
                  borderWidth: 1,
                  borderColor: "#000",
                  //backgroundColor: "grey",
                  borderRadius: 25,
                  padding: 20,
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
                    color: "#000",
                    fontSize: 18,
                    fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                    //marginBottom: 50,
                    textAlign: "center",
                    fontWeight: 400,
                    marginLeft: 10,
                  }}
                >
                  0x2382323...72342132
                </p>
              </div>
            </div>

            <div>
              <WSBTrends></WSBTrends>
            </div>

            <div
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flex: 1,
                paddingTop: 20,
              }}
            >
              {/* <p
                style={{
                  color: "#000",
                  fontSize: 18,
                  fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                  //marginBottom: 50,
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                Wallet
              </p> */}

              {/* <FontAwesomeIcon
                style={{
                  color: "#000",
                  fontSize: 18,
                  fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                  //marginBottom: 50,
                  textAlign: "center",
                  fontWeight: 600,
                }}
                icon={faWallet}
              /> */}

              {/* <Chat></Chat>

              <AccountBalanceWalletIcon></AccountBalanceWalletIcon>
              <Lock></Lock> */}
            </div>
          </div>
          <div
            style={{
              //width: 800,
              //height: "80%",
              height: 500,
              //backgroundColor: "#FFF",
              //padding: 20,
              //alignSelf: "flex-end",

              borderRadius: 20,
              flex: 1,
            }}
          >
            <div>
              <form className={styles.postform}>
                <div>
                  <img
                    width={50}
                    height={50}
                    style={{
                      backgroundColor: "green",
                      height: 50,
                      width: 50,
                      borderRadius: 25,
                      marginRight: 10,
                    }}
                    src="../punk.png"
                    alt="next"
                  />
                </div>
                <input
                  // type="text"
                  className={styles.postfeild}
                  // maxlength="17"
                  name="email"
                  data-name="Email"
                  placeholder="say something..."
                  id="email"
                  required=""
                />
              </form>
              <a
                type="submit"
                value=">"
                href="/auth"
                // data-wait="Get Started"
                className={styles.postsubmit}
              >
                <p style={{ fontSize: 20 }}>send it</p>
              </a>
            </div>

            {/* <NewsTabs></NewsTabs> */}
            <StockAlerts></StockAlerts>
          </div>
        </main>
        <footer className={styles.footer}>
          <a
            href="https://twitter.com/stockchatme"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: 500, color: "lightgrey" }}
          >
            © 2021 Coin Chat, Inc. All Rights Reserved.
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
            © 2021 Coin Chat, Inc. All Rights Reserved.
          </a>
        </footer>
      </Mobile>
    </div>
  );
}
