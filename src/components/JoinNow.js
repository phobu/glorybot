import Link from "next/link";

const JoinNow = () => {
  return (
    <>
      <section className="joinUs">
        <div className="h-color joinUs-header">
          <h3>bane!</h3>
        </div>
        <div className="joinUs-para p-color">
          Invite bane to your Discord server{" "}
        </div>
        <button className="btn">
          <Link className="h-color no-decoration" href="https://discord.gg/ka9Sdrxw">
            Invite bane
          </Link>
        </button>
      </section>
    </>
  );
};

export default JoinNow;
