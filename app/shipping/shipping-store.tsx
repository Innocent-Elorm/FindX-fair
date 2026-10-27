"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";

type IconName =
  | "arrow"
  | "box"
  | "cart"
  | "check"
  | "chevron"
  | "clock"
  | "globe"
  | "headphones"
  | "heart"
  | "menu"
  | "pin"
  | "plane"
  | "search"
  | "shield"
  | "truck"
  | "user";

const iconPaths: Record<IconName, ReactNode> = {
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  box: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="M3 8v9l9 5 9-5V8m-9 5v9" />
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
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
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
  heart: (
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
  ),
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  pin: (
    <>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  plane: <path d="m2 16 20-5-20-5 4 5-4 5Zm4-5h10" />,
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

type ShippingProduct = {
  id: number;
  title: string;
  image: string;
  brand: string;
  price: number;
  rating: string;
  reviews: number;
  delivery: string;
  days: number;
  shipping: number;
};

const products: ShippingProduct[] = [
  {
    id: 1,
    title: "Apple AirPods Pro (2nd Gen)",
    image: "/shipping/airpods.jpg",
    brand: "Apple",
    price: 2850,
    rating: "4.8",
    reviews: 124,
    delivery: "7–12 days",
    days: 7,
    shipping: 360,
  },
  {
    id: 2,
    title: "JBL Tune 760NC Wireless Headphones",
    image: "/shipping/headphones.jpg",
    brand: "JBL",
    price: 1950,
    rating: "4.7",
    reviews: 89,
    delivery: "7–14 days",
    days: 7,
    shipping: 320,
  },
  {
    id: 3,
    title: "MacBook Air M2 (13-inch)",
    image: "/shipping/macbook-air.jpg",
    brand: "Apple",
    price: 18500,
    rating: "4.9",
    reviews: 210,
    delivery: "10–18 days",
    days: 10,
    shipping: 820,
  },
  {
    id: 4,
    title: "Puma Suede Classic Sneakers",
    image: "/shipping/sneakers.jpg",
    brand: "Puma",
    price: 720,
    rating: "4.6",
    reviews: 76,
    delivery: "10–15 days",
    days: 10,
    shipping: 290,
  },
  {
    id: 5,
    title: "Samsung Galaxy Tab S9",
    image: "/shipping/tablet.jpg",
    brand: "Samsung",
    price: 6800,
    rating: "4.8",
    reviews: 112,
    delivery: "8–13 days",
    days: 8,
    shipping: 450,
  },
  {
    id: 6,
    title: "Adidas Classic Backpack",
    image: "/shipping/backpack.jpg",
    brand: "Adidas",
    price: 450,
    rating: "4.5",
    reviews: 64,
    delivery: "7–12 days",
    days: 7,
    shipping: 260,
  },
  {
    id: 7,
    title: "Oxford University Press Textbooks",
    image: "/shipping/textbooks.jpg",
    brand: "Oxford",
    price: 320,
    rating: "4.7",
    reviews: 93,
    delivery: "7–11 days",
    days: 7,
    shipping: 210,
  },
  {
    id: 8,
    title: "Lenovo IdeaPad 3 Laptop",
    image: "/shipping/laptop.jpg",
    brand: "Lenovo",
    price: 7200,
    rating: "4.6",
    reviews: 68,
    delivery: "10–18 days",
    days: 10,
    shipping: 500,
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

const price = (amount: number) => `GHC ${amount.toLocaleString("en-GH")}`;

export default function ShippingStore() {
  const [campus, setCampus] = useState(campuses[0]);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("popular");
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [showWishlist, setShowWishlist] = useState(false);
  const [cart, setCart] = useState<Record<number, number>>({});
  const [cartOpen, setCartOpen] = useState(false);

  const cartCount = Object.values(cart).reduce((total, count) => total + count, 0);
  const visibleProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesQuery = product.title.toLowerCase().includes(query.trim().toLowerCase());
      const matchesWishlist = !showWishlist || wishlist.includes(product.id);
      return matchesQuery && matchesWishlist;
    });

    if (sort === "price-low") return filtered.sort((a, b) => a.price - b.price);
    if (sort === "price-high") return filtered.sort((a, b) => b.price - a.price);
    if (sort === "delivery") return filtered.sort((a, b) => a.days - b.days);
    return filtered;
  }, [query, showWishlist, sort, wishlist]);

  const toggleWishlist = (productId: number) => {
    setWishlist((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId],
    );
  };

  const updateCart = (productId: number, change: number) => {
    setCart((current) => {
      const nextCount = (current[productId] ?? 0) + change;
      const next = { ...current };
      if (nextCount > 0) next[productId] = nextCount;
      else delete next[productId];
      return next;
    });
  };

  return (
    <div className="shipping-shell">
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
              document.getElementById("international-products")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <Icon name="search" size={19} />
            <input
              aria-label="Search international products"
              type="search"
              name="search"
              placeholder="Search for international products..."
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
                <option key={campusName} value={campusName}>
                  {campusName}
                </option>
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
              document.getElementById("international-products")?.scrollIntoView({
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
              <Link href="/packages">Student Packages</Link>
              <Link className="nav-active" href="/shipping" aria-current="page">
                International Shipping
              </Link>
              <Link href="/#request">Make a Request</Link>
              <a href="mailto:hello@findxfair.com?subject=Sell%20on%20FindX">Sell on FindX</a>
              <a href="mailto:hello@findxfair.com?subject=FindX%20Fair%20help">Help</a>
            </div>
          </div>
        </nav>
      </header>

      <main className="shipping-main page-width">
        <section className="shipping-hero" aria-labelledby="shipping-hero-title">
          <div className="shipping-hero-copy">
            <span className="shipping-eyebrow"><Icon name="plane" size={17} /> INTERNATIONAL SHIPPING</span>
            <h1 id="shipping-hero-title">
              Global Products.
              <span>Right to <em>Your Campus.</em></span>
            </h1>
            <p>
              Get access to the world’s best products — from top brands and trusted
              international sellers. We handle the shipping, so you can focus on your studies.
            </p>
            <div className="shipping-promises">
              <span><Icon name="globe" size={22} /><span>Trusted<br />International Sellers</span></span>
              <span><Icon name="plane" size={22} /><span>Track Your<br />Order in Real Time</span></span>
              <span><Icon name="shield" size={22} /><span>Secure &amp; Reliable<br />Shipping</span></span>
              <span><Icon name="box" size={22} /><span>Delivered to<br />Your Campus</span></span>
            </div>
          </div>
          <div className="shipping-hero-art" aria-hidden="true">
            <Image
              src="/shipping/shipping-hero.jpg"
              alt=""
              fill
              priority
              sizes="(max-width: 760px) 100vw, 55vw"
            />
          </div>
        </section>

        <div className="shipping-marketplace">
          <section
            className="shipping-catalog"
            id="international-products"
            aria-labelledby="international-products-heading"
          >
            <div className="shipping-catalog-heading">
              <div>
                <div className="shipping-section-title">
                  <span className="shipping-title-icon"><Icon name="box" size={19} /></span>
                  <h2 id="international-products-heading">
                    {showWishlist ? "Your Wishlist" : "International Products"}
                  </h2>
                </div>
                <p>
                  {showWishlist
                    ? "Your saved international finds."
                    : "Shop from global brands with transparent shipping fees and delivery times."}
                </p>
              </div>
              <label className="shipping-sort">
                <span>Sort by:</span>
                <select
                  aria-label="Sort international products"
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                >
                  <option value="popular">Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="delivery">Fastest Delivery</option>
                </select>
                <Icon name="chevron" size={14} />
              </label>
            </div>

            {visibleProducts.length > 0 ? (
              <div className="shipping-product-grid">
                {visibleProducts.map((product) => (
                  <article className="shipping-product-card" key={product.id}>
                    <div className="shipping-product-image">
                      <span className="shipping-product-tag">International</span>
                      <span className="shipping-brand">{product.brand}</span>
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
                        src={product.image}
                        alt={product.title}
                        width={400}
                        height={240}
                        sizes="(max-width: 760px) 45vw, (max-width: 1100px) 30vw, 18vw"
                      />
                    </div>
                    <div className="shipping-product-info">
                      <h3>{product.title}</h3>
                      <p className="shipping-rating">
                        <span aria-hidden="true">★</span> {product.rating} ({product.reviews})
                      </p>
                      <strong className="shipping-price">{price(product.price)}</strong>
                      <div className="shipping-product-delivery">
                        <span><Icon name="plane" size={13} /> International Shipping</span>
                        <small>Est. {product.delivery} <b>·</b> {price(product.shipping)} shipping</small>
                      </div>
                      <button
                        className="shipping-add-button"
                        type="button"
                        onClick={() => updateCart(product.id, 1)}
                      >
                        <Icon name="cart" size={16} />
                        {cart[product.id] ? `Add another (${cart[product.id]})` : "Add to Cart"}
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="shipping-empty">
                <Icon name={showWishlist ? "heart" : "search"} size={28} />
                <h3>{showWishlist ? "No saved products yet" : "No products found"}</h3>
                <p>
                  {showWishlist
                    ? "Save a product with the heart button and it will appear here."
                    : "Try another search to find the international item you need."}
                </p>
                {showWishlist && (
                  <button type="button" onClick={() => setShowWishlist(false)}>
                    Browse all products
                  </button>
                )}
              </div>
            )}
          </section>

          <aside className="shipping-sidebar" aria-label="Shipping information">
            <section className="shipping-info-card destination-card">
              <div className="shipping-aside-heading">
                <span className="ghana-flag" aria-label="Ghana flag">🇬🇭</span>
                <div>
                  <h2>Shipping to Ghana</h2>
                  <p>We deliver to all major campuses and regions in Ghana.</p>
                </div>
              </div>
              <details className="supported-countries">
                <summary><Icon name="globe" size={15} /> View Supported Countries <Icon name="arrow" size={14} /></summary>
                <ul>
                  <li><Icon name="check" size={14} /> Greater Accra</li>
                  <li><Icon name="check" size={14} /> Ashanti Region</li>
                  <li><Icon name="check" size={14} /> Central Region</li>
                  <li><Icon name="check" size={14} /> Northern Region</li>
                  <li><Icon name="check" size={14} /> All major campus locations</li>
                </ul>
              </details>
            </section>

            <section className="shipping-info-card process-card">
              <h2>How International Shipping Works</h2>
              <ol className="shipping-steps">
                <li><span>1</span><div><strong>Browse and select your items</strong><p>Choose from trusted international sellers.</p></div></li>
                <li><span>2</span><div><strong>View shipping details</strong><p>See the shipping fee, estimated delivery time, and any import costs before checkout.</p></div></li>
                <li><span>3</span><div><strong>Track your order</strong><p>Get real-time updates from our shipping partners.</p></div></li>
                <li><span>4</span><div><strong>Receive at your campus</strong><p>Your order is delivered safely to your selected campus or pickup point.</p></div></li>
              </ol>
            </section>

            <section className="shipping-info-card costs-card">
              <h2><Icon name="truck" size={19} /> Shipping Cost &amp; Delivery Time</h2>
              <ul className="shipping-facts">
                <li><Icon name="truck" size={19} /><span><strong>Shipping fee</strong><small>Varies by product weight and destination.</small></span></li>
                <li><Icon name="clock" size={19} /><span><strong>Delivery time</strong><small>Typically 7–18 days (varies by country and product).</small></span></li>
                <li><Icon name="shield" size={19} /><span><strong>Import duties</strong><small>Any applicable duties will be shown before payment.</small></span></li>
              </ul>
              <a href="mailto:hello@findxfair.com?subject=International%20shipping">
                Learn more about international shipping <Icon name="arrow" size={14} />
              </a>
            </section>

            <section className="shipping-info-card support-card">
              <Icon name="headphones" size={26} />
              <div>
                <h2>Need Help?</h2>
                <p>Our support team is available 24/7.</p>
                <a href="mailto:hello@findxfair.com?subject=Shipping%20support">Chat with Us <Icon name="arrow" size={13} /></a>
              </div>
            </section>
          </aside>
        </div>
      </main>

      <footer className="shipping-footer">
        <div className="page-width shipping-footer-inner">
          <div><Icon name="globe" size={25} /><span><strong>Global Brands</strong><small>Authentic products from trusted sellers.</small></span></div>
          <div><Icon name="shield" size={25} /><span><strong>Secure Payments</strong><small>Multiple payment options.</small></span></div>
          <div><Icon name="truck" size={25} /><span><strong>Tracked Delivery</strong><small>Know where your order is, always.</small></span></div>
          <div><Icon name="headphones" size={25} /><span><strong>Student Support</strong><small>We’re here to help, 24/7.</small></span></div>
          <a className="button button-gold" href="#international-products">
            Explore International Products <Icon name="arrow" size={16} />
          </a>
        </div>
      </footer>

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
            aria-labelledby="shipping-cart-heading"
          >
            <div className="store-panel-heading">
              <div><span className="panel-eyebrow">YOUR FINDX FAIR</span><h2 id="shipping-cart-heading">Your cart</h2></div>
              <button className="panel-close" type="button" aria-label="Close cart" onClick={() => setCartOpen(false)}>×</button>
            </div>
            {cartCount > 0 ? (
              <>
                <div className="panel-items">
                  {products.filter((product) => cart[product.id]).map((product) => (
                    <article className="panel-product" key={product.id}>
                      <Image className="shipping-cart-image" src={product.image} alt="" width={64} height={48} />
                      <div className="panel-product-info">
                        <h3>{product.title}</h3>
                        <strong>{price(product.price)}</strong>
                        <div className="quantity-control">
                          <button type="button" aria-label={`Remove one ${product.title}`} onClick={() => updateCart(product.id, -1)}>−</button>
                          <span>{cart[product.id]}</span>
                          <button type="button" aria-label={`Add one ${product.title}`} onClick={() => updateCart(product.id, 1)}>+</button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
                <div className="cart-summary">
                  <div><span>Items</span><strong>{cartCount}</strong></div>
                  <p>Shipping fees are estimated per item and confirmed before payment.</p>
                  <button className="button button-gold checkout-button" type="button" disabled>
                    Checkout coming soon
                  </button>
                </div>
              </>
            ) : (
              <div className="panel-empty">
                <span className="empty-icon"><Icon name="cart" size={26} /></span>
                <h3>Your cart is ready for something good</h3>
                <p>Add an international product and it will show up here.</p>
                <button className="button button-gold" type="button" onClick={() => setCartOpen(false)}>
                  Browse products
                </button>
              </div>
            )}
          </aside>
        </div>
      )}
    </div>
  );
}
