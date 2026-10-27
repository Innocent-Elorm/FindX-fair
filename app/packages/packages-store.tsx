"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";

type IconName =
  | "arrow"
  | "book"
  | "cart"
  | "check"
  | "chevron"
  | "close"
  | "flask"
  | "gift"
  | "globe"
  | "heart"
  | "laptop"
  | "menu"
  | "minus"
  | "pin"
  | "plus"
  | "search"
  | "shield"
  | "shirt"
  | "truck"
  | "user";

const iconPaths: Record<IconName, ReactNode> = {
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  book: (
    <>
      <path d="M12 7v14m0-14C10.5 5.8 8.5 5 5 5H3v14h3c2.5 0 4.5.8 6 2m0-14c1.5-1.2 3.5-2 7-2h2v14h-3c-2.5 0-4.5.8-6 2" />
    </>
  ),
  cart: (
    <>
      <path d="M3 4h2l2.1 10.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.4L21 8H6" />
      <circle cx="9" cy="20" r="1" />
      <circle cx="17" cy="20" r="1" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  close: <path d="m18 6-12 12M6 6l12 12" />,
  flask: (
    <>
      <path d="M9 3h6m-5 0v7L4 20a1 1 0 0 0 .9 1.5h14.2A1 1 0 0 0 20 20l-6-10V3m-6 12h8" />
    </>
  ),
  gift: (
    <>
      <path d="M20 12v9H4v-9m-2-5h20v5H2zm10 0v14m0-14H7.5a2.5 2.5 0 1 1 2.4-3.2L12 7Zm0 0h4.5a2.5 2.5 0 1 0-2.4-3.2L12 7Z" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
    </>
  ),
  heart: (
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
  ),
  laptop: (
    <>
      <rect x="5" y="4" width="14" height="12" rx="1.5" />
      <path d="M2 20h20l-2-4H4l-2 4Z" />
    </>
  ),
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  minus: <path d="M5 12h14" />,
  pin: (
    <>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  plus: <path d="M12 5v14m-7-7h14" />,
  search: (
    <>
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="m16 16 5 5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  shirt: <path d="m8 4 4 2 4-2 6 4-3 4-3-2v11H8V10l-3 2-3-4 6-4Z" />,
  truck: (
    <>
      <path d="M3 6h11v12H3zM14 10h4l3 3v5h-7z" />
      <circle cx="7.5" cy="18" r="2" />
      <circle cx="17.5" cy="18" r="2" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21v-2a8 8 0 0 1 16 0v2H4Z" />
    </>
  ),
};

function Icon({
  name,
  size = 20,
  className,
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconPaths[name]}
    </svg>
  );
}

type PackageCategory = "Academic" | "Tech" | "Campus" | "Lab";
type PackageTone = "starter" | "books" | "tech" | "lab";

type StudentPackage = {
  id: number;
  label: string;
  title: string;
  description: string;
  price: number;
  rating: string;
  reviews: number;
  image: string;
  tone: PackageTone;
  category: PackageCategory;
  includes: string[];
};

const packages: StudentPackage[] = [
  {
    id: 1,
    label: "STUDENT FAVOURITE",
    title: "Fresh Semester Starter Pack",
    description: "A thoughtful bundle to make settling into campus easier.",
    price: 450,
    rating: "4.8",
    reviews: 124,
    image: "/packages/starter.jpg",
    tone: "starter",
    category: "Campus",
    includes: ["Everyday study essentials", "Ready for the new semester", "Great all-round value"],
  },
  {
    id: 2,
    label: "ACADEMIC ESSENTIALS",
    title: "Textbook Bundle (Level 100)",
    description: "Core reading for first-year Arts, Science, Business and more.",
    price: 320,
    rating: "4.6",
    reviews: 89,
    image: "/packages/textbook.jpg",
    tone: "books",
    category: "Academic",
    includes: ["Core course reading", "First-year friendly bundle", "More time for what matters"],
  },
  {
    id: 3,
    label: "FOR TECHIES",
    title: "Laptop & Accessories Pack",
    description: "A practical tech bundle for lectures, projects and study.",
    price: 1800,
    rating: "4.9",
    reviews: 67,
    image: "/packages/tech.jpg",
    tone: "tech",
    category: "Tech",
    includes: ["Laptop sleeve", "Mouse and headphones", "Charger and cleaning kit"],
  },
  {
    id: 4,
    label: "LAB READY",
    title: "Lab Essentials Pack",
    description: "Get the practical basics together before your next lab.",
    price: 680,
    rating: "4.7",
    reviews: 52,
    image: "/packages/lab.jpg",
    tone: "lab",
    category: "Lab",
    includes: ["Lab coat, goggles and gloves", "Notebook and calculator", "Basic practical tools"],
  },
];

const categories: { label: PackageCategory | "All packages"; icon: IconName }[] = [
  { label: "All packages", icon: "gift" },
  { label: "Academic", icon: "book" },
  { label: "Tech", icon: "laptop" },
  { label: "Campus", icon: "shirt" },
  { label: "Lab", icon: "flask" },
];

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
];

const price = (amount: number) =>
  new Intl.NumberFormat("en-GH", {
    style: "currency",
    currency: "GHS",
    maximumFractionDigits: 0,
  }).format(amount);

export default function PackagesStore() {
  const [campus, setCampus] = useState(campuses[0]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]["label"]>("All packages");
  const [sort, setSort] = useState("popular");
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [showWishlist, setShowWishlist] = useState(false);
  const [cart, setCart] = useState<Record<number, number>>({});
  const [cartOpen, setCartOpen] = useState(false);

  const cartCount = Object.values(cart).reduce((total, count) => total + count, 0);
  const cartTotal = packages.reduce(
    (total, product) => total + product.price * (cart[product.id] ?? 0),
    0,
  );
  const visiblePackages = useMemo(() => {
    const filtered = packages.filter((product) => {
      const search = query.trim().toLowerCase();
      const matchesQuery =
        !search ||
        `${product.title} ${product.description} ${product.category}`
          .toLowerCase()
          .includes(search);
      const matchesCategory =
        category === "All packages" || product.category === category;
      const matchesWishlist = !showWishlist || wishlist.includes(product.id);
      return matchesQuery && matchesCategory && matchesWishlist;
    });

    if (sort === "price-low") return filtered.sort((a, b) => a.price - b.price);
    if (sort === "price-high") return filtered.sort((a, b) => b.price - a.price);
    if (sort === "rating") return filtered.sort((a, b) => Number(b.rating) - Number(a.rating));
    return filtered;
  }, [category, query, showWishlist, sort, wishlist]);

  const updateCart = (productId: number, change: number) => {
    setCart((current) => {
      const nextCount = (current[productId] ?? 0) + change;
      const next = { ...current };
      if (nextCount > 0) next[productId] = nextCount;
      else delete next[productId];
      return next;
    });
  };

  const toggleWishlist = (productId: number) => {
    setWishlist((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId],
    );
  };

  return (
    <div className="packages-shell">
      <header className="site-header" id="top">
        <div className="header-main page-width">
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
          <form
            className="search-form"
            role="search"
            onSubmit={(event) => {
              event.preventDefault();
              document.getElementById("student-packages")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <Icon name="search" size={19} />
            <input
              aria-label="Search student packages"
              type="search"
              placeholder="Search student packages..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <kbd>⌘ K</kbd>
          </form>
          <label className="campus-select">
            <Icon name="pin" size={18} />
            <select
              aria-label="Choose your campus"
              value={campus}
              onChange={(event) => setCampus(event.target.value)}
            >
              {campuses.map((campusName) => (
                <option key={campusName} value={campusName}>{campusName}</option>
              ))}
            </select>
            <Icon name="chevron" size={15} className="campus-caret" />
          </label>
          <button
            className="header-icon cart-icon"
            type="button"
            aria-label={`Shopping cart, ${cartCount} items`}
            aria-expanded={cartOpen}
            onClick={() => setCartOpen(true)}
          >
            <Icon name="cart" size={22} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
          <button
            className="header-icon optional-icon"
            type="button"
            aria-label={`Show ${wishlist.length} wishlist items`}
            aria-pressed={showWishlist}
            onClick={() => {
              setShowWishlist((current) => !current);
              document.getElementById("student-packages")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <Icon name="heart" size={21} />
            {wishlist.length > 0 && <span className="cart-count">{wishlist.length}</span>}
          </button>
          <Link className="header-icon account-icon" href="/#footer" aria-label="Your account">
            <Icon name="user" size={21} />
            <span className="select-caret" aria-hidden="true">⌄</span>
          </Link>
        </div>
        <nav className="main-nav" aria-label="Main navigation">
          <div className="page-width nav-inner">
            <Link className="nav-category" href="/#categories">
              <Icon name="menu" size={19} />
              <span>All Categories</span>
            </Link>
            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link className="nav-active" href="/packages" aria-current="page">Student Packages</Link>
              <Link href="/shipping">International Shipping</Link>
              <Link href="/#request">Make a Request</Link>
              <a href="mailto:hello@findxfair.com?subject=Sell%20on%20FindX">Sell on FindX</a>
              <a href="mailto:hello@findxfair.com?subject=FindX%20Fair%20help">Help</a>
            </div>
          </div>
        </nav>
      </header>

      <main className="packages-main page-width">
        <section className="packages-hero" aria-labelledby="packages-hero-heading">
          <div className="packages-hero-copy">
            <span className="eyebrow"><span className="eyebrow-dot" /> MADE FOR CAMPUS LIFE</span>
            <h1 id="packages-hero-heading">
              A better start to
              <span>your <em>semester.</em></span>
            </h1>
            <p>
              Campus-ready bundles for your studies and everyday essentials.
              Pick a pack, and spend less time tracking things down.
            </p>
            <div className="packages-hero-actions">
              <a className="button button-gold" href="#student-packages">
                <Icon name="gift" size={17} /> Find your package
              </a>
              <Link className="button button-outline" href="/#request">
                Need something else? <Icon name="arrow" size={15} />
              </Link>
            </div>
            <div className="packages-hero-note">
              <Icon name="pin" size={16} /> Shopping for <strong>{campus}</strong>
            </div>
          </div>
          <div className="packages-hero-art" aria-hidden="true">
            <div className="packages-art-sun" />
            <div className="packages-art-circle packages-art-circle-one" />
            <div className="packages-art-circle packages-art-circle-two" />
            <div className="packages-art-card packages-art-card-back"><Icon name="book" size={39} /></div>
            <div className="packages-art-card packages-art-card-front"><Icon name="gift" size={54} /></div>
            <span className="packages-art-badge"><Icon name="check" size={15} /> Campus ready</span>
          </div>
        </section>

        <section className="packages-trust" aria-label="Student package benefits">
          <div><span className="packages-trust-icon"><Icon name="truck" size={20} /></span><span><strong>Campus delivery</strong><small>Delivered to your campus</small></span></div>
          <div><span className="packages-trust-icon"><Icon name="gift" size={20} /></span><span><strong>Thoughtful bundles</strong><small>Essentials picked for students</small></span></div>
          <div><span className="packages-trust-icon"><Icon name="shield" size={20} /></span><span><strong>Shop with confidence</strong><small>Secure, straightforward shopping</small></span></div>
        </section>

        <section className="packages-catalog" id="student-packages" aria-labelledby="student-packages-heading">
          <div className="packages-catalog-heading">
            <div>
              <span className="packages-section-kicker">A LITTLE LESS STRESS, A LOT MORE READY</span>
              <h2 id="student-packages-heading">
                {showWishlist ? "Saved packages" : "Find your campus essentials"}
              </h2>
              <p>
                {showWishlist
                  ? "Your favourite bundles, all together."
                  : "Simple bundles to help you settle in and get on with your semester."}
              </p>
            </div>
            <label className="packages-sort">
              <span>Sort by</span>
              <select
                aria-label="Sort student packages"
                value={sort}
                onChange={(event) => setSort(event.target.value)}
              >
                <option value="popular">Most popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top rated</option>
              </select>
              <Icon name="chevron" size={15} />
            </label>
          </div>

          <div className="packages-filter-row">
            <div className="packages-category-filters" aria-label="Filter by package category">
              {categories.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className={category === item.label && !showWishlist ? "is-active" : ""}
                  aria-pressed={category === item.label && !showWishlist}
                  onClick={() => {
                    setCategory(item.label);
                    setShowWishlist(false);
                  }}
                >
                  <Icon name={item.icon} size={16} />
                  {item.label}
                  {item.label === "All packages" && <span>{packages.length}</span>}
                </button>
              ))}
            </div>
            <span className="packages-result-count">
              {visiblePackages.length} {visiblePackages.length === 1 ? "package" : "packages"}
            </span>
          </div>

          {visiblePackages.length > 0 ? (
            <div className="packages-product-grid">
              {visiblePackages.map((product) => (
                <article className="packages-product-card" key={product.id}>
                  <div className={`packages-product-art art-${product.tone}`}>
                    <span className="product-tag">{product.label}</span>
                    <button
                      className={`wishlist-toggle${wishlist.includes(product.id) ? " is-saved" : ""}`}
                      type="button"
                      aria-label={`${wishlist.includes(product.id) ? "Remove from" : "Add to"} wishlist: ${product.title}`}
                      aria-pressed={wishlist.includes(product.id)}
                      onClick={() => toggleWishlist(product.id)}
                    >
                      <Icon name="heart" size={17} />
                    </button>
                    <Image
                      className="packages-product-photo"
                      src={product.image}
                      alt={`${product.title} bundle`}
                      fill
                      sizes="(max-width: 760px) 45vw, (max-width: 1050px) 45vw, 24vw"
                    />
                  </div>
                  <div className="packages-product-info">
                    <span className="packages-product-category">{product.category} essentials</span>
                    <h3>{product.title}</h3>
                    <p className="packages-product-description">{product.description}</p>
                    <ul>
                      {product.includes.map((item) => (
                        <li key={item}><Icon name="check" size={13} /> {item}</li>
                      ))}
                    </ul>
                    <div className="packages-product-meta">
                      <strong>{price(product.price)}</strong>
                      <span><span className="packages-rating-star">★</span> {product.rating} <small>({product.reviews})</small></span>
                    </div>
                    <button
                      className="packages-add-button"
                      type="button"
                      onClick={() => updateCart(product.id, 1)}
                    >
                      <Icon name="cart" size={16} />
                      {cart[product.id] ? `Add another (${cart[product.id]} in cart)` : "Add to cart"}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="packages-empty">
              <span><Icon name={showWishlist ? "heart" : "search"} size={27} /></span>
              <h3>{showWishlist ? "No saved packages yet" : "No packages found"}</h3>
              <p>
                {showWishlist
                  ? "Tap the heart on a package to save it for later."
                  : "Try another search or choose a different category."}
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setCategory("All packages");
                  setShowWishlist(false);
                }}
              >
                Browse all packages
              </button>
            </div>
          )}
        </section>

        <section className="packages-help">
          <span className="packages-help-icon"><Icon name="book" size={21} /></span>
          <div>
            <strong>Looking for something specific?</strong>
            <p>Tell us what you need for your course or campus and we’ll help you find it.</p>
          </div>
          <Link className="button button-outline" href="/#request">
            Make a request <Icon name="arrow" size={15} />
          </Link>
        </section>

        <footer className="site-footer packages-footer" id="footer">
          <Link className="brand brand-footer" href="/" aria-label="FindX Fair home">
            <Image
              src="/logo.jpeg"
              alt="FindX Fair"
              width={78}
              height={78}
              className="brand-logo-image"
            />
          </Link>
          <div className="footer-message"><span>More than a marketplace...</span><strong>it’s a student community.</strong><i /></div>
          <Link className="button button-gold footer-button" href="/shipping">
            Explore international finds <Icon name="arrow" size={16} />
          </Link>
        </footer>
      </main>

      {cartOpen && (
        <div className="store-panel-layer">
          <button
            className="store-panel-backdrop"
            type="button"
            aria-label="Close cart"
            onClick={() => setCartOpen(false)}
          />
          <aside
            className="store-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="packages-cart-heading"
          >
            <div className="store-panel-heading">
              <div><span className="panel-eyebrow">YOUR FINDX FAIR</span><h2 id="packages-cart-heading">Your cart</h2></div>
              <button className="panel-close" type="button" aria-label="Close cart" onClick={() => setCartOpen(false)}>
                <Icon name="close" size={20} />
              </button>
            </div>
            {cartCount > 0 ? (
              <>
                <div className="panel-items">
                  {packages.filter((product) => cart[product.id]).map((product) => (
                    <article className="panel-product" key={product.id}>
                      <span className={`panel-product-art packages-cart-art art-${product.tone}`}>
                        <Image src={product.image} alt="" fill sizes="64px" />
                      </span>
                      <div className="panel-product-info">
                        <h3>{product.title}</h3>
                        <strong>{price(product.price)}</strong>
                        <div className="quantity-control" aria-label={`Quantity for ${product.title}`}>
                          <button type="button" aria-label={`Remove one ${product.title}`} onClick={() => updateCart(product.id, -1)}>
                            <Icon name="minus" size={13} />
                          </button>
                          <span>{cart[product.id]}</span>
                          <button type="button" aria-label={`Add one ${product.title}`} onClick={() => updateCart(product.id, 1)}>
                            <Icon name="plus" size={13} />
                          </button>
                        </div>
                      </div>
                      <button
                        className="remove-product"
                        type="button"
                        aria-label={`Remove ${product.title} from cart`}
                        onClick={() => updateCart(product.id, -(cart[product.id] ?? 0))}
                      >
                        <Icon name="close" size={16} />
                      </button>
                    </article>
                  ))}
                </div>
                <div className="cart-summary">
                  <div><span>Subtotal</span><strong>{price(cartTotal)}</strong></div>
                  <p>Delivery fees are calculated at checkout.</p>
                  <button className="button button-gold checkout-button" type="button" disabled>
                    Checkout coming soon
                  </button>
                </div>
              </>
            ) : (
              <div className="panel-empty">
                <span className="empty-icon"><Icon name="cart" size={26} /></span>
                <h3>Your cart is ready for something good</h3>
                <p>Add a student package and it will show up here.</p>
                <button className="button button-gold" type="button" onClick={() => setCartOpen(false)}>
                  Browse packages
                </button>
              </div>
            )}
          </aside>
        </div>
      )}
    </div>
  );
}
