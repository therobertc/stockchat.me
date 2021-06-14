import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>STOCKCHAT</title>
        <meta name="description" content="Group chats with your friends" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={
          {
            // justifyContent: "space-between",
            // flexDirection: "row",
            // display: "flex",
            // flex: 1,
            // width: "100%",
            // paddingLeft: 30,
            // paddingRight: 30,
            // paddingTop: 20,
          }
        }
      >
        {/* <img width={250} height={50} src="../logo.png" alt="next" /> */}
        {/* <h1 style={{ textAlign: "left" }}> Search</h1> */}
        {/* <body style={{ textAlign: "left", fontSize: 30, fontWeight: "bold" }}>
          💬 stockchat
        </body> */}

        {/* <div style={{ flexDirection: "row", display: "flex" }}>
          <Link href="/Home">
            <body
              style={{
                fontWeight: 500,
                fontSize: 20,
                paddingRight: 20,
                color: "#657786",
              }}
            >
              🏠 Home
            </body>
          </Link>

          <Link href="/Bots">
            <a
              style={{
                fontWeight: 500,
                fontSize: 20,
                paddingRight: 20,
                color: "#657786",
              }}
            >
              🤖 Bots
            </a>
          </Link>
          {/* <a
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
          </a> */}
        {/* <a
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
          </div> */}
      </div>

      <main className={styles.main}>
        <h1 className={styles.logo}>Stock Chat</h1>
        <h1 className={styles.title}>
          Group Messaging for Investors <br></br>💬 💸 ✨
        </h1>

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
        <a
          href="https://twitter.com/stockchatme"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: 500, color: "lightgrey" }}
        >
          © stockchat
        </a>
      </footer>
    </div>
  );
}
