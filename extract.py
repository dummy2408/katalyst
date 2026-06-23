import fitz # PyMuPDF
import os

pdf_path = r"d:\katalyst\DOC-20260509-WA0017_260623_125857.pdf"
doc = fitz.open(pdf_path)

out_dir = r"d:\katalyst\antigravity-web\public"
if not os.path.exists(out_dir):
    os.makedirs(out_dir)

# Extract images
for page_index in range(len(doc)):
    page = doc[page_index]
    image_list = page.get_images()
    
    if image_list:
        for image_index, img in enumerate(image_list, start=1):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            
            image_filename = os.path.join(out_dir, f"extracted_p{page_index}_i{image_index}.{image_ext}")
            with open(image_filename, "wb") as f:
                f.write(image_bytes)
            print(f"Saved {image_filename}")
