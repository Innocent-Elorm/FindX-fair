import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="shared-site-header">
      <div className="shared-header-top page-width">
        <Link className="brand" href="/" aria-label="FindX Fair home">
          <Image
            src="/logo.jpeg"
            alt="FindX Fair — Your Campus. Your Marketplace."
            width={84}
            height={84}
            priority
            className="brand-logo-image"
          />
        </Link>
        <p>Everything campus life needs, in one place.</p>
        <Link className="button button-gold shared-account-link" href="/account">
          Your account
        </Link>
      </div>
      <nav className="shared-nav" aria-label="Main navigation">
        <div className="page-width shared-nav-links">
          <Link href="/">Home</Link>
          <Link href="/packages">Student packages</Link>
          <Link href="/shipping">International shipping</Link>
          <Link href="/request">Make a request</Link>
          <Link href="/help">Help</Link>
        </div>
      </nav>
    </header>
  );
}
