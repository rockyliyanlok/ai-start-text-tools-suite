### TASK: Configure Per-Page Metadata

**Description**:  
Implement a system for configuring and managing metadata for each page in the application, including title, description, and Open Graph tags. This will improve SEO performance and social media sharing capabilities.

**Acceptance Criteria**:  
- Metadata configuration system for all pages
- Dynamic page titles that reflect current tool/section
- Meta descriptions optimized for search engines
- Open Graph tags for improved social media sharing
- Twitter Card metadata for Twitter sharing
- Canonical URLs to prevent duplicate content issues
- Structured data (JSON-LD) for relevant pages
- Ability to customize metadata per tool
- Default fallback metadata for unconfigured pages
- Proper handling of dynamic content in metadata

**Implementation Notes**:  
- Use TanStack Start's metadata capabilities
- Create a centralized metadata configuration system
- Implement helper functions for generating dynamic metadata
- Consider SEO best practices for title and description length
- Add appropriate Open Graph images for social sharing
- Test metadata with social media preview tools
- Ensure metadata is properly rendered in SSR/SSG
- Document the metadata system for future tool additions
- Consider implementing a metadata testing utility

**Files Involved**:
- `src/lib/utils/seo.ts` (SEO utility functions)
- `src/config/metadata.ts` (metadata configuration)
- `src/components/layout/MetaTags.tsx` (if needed)
- `src/routes/_layout.tsx` (root layout for common metadata)
- `src/routes/tools/*/page.tsx` (individual tool pages)
- `public/og-image.png` (Open Graph default image)
- `src/types/metadata.ts` (TypeScript types for metadata)
