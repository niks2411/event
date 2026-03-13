
import os
import re

root_dir = r'c:\Users\Nikhil\Desktop\event\src'
pattern = re.compile(r"(['\"])/[\w\s\(\)/.-]+\.(jpg|JPG|png|webp|svg)['\"]")

found_images = set()

for dirpath, dirnames, filenames in os.walk(root_dir):
    for filename in filenames:
        if filename.endswith(('.jsx', '.js', '.css')):
            try:
                with open(os.path.join(dirpath, filename), 'r', encoding='utf-8') as f:
                    content = f.read()
                    matches = pattern.findall(content)
                    for match in matches:
                        # Reconstruct the path from groups
                        # The pattern has groups for quotes and extension. 
                        # I need to get the whole path.
                        pass
                    # Better pattern
                    m = re.findall(r"['\"](/[\w\s\(\)/.-]+\.(?:jpg|JPG|png|webp|svg))['\"]", content)
                    for path in m:
                        found_images.add(path)
            except Exception as e:
                print(f"Error reading {filename}: {e}")

print("Found images:")
for img in sorted(found_images):
    print(img)
