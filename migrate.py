import os
import re

APP_DIR = "src/app"
PAGES_DIR = "src/pages"

routes = [
    ("Home.tsx", "page.tsx"),
    ("Insights.tsx", "insights/page.tsx"),
    ("InsightArticleDetail.tsx", "insights/[slug]/page.tsx"),
    ("Resources.tsx", "resources/page.tsx"),
    ("Wellness.tsx", "wellness/page.tsx"),
    ("articles/WellnessArticles.tsx", "wellness/articles/page.tsx"),
    ("articles/WellnessArticleDetail.tsx", "wellness/articles/[slug]/page.tsx"),
    ("Join.tsx", "join/page.tsx"),
    ("os/CommercialGrowthOS.tsx", "os/page.tsx"),
    ("os/FoundationOS.tsx", "os/foundation/page.tsx"),
    ("os/GrowthOS.tsx", "os/growth/page.tsx"),
    ("os/EnterpriseOS.tsx", "os/enterprise/page.tsx"),
    ("os/SustainTier.tsx", "os/sustain/page.tsx"),
    ("Leadership.tsx", "leadership/page.tsx"),
    ("Contact.tsx", "contact/page.tsx"),
    ("legal/Privacy.tsx", "privacy/page.tsx"),
    ("legal/Terms.tsx", "terms/page.tsx"),
    ("legal/Cookies.tsx", "cookies/page.tsx"),
    ("NotFound.tsx", "not-found.tsx"),
]

def ensure_dir(file_path):
    directory = os.path.dirname(file_path)
    if directory and not os.path.exists(directory):
        os.makedirs(directory)

def refactor_content(content, is_dynamic):
    # Replace wouter Link with next/link
    content = re.sub(r"import\s+\{.*?\bLink\b.*?\}\s+from\s+['\"]wouter['\"];?", "import Link from 'next/link';", content)
    # Remove useLocation or useRoute from wouter
    content = re.sub(r"import\s+\{.*?\}\s+from\s+['\"]wouter['\"];?", "", content)

    # Next.js Link uses href, same as wouter.
    # Wouter dynamic routing: const [match, params] = useRoute("/insights/:slug");
    # Next.js dynamic routing: Page receives { params: { slug: string } }
    
    if is_dynamic:
        # This is a bit complex for a simple regex, so we'll just add "use client" or refactor it as server component
        pass

    return content

for page_file, app_path in routes:
    src_file = os.path.join(PAGES_DIR, page_file)
    dest_file = os.path.join(APP_DIR, app_path)
    
    if os.path.exists(src_file):
        with open(src_file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        content = refactor_content(content, "[slug]" in app_path)
        
        # Determine if it uses wouter hooks
        if "useRoute(" in content or "useLocation(" in content:
            content = '"use client";\n\n' + content
            
        # Add 'use client' if it uses framer-motion or react hooks
        elif "useState(" in content or "useEffect(" in content or "framer-motion" in content:
            content = '"use client";\n\n' + content
            
        ensure_dir(dest_file)
        with open(dest_file, 'w', encoding='utf-8') as f:
            f.write(content)

print("Migration script completed.")
