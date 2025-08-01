### TASK: Design Ad Space and Helper Text Areas

**Description**:  
Create components for displaying advertisements and contextual helper text within tool pages. These components should be visually distinct but non-intrusive, and should enhance the user experience rather than detract from it.

**Acceptance Criteria**:  
- Ad space component with clearly defined boundaries
- Helper text area with expandable/collapsible sections
- Responsive design that adapts to different screen sizes
- Ability to show/hide ads based on configuration
- Context-sensitive helper text that changes based on tool
- Proper styling consistent with design system
- Non-intrusive placement that doesn't interfere with tool usage
- Accessibility considerations for all components
- Performance optimization to minimize impact on page load

**Implementation Notes**:  
- Use shadcn/ui Card component as foundation for ad containers
- Implement placeholder for Google AdSense integration
- Create a configuration system for tool-specific helper text
- Use collapsible disclosure pattern for detailed help sections
- Consider implementing a "Don't show again" option for helper text
- Ensure ads are properly labeled for accessibility
- Add appropriate loading states for ad content
- Test different viewport sizes to ensure responsive behavior

**Files Involved**:
- `src/components/monetization/AdSpace.tsx`
- `src/components/tools/HelperText.tsx`
- `src/components/ui/Disclosure.tsx`
- `src/config/ads.ts` (ad configuration)
- `src/config/helper-text.ts` (helper text content)
- `src/lib/hooks/useAdConfig.ts`
- `src/lib/hooks/useHelperText.ts`
