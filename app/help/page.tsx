import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";

export const metadata: Metadata = {
  title: "Help Centre | FindX Fair",
  description:
    "Find answers about ordering, delivery, item requests, and getting support from FindX Fair.",
};

const questions = [
  {
    category: "Orders and payments",
    entries: [
      {
        question: "How do I place an order?",
        answer:
          "Browse the marketplace or student packages, then contact us to confirm availability, delivery timing, and payment. Online checkout is not available yet, so please wait for confirmation before making a payment.",
      },
      {
        question: "Which payment methods can I use?",
        answer:
          "Available payment options depend on the item and will be confirmed by our team before you pay. Never share your PIN or one-time password with anyone.",
      },
      {
        question: "Can I change or cancel an order?",
        answer:
          "Contact us as soon as possible with your name and order details. We’ll confirm whether a change or cancellation is possible based on the order status.",
      },
    ],
  },
  {
    category: "Delivery and item requests",
    entries: [
      {
        question: "Where do you deliver?",
        answer:
          "Delivery options vary by item and campus. Add your campus when making an item request, or contact support to confirm delivery coverage before ordering.",
      },
      {
        question: "What if the item I need is not listed?",
        answer:
          "Use our request form to tell us what you need, where to deliver it, and how urgently you need it. We’ll look into available options and follow up with you.",
      },
      {
        question: "How long does international shipping take?",
        answer:
          "Estimated times depend on the item, seller, and shipping route. Check the product details or ask our team for an estimate before placing your order.",
      },
    ],
  },
  {
    category: "Account and support",
    entries: [
      {
        question: "Can I sign in with Google or Apple?",
        answer:
          "The account screen is available, but sign-in and social authentication are not connected yet. We’ll make this available once account services are set up.",
      },
      {
        question: "How do I contact FindX Fair?",
        answer:
          "Email hello@findxfair.com with your question. Include your campus and any relevant item or order details so we can help more quickly.",
      },
    ],
  },
];

export default function HelpPage() {
  return (
    <>
      <SiteHeader />
      <main className="utility-page help-page page-width">
        <section className="utility-intro">
          <span className="utility-eyebrow">FINDX FAIR SUPPORT</span>
          <h1>How can we help?</h1>
          <p>Answers to common questions about finding, ordering, and getting things delivered on campus.</p>
          <a className="help-email-link" href="mailto:hello@findxfair.com?subject=FindX%20Fair%20support">
            Still need help? Email hello@findxfair.com
          </a>
        </section>
        <div className="help-content">
          <div className="faq-groups">
            {questions.map((group) => (
              <section className="faq-group" key={group.category}>
                <h2>{group.category}</h2>
                {group.entries.map((entry) => (
                  <details className="faq-item" key={entry.question}>
                    <summary>{entry.question}<span aria-hidden="true">+</span></summary>
                    <p>{entry.answer}</p>
                  </details>
                ))}
              </section>
            ))}
          </div>
          <aside className="help-aside">
            <span className="help-aside-icon">?</span>
            <h2>Can&apos;t find what you need?</h2>
            <p>Send us a note or tell us what item you&apos;re looking for. Our team will point you in the right direction.</p>
            <a className="button button-gold" href="mailto:hello@findxfair.com?subject=FindX%20Fair%20support">Email support</a>
            <Link className="button button-outline" href="/request">Request an item</Link>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
