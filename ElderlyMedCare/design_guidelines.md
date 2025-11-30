# Design Guidelines: Senior-Friendly Medicine Ordering Platform

## Design Approach

**System-Based with Accessibility Priority**
Drawing from Material Design's clear hierarchy and Apple HIG's simplicity, optimized specifically for elderly users. Primary focus: readability, ease of interaction, and trust-building through clarity.

**Core Principle:** Every interaction should be obvious, every element should be easily clickable, and cognitive load should be minimal.

---

## Typography

**Font Family:** Inter or similar highly legible sans-serif via Google Fonts

**Scale (Desktop):**
- Page Titles: text-5xl (48px) - bold
- Section Headers: text-3xl (30px) - semibold
- Product Names: text-2xl (24px) - medium
- Body Text: text-xl (20px) - regular
- Labels: text-lg (18px) - medium
- Button Text: text-xl (20px) - semibold

**Mobile:** Reduce by one step (text-4xl → text-3xl, etc.)

**Line Height:** Generous spacing - leading-relaxed (1.625) for all text

---

## Layout System

**Spacing Units:** Use Tailwind units of 4, 6, 8, 12, 16, 20 (p-4, m-6, gap-8, etc.)

**Container Strategy:**
- Max-width: max-w-7xl for main content
- Padding: px-6 on mobile, px-8 on desktop
- Section spacing: py-12 (mobile), py-20 (desktop)

**Grid Layouts:**
- Medicine catalog: 1 column (mobile), 2 columns (tablet), 3 columns (desktop)
- Always use gap-8 or gap-12 for breathing room

---

## Component Library

### Navigation
**Header:** Sticky top navigation with extra height (h-20)
- Logo left, large and clear
- Simple horizontal menu: Home | Medicines | My Orders | Cart
- Cart icon with item count badge (prominent)
- Login/Account button (right-aligned, high contrast)

### Medicine Catalog
**Product Cards:**
- Large clickable cards with substantial padding (p-6)
- Medicine image (square, 200x200px minimum)
- Medicine name (text-2xl, bold)
- Brief description (text-lg, 2 lines max)
- Price (text-3xl, prominent)
- Large "Add to Cart" button (h-14, full width)
- Stock indicator (clear text: "In Stock" / "Out of Stock")

**Search & Filters:**
- Oversized search bar (h-16) with large placeholder text
- Category buttons as large pills (h-12, px-8)
- Clear "Reset Filters" option

### Shopping Cart
**Cart Page:**
- Large product thumbnails with remove button (clearly labeled "Remove", not just an X)
- Quantity controls: Large +/- buttons (min h-12 w-12) with current quantity displayed between
- Running subtotal always visible
- Prominent "Proceed to Checkout" button (h-16)

### Checkout Flow
**Multi-Step with Clear Progress:**
- Large step indicators (Step 1 of 3: Delivery Address)
- Single-column form layout
- Input fields with extra height (h-14)
- Large, clear labels above each field
- One section visible at a time to reduce overwhelm
- "Continue" and "Back" buttons clearly labeled

### Forms & Inputs
**All Input Fields:**
- Height: h-14 minimum
- Text size: text-xl
- Clear labels (text-lg, semibold) positioned above inputs
- Helpful placeholder text
- Error messages in clear, simple language (text-lg)
- Success indicators with checkmarks and text

### Buttons
**Primary Actions:**
- Height: h-14 to h-16
- Padding: px-8 to px-12
- Border radius: rounded-lg
- Text: text-xl, semibold
- Always include clear text, never icon-only buttons

**Secondary Actions:**
- Same size as primary, visually distinct treatment

### Order Confirmation
- Large checkmark icon or success indicator
- Order number prominently displayed (text-4xl)
- Delivery estimate in clear terms ("Delivers by Monday, Jan 15")
- Summary of items with thumbnails
- "Continue Shopping" and "View Order Details" buttons

### Authentication
**Login/Register:**
- Centered card layout, max-w-md
- Extra large input fields (h-16)
- "Show Password" toggle with clear text label
- "Forgot Password?" link (text-lg, underlined)
- Social login options if available (large buttons with service logos and text)

---

## Images

**Hero Section (Homepage):**
- Full-width hero image showing a friendly pharmacist or elderly person receiving medicine delivery at home
- Image height: h-96 (mobile), h-[32rem] (desktop)
- Overlay text: "Order Your Medicines with Confidence" (text-5xl, bold)
- Primary CTA button with blurred background overlay

**Medicine Images:**
- Professional product photos on neutral backgrounds
- Consistent aspect ratio (1:1 square)
- Minimum 400x400px resolution

**Trust Indicators:**
- Certified pharmacy badge/logo
- Secure checkout icons
- Free delivery badge (if applicable)

---

## Accessibility Features

**High Contrast:** All text must pass WCAG AAA standards
**Touch Targets:** Minimum 48x48px for all interactive elements
**Focus Indicators:** Thick, visible focus rings on all interactive elements
**Alt Text:** Descriptive alt text for all medicine images
**Keyboard Navigation:** Full keyboard accessibility throughout

---

## Animations

**Minimal and Purposeful:**
- Cart icon bounce when item added
- Success checkmark animation on order completion
- Smooth page transitions only
- No distracting hover effects or parallax

---

This design prioritizes trust, clarity, and ease of use for elderly users while maintaining a professional, modern appearance that inspires confidence in the service.