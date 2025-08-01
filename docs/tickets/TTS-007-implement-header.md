### TASK: Implement Header with Logo and Navigation

**Description**:  
Create a responsive header component that includes the Text Tools Suite logo, primary navigation links, and theme toggle. The header should be consistent across all pages and adapt to different screen sizes.

**Acceptance Criteria**:  
- Header displays logo and site title
- Primary navigation links are visible and functional
- Theme toggle button works correctly
- Header is responsive on mobile, tablet, and desktop views
- Header is accessible (keyboard navigable, proper ARIA attributes)
- Styling matches design system specifications
- Fixed or sticky positioning as appropriate
- Mobile menu/hamburger for smaller screens

**Implementation Notes**:  
- Use shadcn/ui components for navigation elements
- Implement responsive design using Tailwind breakpoints
- Create SVG logo or use placeholder until final logo is available
- Use Radix UI for accessible dropdown menus if needed
- Implement theme toggle using the theme provider
- Test across different viewport sizes
- Ensure smooth transitions for mobile menu

**Files Involved**:
- `src/components/layout/Header.tsx`
- `src/components/ui/ThemeToggle.tsx`
- `src/components/layout/MobileMenu.tsx`
- `src/assets/logo.svg`
- `src/styles/header.css` (if needed for custom styling)
- `src/routes/_layout.tsx` (to include the header)
