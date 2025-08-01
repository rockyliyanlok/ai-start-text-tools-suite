### TASK: Create Sitemap and Robots.txt

**Description**:  
Generate and implement a sitemap.xml file and robots.txt file to improve search engine crawling and indexing of the application. These files will help search engines discover and properly index all pages of the Text Tools Suite.

**Acceptance Criteria**:  
- Automatically generated sitemap.xml with all public routes
- Properly formatted robots.txt file with appropriate directives
- Sitemap includes lastmod dates for dynamic content
- Sitemap submitted to major search engines (Google, Bing)
- Robots.txt configured to allow/disallow appropriate paths
- Sitemap referenced in robots.txt file
- Proper HTTP headers for both files
- Automated sitemap generation during build process
- Documentation on sitemap/robots.txt configuration
- Testing with search engine validation tools

**Implementation Notes**:  
- Create a script to generate sitemap.xml during build process
- Use route configuration to determine sitemap entries
- Implement proper XML formatting for sitemap
- Configure robots.txt with appropriate directives
- Consider using a library like next-sitemap if compatible
- Add build script to package.json for sitemap generation
- Test sitemap with Google Search Console validation tool
- Ensure all important pages are included in the sitemap
- Consider implementing a dynamic sitemap for future content
- Document the SEO strategy in the technical documentation

**Files Involved**:
- `public/sitemap.xml`
- `public/robots.txt`
- `scripts/generate-sitemap.js` (build script)
- `package.json` (build commands)
- `src/config/seo.ts` (SEO configuration)
- `vercel.json` (for proper headers if needed)
