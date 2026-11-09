import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="shared-site-footer">
      <div className="page-width">
        <div className="shared-footer-main">
          <div className="shared-footer-about">
            <Link className="brand brand-footer" href="/" aria-label="FindX Fair home">
              <Image
                src="/logo.jpeg"
                alt="FindX Fair"
                width={78}
                height={78}
                className="brand-logo-image"
              />
            </Link>
            <p>
              Your campus marketplace for student packages, everyday essentials,
              and the things you can&apos;t find anywhere else.
            </p>
            <span className="shared-footer-campus">Made for campus life in Ghana</span>
          </div>
          <div className="shared-footer-column">
            <h2>Explore</h2>
            <Link href="/">Marketplace</Link>
            <Link href="/packages">Student packages</Link>
            <Link href="/shipping">International shipping</Link>
            <Link href="/request">Request an item</Link>
          </div>
          <div className="shared-footer-column">
            <h2>Here to help</h2>
            <Link href="/help">Help centre</Link>
            <Link href="/account">Your account</Link>
            <a href="mailto:hello@findxfair.com?subject=FindX%20Fair%20support">
              Contact support
            </a>
          </div>
          <div className="shared-footer-note">
            <strong>More than a marketplace.</strong>
            <p>A student community that helps you find what you need, right where you are.</p>
            <Link className="button button-gold" href="/request">
              Can&apos;t find it? Ask us
            </Link>
          </div>
        </div>
        <div className="shared-footer-bottom">
          <span>© FindX Fair</span>
          <span>· Shop smart. Study easy.</span>
          <a href="mailto:hello@findxfair.com">hello@findxfair.com</a>
        </div>
      </div>
    </footer>
  );
}
