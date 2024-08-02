const shiki = require('shiki');
const fs = require('fs');

async function highlight() {
  const highlighter = await shiki.getSingletonHighlighter({
    theme: 'nord' // Change this to any theme Shiki supports
  });

  const code = fs.readFileSync(0, 'utf-8');
  const lang = process.argv[2] || 'plaintext';
  console.log(highlighter.codeToHtml(code, lang));
}

highlight();
