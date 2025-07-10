const fs = require('fs');
const https = require('https');
const vm = require('vm');

const url = 'https://raw.githubusercontent.com/jennifert/nextjs-site/main/components/data/galleryData.js';
const outputPath = '_data/gallery.json';

https.get(url, (res) => {
  let data = '';

  res.on('data', chunk => (data += chunk));
  res.on('end', () => {
    try {
      // Replace image path and strip ES Module export
      const fixedData = data
        .replace(/^export\s+const\s+galleryItems\s+=/, 'galleryItems =')
        .replace(/\/gallery\//g, '/imgs/gallery/');

      // Create a VM sandbox
      const sandbox = {};
      vm.createContext(sandbox);

      // Evaluate the variable inside the sandbox
      vm.runInContext(fixedData, sandbox);

      const items = sandbox.galleryItems;

      if (!Array.isArray(items)) {
        throw new Error('Parsed galleryItems is not an array.');
      }

      fs.writeFileSync(outputPath, JSON.stringify(items, null, 2), 'utf8');
      console.log('✅ galleryData.js converted and saved to _data/gallery.json');
    } catch (err) {
      console.error('❌ Failed to convert galleryData.js:', err.message);
    }
  });
});