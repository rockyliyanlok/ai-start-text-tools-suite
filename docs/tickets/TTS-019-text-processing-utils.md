### TASK: Create Text Processing Utility Functions

**Description**:  
Develop a comprehensive library of reusable text processing utility functions that will be used across all tools in the application. These utilities should handle common text operations efficiently and consistently.

**Acceptance Criteria**:  
- Core text processing functions implemented as pure functions
- Comprehensive test coverage for all utility functions
- Functions optimized for performance with large inputs
- Support for various text formats and character sets
- Proper error handling and input validation
- TypeScript type definitions for all functions
- Documentation with examples for each function
- Modular organization for easy imports
- Functions for common operations across multiple tools
- Utilities that handle edge cases appropriately

**Implementation Notes**:  
- Create separate modules for different categories of utilities
- Implement pure functions with no side effects
- Use TypeScript for type safety and better developer experience
- Add JSDoc comments for all functions
- Write comprehensive unit tests with various input scenarios
- Consider performance optimization for large text processing
- Use modern JavaScript features but ensure browser compatibility
- Create helper functions that can be composed for complex operations
- Consider internationalization aspects where relevant

**Files Involved**:
- `src/lib/utils/text/case.ts` (case conversion utilities)
- `src/lib/utils/text/count.ts` (text statistics utilities)
- `src/lib/utils/text/encoding.ts` (encoding/decoding utilities)
- `src/lib/utils/text/format.ts` (text formatting utilities)
- `src/lib/utils/text/validation.ts` (input validation utilities)
- `src/lib/utils/text/index.ts` (barrel exports)
- `src/types/text.ts` (shared type definitions)
- `tests/utils/text/*.test.ts` (unit tests)
