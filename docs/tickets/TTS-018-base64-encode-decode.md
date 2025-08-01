### TASK: Implement Base64 Encode/Decode Tool

**Description**:  
Develop the Base64 Encode/Decode tool that allows users to convert text to Base64 encoding and decode Base64 strings back to plain text. This will be one of the core MVP tools and particularly useful for developers.

**Acceptance Criteria**:  
- Base64 Encode/Decode tool page created with proper routing
- Input area for entering text or Base64 string
- Toggle between encode and decode modes
- Real-time encoding/decoding as user types
- Support for URL-safe Base64 variant
- File upload option for encoding binary files
- Error handling for invalid Base64 input when decoding
- Copy result to clipboard functionality
- Download result as file option
- Support for handling large inputs efficiently
- Responsive design across all device sizes

**Implementation Notes**:  
- Use the generic tool layout component as foundation
- Implement standard Base64 encoding/decoding using browser APIs
- Add support for URL-safe Base64 (replacing '+' with '-' and '/' with '_')
- Use FileReader API for handling file uploads
- Implement chunking for large inputs to prevent UI freezing
- Add clear visual indication of invalid Base64 input
- Consider adding option to display as hex view for binary data
- Include examples and usage tips in helper text
- Test with various input types including special characters and binary data

**Files Involved**:
- `src/routes/tools/base64/page.tsx`
- `src/components/tools/base64/Base64Tool.tsx`
- `src/components/tools/base64/EncodingOptions.tsx`
- `src/components/tools/base64/FileUploader.tsx`
- `src/lib/utils/base64.ts` (encoding/decoding functions)
- `src/lib/hooks/useBase64.ts`
- `src/config/tools/base64.ts` (tool configuration)
