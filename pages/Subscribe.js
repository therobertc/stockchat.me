import Head from "next/head";
import styles from "../styles/Home.module.css";
import Feed from "../components/Feed";

import { useMediaQuery } from "react-responsive";

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

export default function Subscribe() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stockchat</title>
        <meta name="description" content="Group chats with your friends" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Desktop>
        <div
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            display: "flex",
            flex: 1,
            width: "100%",
            paddingLeft: 30,
            paddingRight: 30,
            paddingTop: 20,
          }}
        >
          {/* <img width={250} height={50} src="../logo.png" alt="next" /> */}
          {/* <h1 style={{ textAlign: "left" }}> Search</h1> */}
          <body style={{ textAlign: "left", fontSize: 30, fontWeight: "bold" }}>
            💬 stockchat
          </body>

          <div style={{ flexDirection: "row", display: "flex" }}>
            <a
              href="https://twitter.com/stockchatme"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontWeight: 500,
                fontSize: 20,
                paddingRight: 20,
                color: "#657786",
              }}
            >
              💸 Docs
            </a>
            <a
              href="https://twitter.com/stockchatme"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontWeight: 500,
                fontSize: 20,
                paddingRight: 20,
                color: "#657786",
              }}
            >
              🐦 Twitter
            </a>
            <a
              href="mailto:stockchatapp@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontWeight: 500,
                fontSize: 20,
                paddingRight: 20,
                color: "#657786",
              }}
            >
              📮 Contact
            </a>
          </div>
        </div>

        <div style={{ flex: 1 }}>
          {/* <Field
            name="number"
            component="input"
            type="text"
            pattern="[\d| ]{16,22}"
            placeholder="Card Number"
            format={formatCreditCardNumber}
          /> */}
          <form>"SUBSCRIBE"</form>
        </div>

        <footer className={styles.footer}>
          <a
            href="https://twitter.com/stockchatme"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: 500, color: "lightgrey" }}
          >
            © stockchat
          </a>
        </footer>
      </Desktop>
    </div>
  );
}
