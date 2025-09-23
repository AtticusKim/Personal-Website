# Personal Portfolio Website - Product Requirements Document

## Project Overview

**Product Name:** Atticus Kim Personal Portfolio Website  
**Project Type:** Personal portfolio and professional showcase  
**Design Inspiration:** Copper Home's warm, premium aesthetic with natural materials and clean typography

## Vision Statement

Create a warm, inviting personal website that showcases professional skills and experiences through a premium design aesthetic inspired by natural materials, copper tones, and clean typography. The site should feel both sophisticated and approachable, reflecting personality while maintaining professional credibility.

## Design Philosophy & Aesthetic

### Color Palette

- **Primary:** Warm copper tones (#B87333, #CD7F32, #D2691E)
- **Secondary:** Complementary earth tones (warm grays, cream, sage green)
- **Accent:** Deep charcoal (#2F2F2F) and off-white (#FAFAFA)
- **Background:** Subtle gradients and textures mimicking natural materials

### Typography

- **Headings:** Clean, modern sans-serif with good weight variation
- **Body:** Highly readable serif or sans-serif with excellent spacing
- **Hierarchy:** Clear distinction between heading levels with consistent spacing

### Visual Elements

- Natural textures (wood grain, brushed metal, stone)
- High-quality photography with warm tones
- Subtle animations and micro-interactions
- Clean geometric shapes with organic curves
- Generous white space and breathing room

## Target Audience

**Primary Users:**

- Potential employers and recruiters
- Professional networking contacts
- Collaborators and peers in the industry
- Clients seeking freelance/contract work

**Secondary Users:**

- Industry colleagues and mentors
- Students and junior professionals seeking inspiration

## Core Features & Functionality

### 1. "Who I Am" Hero Section

- Full viewport introduction with professional headshot
- Personal story and background in warm, conversational tone
- Core values and approach to work
- Professional journey narrative
- Subtle scroll indicator to guide users to experiences below

### 2. Interactive Experience Timeline

**Left Side - Experience Navigation:**

- Vertical timeline with clickable experience buttons/cards
- Company names, roles, and date ranges
- Clean, minimal design with copper accent colors
- Smooth scroll behavior when navigating between experiences
- Active state highlighting for currently selected experience

**Right Side - Dynamic Detail Panel:**

- Half-screen sliding panel that opens when experience is clicked
- Detailed breakdown of responsibilities and achievements
- Key projects and impact metrics
- Technologies used and skills developed
- Team size and collaboration details
- Visual elements (company logos, project images, charts)
- Smooth transition animations between different experiences

### 3. Skills & Expertise Integration

- Skills embedded within experience detail panels
- Context-specific skill highlighting based on selected experience
- Visual skill evolution over time
- Technology stack badges within experience details

### 4. Project Portfolio (Below Timeline)

- 4-6 featured projects with case studies
- Project thumbnails with hover effects
- Technology stack used
- Links to live demos and code repositories
- Before/after or problem/solution narratives

### 5. Testimonials & Recommendations

- Client testimonials or peer recommendations
- Professional achievements and recognition
- Industry certifications or notable mentions

### 6. Contact Section

- Professional contact information
- Social media links (LinkedIn, GitHub, etc.)
- Contact form with warm, inviting copy
- Current availability status

## Technical Requirements

### Performance Standards

- **Load Time:** < 3 seconds on 3G connection
- **Core Web Vitals:** All green scores
- **Accessibility:** WCAG 2.1 AA compliance
- **SEO:** Optimized meta tags and structured data

### Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-first responsive design
- Progressive enhancement approach

### Content Management

- Easy content updates without developer intervention
- Blog capability for thought leadership content
- Portfolio project updates and additions

## User Experience Goals

### Emotional Response

- **Warmth:** Visitors feel welcomed and comfortable
- **Trust:** Professional credibility is immediately apparent
- **Curiosity:** Compelling content encourages exploration
- **Connection:** Personal elements create human connection

### User Journey

1. **Personal Connection:** "Who I Am" section creates immediate personal connection
2. **Experience Exploration:** Interactive timeline encourages active engagement with career history
3. **Deep Dive:** Right panel provides detailed context without overwhelming the main view
4. **Portfolio Discovery:** Natural flow from experience to project showcase
5. **Action:** Clear path to contact or connect

## Content Strategy

### Tone of Voice

- Professional yet personable
- Confident without being boastful
- Warm and approachable
- Clear and concise communication

### Content Types

- Professional bio and story
- Technical project documentation
- Process and methodology explanations
- Personal interests and values
- Industry insights and perspectives

## Technical Architecture

### Technology Stack Options

- **Frontend:** Next.js, React, or Vue.js for interactivity
- **Styling:** Tailwind CSS or styled-components for design system
- **Animations:** Framer Motion or similar for smooth interactions
- **CMS:** Headless CMS (Contentful, Strapi) for easy updates
- **Hosting:** Vercel, Netlify, or similar for performance

### Technical Implementation Notes

**Interactive Timeline Behavior:**

- Default state: Right panel shows summary or welcome message
- Click interaction: Smooth slide-in animation for experience details
- Multiple experiences: Clean transitions between different detail panels
- Mobile adaptation: Stack vertically with collapsible sections
- Keyboard navigation: Full accessibility support for timeline interaction

**Animation Requirements:**

- Smooth panel slide animations (300-400ms duration)
- Subtle hover effects on timeline buttons
- Scroll-triggered animations for timeline appearance
- Loading states for experience detail content
- Responsive transitions that work across device sizes

## Content Preparation Checklist

### Written Content

- [ ] Personal story and professional bio
- [ ] Detailed experience descriptions for each role
- [ ] Project case studies and descriptions
- [ ] Skills and expertise listings
- [ ] Personal values and approach to work
- [ ] Contact page copy

### Visual Assets

- [ ] Professional headshots
- [ ] Company logos for timeline
- [ ] Project screenshots and mockups
- [ ] Personal photos (optional)
- [ ] Icons for technologies and skills

### Experience Details for Timeline

- [ ] Company names, roles, and date ranges
- [ ] Key responsibilities and achievements
- [ ] Technologies used in each role
- [ ] Team size and collaboration details
- [ ] Impact metrics and notable projects
- [ ] Skills developed in each position

---

_This PRD serves as the foundation for creating a warm, professional personal website that effectively showcases skills and personality while maintaining the sophisticated aesthetic inspired by natural materials and premium design._
