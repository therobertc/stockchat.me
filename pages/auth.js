import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
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
        <main className={styles.main}>
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img width={250} height={70} src="../logotext.png" alt="next" />

            <p
              style={{
                color: "#FFF",
                fontSize: 30,
                fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                //marginBottom: 50,
                textAlign: "center",
                fontWeight: 800,
              }}
            >
              Enter your email
            </p>

            <form className={styles.linkform}>
              <input
                type="email"
                className={styles.textfeild}
                maxlength="17"
                name="email"
                data-name="Email"
                placeholder="Email"
                id="email"
                required=""
              />
              <a
                type="submit"
                value=">"
                href="/pass"
                // data-wait="Get Started"
                className={styles.linksubmit}
              ></a>
            </form>
            {/* <a
            href="https://apps.apple.com/us/app/stock-chat-group-messaging/id1464257050"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#147efb",
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
          </a> */}
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
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img width={250} height={70} src="../logotext.png" alt="next" />

            <p
              style={{
                color: "#FFF",
                fontSize: 30,
                fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                //marginBottom: 50,
                textAlign: "center",
                fontWeight: 800,
              }}
            >
              Enter your email
            </p>

            <form className={styles.linkform}>
              <input
                type="email"
                className={styles.textfeild}
                maxlength="17"
                name="email"
                data-name="Email"
                placeholder="Email"
                id="email"
                required=""
              />
              <a
                type="submit"
                value=">"
                href="/pass"
                // data-wait="Get Started"
                className={styles.linksubmit}
              ></a>
            </form>
            {/* <a
            href="https://apps.apple.com/us/app/stock-chat-group-messaging/id1464257050"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#147efb",
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
          </a> */}
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
