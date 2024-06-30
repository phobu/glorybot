import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about-section" id="about-section">
        <div className="about-header">
          <h3 className="h-color">Why bane?</h3>
        </div>
        <div className="about-container">
          <div className="about-card">
            <div>
              <h4 className="h-color">Commands</h4>
              <p className="p-color">
                Bane offers 200 commands.
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">✉️ Support</h4>
              <p className="p-color">
                our support is not active yet.
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">🌎 Customization</h4>
              <p className="p-color">
                An all-in-one bot, user-focused commands.
              </p>
              <hr />
            </div>
          </div>
        </div>
        <p>
          <Link href="/commands" className="h-color no-decoration">
            Check out Commands &rarr;
          </Link>
        </p>

        <section className="about-stats">
          <div className="about-stats-card">
            <h4 className="h-color">20+</h4>
            <p className="p-color">Total Guilds</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">2k+</h4>
            <p className="p-color">Total Users</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">10k+</h4>
            <p className="p-color">Total used Commands</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
