import os
import re

files_info = [
    {
        "txt": "public/T&C.pdf.txt",
        "route": "app/terms-conditions/page.tsx",
        "title": "Terms & Conditions"
    },
    {
        "txt": "public/Privacy.pdf.txt",
        "route": "app/privacy-policy/page.tsx",
        "title": "Privacy Policy"
    },
    {
        "txt": "public/Refund.pdf.txt",
        "route": "app/refund-policy/page.tsx",
        "title": "Refund Policy"
    }
]

def clean_text(text):
    text = text.replace('?o', '"').replace('??', '"')
    text = text.replace('?', '•').replace('?T', '\'')
    # Basic cleanup for common smart quotes/apostrophes that got mangled
    text = text.replace('ï¿½', "'")
    return text

def generate_tsx(title, content):
    # Split content into paragraphs
    paragraphs = content.split('\n')
    
    tsx_content = f'''export const metadata = {{
  title: "{title} | ClimbX Digital",
  description: "{title} for ClimbX Digital services.",
}};

export default function Page() {{
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="mb-12 text-4xl font-bold tracking-tight text-white md:text-6xl">
          {title.lower()}
        </h1>
        <div className="prose prose-invert prose-orange max-w-none">
'''
    
    for p in paragraphs:
        p = p.strip()
        if not p:
            continue
        
        # If it looks like a heading
        if re.match(r'^\\d+\\.', p) or (len(p) < 60 and not p.endswith('.') and not p.startswith('•')):
            tsx_content += f'          <h2 className="mt-8 mb-4 text-2xl font-semibold text-white">{p}</h2>\n'
        elif p.startswith('•'):
            tsx_content += f'          <ul className="mb-4 list-disc pl-5 text-white/80"><li>{p[1:].strip()}</li></ul>\n'
        else:
            tsx_content += f'          <p className="mb-4 text-white/80 leading-relaxed">{p}</p>\n'
            
    tsx_content += '''        </div>
      </div>
    </div>
  );
}
'''
    return tsx_content

for info in files_info:
    os.makedirs(os.path.dirname(info["route"]), exist_ok=True)
    with open(info["txt"], 'r', encoding='utf-8') as f:
        content = clean_text(f.read())
    
    tsx = generate_tsx(info["title"], content)
    with open(info["route"], 'w', encoding='utf-8') as f:
        f.write(tsx)
    print(f'Generated {info["route"]}')
