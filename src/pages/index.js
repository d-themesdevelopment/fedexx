// Import Custom Components
import BusinessSection from "@/components/partials/BusinessSection";
import IntroSection from "@/components/partials/IntroSection";
import ShipmentsSection from "@/components/partials/ShipmentsSection";
import ShippingSection from "@/components/partials/ShippingSection";

export default function Home() {
  return (
    <main>
      <IntroSection />

      <div className="border-b border-black py-7">
        <div className="container">
          <h5 className="font-semibold text-sm mb-3">Watch: Ring for delivery</h5>

          <p className="font-light text-sm">
            True love… a romantic beach wedding… and—a missing ring? What now?!
            This tale has all the elements of a classic romcom—complete with an
            unlikely hero. See the true story.
          </p>
        </div>
      </div>

      <ShipmentsSection />

      <BusinessSection />

      <ShippingSection />
    </main>
  );
}
