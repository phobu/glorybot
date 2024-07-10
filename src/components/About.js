import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about-section" id="about-section">
        <div className="about-header">
          <h3 className="h-color">Why glory?</h3>
        </div>
        <div className="about-container">
          <div className="about-card">
            <div>
              <h4 className="h-color">Commands</h4>
              <p className="p-color">
                Glory offers 226 commands.
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">✉️ Support</h4>
              <p className="p-color">
                Support @ /undo.
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">🌎 Customization</h4>
              <p className="p-color">
                An all-in-one, multi-purpose, discord bot. .
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
            <h4 className="h-color">17+</h4>
            <p className="p-color">Total Guilds</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">4663</h4>
            <p className="p-color">Total Users</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">46k+</h4>
            <p className="p-color">Total used Commands</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
