### TASK: Build Placeholder Pages for Tool Categories

**Description**:  
Create placeholder pages for each major tool category to establish the routing structure and provide a foundation for individual tool implementations. These pages should include basic layouts and navigation elements that will be consistent across all tools in a category.

**Acceptance Criteria**:  
- Placeholder pages created for all tool categories
- Each page has appropriate route configuration
- Basic layout structure implemented on each page
- Category title and description displayed
- List of available tools in the category shown
- Navigation between categories works correctly
- Pages are responsive on all device sizes
- Loading states and error boundaries implemented

**Implementation Notes**:  
- Use TanStack Start's file-based routing system
- Create a consistent layout template for category pages
- Implement skeleton UI for tools that aren't yet developed
- Use the tools configuration file to generate lists dynamically
- Add metadata for each page (title, description)
- Consider implementing lazy loading for better performance
- Add breadcrumb navigation if appropriate

**Files Involved**:
- `src/routes/tools/text-transformation/page.tsx`
- `src/routes/tools/analysis/page.tsx`
- `src/routes/tools/encoding-decoding/page.tsx`
- `src/components/layout/CategoryLayout.tsx`
- `src/components/ui/ToolCard.tsx`
- `src/components/ui/Breadcrumb.tsx`
- `src/config/tools.ts` (for category metadata)
