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
            backgroundColor: "#000",
          }}
        >
          {/* <body style={{ textAlign: "left", fontSize: 30, fontWeight: "bold" }}>
            💬 stockchat
          </body> */}
          <img width={250} height={50} src="../logotext.png" alt="next" />

          <div
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Link href="/Home">
              <body
                style={{
                  fontWeight: 500,
                  fontSize: 20,
                  paddingRight: 20,
                  color: "#FFF",
                }}
              >
                🏠 Home
              </body>
            </Link> */}

            {/* <Link href="/Subscribe">
              <body
                style={{
                  fontWeight: 500,
                  fontSize: 20,
                  paddingRight: 20,
                  color: "#FFF",
                }}
              >
                💸 Subscribe
              </body>
            </Link> */}

            {/* <Link href="/Bots">
              <a
                style={{
                  fontWeight: 500,
                  fontSize: 20,
                  paddingRight: 20,
                  color: "#FFF",
                }}
              >
                Discord Bots
              </a>
            </Link> */}

            {/* <Link href="/Bots">
              <a
                style={{
                  fontWeight: 500,
                  fontSize: 20,
                  paddingRight: 20,
                  color: "#FFF",
                }}
              >
                API Documentation
              </a>
            </Link> */}
            {/* <Link href="/Features">
              <a
                style={{
                  fontWeight: 500,
                  fontSize: 20,
                  paddingRight: 20,
                  color: "#FFF",
                }}
              >
                Features
              </a>
            </Link> */}

            <div
              style={{
                backgroundColor: "blue",
                height: 50,
                width: 200,
                borderRadius: 30,
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
                display: "flex",
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
                ✨ Get StockChat
              </a>
            </div>

            {/* <a
              href="https://twitter.com/stockchatme"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontWeight: 500,
                fontSize: 20,
                paddingRight: 20,
                color: "#FFF",
              }}
            >
              🐦 Twitter
            </a> */}
            {/* <a
              href="mailto:stockchatapp@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontWeight: 500,
                fontSize: 20,
                paddingRight: 20,
                color: "#FFF",
              }}
            >
              📮 Contact
            </a> */}
          </div>
        </div>

        <main className={styles.main}>
          <p
            style={{
              color: "#FFF",
              fontSize: 60,
              fontFamily: "monospace",
              marginBottom: 50,
              textAlign: "center",
              fontWeight: 800,
            }}
          >
            Group Messaging for Investors
          </p>
          <p className={styles.title}>💬 💸 💎 🙌 </p>

          <a
            href="https://apps.apple.com/us/app/stock-chat-group-messaging/id1464257050"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "blue",
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
        </main>

        <div style={{ justifyContent: "flex-end", alignSelf: "flex-end" }}>
          <div
            style={{
              backgroundColor: "blue",
              height: 50,
              width: 50,
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              display: "flex",
            }}
          >
            <a
              href="https://apps.apple.com/us/app/stock-chat-group-messaging/id1464257050"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontWeight: 600,
                fontSize: 30,
                justifyContent: "center",
                alignSelf: "center",
                textAlign: "center",

                color: "#FFF",
              }}
            >
              💬
            </a>
          </div>
        </div>

        <footer className={styles.footer}>
          <a
            href="https://twitter.com/stockchatme"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: 500, color: "lightgrey" }}
          >
            © StockChat
          </a>
        </footer>
      </Desktop>
      <Mobile>
        <main className={styles.main}>
          <img width={250} height={50} src="../logotext.png" alt="next" />

          <p
            style={{
              color: "#FFF",
              fontSize: 30,
              fontFamily: "monospace",
              //marginBottom: 50,
              textAlign: "center",
              fontWeight: 800,
            }}
          >
            Group Messaging for Investors
          </p>

          {/* <p
            style={{
              color: "#FFF",
              fontSize: 20,
              fontFamily: "monospace",
              //marginBottom: 50,
              textAlign: "center",
              fontWeight: 800,
            }}
          >
            Built with Lightning ⚡️
          </p> */}

          <p style={{ fontSize: 30, lineHeight: 0.1 }}> 💬 💸 💎 🙌 </p>

          <a
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
          </a>
        </main>

        <footer className={styles.footer}>
          {/* <a
            href="https://twitter.com/stockchatme"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: 500, color: "lightgrey" }}
          >
            © StockChat
          </a> */}
        </footer>
      </Mobile>
    </div>
  );
}
