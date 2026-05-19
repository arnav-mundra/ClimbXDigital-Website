import PyPDF2

files = ['public/FAQ.pdf']

for file in files:
    reader = PyPDF2.PdfReader(file)
    text = ''
    for page in reader.pages:
        text += page.extract_text() + '\n'
    with open(file + '.txt', 'w', encoding='utf-8') as f:
        f.write(text)
    print(f'Extracted {file}')
