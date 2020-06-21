import React from "react";

export default function Footer() {
  return (
    <footer
      className="footer   "
      style={{
        textAlign: "center",
        fontSize: "2rem",
        margin: "3rem 0 0 0",
        backgroundColor: "rgb(20, 84, 223)",
        color: "#fff",
        padding: "1rem 0",
      }}
    >
      <p>
        CopyRights &copy; 2020 . Designed by{" "}
        <a
          href="https://www.linkedin.com/in/ajay-meena1/"
          style={{ color: "red" }}
        >
          Ajay
        </a>{" "}
      </p>
    </footer>
  );
}
