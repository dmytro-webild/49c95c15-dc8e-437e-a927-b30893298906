"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardFour from '@/components/sections/product/ProductCardFour';

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

  <div id="hotel-gallery-main" data-section="hotel-gallery-main">
      <BlogCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      title="A Glimpse into Urji Hotel Shashemene"
      description="Explore the elegance and comfort that awaits you at Urji Hotel through our curated photo gallery. From our luxurious rooms to our vibrant common areas, see why guests love staying with us."
      blogs={[
        {
          id: "exterior",
          category: "Hotel Exterior",
          title: "The Grand Welcome",
          excerpt: "Discover the stunning architecture and welcoming facade of Urji Hotel, beautifully illuminated at night.",
          imageSrc: "http://img.b2bpic.net/free-photo/electric-dam-lake-water-vintage-filter_1203-7783.jpg",
          imageAlt: "Hotel exterior at night",
          authorName: "Urji Management",
          authorAvatar: "http://img.b2bpic.net/free-photo/positive-african-american-man-dressed-casual-wear-looking-happy-smiling-camera-isolated-colorful-background_574295-5450.jpg",
          date: "May 10, 2024",
        },
        {
          id: "lobby",
          category: "Lobby & Reception",
          title: "Elegance Upon Arrival",
          excerpt: "Step into our spacious and elegantly designed lobby, a perfect blend of modern luxury and Ethiopian charm.",
          imageSrc: "http://img.b2bpic.net/free-photo/empty-professional-psychotherapy-office-with-modern-couch-furniture_482257-124895.jpg",
          imageAlt: "Hotel lobby interior",
          authorName: "Urji Management",
          authorAvatar: "http://img.b2bpic.net/free-photo/pretty-business-woman-standing-with-coffee-cup_23-2148095743.jpg",
          date: "May 10, 2024",
        },
        {
          id: "rooms",
          category: "Rooms & Suites",
          title: "Your Sanctuary of Comfort",
          excerpt: "View our range of luxurious rooms and suites, each crafted to provide ultimate relaxation and privacy.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-hotel-maid-lying-bed_171337-12709.jpg",
          imageAlt: "Deluxe hotel room interior",
          authorName: "Urji Management",
          authorAvatar: "http://img.b2bpic.net/free-photo/happy-pretty-young-woman-throwing-up-hands-park_1262-20565.jpg",
          date: "May 10, 2024",
        },
        {
          id: "restaurant",
          category: "Dining Experience",
          title: "Culinary Delights",
          excerpt: "Experience gourmet dining at our restaurant, offering a rich selection of Ethiopian and international dishes.",
          imageSrc: "http://img.b2bpic.net/free-photo/lule-kebab-with-glass-red-wine_140725-2794.jpg",
          imageAlt: "Hotel restaurant dining area",
          authorName: "Urji Management",
          authorAvatar: "http://img.b2bpic.net/free-photo/young-joyful-businessman-black-suit-white-shirt-with-wireless-earphones-holding-cellphone-hand-while-happily-looking-camera-with-beautiful-building-background_574295-5827.jpg",
          date: "May 10, 2024",
        },
        {
          id: "conference",
          category: "Events & Meetings",
          title: "Premier Event Spaces",
          excerpt: "Our versatile conference halls are equipped for both corporate meetings and memorable celebrations.",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-seminar-meeting-banquet-hall-room_105762-1773.jpg",
          imageAlt: "Hotel conference hall setup",
          authorName: "Urji Management",
          authorAvatar: "http://img.b2bpic.net/free-photo/multi-ethnic-business-team_1098-22110.jpg",
          date: "May 10, 2024",
        },
        {
          id: "event",
          category: "Special Occasions",
          title: "Unforgettable Celebrations",
          excerpt: "Host your special events with us, from weddings to banquets, in our beautifully adorned event spaces.",
          imageSrc: "http://img.b2bpic.net/free-photo/crystal-champagne-flutes-stand-table_8353-8468.jpg",
          imageAlt: "Hotel event setup for wedding",
          authorName: "Urji Management",
          authorAvatar: "http://img.b2bpic.net/free-photo/family-sitting-bed_1157-16996.jpg",
          date: "May 10, 2024",
        },
      ]}
    />
  </div>

  <div id="additional-gallery" data-section="additional-gallery">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "pool-view",
          name: "Inviting Swimming Pool",
          price: "Leisure & Relaxation",
          variant: "Outdoor Pool",
          imageSrc: "http://img.b2bpic.net/free-photo/outdoor-swimming-pool_1203-2809.jpg",
          imageAlt: "Hotel swimming pool area",
        },
        {
          id: "gym-facilities",
          name: "Modern Fitness Center",
          price: "Health & Wellness",
          variant: "Fully Equipped Gym",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-helping-man-workout-gym_23-2149740187.jpg",
          imageAlt: "Hotel gym fitness center",
        },
        {
          id: "room-details-bed",
          name: "Deluxe Bed Comfort",
          price: "Ultimate Rest",
          variant: "Premium Linen",
          imageSrc: "http://img.b2bpic.net/free-photo/young-brunette-woman-is-enjoying-morning-with-cup-hot-drink-book-her-hands_169016-10679.jpg",
          imageAlt: "Close up of hotel bed",
        },
        {
          id: "restaurant-table",
          name: "Restaurant Table Setting",
          price: "Elegant Dining",
          variant: "Fine Dining Ambiance",
          imageSrc: "http://img.b2bpic.net/free-photo/luxury-dining-experience-cityscape-night-generated-by-ai_188544-16619.jpg",
          imageAlt: "Restaurant table setting",
        },
        {
          id: "conference-setup",
          name: "Conference Room Setup",
          price: "Business Ready",
          variant: "Professional Seating",
          imageSrc: "http://img.b2bpic.net/free-photo/restaurant-hall-table-ornated-with-flowers_140725-6306.jpg",
          imageAlt: "Conference room seating",
        },
        {
          id: "hotel-pathway",
          name: "Garden Pathway",
          price: "Scenic Routes",
          variant: "Outdoor Walkways",
          imageSrc: "http://img.b2bpic.net/free-photo/stair-pool_1203-3694.jpg",
          imageAlt: "Hotel garden pathway",
        },
      ]}
      title="More Moments from Urji Hotel"
      description="Beyond our core facilities, discover more of what makes Urji Hotel an ideal destination for relaxation and enjoyment."
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
