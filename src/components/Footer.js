import Link from "next/link";
import Image from "next/image";
import botOnlineStatus from "../utils/images/botStatus.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="footer">
        <div className="footer-sec1">
          <div className="footer-header">
            <ul>
              <li>
                <Link className="h-color" href="/">
                  bane stats
                </Link>
                <span
                  style={{
                    fontSize: "12px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  className="p-color"
                >
                  <Image
                    src={botOnlineStatus}
                    width={20}
                    height={20}
                    alt="online-status"
                    className="onlineStatus"
                  />{" "}
                  Bot is online!
                </span>
              </li>
            </ul>
          </div>
          <div className="footer-items">
            <ul>
              <li>
                <Link className="p-color" href="/commands">
                  /commands
                </Link>
              </li>
              <li>
                <Link className="p-color" href="https://discord.gg/nj7R8Hhcqa">
                  /support
                </Link>
              </li>
              <li>
                <Link className="p-color" href="https://discord.gg/nj7R8Hhcqa">
                  /discord-server
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-sec2">
          <hr />
          <div>
            <p className="p-color">
              developed by{" "}
              <Link
                href="https://www.instagram.com/latvianist"
                className="h-color no-decoration"
              >
                Latvianist
              </Link>
            </p>
            <p className="p-color">{year} &copy; All rights reserved!</p>
          </div>
          <div className="footer-sec2-link">
            <Link className="p-color no-decoration" href="#">
              /support
            </Link>
            <Link
              target="_blank"
              className="p-color no-decoration"
              href="https://discord.gg/nj7R8Hhcqa"
            >
              /source-code
            </Link>
            <Link className="p-color no-decoration" href="#">
              /privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
