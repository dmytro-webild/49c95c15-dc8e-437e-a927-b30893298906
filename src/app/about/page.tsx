"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TeamCardSix from '@/components/sections/team/TeamCardSix';

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

  <div id="about-story" data-section="about-story">
      <TeamCardSix
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      members={[
        {
          id: "1",
          name: "Aynalem Getahun",
          role: "General Manager",
          imageSrc: "http://img.b2bpic.net/free-photo/bartender-preparing-drink-bar_23-2150443977.jpg",
          imageAlt: "Aynalem Getahun, General Manager",
        },
        {
          id: "2",
          name: "Kalkidan Tesfaye",
          role: "Executive Chef",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-man-cooking_23-2149631665.jpg",
          imageAlt: "Kalkidan Tesfaye, Executive Chef",
        },
        {
          id: "3",
          name: "Fasika Demessie",
          role: "Front Office Manager",
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-businessman-seaking-phone-shaking-hand_23-2147793072.jpg",
          imageAlt: "Fasika Demessie, Front Office Manager",
        },
        {
          id: "4",
          name: "Tadesse Abera",
          role: "Events Coordinator",
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-restaurant-manager-is-talking-waitresses-about-work-process_8353-10555.jpg",
          imageAlt: "Tadesse Abera, Events Coordinator",
        },
        {
          id: "5",
          name: "Mihiret Assefa",
          role: "Marketing Director",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-man-doing-presentation-meeting_23-2148817046.jpg",
          imageAlt: "Mihiret Assefa, Marketing Director",
        },
        {
          id: "6",
          name: "Yosef Kebede",
          role: "Finance Manager",
          imageSrc: "http://img.b2bpic.net/free-photo/hotel-concierge-offering-services_482257-80875.jpg",
          imageAlt: "Yosef Kebede, Finance Manager",
        },
      ]}
      title="Our Story: Luxury Meets Ethiopian Hospitality"
      description="Urji Hotel Shashemene embodies a mission to offer modern, elegant, and trustworthy service, reflecting the warm spirit of Ethiopian culture. Our commitment to excellence began with a vision to create a unique haven for travelers."
    />
  </div>

  <div id="about-metrics" data-section="about-metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Urji Hotel by the Numbers"
      tag="Our Commitment"
      tagAnimation="slide-up"
      metrics={[
        {
          id: "1",
          value: "200+",
          description: "Rooms & Suites",
        },
        {
          id: "2",
          value: "4.9",
          description: "Guest Rating",
        },
        {
          id: "3",
          value: "10+",
          description: "Years of Hospitality",
        },
        {
          id: "4",
          value: "3",
          description: "Dining Options",
        },
      ]}
      metricsAnimation="slide-up"
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
