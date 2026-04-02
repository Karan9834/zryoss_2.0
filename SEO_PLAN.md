# SEO Optimization Implementation Plan

This document outlines the SEO enhancements implemented in the Zryoss web application.

## 1. Technical Implementation

### Dynamic Meta Tags
We use `react-helmet-async` to inject unique meta tags for each page.
- **Component**: `src/components/common/SEO.jsx`
- **Data Source**: `src/data/seoData.js`

### Structured Data (JSON-LD)
Added an `Organization` schema to the home page to help search engines understand the brand identity.
- Includes: Name, URL, Logo, and Social profiles.

### Robots & Sitemap
- **`public/robots.txt`**: Standard configuration to allow all crawlers and point to the sitemap.
- **`public/sitemap.xml`**: Manually curated list of all major routes to ensure proper indexing.

## 2. File Structure Changes

| File | Status | Description |
| :--- | :--- | :--- |
| `src/components/common/SEO.jsx` | **NEW** | Reusable SEO head management component. |
| `src/data/seoData.js` | **NEW** | Central repository for page-specific SEO content. |
| `public/robots.txt` | **NEW** | Directives for search engine crawlers. |
| `public/sitemap.xml` | **NEW** | XML sitemap for indexing. |
| `src/pages/Home/Home.jsx` | MODIFIED | Integrated SEO component with Organization schema. |
| `src/pages/Company/About.jsx` | MODIFIED | Added unique SEO metadata. |
| `src/pages/Platform/WhatIsZryoss.jsx` | MODIFIED | Added unique SEO metadata. |
| `src/pages/Solutions/Overview.jsx` | MODIFIED | Added unique SEO metadata. |
| `src/pages/Partnership/PartnershipOverview.jsx` | MODIFIED | Added unique SEO metadata. |

## 3. SEO Best Practices Applied

- **Canonical URLs**: Added to prevent duplicate content issues.
- **Open Graph & Twitter Tags**: Optimized for social sharing (Facebook, LinkedIn, X).
- **Heading Hierarchy**: Verified that each page has exactly one `<h1>`.
- **Mobile Responsiveness**: Verified existing layouts to ensure they pass mobile-friendly tests.
- **Performance**: Leveraged existing `lazy` loading for code-splitting.

## 4. cPanel Deployment Instructions

Follow these steps to deploy the optimized version to your cPanel hosting:

### Step 1: Build the Project
Run the following command in your local terminal:
```bash
npm run build
```
This will create a `dist` folder.

### Step 2: Zip the `dist` Contents
Compress all files inside the `dist` folder (not the `dist` folder itself) into a `.zip` file.

### Step 3: Upload to cPanel
1. Log in to your cPanel.
2. Open **File Manager**.
3. Navigate to your website's root directory (usually `public_html`).
4. Click **Upload** and select your `.zip` file.
5. Once uploaded, right-click the file and select **Extract**.

### Step 4: Configure `.htaccess` (Crucial for React Routing)
To ensure that internal routes (like `/about`) work correctly on reload, create or edit the `.htaccess` file in `public_html` with the following content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

### Step 5: Verify
- Check `https://yourdomain.com/robots.txt`
- Check `https://yourdomain.com/sitemap.xml`
- Use [Social Share Preview](https://socialsharepreview.com/) to verify meta tags.
