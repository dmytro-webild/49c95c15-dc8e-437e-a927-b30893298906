"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactText from '@/components/sections/contact/ContactText';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Building, Car, Globe, MapPin, Mountain, Utensils, Wifi } from "lucide-react";

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

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "plain",
      }}
      title="Discover Unparalleled Hospitality at Urji Hotel Shashemene"
      description="Experience luxury and comfort at affordable prices in the heart of Ethiopia. From cozy rooms to executive suites, find your perfect stay with our seamless booking system."
      buttons={[
        {
          text: "Book Your Stay",
          href: "/rooms",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-new-york-city-daytime_23-2149488519.jpg?_wi=1",
          imageAlt: "Luxury hotel lobby",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/sofa-pillow_74190-1207.jpg?_wi=1",
          imageAlt: "Luxurious hotel room",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/contemplated-young-woman-sitting-restaurant-table-with-digital-tablet-cellphone-diary_23-2147936104.jpg?_wi=1",
          imageAlt: "Hotel swimming pool",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/view-from-side-sweet-fruits-standing-plate_132075-13636.jpg?_wi=1",
          imageAlt: "Hotel restaurant",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/luxurious-look-set-round-table_8353-9924.jpg?_wi=1",
          imageAlt: "Hotel conference hall",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/outdoor-massage-bed_1339-4790.jpg?_wi=1",
          imageAlt: "Hotel exterior view",
        },
      ]}
      mediaAnimation="opacity"
    />
  </div>

  <div id="featured-rooms" data-section="featured-rooms">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "standard-room",
          name: "Standard Room",
          price: "ETB 1,500/night",
          variant: "Cozy & Comfortable",
          imageSrc: "http://img.b2bpic.net/free-photo/asian-woman-enjoying-with-breakfast-bed_74190-9853.jpg?_wi=1",
          imageAlt: "Standard Room",
        },
        {
          id: "deluxe-room",
          name: "Deluxe Room",
          price: "ETB 2,500/night",
          variant: "Spacious & Elegant",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-large-transparent-window-with-opened-door-outside-which-newlyweds-posing-embracing-balcony-their-wedding-day_8353-12102.jpg?_wi=1",
          imageAlt: "Deluxe Room",
        },
        {
          id: "family-room",
          name: "Family Room",
          price: "ETB 3,800/night",
          variant: "Perfect for Groups",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-roommates-laying-bed_23-2149485690.jpg",
          imageAlt: "Family Room",
        },
        {
          id: "executive-suite",
          name: "Executive Suite",
          price: "ETB 5,000/night",
          variant: "Luxury & Privacy",
          imageSrc: "http://img.b2bpic.net/free-photo/elderly-adult-registering-hotel-lobby_482257-81621.jpg",
          imageAlt: "Executive Suite",
        },
        {
          id: "single-room",
          name: "Single Room",
          price: "ETB 1,200/night",
          variant: "Ideal for Solo Travelers",
          imageSrc: "http://img.b2bpic.net/free-photo/airbnb-host-welcoming-guests_23-2149872034.jpg",
          imageAlt: "Single Room",
        },
        {
          id: "twin-room",
          name: "Twin Room",
          price: "ETB 2,000/night",
          variant: "Flexible & Practical",
          imageSrc: "http://img.b2bpic.net/free-photo/friends-taking-selfie-sofa_23-2147680649.jpg",
          imageAlt: "Twin Room",
        },
      ]}
      title="Our Premier Rooms & Suites"
      description="Find deals for any season. From cozy bed &amp; breakfasts to luxury hotels, discover the perfect retreat for your next adventure with Urji Hotel Shashemene."
      buttons={[
        {
          text: "View All Rooms",
          href: "/rooms",
        },
      ]}
    />
  </div>

  <div id="hotel-facilities" data-section="hotel-facilities">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Free WiFi",
          description: "Stay connected with high-speed internet access throughout the hotel.",
          bentoComponent: "reveal-icon",
          icon: Wifi,
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-wi-fi-symbol-with-smartphone-sim-card_23-2148779244.jpg",
          imageAlt: "wifi icon signal internet",
        },
        {
          title: "Fine Dining Restaurant",
          description: "Savor exquisite Ethiopian and international cuisine at our on-site restaurant.",
          bentoComponent: "reveal-icon",
          icon: Utensils,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-new-york-city-daytime_23-2149488519.jpg?_wi=2",
          imageAlt: "wifi icon signal internet",
        },
        {
          title: "Conference Hall",
          description: "Host your business meetings or special events in our fully equipped conference facilities.",
          bentoComponent: "reveal-icon",
          icon: Building,
          imageSrc: "http://img.b2bpic.net/free-photo/sofa-pillow_74190-1207.jpg?_wi=2",
          imageAlt: "wifi icon signal internet",
        },
        {
          title: "Free Parking",
          description: "Convenient and secure parking available for all our guests.",
          bentoComponent: "reveal-icon",
          icon: Car,
          imageSrc: "http://img.b2bpic.net/free-photo/contemplated-young-woman-sitting-restaurant-table-with-digital-tablet-cellphone-diary_23-2147936104.jpg?_wi=2",
          imageAlt: "wifi icon signal internet",
        },
        {
          title: "Airport Pickup",
          description: "Enjoy hassle-free transfers from/to the airport for a smooth arrival and departure.",
          bentoComponent: "reveal-icon",
          icon: Car,
          imageSrc: "http://img.b2bpic.net/free-photo/view-from-side-sweet-fruits-standing-plate_132075-13636.jpg?_wi=2",
          imageAlt: "wifi icon signal internet",
        },
        {
          title: "24/7 Reception",
          description: "Our dedicated staff is available around the clock to assist you with any needs.",
          bentoComponent: "reveal-icon",
          icon: Building,
          imageSrc: "http://img.b2bpic.net/free-photo/luxurious-look-set-round-table_8353-9924.jpg?_wi=2",
          imageAlt: "wifi icon signal internet",
        },
      ]}
      title="Exceptional Amenities for a Memorable Stay"
      description="Book now, pay at the property with FREE cancellation on most rooms. We offer an array of services to make your visit effortless and enjoyable."
    />
  </div>

  <div id="guest-reviews" data-section="guest-reviews">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Amina Kebede",
          handle: "@AminaTravels",
          testimonial: "Urji Hotel provided an exceptional stay! The staff were incredibly welcoming, and the room was luxurious yet affordable. The Ethiopian coffee served at breakfast was a delightful touch.",
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-young-executive-looking-camera_1262-4763.jpg",
          imageAlt: "Amina Kebede",
        },
        {
          id: "2",
          name: "Solomon Fekadu",
          handle: "@SolomonAdventures",
          testimonial: "A truly modern and elegant hotel. The facilities are top-notch, and the location in Shashemene is perfect for exploring. I highly recommend Urji Hotel for both business and leisure.",
          imageSrc: "http://img.b2bpic.net/free-photo/outdoor-shot-thoughtful-young-woman-dressed-casually-strolls-outside-daytime-city-thinks-how-make-right-decision-life-returns-home-from-work-people-urban-lifestyle-thoughts_273609-56993.jpg",
          imageAlt: "Solomon Fekadu",
        },
        {
          id: "3",
          name: "Sara Tekalign",
          handle: "@SaraExplore",
          testimonial: "The warm hospitality at Urji Hotel made my trip unforgettable. The rooms were spotless and beautifully designed, reflecting Ethiopian culture. Excellent value for money!",
          imageSrc: "http://img.b2bpic.net/free-photo/black-businessman-happy-expression_1194-2550.jpg",
          imageAlt: "Sara Tekalign",
        },
        {
          id: "4",
          name: "Dawit Getachew",
          handle: "@DawitJourneys",
          testimonial: "From check-in to check-out, everything was seamless. The food at the restaurant was delicious, and the staff went above and beyond to ensure a comfortable stay. Will definitely return.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-man-traveling-with-baggage_23-2149338625.jpg",
          imageAlt: "Dawit Getachew",
        },
        {
          id: "5",
          name: "Lulit Lemma",
          handle: "@LulitGlobal",
          testimonial: "Urji Hotel is a gem in Shashemene! The ambiance is relaxing, and the attention to detail is remarkable. It felt like a luxury retreat without breaking the bank. Highly trustworthy service.",
          imageSrc: "http://img.b2bpic.net/free-photo/two-content-female-colleagues-cafe-table_1262-12558.jpg",
          imageAlt: "Lulit Lemma",
        },
      ]}
      title="Guest Experiences at Urji Hotel"
      description="With 300M+ reviews from fellow travelers, get trusted information from guests like you. Your comfort is our priority."
    />
  </div>

  <div id="nearby-attractions" data-section="nearby-attractions">
      <AboutMetric
      useInvertedBackground={true}
      title="Explore Shashemene & Beyond"
      metrics={[
        {
          icon: Mountain,
          label: "Lake Hawassa",
          value: "30 min Drive",
        },
        {
          icon: Globe,
          label: "Wondo Genet Resort",
          value: "45 min Drive",
        },
        {
          icon: MapPin,
          label: "Local Markets",
          value: "10 min Walk",
        },
        {
          icon: Building,
          label: "Historical Sites",
          value: "20 min Drive",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="book-cta" data-section="book-cta">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      text="Ready to Book Your Stay at Urji Hotel?"
      buttons={[
        {
          text: "Check Availability",
          href: "/rooms",
        },
      ]}
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
