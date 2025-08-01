### TASK: Build Generic Tool Page Layout Component

**Description**:  
Create a reusable layout component for tool pages that will serve as the foundation for all individual tools. This component should provide a consistent structure for input, processing options, and output display across all tools in the application.

**Acceptance Criteria**:  
- Generic layout component created with consistent styling
- Layout includes sections for tool header, description, and options
- Input area with appropriate controls and validation
- Action panel for tool-specific controls
- Output display area with appropriate formatting
- Copy/download/reset controls for results
- Responsive design that works on all device sizes
- Component is easily extendable for tool-specific requirements
- Proper documentation for usage

**Implementation Notes**:  
- Use shadcn/ui components for consistent UI elements
- Create a flexible component API that allows for tool-specific customization
- Implement a container/presenter pattern for separation of concerns
- Use TypeScript generics for type-safe tool configurations
- Consider implementing layout variations for different tool types
- Add appropriate animations for state transitions
- Document the component API thoroughly for other developers

**Files Involved**:
- `src/components/tools/ToolLayout.tsx`
- `src/components/tools/ToolHeader.tsx`
- `src/components/tools/InputSection.tsx`
- `src/components/tools/ActionPanel.tsx`
- `src/components/tools/OutputSection.tsx`
- `src/types/tool.ts` (for TypeScript interfaces)
- `src/lib/hooks/useTool.ts` (for shared tool logic)
