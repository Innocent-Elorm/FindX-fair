import type { Metadata } from "next";
import ShippingStore from "./shipping-store";

export const metadata: Metadata = {
  title: "International Shipping | FindX Fair",
  description:
    "Shop trusted international brands and get your orders delivered to your campus in Ghana.",
};

export default function ShippingPage() {
  return <ShippingStore />;
}
