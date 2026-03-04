import { Suspense } from "react";
import LoginClient from "./LoginClient";

export default function LoginPage() {
  return (
    <div className="container">
      <Suspense
        fallback={
          <div className="card" style={{ maxWidth: 460, margin: "48px auto" }}>
            Loading...
          </div>
        }
      >
        <LoginClient />
      </Suspense>
    </div>
  );
}