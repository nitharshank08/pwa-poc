import Navbar from "../../components/Navbar";

export default function HomePage() {
  return (
    <div className="container">
      <Navbar />

      <div className="spacer" />
      <div className="card">
        <h1 style={{ marginTop: 0 }}>Home</h1>
        <p className="small">
          You are logged in (dummy cookie-based auth).
        </p>

        <div className="spacer" />
        <div className="row">
          <div className="card" style={{ flex: "1 1 240px" }}>
            <div style={{ fontWeight: 700 }}>Card 1</div>
            <div className="small">Some content here</div>
          </div>
          <div className="card" style={{ flex: "1 1 240px" }}>
            <div style={{ fontWeight: 700 }}>Card 2</div>
            <div className="small">Some content here</div>
          </div>
        </div>
      </div>
    </div>
  );
}