### TASK: Implement Case Converter Tool

**Description**:  
Develop the Case Converter tool that allows users to transform text between different case formats (uppercase, lowercase, title case, camelCase, PascalCase, snake_case, kebab-case). This will be one of the core MVP tools.

**Acceptance Criteria**:  
- Case Converter tool page created with proper routing
- Input area for entering text to convert
- Multiple case format options available as conversion targets
- Real-time conversion as user types or changes options
- Preview of all case formats simultaneously
- Copy button for each individual case format
- Proper handling of special characters and non-Latin scripts
- Preservation of line breaks and paragraph structure
- Responsive design across all device sizes
- Performance optimization for large text inputs

**Implementation Notes**:  
- Use the generic tool layout component as foundation
- Implement pure functions for each case conversion type
- Consider edge cases like handling of numbers, symbols, and spaces
- Add option to preserve/remove special characters
- Use memoization for performance with large text inputs
- Add keyboard shortcuts for common operations
- Include examples and usage tips in helper text
- Consider adding custom options for specific case formats
- Test with various languages and character sets

**Files Involved**:
- `src/routes/tools/case-converter/page.tsx`
- `src/components/tools/case-converter/CaseConverterTool.tsx`
- `src/components/tools/case-converter/CaseOptions.tsx`
- `src/components/tools/case-converter/CasePreview.tsx`
- `src/lib/utils/case-converter.ts` (conversion functions)
- `src/lib/hooks/useCaseConverter.ts`
- `src/config/tools/case-converter.ts` (tool configuration)
