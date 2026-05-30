"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import { Bell, Building, CalendarClock, Car, Crown, Droplet, Globe, ShieldCheck, Wifi } from "lucide-react";

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

  <div id="facilities-showcase" data-section="facilities-showcase">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Free High-Speed WiFi",
          description: "Seamless internet access throughout the hotel for all guests.",
          bentoComponent: "reveal-icon",
          icon: Wifi,
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-black-plates-with-golden-fork-knife-crossed-dark-surface-color-food-cutlery-restaurant-service-dinner-kitchen-cafe_179666-19699.jpg",
          imageAlt: "restaurant icon dining cutlery",
        },
        {
          title: "Gourmet Restaurant",
          description: "Indulge in a culinary journey with our exquisite menu of local and international dishes.",
          bentoComponent: "reveal-icon",
          icon: Crown,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-new-york-city-daytime_23-2149488519.jpg?_wi=3",
          imageAlt: "restaurant icon dining cutlery",
        },
        {
          title: "State-of-the-Art Conference Hall",
          description: "Perfect venue for meetings, conferences, and social gatherings.",
          bentoComponent: "reveal-icon",
          icon: Building,
          imageSrc: "http://img.b2bpic.net/free-photo/sofa-pillow_74190-1207.jpg?_wi=3",
          imageAlt: "restaurant icon dining cutlery",
        },
        {
          title: "Secure Free Parking",
          description: "Ample and safe parking spaces available for all hotel residents.",
          bentoComponent: "reveal-icon",
          icon: Car,
          imageSrc: "http://img.b2bpic.net/free-photo/contemplated-young-woman-sitting-restaurant-table-with-digital-tablet-cellphone-diary_23-2147936104.jpg?_wi=3",
          imageAlt: "restaurant icon dining cutlery",
        },
        {
          title: "Convenient Airport Pickup",
          description: "Arrange your arrival and departure with our reliable airport shuttle service.",
          bentoComponent: "reveal-icon",
          icon: Globe,
          imageSrc: "http://img.b2bpic.net/free-photo/view-from-side-sweet-fruits-standing-plate_132075-13636.jpg?_wi=3",
          imageAlt: "restaurant icon dining cutlery",
        },
        {
          title: "24/7 Front Reception",
          description: "Our friendly staff is always on hand to assist with any requests or queries.",
          bentoComponent: "reveal-icon",
          icon: CalendarClock,
          imageSrc: "http://img.b2bpic.net/free-photo/luxurious-look-set-round-table_8353-9924.jpg?_wi=3",
          imageAlt: "restaurant icon dining cutlery",
        },
        {
          title: "Prompt Room Service",
          description: "Enjoy dining in the comfort of your room with our extensive room service menu.",
          bentoComponent: "reveal-icon",
          icon: Bell,
          imageSrc: "http://img.b2bpic.net/free-photo/outdoor-massage-bed_1339-4790.jpg?_wi=2",
          imageAlt: "restaurant icon dining cutlery",
        },
        {
          title: "Professional Laundry Service",
          description: "Keep your wardrobe fresh with our efficient and reliable laundry facilities.",
          bentoComponent: "reveal-icon",
          icon: Droplet,
          imageSrc: "http://img.b2bpic.net/free-photo/asian-woman-enjoying-with-breakfast-bed_74190-9853.jpg?_wi=2",
          imageAlt: "restaurant icon dining cutlery",
        },
        {
          title: "Enhanced Security Service",
          description: "Your safety and peace of mind are our priority with 24/7 security surveillance.",
          bentoComponent: "reveal-icon",
          icon: ShieldCheck,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-large-transparent-window-with-opened-door-outside-which-newlyweds-posing-embracing-balcony-their-wedding-day_8353-12102.jpg?_wi=2",
          imageAlt: "restaurant icon dining cutlery",
        },
      ]}
      title="Comprehensive Facilities & Services at Urji Hotel"
      description="At Urji Hotel, we pride ourselves on providing a comprehensive range of services designed to make your stay as comfortable and convenient as possible. We're always here to help you."
    />
  </div>

  <div id="facilities-faq" data-section="facilities-faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "Is WiFi truly free and accessible everywhere?",
          content: "Yes, we provide complimentary high-speed WiFi access throughout the entire hotel, including all rooms, common areas, and conference facilities. You can connect easily upon arrival.",
        },
        {
          id: "2",
          title: "What kind of cuisine does the hotel restaurant offer?",
          content: "Our restaurant offers a diverse menu featuring authentic Ethiopian dishes, as well as a selection of popular international cuisine to cater to all tastes. We also have vegetarian and vegan options available.",
        },
        {
          id: "3",
          title: "Can I book the conference hall for private events?",
          content: "Absolutely! Our modern conference hall is available for private bookings, including corporate meetings, workshops, weddings, and other special events. Please contact our events team for capacity details and bespoke packages.",
        },
        {
          id: "4",
          title: "Is airport pickup and drop-off available 24/7?",
          content: "Yes, our airport pickup and drop-off service operates 24 hours a day, 7 days a week, to ensure your travel to and from Urji Hotel is as smooth as possible. Please arrange this service with our reception team in advance.",
        },
        {
          id: "5",
          title: "Are laundry services offered daily?",
          content: "Our professional laundry service is available daily. You can drop off your items at the reception, and they will be returned promptly. Express service is also available upon request.",
        },
      ]}
      sideTitle="Common Questions About Our Facilities"
      sideDescription="Find quick answers to the most frequently asked questions about the amenities and services available at Urji Hotel."
      faqsAnimation="slide-up"
      textPosition="left"
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
