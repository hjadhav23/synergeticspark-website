import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <section
          style={{
            minHeight: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "40px 20px",
          }}
        >
          <div>
            <p
              style={{
                color: "var(--accent)",
                fontWeight: 700,
                letterSpacing: "2px",
                fontSize: "13px",
              }}
            >
              SYNERGETICSPARK
            </p>

            <h1
              style={{
                color: "var(--primary)",
                fontSize: "clamp(40px, 6vw, 72px)",
                lineHeight: 1.05,
                margin: "15px 0",
              }}
            >
              Technology + Talent
              <br />
              + Transformation
            </h1>

            <p
              style={{
                color: "var(--text-light)",
                maxWidth: "650px",
                margin: "0 auto",
                fontSize: "18px",
              }}
            >
              Building technology solutions, connecting
              exceptional talent and enabling organizations
              to transform and grow.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;