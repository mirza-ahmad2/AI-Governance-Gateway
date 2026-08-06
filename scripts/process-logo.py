from PIL import Image
import os

src = r"C:\Users\Arslan\.cursor\projects\h-involiq-projects-AI-Governance-Gateway\assets\c__Users_Arslan_AppData_Roaming_Cursor_User_workspaceStorage_b25506c73e061bed5f73abc4dcef5d75_images_1776234135755-37a7b208-3511-4db6-b984-2528bf8e5cb1.png"
out_dir = r"H:\involiq projects\AI Governance Gateway\public"
assets_dir = r"H:\involiq projects\AI Governance Gateway\src\assets"
os.makedirs(out_dir, exist_ok=True)
os.makedirs(assets_dir, exist_ok=True)

img = Image.open(src).convert("RGBA")
w, h = img.size
pixels = img.load()

# Pass 1: remove near-black background and soft teal glow artifacts
for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        if r < 28 and g < 28 and b < 28:
            pixels[x, y] = (0, 0, 0, 0)
            continue
        brightness = (r + g + b) / 3.0
        # Soft blurry teal glow (low brightness, teal-tinted) outside solid mark
        is_soft_teal = g > r + 15 and g > b - 15 and brightness < 80
        if is_soft_teal and brightness < 50:
            pixels[x, y] = (0, 0, 0, 0)

# Pass 2: remove isolated glow pixels near edges (not contiguous with main mark)
# Find bounding box of strong opaque pixels first
strong = []
for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        if a > 200 and (r + g + b) > 120:
            strong.append((x, y))

if strong:
    xs = [p[0] for p in strong]
    ys = [p[1] for p in strong]
    min_x, max_x = min(xs), max(xs)
    min_y, max_y = min(ys), max(ys)
    # Expand slightly
    pad = max(8, int(0.02 * max(w, h)))
    min_x, min_y = max(0, min_x - pad), max(0, min_y - pad)
    max_x, max_y = min(w - 1, max_x + pad), min(h - 1, max_y + pad)
    # Clear anything outside the main mark bbox (catches corner glow dots)
    for y in range(h):
        for x in range(w):
            if x < min_x or x > max_x or y < min_y or y > max_y:
                pixels[x, y] = (0, 0, 0, 0)

bbox = img.getbbox()
if bbox:
    pad = 12
    left = max(0, bbox[0] - pad)
    top = max(0, bbox[1] - pad)
    right = min(w, bbox[2] + pad)
    bottom = min(h, bbox[3] + pad)
    img = img.crop((left, top, right, bottom))

bw, bh = img.size
side = max(bw, bh)
square = Image.new("RGBA", (side, side), (0, 0, 0, 0))
square.paste(img, ((side - bw) // 2, (side - bh) // 2), img)

logo_path = os.path.join(assets_dir, "logo.png")
logo_public = os.path.join(out_dir, "logo.png")
img.save(logo_path, "PNG", optimize=True)
square.save(logo_public, "PNG", optimize=True)


def save_resized(size, path):
    resized = square.resize((size, size), Image.Resampling.LANCZOS)
    resized.save(path, "PNG", optimize=True)
    return resized


save_resized(32, os.path.join(out_dir, "favicon-32x32.png"))
save_resized(16, os.path.join(out_dir, "favicon-16x16.png"))
save_resized(180, os.path.join(out_dir, "apple-touch-icon.png"))

og_bg = Image.new("RGBA", (1200, 630), (18, 20, 20, 255))
og_logo = square.resize((280, 280), Image.Resampling.LANCZOS)
og_bg.paste(og_logo, ((1200 - 280) // 2, (630 - 280) // 2), og_logo)
og_bg.convert("RGB").save(os.path.join(out_dir, "og-image.png"), "PNG", optimize=True)

ico_sizes = [(16, 16), (32, 32), (48, 48)]
ico_images = [square.resize(s, Image.Resampling.LANCZOS) for s in ico_sizes]
ico_images[0].save(
    os.path.join(out_dir, "favicon.ico"),
    format="ICO",
    sizes=ico_sizes,
)

print("logo size:", img.size)
print("square size:", square.size)
print("done")
