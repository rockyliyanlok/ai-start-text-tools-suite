### TASK: Implement Word/Character Counter Tool

**Description**:  
Develop the Word/Character Counter tool that provides comprehensive text statistics including character count (with and without spaces), word count, sentence count, paragraph count, and estimated reading/speaking time. This will be one of the core MVP tools.

**Acceptance Criteria**:  
- Word/Character Counter tool page created with proper routing
- Input area for entering text to analyze
- Real-time statistics updates as user types
- Display of multiple metrics:
  - Character count (with and without spaces)
  - Word count
  - Sentence count
  - Paragraph count
  - Reading time estimate
  - Speaking time estimate
- Visual representation of statistics (optional charts/graphs)
- Copy statistics as formatted text or CSV
- Proper handling of different languages and writing systems
- Responsive design across all device sizes
- Performance optimization for large text inputs

**Implementation Notes**:  
- Use the generic tool layout component as foundation
- Implement efficient text analysis algorithms
- Consider language-specific word counting rules
- Use debouncing for performance with large text inputs
- Add option to exclude code blocks or special formatting
- Consider implementing visualization of word frequency
- Include examples and usage tips in helper text
- Test with various languages and text formats
- Consider adding advanced statistics for writers (readability scores, etc.)

**Files Involved**:
- `src/routes/tools/word-counter/page.tsx`
- `src/components/tools/word-counter/WordCounterTool.tsx`
- `src/components/tools/word-counter/StatisticsDisplay.tsx`
- `src/components/tools/word-counter/AdvancedOptions.tsx`
- `src/lib/utils/text-statistics.ts` (analysis functions)
- `src/lib/hooks/useTextStatistics.ts`
- `src/config/tools/word-counter.ts` (tool configuration)
