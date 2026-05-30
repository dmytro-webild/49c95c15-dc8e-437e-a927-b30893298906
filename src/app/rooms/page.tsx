"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import { Award, Sparkles, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="largeSmall"
        background="fluid"
        cardStyle="subtle-shadow"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "/",
        },
        {
          name: "Rooms",
          id: "/rooms",
        },
        {
          name: "About Us",
          id: "/about",
        },
        {
          name: "Facilities",
          id: "/facilities",
        },
        {
          name: "Gallery",
          id: "/gallery",
        },
        {
          name: "Contact",
          id: "/contact-us",
        },
      ]}
      brandName="Urji Hotel"
    />
  </div>

  <div id="room-listing" data-section="room-listing">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "room-standard-details",
          name: "Standard Room",
          price: "ETB 1,500/night",
          variant: "25 sqm, Queen Bed, Free WiFi",
          imageSrc: "http://img.b2bpic.net/free-photo/pillow-bed_1203-2819.jpg",
          imageAlt: "Standard Room",
        },
        {
          id: "room-deluxe-details",
          name: "Deluxe Room",
          price: "ETB 2,500/night",
          variant: "35 sqm, King Bed, City View",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-young-asian-woman-relax-leisure-bed-with-city-view_74190-11560.jpg",
          imageAlt: "Deluxe Room",
        },
        {
          id: "room-family-details",
          name: "Family Room",
          price: "ETB 3,800/night",
          variant: "50 sqm, 2 Queen Beds, Kids amenities",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-couple-outdoors_23-2150329541.jpg",
          imageAlt: "Family Room",
        },
        {
          id: "room-executive-details",
          name: "Executive Suite",
          price: "ETB 5,000/night",
          variant: "70 sqm, King Bed, Private Lounge Access",
          imageSrc: "http://img.b2bpic.net/free-photo/luxury-modern-apartment-with-elegant-wood-flooring-generated-by-ai_188544-36597.jpg",
          imageAlt: "Executive Suite",
        },
        {
          id: "room-single-details",
          name: "Single Room",
          price: "ETB 1,200/night",
          variant: "20 sqm, Single Bed, Workspace",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-composition-spa-bath-concept_23-2148094147.jpg",
          imageAlt: "Single Room",
        },
        {
          id: "room-twin-details",
          name: "Twin Room",
          price: "ETB 2,000/night",
          variant: "30 sqm, Twin Beds, Modern Decor",
          imageSrc: "http://img.b2bpic.net/free-photo/couple-being-quarantined-home_23-2148857424.jpg",
          imageAlt: "Twin Room",
        },
      ]}
      title="Discover Your Ideal Room at Urji Hotel"
      description="Each room offers a unique blend of comfort and elegance, featuring an image gallery, price per night, room size, bed type, and a comprehensive list of amenities for a truly relaxing stay."
      buttons={[
        {
          text: "Book Now",
          href: "/room-details",
        },
      ]}
    />
  </div>

  <div id="room-pricing" data-section="room-pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "standard-plan",
          badge: "Value Pick",
          badgeIcon: Sparkles,
          price: "ETB 1,500",
          subtitle: "Standard Room, per night",
          buttons: [
            {
              text: "Book Standard",
              href: "/room-details",
            },
          ],
          features: [
            "Queen Size Bed",
            "Private Bathroom",
            "Complimentary Breakfast",
            "Free WiFi Access",
            "24/7 Room Service",
          ],
        },
        {
          id: "deluxe-plan",
          badge: "Most Popular",
          badgeIcon: Star,
          price: "ETB 2,500",
          subtitle: "Deluxe Room, per night",
          buttons: [
            {
              text: "Book Deluxe",
              href: "/room-details",
            },
          ],
          features: [
            "King Size Bed",
            "Spacious Layout",
            "City View Balcony",
            "Complimentary Breakfast",
            "Premium Toiletries",
          ],
        },
        {
          id: "executive-plan",
          badge: "Luxury Choice",
          badgeIcon: Award,
          price: "ETB 5,000",
          subtitle: "Executive Suite, per night",
          buttons: [
            {
              text: "Book Executive",
              href: "/room-details",
            },
          ],
          features: [
            "King Size Bed",
            "Separate Living Area",
            "Private Lounge Access",
            "Gourmet Breakfast",
            "Personal Concierge",
          ],
        },
      ]}
      title="Flexible Stays, Tailored for You"
      description="Choose the perfect room that fits your needs. Each booking offers real-time availability and transparent pricing."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Urji Hotel"
      columns={[
        {
          title: "Hotel",
          items: [
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Rooms",
              href: "/rooms",
            },
            {
              label: "About Us",
              href: "/about",
            },
            {
              label: "Facilities",
              href: "/facilities",
            },
          ],
        },
        {
          title: "Guest Services",
          items: [
            {
              label: "Book Now",
              href: "/rooms",
            },
            {
              label: "Manage Bookings",
              href: "#",
            },
            {
              label: "Contact Support",
              href: "/contact-us",
            },
            {
              label: "FAQs",
              href: "/contact-us#faqs",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms & Conditions",
              href: "#",
            },
            {
              label: "Cookie Policy",
              href: "#",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Facebook",
              href: "https://facebook.com/urjihotel",
            },
            {
              label: "Instagram",
              href: "https://instagram.com/urjihotel",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/urjihotel",
            },
            {
              label: "WhatsApp",
              href: "https://wa.me/251912345678",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Urji Hotel. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
