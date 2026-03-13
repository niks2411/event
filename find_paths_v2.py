
import os
import re

root_dir = r'c:\Users\Nikhil\Desktop\event\src'
# Match strings starting with / and containing typical image extensions or folder names
pattern = re.compile(r"['\"](/[\w\s\(\)/.-]+\.(?:jpg|jpeg|JPG|jpeg|png|webp|svg))['\"]")

found_paths = set()

for dirpath, dirnames, filenames in os.walk(root_dir):
    for filename in filenames:
        if filename.endswith(('.jsx', '.js', '.css', '.html')):
            try:
                with open(os.path.join(dirpath, filename), 'r', encoding='utf-8') as f:
                    content = f.read()
                    matches = pattern.findall(content)
                    for path in matches:
                        # Exclude remote URLs that happen to have / something .jpg
                        if not path.startswith(('http', 'https')):
                            found_paths.add(path)
            except Exception as e:
                pass

print("Found local paths:")
for path in sorted(found_paths):
    print(path)
