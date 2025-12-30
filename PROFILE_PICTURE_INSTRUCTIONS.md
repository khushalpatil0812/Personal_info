# 📸 How to Add Your Profile Picture

## Quick Steps:

1. **Save the profile picture from the attachment** (the one you showed me)
2. **Rename it to**: `profile.jpg`
3. **Copy it to**: `d:\perosnal_project\public\profile.jpg`
4. **Refresh your browser** - Your picture will appear!

## Alternative: If you prefer a different image

- Any image format works: `.jpg`, `.png`, `.jpeg`
- If you use a different name or format, update line in `src/App.jsx`:
  ```javascript
  <img src="/profile.jpg" alt="Khushal Patil" />
  ```
  Change `/profile.jpg` to your filename (e.g., `/my-photo.png`)

## Recommended Image Specifications:

- **Format**: JPG or PNG
- **Size**: 500x500 pixels (square)
- **File Size**: Under 500KB for faster loading
- **Background**: Professional/neutral background preferred

---

Your portfolio will automatically display the image once it's in the `public` folder!
