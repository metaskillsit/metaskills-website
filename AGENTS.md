# Architecture rules

- Maintain course-specific October programme content in typed course records merged by existing slug; this preserves inbound links and avoids duplicate courses.
- Homepage, programme and navigation summaries for October courses must resolve from those same records; this keeps dates, fees and titles consistent across entry points.
- Upcoming schedules are opt-in per course and cancellation processing fees are course-specific overrides; unrelated courses retain their approved schedule visibility and policies.
- Generated course hero images are illustrative assets, never evidence of actual classes or completed runs.
- Cloud coaching courses use typed fee breakdowns and an opt-in content layout; totals drive the price card and Course Offer schema while unrelated tax and cancellation defaults remain unchanged.
- Use HelmetProvider for route-owned metadata; static HTML retains sitewide fallback tags without a canonical to avoid duplicate canonicals.