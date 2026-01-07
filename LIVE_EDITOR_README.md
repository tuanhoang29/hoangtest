# 🎯 VR360 Live Editor - Edit Your Website Directly!

The Live Editor allows you to edit your VR360 temple tour website in real-time without coding. Make changes and see them instantly!

## 🚀 Quick Start

### Option 1: Use the Server (Recommended)
1. **Double-click** `start-server.bat`
2. **Open your browser** to: `http://localhost:8000/live-editor.html`
3. **Start editing!** Changes save automatically.

### Option 2: Direct Access
- Open `live-editor.html` directly in your browser
- Note: Saving may require manual download in some cases

## 🎮 How to Use

### 1. **Select a Scene**
- Choose which temple area you want to edit from the dropdown
- All your scenes are automatically loaded

### 2. **View Current Hotspots**
- See all existing hotspots in the selected scene
- Click any hotspot to edit it
- Green badges = Info hotspots (show information)
- Orange badges = Navigation hotspots (link to other scenes)

### 3. **Add New Hotspots**
- **Easiest Method**: Click directly on the VR tour where you want to add a hotspot!
- **Alternative**: Click the **"➕ Add Hotspot"** button
- Choose hotspot type:
  - **📍 Info Hotspot**: Shows images and information when clicked
  - **🧭 Navigation Hotspot**: Links to other scenes when clicked

### 4. **Edit Hotspot Details**
- **Title**: Display name for the hotspot
- **Coordinates**: Position (use coordinate finder for precision)
- **Description**: Brief information
- **Details**: Additional information
- **Image**: Upload or specify image path

### 5. **Save Changes**
- Click **"Save Hotspot"**
- Changes are saved automatically to `data.js`
- The VR tour refreshes to show your changes instantly!

## 🎯 Hotspot Types Explained

### 📍 Info Hotspots
- Display when clicked
- Show title, description, details, and image
- Perfect for explaining temple features
- Example: "Ancient Bell Tower" with description and photo

### 🧭 Navigation Hotspots
- Transport users to different scenes
- Show as clickable arrows/links
- Perfect for moving between temple areas
- Example: Link from entrance to main hall

## 🛠️ Advanced Features

### Coordinate Finder
- Use `coordinate-finder.html` for precise positioning
- Copy coordinates directly into the editor

### Image Upload
- Drag & drop images or click to browse
- Images are automatically saved to `hotspots/` folder
- Supports JPG, PNG, and other formats

### Real-time Preview
- See your VR tour in the left panel
- Changes appear instantly after saving
- Test hotspots by clicking them

## 🎯 Live Coordinate Tracking

The Live Editor now includes **real-time coordinate display**! As you move your mouse in the VR tour, you'll see live yaw, pitch, and FOV values updating instantly.

### How to Use Live Coordinates:

1. **Move your mouse** in the VR tour panel (left side)
2. **Watch coordinates update** in real-time in the overlay
3. **Click anywhere** in the VR tour to lock the current coordinates and open the hotspot creation modal
4. **Use "Lock & Add" button** to auto-fill coordinates in hotspot forms
5. **Copy coordinates** with the copy button for manual entry

### Click-to-Add Hotspots:

The easiest way to add hotspots is to **click directly on the VR tour** where you want the hotspot to appear! This will:

- Automatically capture the exact coordinates
- Open the hotspot creation modal
- Pre-fill the coordinate fields
- Let you add title, description, and image immediately

### Coordinate Display Features:

- **Live Updates**: Coordinates update as you move your mouse
- **Click to Create**: Click in VR tour to instantly create a hotspot
- **Auto-Fill**: Locked coordinates automatically fill hotspot forms
- **Copy to Clipboard**: One-click copying for sharing
- **Visual Feedback**: Green indicator shows tracking is active

### Perfect Positioning:

- **Yaw**: Left/Right position (-3.14 = far left, +3.14 = far right)
- **Pitch**: Up/Down position (-1.57 = straight down, +1.57 = straight up)
- **FOV**: Field of view (zoom level)

**Pro Tip**: Click to lock coordinates when your mouse is exactly where you want the hotspot!

## 🔧 Technical Details

### Files Involved
- **`live-editor.html`** - The main editor interface
- **`save-data.php`** - Server script for saving changes
- **`data.js`** - Your hotspot data (automatically updated)
- **`index.html`** - Your VR tour (refreshes automatically)

### Browser Requirements
- Modern browser (Chrome, Firefox, Edge recommended)
- JavaScript enabled
- For saving: PHP server or manual download fallback

## 🐛 Troubleshooting

### "Save Failed" Error
- **Solution 1**: Use the server (`start-server.bat`)
- **Solution 2**: Download the generated `data.js` and replace manually

### Hotspots Not Appearing
- Check coordinates are within valid ranges (-3.14 to 3.14)
- Ensure scene selection is correct
- Refresh the VR tour panel

### Images Not Loading
- Check image path in `hotspots/` folder
- Ensure image file exists
- Use JPG or PNG format

## 🎨 Tips for Great Hotspots

### Positioning
- Test coordinates in the actual VR view
- Avoid placing hotspots too close together
- Consider mobile users when positioning

### Content
- Keep titles short and descriptive
- Use clear, engaging descriptions
- High-quality images work best
- Include historical/cultural context

### User Experience
- Don't overload scenes with too many hotspots
- Group related information together
- Use consistent naming conventions

## 📚 Related Tools

- **`control-center.html`** - Quick access to all tools
- **`hotspot-editor.html`** - Simple form-based editor
- **`coordinate-finder.html`** - Find exact hotspot positions
- **`HOTSPOT_GUIDE.md`** - Complete documentation

---

## 🎉 Ready to Edit?

**Double-click `start-server.bat`** and visit `http://localhost:8000/live-editor.html`

Your VR360 temple tour is now fully editable in real-time! 🏛️✨

Happy editing! 🎯