import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

export default function Commands() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>Glory Commands</title>
        <meta
          name="description"
          content="Commands page"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="commands">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
               Commands
            </label>
          </header>
          <input type="radio" name="accordion" id="cb1" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb1">
              Utility commands
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>!serverinfo</kbd> -{" "}
                  <span className="p-color">View information about a server.</span>
                </li>
                <li>
                  <kbd>!userinfo</kbd> -{" "}
                  <span className="p-color">View information about a member or yourself.</span>
                </li>
                <li>
                  <kbd>!purge match</kbd> -{" "}
                  <span className="p-color">Purges messages containing given substring</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb2" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb2">
              Fun commands
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>$fact</kbd> -{" "}
                  <span className="p-color">generate fact commands.</span>
                </li>
                <li>
                  <kbd>$ttt</kbd> -{" "}
                  <span className="p-color">Play tic-tac-toe with someone.</span>
                </li>
                <li>
                  <kbd>$yes or no</kbd> -{" "}
                  <span className="p-color">ask a bot a question for a 50/50 response of Yes and No.</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb3" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb3">
              Game commands 
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>$rps</kbd> -{" "}
                  <span className="p-color">rock paper scissors someone</span>
                </li>
                <li>
                  <kbd>$snake</kbd> -{" "}
                  <span className="p-color">Play a game of snake</span>
                </li>
                <li>
                  <kbd>worlde</kbd> -{" "}
                  <span className="p-color">Play a game of wordle.</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb4" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb4">
              Moderation Commands
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>$ban</kbd> -{" "}
                  <span className="p-color">ban a user</span>
                </li>
                <li>
                  <kbd>$unban</kbd> -{" "}
                  <span className="p-color">unban a user</span>
                </li>
                <li>
                  <kbd>$kick</kbd> -{" "}
                  <span className="p-color">$kick a user</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb5" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb5">
              Nsfw Commands
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>$nsfw bj</kbd> -{" "}
                  <span className="p-color">blowjobs.</span>
                </li>
                <li>
                  <kbd>$nsfw waifu</kbd> -{" "}
                  <span className="p-color">waifus.</span>
                </li>
                <li>
                  <kbd>$nsfw fj</kbd> -{" "}
                  <span className="p-color">footjobs.</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="acc-close" />
        </nav>
      </section>
      <Footer />
    </motion.div>
  );
}
