import type { Metadata } from "next";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import AccountForm from "./account-form";

export const metadata: Metadata = {
  title: "Your Account | FindX Fair",
  description:
    "Create a FindX Fair account or sign in with your email and password.",
};

export default function AccountPage() {
  return (
    <>
      <SiteHeader />
      <main className="utility-page account-page page-width">
        <section className="utility-intro account-intro">
          <span className="utility-eyebrow">YOUR CAMPUS, YOUR MARKETPLACE</span>
          <h1>Your FindX Fair account.</h1>
          <p>
            Keep your campus details close and make it easier to find the things
            you need for student life.
          </p>
          <ul className="account-benefits">
            <li>Get help finding items for your campus</li>
            <li>Stay up to date on orders and requests</li>
            <li>Save the essentials you want to come back to</li>
          </ul>
        </section>
        <AccountForm />
      </main>
      <SiteFooter />
    </>
  );
}
