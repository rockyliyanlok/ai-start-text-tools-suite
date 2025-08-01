### TASK: Add Routing for Each Tool

**Description**:  
Implement a comprehensive routing system for all tools in the application, ensuring proper navigation, URL structure, and metadata for SEO. This includes setting up file-based routes in TanStack Start and implementing proper page metadata.

**Acceptance Criteria**:  
- Routes created for all MVP tools with clean URL paths
- Dynamic route parameters handled properly where needed
- SEO-friendly metadata for each tool page
- Breadcrumb navigation reflecting route hierarchy
- Proper handling of 404 pages for invalid routes
- Deep linking to specific tool states (optional)
- Browser history management for tool interactions
- Route transitions with appropriate loading states
- Mobile-friendly navigation between tools
- Analytics tracking for page views (if implemented)

**Implementation Notes**:  
- Use TanStack Start's file-based routing system
- Create a consistent route naming convention
- Implement route metadata using TanStack's meta exports
- Consider implementing route-based code splitting for performance
- Add proper page titles and descriptions for SEO
- Test navigation flow between tools for usability
- Ensure back/forward browser buttons work correctly
- Consider implementing route guards for future premium features
- Document the routing structure for future development

**Files Involved**:
- `src/routes/tools/index.tsx` (tools landing page)
- `src/routes/tools/case-converter/page.tsx`
- `src/routes/tools/word-counter/page.tsx`
- `src/routes/tools/base64/page.tsx`
- `src/routes/_layout.tsx` (root layout with navigation)
- `src/components/layout/Breadcrumb.tsx`
- `src/config/routes.ts` (route configuration)
- `src/lib/utils/seo.ts` (SEO utilities)
