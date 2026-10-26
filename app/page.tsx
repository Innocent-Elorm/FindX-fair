"use client";
import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import findxFairLogo from "../public/logo.jpeg";

type IconName =
  | "arrow"
  | "book"
  | "cart"
  | "check"
  | "chevron"
  | "close"
  | "dots"
  | "gift"
  | "globe"
  | "headphones"
  | "heart"
  | "heartPlus"
  | "home"
  | "laptop"
  | "menu"
  | "pencil"
  | "plus"
  | "minus"
  | "pin"
  | "search"
  | "shield"
  | "shirt"
  | "truck"
  | "user"
  | "users"
  | "flask"
  | "utensils";

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
  close: <path d="m18 6-12 12M6 6l12 12" />,
  check: <path d="m5 12 4 4L19 6" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  dots: (
    <>
      <circle cx="5" cy="12" r="1" />
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
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
  headphones: (
    <>
      <path d="M3 14v-3a9 9 0 0 1 18 0v3m-18 0v4a2 2 0 0 0 2 2h2v-8H5a2 2 0 0 0-2 2Zm18 0v4a2 2 0 0 1-2 2h-2v-8h2a2 2 0 0 1 2 2Z" />
    </>
  ),
  heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />,
  heartPlus: (
    <>
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l3-2.9" />
      <path d="M19 12v6m-3-3h6" />
    </>
  ),
  home: <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1V10Z" />,
  laptop: (
    <>
      <rect x="5" y="4" width="14" height="12" rx="1.5" />
      <path d="M2 20h20l-2-4H4l-2 4Z" />
    </>
  ),
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  pencil: (
    <>
      <path d="m4 16-.8 4.8L8 20l11.7-11.7a2.1 2.1 0 0 0-3-3L5 17" />
      <path d="m14.5 6.5 3 3" />
    </>
  ),
  plus: <path d="M12 5v14m-7-7h14" />,
  minus: <path d="M5 12h14" />,
  pin: (
    <>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
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
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m2-12a4 4 0 1 0 8 0 4 4 0 0 0-8 0Zm9-3a4 4 0 0 1 0 8m3 2a4 4 0 0 1 2 3v2" />
    </>
  ),
  flask: <path d="M9 3h6m-5 0v7L4 20a1 1 0 0 0 .9 1.5h14.2A1 1 0 0 0 20 20l-6-10V3m-6 12h8" />,
  utensils: <path d="M7 3v7m-3-7v4a3 3 0 0 0 6 0V3M7 10v11m10-18c-2 2-3 5-3 8v2h3v8m0-18v18" />,
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

const categories: { label: string; icon: IconName; tone: string }[] = [
  { label: "Textbooks & Course Materials", icon: "book", tone: "blue" },
  { label: "Electronics & Gadgets", icon: "laptop", tone: "violet" },
  { label: "Stationery & Office Supplies", icon: "pencil", tone: "green" },
  { label: "Clothing & Fashion", icon: "shirt", tone: "rose" },
  { label: "Lab & Practical Equipment", icon: "flask", tone: "cyan" },
  { label: "Food & Beverages", icon: "utensils", tone: "orange" },
  { label: "Home & Living", icon: "home", tone: "purple" },
  { label: "Health & Beauty", icon: "heartPlus", tone: "pink" },
  { label: "More to explore", icon: "dots", tone: "slate" },
];

type Product = {
  id: number;
  label: string;
  title: string;
  description: string;
  price: number;
  rating: string;
  reviews: string;
  icon: IconName;
  tone: string;
};

type CartItem = {
  product: Product;
  quantity: number;
};

const products: Product[] = [
  {
    id: 1,
    label: "MOST POPULAR",
    title: "Fresh Semester Starter Pack",
    description: "Laptop bag, notebooks, calculator & everyday essentials.",
    price: 450,
    rating: "4.8",
    reviews: "124",
    icon: "gift" as const,
    tone: "starter",
  },
  {
    id: 2,
    label: "ACADEMIC ESSENTIALS",
    title: "Textbook Bundle (Level 100)",
    description: "Core textbooks for first-year Arts, Science, Business & more.",
    price: 320,
    rating: "4.6",
    reviews: "89",
    icon: "book" as const,
    tone: "books",
  },
  {
    id: 3,
    label: "FOR TECHIES",
    title: "Laptop & Accessories Pack",
    description: "Laptop sleeve, mouse, headphones, charger & cleaning kit.",
    price: 1800,
    rating: "4.9",
    reviews: "67",
    icon: "laptop" as const,
    tone: "tech",
  },
  {
    id: 4,
    label: "LAB READY",
    title: "Lab Essentials Pack",
    description: "Lab coat, goggles, gloves, notebook, calculator & basic tools.",
    price: 680,
    rating: "4.7",
    reviews: "52",
    icon: "flask" as const,
    tone: "lab",
  },
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

const formatPrice = (amount: number) =>
  new Intl.NumberFormat("en-GH", {
    style: "currency",
    currency: "GHS",
    maximumFractionDigits: 0,
  }).format(amount);

const benefits: { title: string; copy: string; icon: IconName }[] = [
  {
    title: "Fast & reliable delivery",
    copy: "Get your items on time, on campus or at your doorstep.",
    icon: "truck",
  },
  {
    title: "Secure payments",
    copy: "Pay safely with mobile money, card or bank transfer.",
    icon: "shield",
  },
  {
    title: "Verified sellers",
    copy: "Students and trusted vendors only.",
    icon: "users",
  },
  {
    title: "Multiple campuses",
    copy: "Serving students across Ghana and beyond.",
    icon: "globe",
  },
];

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a className={`brand${footer ? " brand-footer" : ""}`} href="#top" aria-label="FindX Fair home">
      <Image
        src={findxFairLogo}
        alt="FindX Fair — Your Campus. Your Marketplace."
        priority={!footer}
        className="brand-logo-image"
      />
    </a>
  );
}

export default function Home() {
  const [campus, setCampus] = useState(campuses[0]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [activePanel, setActivePanel] = useState<"cart" | "wishlist" | null>(null);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  useEffect(() => {
    if (!activePanel) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActivePanel(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [activePanel]);

  const addToCart = (product: Product) => {
    setCart((current) => {
      const existing = current.find((item) => item.product.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...current, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: number, change: number) => {
    setCart((current) =>
      current.flatMap((item) => {
        if (item.product.id !== productId) return [item];
        const quantity = item.quantity + change;
        return quantity > 0 ? [{ ...item, quantity }] : [];
      }),
    );
  };

  const toggleWishlist = (productId: number) => {
    setWishlist((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId],
    );
  };

  return (
    <>
      <header className="site-header" id="top">
        <div className="header-main page-width">
          <Brand />
          <form className="search-form" action="#packages" role="search">
            <Icon name="search" size={19} />
            <input
              aria-label="Search the marketplace"
              type="search"
              name="search"
              placeholder="Search for products, packages, or sellers..."
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
            aria-expanded={activePanel === "cart"}
            onClick={() => setActivePanel("cart")}
          >
            <Icon name="cart" size={22} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
          <button
            className="header-icon optional-icon"
            type="button"
            aria-label={`Wishlist, ${wishlist.length} saved items`}
            aria-expanded={activePanel === "wishlist"}
            onClick={() => setActivePanel("wishlist")}
          >
            <Icon name="heart" size={21} />
            {wishlist.length > 0 && <span className="cart-count">{wishlist.length}</span>}
          </button>
          <a className="header-icon account-icon" href="#footer" aria-label="Your account">
            <Icon name="user" size={21} />
            <span className="select-caret" aria-hidden="true">⌄</span>
          </a>
        </div>
        <nav className="main-nav" aria-label="Main navigation">
          <div className="page-width nav-inner">
            <a className="nav-category" href="#categories">
              <Icon name="menu" size={19} />
              <span>All Categories</span>
            </a>
            <div className="nav-links">
              <a className="nav-active" href="#top">Home</a>
              <a href="#packages">Student Packages</a>
              <a href="#shipping">International Shipping</a>
              <a href="#request">Make a Request</a>
              {/* <a href="#footer">Sell on FindX</a> */}
              <a href="#footer">Help</a>
            </div>
          </div>
        </nav>
      </header>

      <main className="page-width home-content">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <span className="eyebrow"><span className="eyebrow-dot" /> STUDENT MARKETPLACE</span>
            <h1 id="hero-heading">
              Tired of finding X and Y?
              <span>Find <em>everything</em> else here.</span>
            </h1>
            <p>Student packages, everyday essentials, academic materials, and more — all in one place.</p>
            <div className="hero-actions">
              <a className="button button-gold" href="#packages">
                <Icon name="cart" size={18} /> Shop student packages
              </a>
              <a className="button button-outline" href="#categories">Explore categories</a>
            </div>
            <div className="hero-proof">
              <span><Icon name="check" size={15} /> Made for campus life</span>
              <span><Icon name="shield" size={15} /> Trusted local sellers</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Illustration of a student ready for campus">
            <div className="sun-shape" />
            <div className="campus-building building-one"><span /><span /><span /></div>
            <div className="campus-building building-two"><span /><span /><span /></div>
            <div className="tree-shape tree-one" />
            <div className="tree-shape tree-two" />
            <div className="hero-note">Study smart.<br />Shop easy.<span>〰</span></div>
            <div className="student-backpack" />
            <div className="student">
              <div className="student-hair" />
              <div className="student-head"><span className="student-smile" /></div>
              <div className="student-body"><span className="hoodie-string" /></div>
              <div className="student-arm" />
              <div className="student-phone"><span /></div>
            </div>
            <div className="hero-sticker"><strong>FindX</strong><span>campus<br />essentials</span><Icon name="arrow" size={17} /></div>
          </div>
        </section>

        <section className="category-panel" id="categories" aria-labelledby="category-heading">
          <div className="section-heading compact-heading">
            <h2 id="category-heading">Shop by category</h2>
            <a className="text-link" href="#packages">View all categories <Icon name="arrow" size={15} /></a>
          </div>
          <div className="category-list">
            {categories.map((category) => (
              <a className="category-item" href="#packages" key={category.label}>
                <span className={`category-icon tone-${category.tone}`}>
                  <Icon name={category.icon} size={23} />
                </span>
                <span>{category.label}</span>
              </a>
            ))}
          </div>
        </section>

        <div className="marketplace-grid">
          <section className="featured-section" id="packages" aria-labelledby="packages-heading">
            <div className="section-heading">
              <div className="heading-with-icon">
                <span className="heading-icon"><Icon name="gift" size={22} /></span>
                <div>
                  <h2 id="packages-heading">Featured student packages</h2>
                  <p>Curated packages for your academic and campus life needs.</p>
                </div>
              </div>
              <a className="text-link" href="#packages">View all packages <Icon name="arrow" size={15} /></a>
            </div>
            <div className="product-grid">
              {products.map((product) => (
                <article className="product-card" key={product.title}>
                  <div className={`product-art art-${product.tone}`}>
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
                    <span className="product-art-halo" />
                    <Icon name={product.icon} size={71} className="product-art-icon" />
                    <span className="art-sparkle sparkle-one">✦</span>
                    <span className="art-sparkle sparkle-two">✦</span>
                  </div>
                  <div className="product-info">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <div className="product-meta">
                      <strong>{formatPrice(product.price)}</strong>
                      <span><span className="star">★</span> {product.rating} <small>({product.reviews})</small></span>
                    </div>
                    <button className="add-button" type="button" onClick={() => addToCart(product)}>
                      <Icon name="cart" size={16} />
                      {cart.some((item) => item.product.id === product.id) ? "Add another" : "Add to cart"}
                    </button>
                  </div>
                </article>
              ))}
            </div>
            <div className="carousel-dots" aria-label="Featured package page 1 of 4">
              <span className="active-dot" /><span /><span /><span />
            </div>
          </section>

          <aside className="sidebar">
            <section className="request-card" id="request" aria-labelledby="request-heading">
              <div className="aside-title">
                <span className="aside-icon"><Icon name="globe" size={20} /></span>
                <div>
                  <h2 id="request-heading">Need an item not on the site?</h2>
                  <p>No problem! Tell us what you need and we’ll help you find it.</p>
                </div>
              </div>
              <a className="button button-gold request-button" href="mailto:hello@findxfair.com?subject=Product%20request">
                <Icon name="pencil" size={15} /> Make a request
              </a>
              <h3>How it works</h3>
              <ol className="request-steps">
                <li><span>1</span> Tell us what you need</li>
                <li><span>2</span> We find the best option (local or international)</li>
                <li><span>3</span> Get notified and complete your purchase</li>
              </ol>
            </section>
            <section className="shipping-card" id="shipping" aria-labelledby="shipping-heading">
              <span className="shipping-icon"><Icon name="globe" size={25} /></span>
              <div>
                <h2 id="shipping-heading">International shipping</h2>
                <p>We ship selected items from trusted international stores to your doorstep.</p>
                <a className="text-link" href="mailto:hello@findxfair.com?subject=International%20shipping">Learn more <Icon name="arrow" size={15} /></a>
              </div>
              <span className="shipping-orbit" aria-hidden="true"><Icon name="truck" size={24} /></span>
            </section>
          </aside>
        </div>

        <section className="benefit-strip" aria-label="Why shop with FindX Fair">
          {benefits.map((benefit) => (
            <div className="benefit-item" key={benefit.title}>
              <span className="benefit-icon"><Icon name={benefit.icon} size={21} /></span>
              <span><strong>{benefit.title}</strong><small>{benefit.copy}</small></span>
            </div>
          ))}
        </section>

        <footer className="site-footer" id="footer">
          <Brand footer />
          <div className="footer-message"><span>More than a marketplace...</span><strong>it’s a student community.</strong><i /></div>
          <a className="button button-gold footer-button" href="#packages">Start shopping <Icon name="arrow" size={16} /></a>
        </footer>
      </main>
      {activePanel && (
        <div className="store-panel-layer">
          <button
            className="store-panel-backdrop"
            type="button"
            aria-label="Close panel"
            onClick={() => setActivePanel(null)}
          />
          <aside
            className="store-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="store-panel-heading"
          >
            <div className="store-panel-heading">
              <div>
                <span className="panel-eyebrow">YOUR FINDX FAIR</span>
                <h2 id="store-panel-heading">
                  {activePanel === "cart" ? "Your cart" : "Your wishlist"}
                </h2>
              </div>
              <button
                className="panel-close"
                type="button"
                aria-label="Close panel"
                onClick={() => setActivePanel(null)}
              >
                <Icon name="close" size={21} />
              </button>
            </div>
            {activePanel === "cart" ? (
              cart.length > 0 ? (
                <>
                  <div className="panel-items">
                    {cart.map(({ product, quantity }) => (
                      <article className="panel-product" key={product.id}>
                        <span className={`panel-product-art art-${product.tone}`}>
                          <Icon name={product.icon} size={26} />
                        </span>
                        <div className="panel-product-info">
                          <h3>{product.title}</h3>
                          <strong>{formatPrice(product.price)}</strong>
                          <div className="quantity-control" aria-label={`Quantity for ${product.title}`}>
                            <button
                              type="button"
                              aria-label={`Remove one ${product.title}`}
                              onClick={() => updateQuantity(product.id, -1)}
                            >
                              <Icon name="minus" size={13} />
                            </button>
                            <span>{quantity}</span>
                            <button
                              type="button"
                              aria-label={`Add one ${product.title}`}
                              onClick={() => updateQuantity(product.id, 1)}
                            >
                              <Icon name="plus" size={13} />
                            </button>
                          </div>
                        </div>
                        <button
                          className="remove-product"
                          type="button"
                          aria-label={`Remove ${product.title} from cart`}
                          onClick={() => updateQuantity(product.id, -quantity)}
                        >
                          <Icon name="close" size={16} />
                        </button>
                      </article>
                    ))}
                  </div>
                  <div className="cart-summary">
                    <div><span>Subtotal</span><strong>{formatPrice(cartTotal)}</strong></div>
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
                  <button
                    className="button button-gold"
                    type="button"
                    onClick={() => {
                      setActivePanel(null);
                      document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Explore packages
                  </button>
                </div>
              )
            ) : wishlist.length > 0 ? (
              <div className="panel-items">
                {products.filter((product) => wishlist.includes(product.id)).map((product) => (
                  <article className="panel-product" key={product.id}>
                    <span className={`panel-product-art art-${product.tone}`}>
                      <Icon name={product.icon} size={26} />
                    </span>
                    <div className="panel-product-info">
                      <h3>{product.title}</h3>
                      <strong>{formatPrice(product.price)}</strong>
                      <button
                        className="wishlist-add-button"
                        type="button"
                        onClick={() => addToCart(product)}
                      >
                        <Icon name="cart" size={14} /> Add to cart
                      </button>
                    </div>
                    <button
                      className="remove-product"
                      type="button"
                      aria-label={`Remove ${product.title} from wishlist`}
                      onClick={() => toggleWishlist(product.id)}
                    >
                      <Icon name="close" size={16} />
                    </button>
                  </article>
                ))}
              </div>
            ) : (
              <div className="panel-empty">
                <span className="empty-icon"><Icon name="heart" size={26} /></span>
                <h3>Save the things you love</h3>
                <p>Tap the heart on any package to keep it close at hand.</p>
                <button
                  className="button button-gold"
                  type="button"
                  onClick={() => {
                    setActivePanel(null);
                    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Browse packages
                </button>
              </div>
            )}
          </aside>
        </div>
      )}
    </>
  );
}
