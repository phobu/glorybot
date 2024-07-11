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
                  <kbd>!duckduckgo</kbd> -{" "}
                  <span className="p-color">Search the DuckDuckGo search engine.</span>
                </li>
                <li>
                  <kbd>!ttt</kbd> -{" "}
                  <span className="p-color">Play tic-tac-toe with someone.</span>
                </li>
                <li>
                  <kbd>!anime</kbd> -{" "}
                  <span className="p-color">Search MyAnimeList for anime information.</span>
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
                  <kbd>!react</kbd> -{" "}
                  <span className="p-color">Play a game of reaction time</span>
                </li>
                <li>
                  <kbd>!snake</kbd> -{" "}
                  <span className="p-color">Play a game of snake</span>
                </li>
                <li>
                  <kbd>!memory</kbd> -{" "}
                  <span className="p-color">Play a game of memory.</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb4" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb4">
              Configuration Commands
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>!wlc-set</kbd> -{" "}
                  <span className="p-color">welcome system.</span>
                </li>
                <li>
                  <kbd>!marry, !divorce, !partner</kbd> -{" "}
                  <span className="p-color">Marriage system.</span>
                </li>
                <li>
                  <kbd>!antilink</kbd> -{" "}
                  <span className="p-color">antilink system.</span>
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
                  <kbd>!hentai</kbd> -{" "}
                  <span className="p-color">hentai content.</span>
                </li>
                <li>
                  <kbd>!nsfw</kbd> -{" "}
                  <span className="p-color">nsfw images.</span>
                </li>
                <li>
                  <kbd>!ass</kbd> -{" "}
                  <span className="p-color">ass images.</span>
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
