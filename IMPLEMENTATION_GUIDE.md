# Gestalt Gardens Implementation Guide

## Email Setup (Important!)

The site is currently set to log emails to the server console rather than actually send them. To enable real email sending, you need to integrate with an email service.

### Recommended Email Services:
1. **Resend** (resend.com) - Modern, developer-friendly
2. **SendGrid** - Robust, good deliverability
3. **AWS SES** - Cost-effective at scale
4. **Mailgun** - Great for transactional emails
5. **nodemailer + SMTP** - Self-hosted option

### Implementation Steps:
1. Choose your email service and set up an account
2. Update `/app/api/send-email/route.ts` with your service's SDK/API
3. Add your API keys to `.env.local`:
   ```
   EMAIL_SERVICE_KEY=your_key_here
   RECIPIENT_EMAIL=us.gestaltgardens@gmail.com
   ```
4. Test by submitting the contact form

The contact form data structure is ready to accept:
- `name` (required)
- `email` (required)
- `phone` (optional)
- `address` (optional)
- `message` (required)

---

## Blog Updates

To add a new blog post:

1. Open `/lib/blog-data.ts`
2. Add a new object to the `blogPosts` array:
```typescript
{
  slug: "your-url-slug",
  title: "Your Post Title",
  subtitle: "A short subtitle",
  date: "Month Year",
  readTime: "X min read",
  category: "Philosophy" | "Materials" | "Process" | "Guides",
  excerpt: "Brief preview for the index page...",
  content: `
    Full article body in markdown-style format.
    
    Separate paragraphs with blank lines.
    Each paragraph renders as a <p> tag.
    
    No special markdown syntax needed.
  `,
}
```

The post automatically appears on `/blog` and `/blog/[slug]`.

---

## Garden Direction Finder Flow

The quiz has two endpoints:

1. **Quiz Results**: Shows the archetype with generated visual, watermark download, and "Start Your Garden Journey" CTA
   - Users can download a watermarked image of their archetype
   - Download adds a semi-transparent overlay with "Gestalt Gardens" text

2. **Contact Initiated State**: Shows after users click the CTA
   - Displays confirmation message
   - Offers "Discover Another Direction" or "Read Our Philosophy"
   - Email is automatically sent with their selection

---

## Watermark Customization

To customize the watermark appearance, edit `/lib/watermark-utils.ts`:

- Line 18: Change watermark text (currently "Gestalt Gardens")
- Line 24: Adjust font size calculation
- Line 25: Modify font family or style
- Line 26: Adjust text color/opacity
- Line 29-31: Customize shadow effect
- Line 35: Change bottom spacing

---

## Image Assets

All generated images are in `/public/images/`:

- Hero sections: `hero-garden.jpg`
- Material samples: `material-stone.jpg`, `material-wood.jpg`, `material-plants.jpg`, `material-water.jpg`
- Archetypes: `archetype-zen-courtyard.jpg`, `archetype-water-garden.jpg`, `archetype-gathering-terrace.jpg`, `archetype-japandi-retreat.jpg`, `archetype-contemplation-garden.jpg`

To replace any image, just upload a new file with the same name.

---

## Color Palette

All colors are defined in `/app/globals.css` and can be edited there:

- **Evergreen**: `#0B1F16` (primary dark)
- **Forest**: `#123326` (secondary dark)
- **Moss**: `#1B4A36` (accent green)
- **Gold**: `#C8A24A` (primary accent)
- **Champagne**: `#E6D3A3` (light gold)
- **Cream**: `#F4F1EA` (light background)
- **Stone**: `#A8A39A` (neutral gray)
- **Ink**: `#121313` (text)

---

## Fonts

- **Headings**: Playfair Display (serif)
- **Body**: DM Sans (sans-serif)

Both are loaded from Google Fonts in `/app/layout.tsx`.

---

## Common Updates

### Change the company name:
1. Search for "Gestalt Gardens" in the codebase
2. Replace with your chosen name
3. Update the watermark text in `/lib/watermark-utils.ts`
4. Update `RECIPIENT_EMAIL` in `/app/api/send-email/route.ts`

### Update contact email:
- Edit the `RECIPIENT_EMAIL` constant in `/app/api/send-email/route.ts`
- Also update `us.gestaltgardens@gmail.com` in form copy if visible

### Add new pages:
- Create folder in `/app/your-page/`
- Create `page.tsx` inside
- Add link to navigation in `/components/navigation.tsx`

---

## Deployment

The site is ready for Vercel deployment:
1. Push to GitHub
2. Connect repo to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

---

## Support

For questions about:
- **Theme/Colors**: Check `/app/globals.css` and `/tailwind.config.ts`
- **Components**: Check `/components/` folder
- **Pages**: Check `/app/` folder
- **Data**: Check `/lib/` folder
