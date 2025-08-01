### TASK: Implement Tool Action Panel

**Description**:  
Create a reusable action panel component that will provide tool-specific controls and options for all tools in the application. This panel should be customizable for each tool while maintaining a consistent look and feel.

**Acceptance Criteria**:  
- Action panel component with consistent styling across tools
- Support for various control types (buttons, toggles, dropdowns, etc.)
- Tool-specific options can be easily configured
- Visual feedback for active/selected options
- Responsive design that adapts to different screen sizes
- Mobile-friendly touch targets
- Keyboard accessibility for all controls
- Tooltips for explaining option functionality
- Ability to save/load option presets (optional)

**Implementation Notes**:  
- Use shadcn/ui components for consistent UI controls
- Implement a configuration-based approach for tool-specific options
- Create a flexible layout system that adapts to different option counts
- Use React context for sharing option state with other components
- Consider implementing collapsible sections for complex tools
- Add appropriate animations for state changes
- Ensure all controls have proper ARIA attributes
- Test thoroughly with keyboard navigation

**Files Involved**:
- `src/components/tools/ActionPanel.tsx`
- `src/components/tools/ActionOption.tsx`
- `src/components/tools/OptionGroup.tsx`
- `src/components/ui/Tooltip.tsx`
- `src/lib/hooks/useToolOptions.ts`
- `src/types/tool-options.ts`
- `src/context/ToolContext.tsx` (optional, for state management)
