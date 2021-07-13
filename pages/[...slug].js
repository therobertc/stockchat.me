import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Profiler } from "react";

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
        height: "100vh",
        backgroundColor: "#000",
      }}
    >
      <Head>
        <title>
          Follow @{data.data ? data.data.username : ""} on StockChat
        </title>
        <meta name="description" content="Group chats with your friends" />
        <link rel="icon" href={data.data ? data.data.profile_image : ""} />
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
          <img width={250} height={50} src="../logotext.png" alt="next" />

          <div>
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
                ✨ Subscribe
              </a>
            </div>
          </div>
        </div>

        <main className={styles.main}>
          <img width={250} height={50} src="../logotext.png" alt="next" />

          <img
            width={80}
            height={80}
            style={{ borderRadius: 40, marginTop: 10 }}
            src={data.data ? data.data.profile_image : ""}
            alt="next"
          />

          <p
            style={{
              color: "#FFF",
              fontSize: 30,
              fontFamily: "monospace",
              marginBottom: 50,
              flex: 1,

              fontWeight: 800,
            }}
          >
            @{data.data ? data.data.username : ""}
          </p>

          <div
            style={{
              width: 250,
              height: 100,
              borderRadius: 25,
              borderColor: "#FFF",
              borderWidth: 1,
              backgroundColor: "#FFF",
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <p style={{ textAlign: "center", fontSize: 20, lineHeight: 0.1 }}>
              Tier 1
            </p>
            <p style={{ textAlign: "center", fontSize: 30, lineHeight: 0.1 }}>
              {" "}
              💬 💸 💎 🙌{" "}
            </p>
          </div>

          <div
            style={{
              width: 250,
              height: 100,
              borderRadius: 25,
              borderColor: "#FFF",
              borderWidth: 1,
              backgroundColor: "#FFF",
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <p
              style={{
                textAlign: "center",
                fontSize: 20,
                lineHeight: 0.1,
                fontFamily: "monospace",
              }}
            >
              Tier 2
            </p>
            <p
              style={{
                textAlign: "center",
                fontSize: 30,
                lineHeight: 0.1,
                fontFamily: "monospace",
              }}
            >
              {" "}
              💬 💸 💎 🙌{" "}
            </p>
          </div>

          <div
            style={{
              width: 250,
              height: 100,
              borderRadius: 25,
              borderColor: "#FFF",
              borderWidth: 1,
              backgroundColor: "#FFF",
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <p
              style={{
                textAlign: "center",
                fontSize: 20,
                lineHeight: 0.1,
                fontFamily: "monospace",
              }}
            >
              Tier 3
            </p>
            <p style={{ textAlign: "center", fontSize: 30, lineHeight: 0.1 }}>
              {" "}
              💬 💸 💎 🙌{" "}
            </p>
          </div>

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
        </main>
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

          <img
            width={80}
            height={80}
            style={{ borderRadius: 40, marginTop: 20 }}
            src={data.data ? data.data.profile_image : ""}
            alt="next"
          />

          <p
            style={{
              color: "#FFF",
              fontSize: 30,
              fontFamily: "monospace",
              marginBottom: 20,
              //flex: 1,

              fontWeight: 800,
            }}
          >
            @{data.data ? data.data.username : ""}
          </p>

          <div
            style={{
              width: 250,
              height: 100,
              borderRadius: 25,
              borderColor: "#FFF",
              borderWidth: 1,
              backgroundColor: "#FFF",
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
              borderColor: "blue",
              borderWidth: 2,
            }}
          >
            <p
              style={{
                textAlign: "center",
                fontSize: 20,
                lineHeight: 0.1,
                fontFamily: "monospace",
              }}
            >
              Tier 1
            </p>
            <p style={{ textAlign: "center", fontSize: 30, lineHeight: 0.1 }}>
              {" "}
              💬 💸 💎 🙌{" "}
            </p>
          </div>

          <div
            style={{
              width: 250,
              height: 100,
              borderRadius: 25,
              borderColor: "#FFF",
              borderWidth: 1,
              backgroundColor: "#FFF",
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <p
              style={{
                textAlign: "center",
                fontSize: 20,
                lineHeight: 0.1,
                fontFamily: "monospace",
              }}
            >
              Tier 2
            </p>
            <p
              style={{
                textAlign: "center",
                fontSize: 30,
                lineHeight: 0.1,
                fontFamily: "monospace",
              }}
            >
              {" "}
              💬 💸 💎 🙌{" "}
            </p>
          </div>

          <div
            style={{
              width: 250,
              height: 100,
              borderRadius: 25,
              borderColor: "#FFF",
              borderWidth: 1,
              backgroundColor: "#FFF",
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <p
              style={{
                textAlign: "center",
                fontSize: 20,
                lineHeight: 0.1,
                fontFamily: "monospace",
              }}
            >
              Tier 3
            </p>
            <p style={{ textAlign: "center", fontSize: 30, lineHeight: 0.1 }}>
              {" "}
              💬 💸 💎 🙌{" "}
            </p>
          </div>

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
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://sharestock.io/api/stockchat/user-profile/?user=${context.params.slug}`
  );
  const json = await res.json();
  return { props: { data: json } };
};

export default Profile;
