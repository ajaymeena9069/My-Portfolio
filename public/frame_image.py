from PIL import Image, ImageDraw

def add_mac_frame(input_path, output_path):
    # Load original image
    img = Image.open(input_path)
    
    # Calculate dimensions
    width, height = img.size
    
    # Define frame dimensions
    top_bar_height = 40
    padding_x = 80
    padding_y = 80
    
    # Overall size
    total_width = width + 2 * padding_x
    total_height = height + top_bar_height + 2 * padding_y
    
    # Create the background
    # Background color similar to the skillsync_framed.png (#1D2128 or dark blue)
    bg_color = (20, 25, 35)
    framed_img = Image.new('RGB', (total_width, total_height), bg_color)
    
    # Create a mask for rounded corners of the window
    window_width = width
    window_height = height + top_bar_height
    
    # Window base
    window_img = Image.new('RGB', (window_width, window_height), (30, 30, 35))
    
    # Draw top bar and dots
    draw = ImageDraw.Draw(window_img)
    # Background of top bar is the window base itself, but we can make it slightly different if needed
    
    # Draw Mac dots
    dot_y = top_bar_height // 2
    dot_radius = 6
    spacing = 20
    start_x = 20
    
    # Red, Yellow, Green
    colors = [(255, 95, 86), (255, 189, 46), (39, 201, 63)]
    for i, color in enumerate(colors):
        x = start_x + i * spacing
        draw.ellipse([x - dot_radius, dot_y - dot_radius, x + dot_radius, dot_y + dot_radius], fill=color)
        
    # Paste original image into window
    window_img.paste(img, (0, top_bar_height))
    
    # Create mask for rounded corners
    mask = Image.new('L', (window_width, window_height), 0)
    draw_mask = ImageDraw.Draw(mask)
    draw_mask.rounded_rectangle([0, 0, window_width, window_height], radius=12, fill=255)
    
    # Paste window into background using mask
    framed_img.paste(window_img, (padding_x, padding_y), mask)
    
    # Save the output
    framed_img.save(output_path)

if __name__ == '__main__':
    add_mac_frame('/media/ajay-meena/AjayDrive/MERN Project/My-Portfolio/public/image copy 2.png', '/media/ajay-meena/AjayDrive/MERN Project/My-Portfolio/public/image_copy_2_framed.png')
    print("Done!")
