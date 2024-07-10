import Link from "next/link";

const JoinNow = () => {
  return (
    <>
      <section className="joinUs">
        <div className="h-color joinUs-header">
          <h3>Glory!</h3>
        </div>
        <div className="joinUs-para p-color">
          Invite glory to your Discord server{" "}
        </div>
        <button className="btn">
          <Link className="h-color no-decoration" href="https://discord.com/oauth2/authorize?client_id=1239063601323573291&permissions=8&integration_type=0&scope=bot">
            Invite glory
          </Link>
        </button>
      </section>
    </>
  );
};

export default JoinNow;
