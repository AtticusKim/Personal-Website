# Content Customization Guide

This portfolio website is built with placeholder content that needs to be customized with your personal information. Below is a guide to all the content that should be updated.

## 🎯 Content to Customize

### 1. Hero Section (src/components/HeroSection.tsx)

**Replace these placeholders:**
- `[your field]` - Your professional background/field
- `[X years]` - Number of years of experience
- `[personal interests]` - Your hobbies and interests outside of work
- Professional headshot image (currently shows placeholder)

**Current text to update:**
```
"With a background in [your field], I've spent [X years] crafting solutions..."
"When I'm not building software, you'll find me [personal interests]..."
```

### 2. Experience Timeline (src/components/ExperienceTimeline.tsx)

**Update the `experiences` array with your actual work history:**
- Company names and roles
- Date ranges and locations
- Job descriptions and achievements
- Technologies used
- Team sizes and project details
- Impact metrics

**Current placeholder companies:**
- TechCorp Solutions
- StartupXYZ
- Digital Agency Pro

### 3. Project Portfolio (src/components/ProjectPortfolio.tsx)

**Update the `projects` array with your actual projects:**
- Project titles and descriptions
- Problem/solution narratives
- Technologies used
- Demo and code repository URLs
- Impact metrics
- Project images (currently shows placeholder)

### 4. Testimonials (src/components/TestimonialsSection.tsx)

**Update both arrays:**

**`testimonials` array:**
- Client/colleague names and roles
- Company names
- Testimonial content
- LinkedIn profile URLs
- Replace placeholder avatars

**`achievements` array:**
- Professional awards and certifications
- Years achieved
- Descriptions

### 5. Contact Section (src/components/ContactSection.tsx)

**Update contact information:**
- Email address: `hello@atticus-kim.com`
- Phone number: `+1 (234) 567-8900`
- Location: `San Francisco, CA`

**Update social media links in `socialLinks` array:**
- LinkedIn URL
- GitHub URL
- Twitter URL

**Update availability status:**
- Current availability message
- Calendly booking link

### 6. SEO & Metadata (src/app/layout.tsx)

**Update the metadata:**
- Page title
- Meta description
- Keywords array
- Author name
- Open Graph properties
- Twitter card properties

## 📁 Asset Requirements

### Images Needed:
1. **Professional headshot** - High quality, 400x400px recommended
2. **Project screenshots** - For each portfolio project
3. **Company logos** - For experience timeline (optional)
4. **Favicon** - Update in `/public` folder

### Recommended Image Specifications:
- **Format:** WebP or high-quality JPG
- **Hero Image:** 400x400px minimum
- **Project Images:** 800x600px recommended
- **Logos:** SVG preferred, or 200x200px PNG

## 🎨 Brand Customization

The color palette is based on copper tones as specified in your PRD:
- Primary copper: `#B87333`
- Copper variants: `#CD7F32`, `#D2691E`
- Neutrals: `#FAFAFA` (off-white), `#2F2F2F` (charcoal)

Colors can be customized in:
- `tailwind.config.ts` - Tailwind color palette
- `src/app/globals.css` - CSS custom properties

## 📝 Content Writing Tips

### Professional Bio:
- Keep it conversational yet professional
- Include your "why" - what drives you
- Mention key values and approach
- Show personality while maintaining credibility

### Project Descriptions:
- Focus on problem-solving impact
- Include quantifiable results when possible
- Explain your role and contributions
- Highlight technologies that align with target opportunities

### Experience Details:
- Lead with achievements and impact
- Use action verbs and specific metrics
- Include context about team size and collaboration
- Mention technologies relevant to your career goals

## 🚀 Ready to Deploy?

Once you've customized all content:
1. Test locally: `npm run dev`
2. Build for production: `npm run build`
3. Deploy to Vercel, Netlify, or your preferred platform

## 📞 Need Help?

If you need assistance customizing any content or have questions about the implementation, feel free to reach out!