
import os
import re

root_dir = r'c:\Users\Nikhil\Desktop\event\src'
# Match strings like '/wedding/...' or '/haldi/...'
pattern = re.compile(r"['\"](/[wedding|haldi|engagement|mehndi]/[^'\" ]+)['\"]")

found_paths = set()

for dirpath, dirnames, filenames in os.walk(root_dir):
    for filename in filenames:
        if filename.endswith(('.jsx', '.js', '.css')):
            try:
                with open(os.path.join(dirpath, filename), 'r', encoding='utf-8') as f:
                    content = f.read()
                    matches = pattern.findall(content)
                    for path in matches:
                        found_paths.add(path)
            except Exception as e:
                pass

print("Found local paths:")
for path in sorted(found_paths):
    print(path)
