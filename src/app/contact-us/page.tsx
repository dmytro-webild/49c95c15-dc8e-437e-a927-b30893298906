"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';

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

  <div id="contact-info" data-section="contact-info">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient",
      }}
      text="Get in Touch with Urji Hotel Shashemene"
      buttons={[
        {
          text: "Call Us: +251 912 345 678",
          href: "tel:+251912345678",
        },
        {
          text: "Email Us: info@urjihotel.com",
          href: "mailto:info@urjihotel.com",
        },
        {
          text: "WhatsApp Us",
          href: "https://wa.me/251912345678",
        },
      ]}
    />
  </div>

  <div id="contact-faqs" data-section="contact-faqs">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "What are your reception hours?",
          content: "Our reception is open 24 hours a day, 7 days a week. Our friendly staff are always available to assist you with check-ins, check-outs, and any other inquiries.",
        },
        {
          id: "2",
          title: "How can I make a reservation?",
          content: "You can make a reservation directly through our website on the Rooms page, by calling us at +251 912 345 678, or by emailing info@urjihotel.com.",
        },
        {
          id: "3",
          title: "Do you offer group booking discounts?",
          content: "Yes, we offer special rates for group bookings. Please contact our sales team directly via email or phone to discuss your requirements and receive a customized quote.",
        },
        {
          id: "4",
          title: "Is Urji Hotel accessible for guests with disabilities?",
          content: "Urji Hotel is committed to providing accessibility for all guests. We offer accessible rooms and facilities. Please inform us of your specific needs when booking so we can make appropriate arrangements.",
        },
        {
          id: "5",
          title: "How do I provide feedback on my stay?",
          content: "We value your feedback! You can leave a review on our website, contact the reception directly during your stay, or send an email to feedback@urjihotel.com after your visit.",
        },
      ]}
      sideTitle="Need Assistance? We're Here to Help"
      sideDescription="Find answers to common questions about bookings, services, and hotel policies."
      faqsAnimation="slide-up"
      textPosition="right"
      showCard={true}
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
