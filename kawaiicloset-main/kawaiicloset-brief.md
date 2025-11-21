# Kawaii Closet – Product & Design Brief (Phase 0)

## 1. App Summary

Kawaii Closet is a kawaii-inspired online clothing shop focused on pastel, cute, and modern streetwear. The website’s main job is to let visitors browse curated collections, understand why the brand is special, and quickly add items to their cart or wishlist.

The goal of this project is to build a clean, accessible marketing + shopping experience with a strong hero section, flash-sale countdown, category chips, and product grids that feel soft and friendly but still professional.

## 2. Users & Brand Mood

Primary users:
- Teens and young adults who like kawaii / pastel fashion.
- People who browse on mobile first and desktop second.
- Shoppers who want quick clarity about price, shipping, and returns.

Brand mood:
- Cute, cozy, dreamy, but not childish.
- Confident and modern, with clean layouts and readable type.
- Inclusive and welcoming: no body shaming, no exclusivity.

Tone of voice:
- Friendly and encouraging (“Dress in your dreamiest style”).
- Short, clear sentences.
- CTAs are inviting, not pushy (“Shop collection”, “See how it works”).

## 3. Pages & Key Flows

### 3.1 Pages

1. Home
   - Hero with main campaign.
   - Flash-sale countdown bar.
   - Category chips for quick filtering (All, New In, Tees, Dresses, Accessories, Outerwear).
   - Highlighted sections like “Fresh Arrivals” and “Best Sellers”.

2. Catalog (Product listing)
   - Shows a grid of products with filtering (category, size, color, price, in stock).
   - Sorting (Popular, Newest, Price low→high, Price high→low).
   - Pagination or “Load more”.

3. Product Detail (PDP)
   - Product gallery (main image + thumbnails).
   - Name, price, discount badge.
   - Color and size selectors with out-of-stock states.
   - Size guide and fit notes.
   - Add to cart button + wishlist.
   - Sticky Add to Cart bar on mobile.
   - “You might also like” product recommendations.

4. About / How it works
   - Short brand story.
   - Steps: “Browse cute styles → Add to cart → Fast shipping”.
   - Shipping and return highlights.
   - Social proof (rating, testimonials, or stats like “500+ cute items”).

## 4. Design System Basics

### 4.1 Layout & grids

- Desktop (1440px base):
  - 12-column grid
  - 120px side margins
  - 24px gutters
- Tablet (768–1199px):
  - 8-column grid
  - 64px side margins
  - 16px gutters
- Mobile (< 768px):
  - 4-column grid
  - 16px side margins
  - 16px gutters

Vertical rhythm:
- Use an 8px spacing scale (4, 8, 12, 16, 24, 32, 40, 48, 64).
- Large sections: 64–96px top/bottom padding on desktop; 32–48px on mobile.

### 4.2 Typography

- Headings: Poppins, weight 600–700.
- Body: Inter, weight 400–500.
- Body size: 16–18px, line-height 1.5–1.7.
- Hero headline: 32–40px on desktop, 24–28px on mobile.

### 4.3 Color tokens

```css
:root {
  --surface-base:   #FFFFFF;
  --surface-pink:   #FADBEF;
  --text-primary:   #222222;
  --text-secondary: #4B5563;
  --accent-primary: #C2185B;
  --accent-hover:   #A5124C;
  --accent-subtle:  #F8C8DA;
  --border-default: #E5E7EB;
  --focus-ring:     #111827;
  --rating-star:    #F59E0B;
}
