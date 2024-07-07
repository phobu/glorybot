import Link from "next/link";

const JoinNow = () => {
  return (
    <>
      <section className="joinUs">
        <div className="h-color joinUs-header">
          <h3>BANE!</h3>
        </div>
        <div className="joinUs-para p-color">
          Invite bane to your Discord server{" "}
        </div>
        <button className="btn">
          <Link className="h-color no-decoration" href="https://discord.com/oauth2/authorize?client_id=1229920610721726485&permissions=8&integration_type=0&scope=bot">
            Invite bane
          </Link>
        </button>
      </section>
    </>
  );
};

export default JoinNow;
