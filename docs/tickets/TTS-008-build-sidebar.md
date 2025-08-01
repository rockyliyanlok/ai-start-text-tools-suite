### TASK: Build Responsive Left Sidebar with Tool Categories

**Description**:  
Implement a responsive left sidebar that displays categorized tools with appropriate icons. The sidebar should allow users to navigate between different tool categories and individual tools, with visual indicators for the current selection.

**Acceptance Criteria**:  
- Sidebar displays tool categories with appropriate icons
- Tools are grouped by category (Text Transformation, Analysis, Encoding/Decoding, etc.)
- Current tool/category is visually highlighted
- Sidebar collapses to a mobile-friendly navigation on smaller screens
- Smooth transitions between expanded and collapsed states
- Fully keyboard navigable for accessibility
- Styling consistent with design system
- Tool list is dynamically generated from configuration

**Implementation Notes**:  
- Use shadcn/ui NavigationMenu and Sheet components
- Create a tools configuration file to define categories and tools
- Use Lucide React icons for consistent iconography
- Implement collapsible categories for better organization
- Use CSS transitions for smooth animations
- Test keyboard navigation thoroughly
- Ensure proper ARIA attributes for accessibility
- Consider implementing a context for current tool/category state

**Files Involved**:
- `src/components/layout/Sidebar.tsx`
- `src/components/layout/SidebarCategory.tsx`
- `src/components/layout/SidebarItem.tsx`
- `src/config/tools.ts` (tool configuration)
- `src/lib/hooks/useSidebar.ts` (optional, for sidebar state)
- `src/routes/_layout.tsx` (to include the sidebar)
