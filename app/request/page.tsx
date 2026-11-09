import type { Metadata } from "next";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import RequestForm from "./request-form";

export const metadata: Metadata = {
  title: "Request an Item | FindX Fair",
  description:
    "Tell FindX Fair what you need, how soon you need it, and where to deliver it on campus.",
};

export default function RequestPage() {
  return (
    <>
      <SiteHeader />
      <main className="utility-page page-width">
        <section className="utility-intro request-intro">
          <span className="utility-eyebrow">CAN&apos;T FIND IT? WE&apos;LL LOOK FOR IT.</span>
          <h1>Tell us what you need.</h1>
          <p>
            If it isn&apos;t listed on FindX Fair, send us the details. We&apos;ll
            check local and international options and get back to you about
            delivery to your campus.
          </p>
          <div className="request-process">
            <span><b>1</b> Share the item</span>
            <span><b>2</b> Choose your timing</span>
            <span><b>3</b> We&apos;ll follow up</span>
          </div>
        </section>
        <RequestForm />
      </main>
      <SiteFooter />
    </>
  );
}
