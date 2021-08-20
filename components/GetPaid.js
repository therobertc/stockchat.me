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
        //height: "100vh",
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
            justifyContent: "center",
            flexDirection: "row",
            display: "flex",
            flex: 1,
            width: "100%",

            paddingTop: 20,
            backgroundColor: "#000",
          }}
        >
          <main className={styles.main}>
            <p
              style={{
                color: "#FFF",
                fontSize: 50,
                fontFamily: "monospace",
                marginBottom: 40,
                textAlign: "center",
                fontWeight: 800,
              }}
            >
              Get Paid to Share Daily Market Updates
            </p>

            <p
              style={{
                color: "#FFF",
                fontSize: 20,
                fontFamily: "monospace",
                marginBottom: 50,
                textAlign: "center",
                fontWeight: 800,
              }}
            >
              Start a group. Build your community. Make money from
              subscriptions.
            </p>

            <a
              href="/Features"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#147efb",
                borderRadius: 10,
                //padding: 0.5,
                paddingLeft: 20,
                paddingRight: 20,
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
              <p
                style={{
                  color: "#FFF",
                  fontSize: 20,
                  //fontFamily: "monospace",
                  //fontWeight: 800,
                }}
              >
                Get Started
              </p>
            </a>
          </main>
        </div>
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
