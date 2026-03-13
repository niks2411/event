
import os
import shutil

public_dir = r'c:\Users\Nikhil\Desktop\event\public'

# Files to delete (confirmed replaced)
files_to_delete = [
    'engagement.webp',
    'haldi.webp',
    'wedding.webp',
]

# Directories to delete (confirmed replaced)
dirs_to_delete = [
    'wedding',
    'haldi',
    'engagement',
    'mehndi',
]

print("Starting deletion...")

for f in files_to_delete:
    path = os.path.join(public_dir, f)
    if os.path.exists(path):
        os.remove(path)
        print(f"Deleted file: {f}")
    else:
        print(f"File not found, skipping: {f}")

for d in dirs_to_delete:
    path = os.path.join(public_dir, d)
    if os.path.exists(path):
        shutil.rmtree(path)
        print(f"Deleted directory: {d}")
    else:
        print(f"Directory not found, skipping: {d}")

print("Deletion complete.")
