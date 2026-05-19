import PyPDF2
import os

files = ['public/Privacy.pdf', 'public/Refund.pdf', 'public/T&C.pdf']

for file in files:
    if os.path.exists(file):
        reader = PyPDF2.PdfReader(file)
        text = ''
        for page in reader.pages:
            text += page.extract_text() + '\n'
        with open(file + '.txt', 'w', encoding='utf-8') as f:
            f.write(text)
        print(f'Extracted {file}')
    else:
        print(f'File not found: {file}')
