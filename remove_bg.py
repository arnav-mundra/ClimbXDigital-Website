from PIL import Image

def remove_black_bg(input_path, output_path):
    img = Image.open(input_path)
    img = img.convert("RGBA")
    datas = img.getdata()

    newData = []
    # threshold for black
    for item in datas:
        # if the pixel is almost black, make it transparent
        if item[0] < 30 and item[1] < 30 and item[2] < 30:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(output_path, "PNG")

remove_black_bg("public/climbx-logo.png", "public/climbx-logo.png")
print("Removed black background from climbx-logo.png")
