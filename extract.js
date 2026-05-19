const fs = require('fs');
const pdfParse = require('pdf-parse');

const files = ['public/Privacy.pdf', 'public/Refund.pdf', 'public/T&C.pdf'];

async function run() {
  for (let file of files) {
    let dataBuffer = fs.readFileSync(file);
    let data = await pdfParse(dataBuffer);
    fs.writeFileSync(file + '.txt', data.text);
    console.log(`Extracted ${file}`);
  }
}
run();
