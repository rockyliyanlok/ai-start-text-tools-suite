### TASK: Add Copy/Download/Reset Controls

**Description**:  
Implement utility controls for copying results to clipboard, downloading output as files, and resetting tool state. These controls should be consistent across all tools and provide clear feedback to users.

**Acceptance Criteria**:  
- Copy to clipboard button with success/error feedback
- Download button with format options (TXT, JSON, CSV, etc.)
- Reset button with confirmation dialog
- Visual feedback for all actions (success, error, loading states)
- Keyboard shortcuts for common actions
- Tooltips explaining each control's function
- Accessible to screen readers and keyboard users
- Mobile-friendly touch targets
- Consistent styling across all tools

**Implementation Notes**:  
- Use the Clipboard API for copy functionality with fallbacks
- Implement file download using Blob and URL.createObjectURL
- Add appropriate loading and success states
- Use shadcn/ui Toast component for notifications
- Implement keyboard shortcuts with clear documentation
- Add confirmation dialog for destructive actions (reset)
- Consider browser compatibility issues, especially for clipboard
- Test thoroughly across different browsers

**Files Involved**:
- `src/components/tools/UtilityControls.tsx`
- `src/components/ui/CopyButton.tsx`
- `src/components/ui/DownloadButton.tsx`
- `src/components/ui/ResetButton.tsx`
- `src/components/ui/Toast.tsx`
- `src/lib/utils/clipboard.ts`
- `src/lib/utils/file-download.ts`
- `src/lib/hooks/useToast.ts`
