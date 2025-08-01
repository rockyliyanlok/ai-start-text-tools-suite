### TASK: Create Text Input/Output Components

**Description**:  
Develop reusable text input and output components that will be used across all tools in the application. These components should handle various text operations, provide appropriate controls, and support different display formats.

**Acceptance Criteria**:  
- Resizable text input component with character/word count
- Text output component with syntax highlighting capabilities
- Support for different text formats (plain text, code, JSON, etc.)
- Copy to clipboard functionality
- Download as file option with multiple formats
- Clear/reset controls
- Responsive design for all viewport sizes
- Keyboard shortcuts for common actions
- Accessibility features (ARIA labels, keyboard navigation)
- Performance optimization for large text inputs

**Implementation Notes**:  
- Use shadcn/ui Textarea as foundation but extend functionality
- Implement CodeMirror or Monaco Editor for code formatting if needed
- Use browser APIs for clipboard operations
- Implement file download using Blob and URL.createObjectURL
- Add keyboard shortcut system with customizable bindings
- Consider implementing virtualization for large text inputs
- Optimize rendering performance with useMemo and useCallback
- Add appropriate error handling for all operations

**Files Involved**:
- `src/components/tools/TextInput.tsx`
- `src/components/tools/TextOutput.tsx`
- `src/components/ui/CopyButton.tsx`
- `src/components/ui/DownloadButton.tsx`
- `src/lib/utils/text.ts` (text processing utilities)
- `src/lib/hooks/useClipboard.ts` (clipboard operations)
- `src/lib/hooks/useKeyboardShortcut.ts` (keyboard shortcuts)
