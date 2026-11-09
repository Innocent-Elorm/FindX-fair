"use client";

import { useState } from "react";

const campuses = [
  "University of Ghana",
  "Kwame Nkrumah University of Science and Technology",
  "University of Cape Coast",
  "University of Education, Winneba",
  "University for Development Studies",
  "University of Professional Studies, Accra",
  "Ashesi University",
  "University of Energy and Natural Resources",
  "Koforidua Technical University",
  "Accra Technical University",
  "Other",
];

type AccountMode = "sign-in" | "sign-up";

export default function AccountForm() {
  const [mode, setMode] = useState<AccountMode>("sign-up");
  const [message, setMessage] = useState("");

  const showNotConnected = (method: string) => {
    setMessage(
      `${method} isn't connected yet. Your details were not sent or saved. Please contact hello@findxfair.com if you need account assistance.`,
    );
  };

  return (
    <section className="utility-card account-card" aria-labelledby="account-form-heading">
      <div className="account-tabs" aria-label="Account options">
        <button
          type="button"
          aria-pressed={mode === "sign-up"}
          className={mode === "sign-up" ? "is-active" : ""}
          onClick={() => { setMode("sign-up"); setMessage(""); }}
        >
          Create account
        </button>
        <button
          type="button"
          aria-pressed={mode === "sign-in"}
          className={mode === "sign-in" ? "is-active" : ""}
          onClick={() => { setMode("sign-in"); setMessage(""); }}
        >
          Sign in
        </button>
      </div>
      <div className="account-form-heading">
        <span className="utility-eyebrow">{mode === "sign-up" ? "JOIN FINDX FAIR" : "WELCOME BACK"}</span>
        <h2 id="account-form-heading">{mode === "sign-up" ? "Create your account" : "Sign in to your account"}</h2>
        <p>{mode === "sign-up" ? "A few details and you’re ready to get started." : "Enter your email and password to continue."}</p>
      </div>
      <div className="social-login-options">
        <button type="button" onClick={() => showNotConnected("Google sign-in")}>
          <span className="social-letter google-letter" aria-hidden="true">G</span>
          Continue with Google
        </button>
        <button type="button" onClick={() => showNotConnected("Apple sign-in")}>
          Continue with Apple
        </button>
      </div>
      <div className="account-divider"><span>or with email</span></div>
      <form
        className="account-fields"
        onSubmit={(event) => {
          event.preventDefault();
          showNotConnected(mode === "sign-up" ? "Email sign-up" : "Email sign-in");
        }}
      >
        {mode === "sign-up" && (
          <>
            <label className="form-field">
              <span>Full name <b>*</b></span>
              <input name="name" autoComplete="name" required />
            </label>
            <label className="form-field">
              <span>Phone number <b>*</b></span>
              <input name="phone" type="tel" autoComplete="tel" required />
            </label>
          </>
        )}
        <label className="form-field">
          <span>Email address <b>*</b></span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        {mode === "sign-up" && (
          <label className="form-field">
            <span>Campus <b>*</b></span>
            <select name="campus" defaultValue="" required>
              <option value="" disabled>Select your campus</option>
              {campuses.map((campus) => <option key={campus}>{campus}</option>)}
            </select>
          </label>
        )}
        <label className="form-field">
          <span>Password <b>*</b></span>
          <input
            name="password"
            type="password"
            autoComplete={mode === "sign-up" ? "new-password" : "current-password"}
            minLength={8}
            required
          />
        </label>
        {mode === "sign-in" && (
          <a className="forgot-password-link" href="mailto:hello@findxfair.com?subject=Account%20help">
            Forgot password?
          </a>
        )}
        <button className="button button-gold account-submit" type="submit">
          {mode === "sign-up" ? "Create account" : "Sign in"}
        </button>
      </form>
      {message && <p className="form-status account-status" role="status">{message}</p>}
      <p className="account-setup-note">
        Account creation and social sign-in are not connected yet. This preview
        does not send or store your password.
      </p>
    </section>
  );
}
