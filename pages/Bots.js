import Head from "next/head";
import styles from "../styles/Home.module.css";
import Feed from "../components/Feed";

export default function Bots() {
  return (
    <div className={styles.botscontainer}>
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
        <a
          href="/"
          //target="_blank"
          //rel="noopener noreferrer"
          style={{ textAlign: "left", fontSize: 30, fontWeight: "bold" }}
        >
          💬 stockchat
        </a>

        <div style={{ flexDirection: "row", display: "flex" }}>
          <a
            href="/Subscribe"
            // target="_blank"
            // rel="noopener noreferrer"
            style={{
              fontWeight: 500,
              fontSize: 20,
              paddingRight: 20,
              color: "#657786",
            }}
          >
            💸 Subscribe
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

      <div style={{ paddingBottom: 20 }}>
        <body style={{ textAlign: "center", fontSize: 30, fontWeight: "500" }}>
          Add Bots to your Discord Server
        </body>
        <p style={{ fontSize: 20, fontWeight: "500", textAlign: "center" }}>
          Bots help your trading group stay active and up to date with real-time
          stock market data.
        </p>
      </div>

      <div style={{ flex: 1, display: "flex" }}>
        <div className={styles.botsbox}>
          <body>Trending Stocks</body>
          <a
            href="/Subscribe"
            // target="_blank"
            // rel="noopener noreferrer"
            style={{
              fontWeight: 500,
              fontSize: 20,
              paddingRight: 20,
              color: "#657786",
            }}
          >
            🤖 Add Bot
          </a>
        </div>
        <div className={styles.botsbox}>
          <body>Popular Stocks</body>
          <a
            href="/Subscribe"
            // target="_blank"
            // rel="noopener noreferrer"
            style={{
              fontWeight: 500,
              fontSize: 20,
              paddingRight: 20,
              color: "#657786",
            }}
          >
            🤖 Add Bot
          </a>
        </div>
        <div className={styles.botsbox}>
          <body>Large Cap Stocks</body>
          <a
            href="/Subscribe"
            // target="_blank"
            // rel="noopener noreferrer"
            style={{
              fontWeight: 500,
              fontSize: 20,
              paddingRight: 20,
              color: "#657786",
            }}
          >
            🤖 Add Bot
          </a>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex" }}>
        <div className={styles.botsbox}>
          <body>Stock Alerts</body>
          <a
            href="/Subscribe"
            // target="_blank"
            // rel="noopener noreferrer"
            style={{
              fontWeight: 500,
              fontSize: 20,
              paddingRight: 20,
              color: "#657786",
            }}
          >
            🤖 Add Bot
          </a>
        </div>
        <div className={styles.botsbox}>
          <body>Unusual Options Activity</body>
          <a
            href="/Subscribe"
            // target="_blank"
            // rel="noopener noreferrer"
            style={{
              fontWeight: 500,
              fontSize: 20,
              paddingRight: 20,
              color: "#657786",
            }}
          >
            🤖 Add Bot
          </a>
        </div>
        <div className={styles.botsbox}>
          <body>WSB Trends</body>
          <a
            href="/Subscribe"
            // target="_blank"
            // rel="noopener noreferrer"
            style={{
              fontWeight: 500,
              fontSize: 20,
              paddingRight: 20,
              color: "#657786",
            }}
          >
            🤖 Add Bot
          </a>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex" }}>
        <div className={styles.botsbox}>
          <body>Insider Trades</body>
          <a
            href="/Subscribe"
            // target="_blank"
            // rel="noopener noreferrer"
            style={{
              fontWeight: 500,
              fontSize: 20,
              paddingRight: 20,
              color: "#657786",
            }}
          >
            🤖 Add Bot
          </a>
        </div>
        <div className={styles.botsbox}>
          <body>Stock News</body>
          <a
            href="/Subscribe"
            // target="_blank"
            // rel="noopener noreferrer"
            style={{
              fontWeight: 500,
              fontSize: 20,
              paddingRight: 20,
              color: "#657786",
            }}
          >
            🤖 Add Bot
          </a>
        </div>
        <div className={styles.botsbox}>
          <body>Crypto Trends</body>
          <a
            href="/Subscribe"
            // target="_blank"
            // rel="noopener noreferrer"
            style={{
              fontWeight: 500,
              fontSize: 20,
              paddingRight: 20,
              color: "#657786",
            }}
          >
            🤖 Add Bot
          </a>
        </div>
      </div>

      <footer className={styles.footer}>
        <a
          href="/Subscribe"
          //   target="_blank"
          //   rel="noopener noreferrer"
          style={{ fontWeight: 500, color: "lightgrey" }}
        >
          © stockchat
        </a>
      </footer>
    </div>
  );
}
