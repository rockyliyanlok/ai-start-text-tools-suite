### TASK: Add Analytics Tracking

**Description**:  
Implement a comprehensive analytics tracking system to monitor user behavior, tool usage, and performance metrics. This will provide valuable insights for future development decisions and help measure the success of the application.

**Acceptance Criteria**:  
- Analytics integration with Vercel Analytics or a third-party service
- Page view tracking for all routes
- Event tracking for key user interactions
- Tool usage statistics collection
- Performance metrics monitoring
- User flow visualization
- Conversion tracking for monetization features
- Privacy-compliant implementation with cookie consent
- Dashboard for viewing analytics data
- Documentation of tracked events and metrics

**Implementation Notes**:  
- Use Vercel Analytics for basic metrics or integrate a third-party service
- Implement a custom event tracking system for tool-specific actions
- Create a centralized analytics service for consistent tracking
- Add appropriate privacy controls and cookie consent
- Consider implementing feature usage funnels
- Use performance metrics from Web Vitals
- Ensure GDPR compliance with appropriate consent mechanisms
- Document all tracked events for future reference
- Add appropriate data anonymization where needed
- Test tracking implementation across different scenarios

**Files Involved**:
- `src/lib/analytics/index.ts` (main analytics service)
- `src/lib/analytics/events.ts` (event definitions)
- `src/components/ui/CookieConsent.tsx`
- `src/hooks/useAnalytics.ts`
- `src/config/analytics.ts` (analytics configuration)
- `src/types/analytics.ts` (TypeScript types)
- `src/middleware.ts` (for tracking at the route level)
