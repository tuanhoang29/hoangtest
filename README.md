[README.md](https://github.com/user-attachments/files/24469232/README.md)
# Chùa Trần Đăng - Virtual Tour 360°

A modernized virtual reality tour of Chùa Trần Đăng (Tran Dang Temple) featuring 11 different scenes with interactive navigation and background music.

## Features

- **Modern Design**: Glassmorphism UI with smooth animations and contemporary styling
- **Flexible Zoom**: Normal viewing with extensive zoom in/out capability (30° to 120° FOV)
- **Background Music**: Continuous ambient temple music that plays across all scenes
- **Control Panel**: Manual view controls (up, down, left, right, zoom in/out)
- **Auto-Rotation**: Toggle automatic camera rotation
- **Fullscreen Mode**: Immersive fullscreen viewing experience
- **Loading Screen**: Elegant loading animation on startup

## Audio Setup

To add background music to your virtual tour:

1. **Find or create ambient temple music** (2-5 minutes long)
2. **Convert to both MP3 and OGG formats** for maximum browser compatibility
3. **Name the files**:
   - `temple-ambience.mp3`
   - `temple-ambience.ogg`
4. **Place them in the `audio/` folder**
5. **Test the music** using the speaker icon in the navigation bar

### Audio File Requirements:
- **MP3 Format**: `audio/temple-ambience.mp3`
- **OGG Format**: `audio/temple-ambience.ogg` (optional but recommended)
- **Length**: 2-5 minutes (will loop automatically)
- **Volume**: Keep low for ambient atmosphere
- **Quality**: 128kbps MP3 is sufficient

### Zoom Controls:
- **Normal Default**: Scenes start at comfortable viewing distance
- **Wide Zoom Range**: Zoom from close-up details (30°) to wide panoramic views (120°)
- **Zoom In/Out**: Use the + and - buttons or mouse wheel for smooth zoom control
- **Flexible Viewing**: Zoom in for details, zoom out for context as needed

### Free Audio Resources:
- **YouTube Audio Library**: Search for "temple ambience" or "meditation music"
- **Freesound.org**: Free ambient sound recordings
- **Epidemic Sound**: Professional ambient music (free trial available)
- **Bensound.com**: Royalty-free background music

### Music Controls:
- **Speaker Icon**: Click to mute/unmute continuous background music
- **Volume Slider**: Hover over the speaker button to reveal volume control (0-100%)
- **Auto-Start**: Music begins playing automatically when you visit the site
- **Persistent**: Music continues playing seamlessly when navigating between scenes
- **Loop**: Music loops continuously for uninterrupted atmosphere
- **Volume Memory**: Your preferred volume level is automatically saved and restored
- **Visual Feedback**: Volume level indicator shows current setting
- **Keyboard Accessible**: Use Tab and arrow keys to adjust volume
- **Auto-start**: Music is muted by default (respects browser policies)
- **Looping**: Music plays continuously while enabled

**Note**: Some browsers block autoplay. Users may need to click the speaker button twice to start music.

## Scenes

1. Toàn cảnh mặt bằng chùa Trần Đăng
2. Chùa Trần Đăng nhìn từ hướng Đông Nam
3. Tòa Gác chuông
4. Mặt trước tòa Tiền đường
5. Gian giữa tòa Tiền đường
6. Gian hồi bên trái tòa Tiền đường
7. Gian hồi bên phải tòa Tiền đường
8. Gian trước tòa Thiêu hương
9. Gian giữa tòa Thiêu hương
10. Gian hồi bên trái tòa Thượng điện
11. Gian hồi bên phải tòa Thượng điện

## Controls

- **Navigation Menu**: Toggle scene list with the menu button
- **Music Control**: Toggle background music with the speaker button
- **Auto-Rotate**: Toggle automatic camera rotation
- **Fullscreen**: Enter immersive fullscreen mode
- **View Controls**: Manual camera movement buttons
- **Hotspots**: Click on highlighted areas to navigate to connected scenes

## Browser Support

- Modern browsers with WebGL support
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Development

To run locally, serve the files from a web server due to CORS restrictions on local file access for WebGL textures.
