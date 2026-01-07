# Adding Interactive Hotspots to Your VR360 Temple Tour

This guide will help you add clickable information points anywhere in your VR360 scenes.

## 🎯 **EASY METHOD: Use the Hotspot Editor (Recommended for Beginners)**

The fastest way to add hotspots without any coding:

### **Quick Start:**
1. **Open Editor**: Double-click `hotspot-editor.html`
2. **Select Scene**: Click on the scene where you want to add a hotspot
3. **Get Coordinates**: Use `coordinate-finder.html` or enter estimated values
4. **Fill Form**: Add title, description, and upload image
5. **Generate Code**: Click button and copy the JSON
6. **Add to Project**: Paste into `data.js` file
7. **Test**: Open `index.html` to see your hotspot!

### **Tools Available:**
- **`hotspot-editor.html`** - User-friendly form to create hotspots
- **`coordinate-finder.html`** - Interactive tool to find exact coordinates
- **`hotspots/`** folder - Place your hotspot images here

---

## 📍 How Hotspots Work

Hotspots are clickable points that display images and information when users interact with them. Each hotspot has:
- **Position**: Where it appears in the 360° scene (yaw/pitch coordinates)
- **Content**: Title, image, description, and details
- **Styling**: Modern glassmorphism design with smooth animations

## 🛠️ **ADVANCED METHOD: Manual Code Editing**

### Step 1: Find the Coordinates

**Option A: Use the Coordinate Finder Tool**
1. Open `hotspot-coordinates.html` in your browser
2. Move your mouse around to see coordinate values
3. Position your mouse where you want the hotspot
4. Copy the yaw and pitch values

**Option B: Manual Method**
1. Open your VR360 tour (`index.html`)
2. Navigate to the scene where you want to add a hotspot
3. Use browser developer tools (F12) to inspect the page
4. Look for Marzipano viewer events or add this JavaScript to console:

```javascript
// Add this to browser console to get coordinates
document.addEventListener('click', function(e) {
    if (window.viewer) {
        const view = window.viewer.view();
        const yaw = view.yaw();
        const pitch = view.pitch();
        console.log('Yaw:', yaw, 'Pitch:', pitch);
    }
});
```

### Step 2: Prepare Your Content

1. **Image**: Add your image to the `hotspots/` folder
   - Recommended size: 800x600px or larger
   - Format: JPG or PNG
   - Example: `hotspots/my-temple-feature.jpg`

2. **Text Content**:
   - **Title**: Short, descriptive name (e.g., "Ancient Bell Tower")
   - **Text**: Main description (1-2 sentences)
   - **Details**: Additional information (historical facts, significance, etc.)

### Step 3: Add to data.js

1. Open `data.js` in your code editor
2. Find the scene where you want to add the hotspot
3. Locate the `"infoHotspots": [` array for that scene
4. Add your new hotspot object:

```javascript
"infoHotspots": [
  // Existing hotspots...
  {
    "yaw": 1.2345,           // Horizontal position (-π to π)
    "pitch": 0.5678,         // Vertical position (-π/2 to π/2)
    "title": "Your Title",   // Display title
    "image": "hotspots/your-image.jpg",  // Path to image
    "text": "Main description text here.",  // Short description
    "details": "Additional detailed information about this location."  // More info
  }
]
```

### Step 4: Test Your Hotspot

1. Save `data.js`
2. Open `index.html` in your browser
3. Navigate to the scene with your new hotspot
4. Click on the hotspot icon to see the information

## 📐 Understanding Coordinates

- **Yaw**: Horizontal rotation
  - `0`: Center/front
  - `π` (3.14): Right side
  - `-π` (-3.14): Left side

- **Pitch**: Vertical rotation
  - `0`: Horizon level
  - `π/2` (1.57): Straight up
  - `-π/2` (-1.57): Straight down

## 🎨 Hotspot Examples

### Temple Bell Tower
```javascript
{
  "yaw": 2.3345,
  "pitch": 0.0338,
  "title": "Tòa Gác Chuông",
  "image": "hotspots/bell-tower.jpg",
  "text": "Tòa Gác Chuông là một công trình kiến trúc đẹp mắt với thiết kế truyền thống Việt Nam.",
  "details": "Chiếc chuông lớn trong tòa được đúc năm 1846, nặng hơn 1 tấn và được rung vào các dịp lễ quan trọng."
}
```

### Ancient Furniture
```javascript
{
  "yaw": -1.5,
  "pitch": 0.5,
  "title": "Đồ Đạc Cổ",
  "image": "hotspots/antique-furniture.jpg",
  "text": "Các món đồ cổ trong chùa được bảo quản tốt, phản ánh lối sống của người Việt xưa.",
  "details": "Những món đồ này có tuổi đời hàng trăm năm, được làm từ gỗ quý và chạm khắc tinh xảo."
}
```

## 🔧 Advanced Tips

### Multiple Hotspots Per Scene
You can add as many hotspots as you want to each scene:

```javascript
"infoHotspots": [
  { /* hotspot 1 */ },
  { /* hotspot 2 */ },
  { /* hotspot 3 */ }
]
```

### Hotspot Positioning Tips
- Test coordinates in different browsers
- Consider mobile users when positioning
- Avoid placing hotspots too close together
- Use the coordinate finder tool for precision

### Image Optimization
- Compress images for faster loading
- Use WebP format for better compression
- Ensure images are high quality but not too large

## 🐛 Troubleshooting

**Hotspot not appearing?**
- Check yaw/pitch values are within valid ranges
- Verify the scene ID matches exactly
- Ensure JSON syntax is correct (no trailing commas)

**Image not loading?**
- Check file path is correct
- Verify image exists in `hotspots/` folder
- Check browser console for 404 errors

**Coordinates wrong?**
- Use the coordinate finder tool
- Test in the actual VR viewer
- Remember coordinates are relative to scene center

## 📚 **Available Tools & Resources**

### **🎯 Easy Tools (No Coding Required):**
- **`hotspot-editor.html`** - User-friendly form to create hotspots visually
- **`coordinate-finder.html`** - Interactive tool to find exact coordinates in your VR tour

### **📁 Project Files:**
- **`data.js`** - Scene and hotspot configuration (edit this to add hotspots)
- **`hotspots/`** - Directory for hotspot images
- **`index.html`** - Your VR360 tour (test hotspots here)
- **`style.css`** - Hotspot styling (lines 670-1068)

### **📖 Guides:**
- **`HOTSPOT_GUIDE.md`** - This guide (comprehensive instructions)
- **`hotspots/README.md`** - Image specifications and requirements

### **🔧 Advanced Tools:**
- **`hotspot-coordinates.html`** - Original coordinate finder (basic)
- Browser Developer Tools (F12) - For manual coordinate finding

---

## 🎉 **Quick Start Checklist:**

- [ ] Open `hotspot-editor.html`
- [ ] Select your scene
- [ ] Use `coordinate-finder.html` to get coordinates
- [ ] Fill in hotspot details
- [ ] Generate and copy code
- [ ] Paste into `data.js`
- [ ] Test in `index.html`

Happy hotspot creating! 🎯✨