"use client";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  async function logout() {
    await fetch("/api/logout", { method: "POST" });
    router.replace("/login");
  }

  return (
    <div
      className="card"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <div>
        <div style={{ fontWeight: 700 }}>My App</div>
        <div className="small">Home</div>
      </div>

      <button className="danger" onClick={logout}>
        Logout
      </button>
    </div>
  );
}