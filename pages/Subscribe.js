import Head from "next/head";
import styles from "../styles/Home.module.css";
import Feed from "../components/Feed";

export default function Subscribe() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stockchat</title>
        <meta name="description" content="Group chats with your friends" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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

      <main style={{}}>
        <div>
          <h1>"SUBSCRIBE"</h1>
        </div>
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
