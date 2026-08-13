# Redemption Parish - Order of Service Flipchart

Interactive PDF flipchart viewer for the Redemption Parish Harvest & Thanksgiving Service.

## � Live Site
https://jolly-pond-06d752e0f.azurestaticapps.net/flipbook.html

## 📁 File Information

The PDF file (`Order-of-service/harvest-program.pdf` - 68MB) is **NOT** stored in Git due to size limits.

### To Deploy Locally:
1. Place the PDF file in: `Order-of-service/harvest-program.pdf`
2. Run local server: `python -m http.server 8080`
3. Open: `http://localhost:8080/flipbook.html`

### For Production:
The PDF should be hosted externally (Azure Blob Storage, CDN, etc.) and referenced in `flipbook.html`.

## 🚀 Live Site
https://agreeable-forest-09f36f50f.7.azurestaticapps.net/flipbook.html

## Features
- Auto-hide navigation (appears on tap/click)
- 3D flip animations
- Page number jump
- Mobile responsive
- Swipe gesture support
