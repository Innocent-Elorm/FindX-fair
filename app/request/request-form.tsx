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

export default function RequestForm() {
  const [message, setMessage] = useState("");

  const submitRequest = (formData: FormData) => {
    const body = [
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      `Phone: ${formData.get("phone") || "Not provided"}`,
      `Campus: ${formData.get("campus")}`,
      `Item: ${formData.get("item")}`,
      `Category: ${formData.get("category") || "Not specified"}`,
      `Urgency: ${formData.get("urgency")}`,
      `Needed by: ${formData.get("neededBy") || "No date specified"}`,
      `Budget: ${formData.get("budget") || "Not specified"}`,
      "",
      "More details:",
      `${formData.get("details") || "None provided"}`,
    ].join("\n");
    const mailto = new URL("mailto:hello@findxfair.com");
    mailto.searchParams.set("subject", `Item request: ${formData.get("item")}`);
    mailto.searchParams.set("body", body);
    window.location.href = mailto.toString();
    setMessage(
      "Your email app should open with the request details. Please send the email to complete your request. If it doesn't open, email hello@findxfair.com.",
    );
  };

  return (
    <form
      className="utility-card request-form"
      action={submitRequest}
      aria-describedby="request-form-note"
    >
      <div className="utility-card-heading">
        <div>
          <span className="utility-eyebrow">ITEM REQUEST</span>
          <h2>What can we find for you?</h2>
        </div>
        <span className="form-step-indicator">A few quick details</span>
      </div>
      <div className="form-grid">
        <label className="form-field">
          <span>Your name <b>*</b></span>
          <input name="name" autoComplete="name" required />
        </label>
        <label className="form-field">
          <span>Email address <b>*</b></span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label className="form-field">
          <span>Phone number</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="e.g. 024 000 0000" />
        </label>
        <label className="form-field">
          <span>Campus for delivery <b>*</b></span>
          <select name="campus" defaultValue="" required>
            <option value="" disabled>Select your campus</option>
            {campuses.map((campus) => <option key={campus}>{campus}</option>)}
          </select>
        </label>
        <label className="form-field">
          <span>What item are you looking for? <b>*</b></span>
          <input name="item" placeholder="Item name or a short description" required />
        </label>
        <label className="form-field">
          <span>Category</span>
          <select name="category" defaultValue="">
            <option value="">Choose a category (optional)</option>
            <option>Books and course materials</option>
            <option>Electronics and gadgets</option>
            <option>Clothing and fashion</option>
            <option>Food and beverages</option>
            <option>Home and living</option>
            <option>Other</option>
          </select>
        </label>
        <fieldset className="form-field form-urgency">
          <legend>How urgently do you need it? <b>*</b></legend>
          <div className="urgency-options">
            <label><input type="radio" name="urgency" value="Standard — within 2–3 weeks" defaultChecked /> <span><strong>Standard</strong><small>Within 2–3 weeks</small></span></label>
            <label><input type="radio" name="urgency" value="Soon — within 1 week" /> <span><strong>Soon</strong><small>Within 1 week</small></span></label>
            <label><input type="radio" name="urgency" value="Urgent — as soon as possible" /> <span><strong>Urgent</strong><small>As soon as possible</small></span></label>
          </div>
        </fieldset>
        <label className="form-field">
          <span>When do you need it by?</span>
          <input name="neededBy" type="date" />
        </label>
        <label className="form-field">
          <span>Approximate budget (GHS)</span>
          <input name="budget" type="number" min="0" step="1" placeholder="Optional" />
        </label>
        <label className="form-field form-field-wide">
          <span>Anything else we should know?</span>
          <textarea name="details" rows={4} placeholder="Brand, size, colour, course requirements, or a link to the item..." />
        </label>
      </div>
      <div className="request-form-actions">
        <p id="request-form-note">
          This opens an email addressed to FindX Fair. Your request is sent only
          after you press Send in your email app.
        </p>
        <button className="button button-gold" type="submit">Send item request</button>
      </div>
      {message && <p className="form-status" role="status">{message}</p>}
    </form>
  );
}
