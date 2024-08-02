import { readFileSync } from 'fs';
import { createHighlighter } from 'shiki';

async function highlight() {
  const highlighter = await createHighlighter({
    themes: ['github-light'],
    langs: ['javascript', 'typescript', 'angular-ts']
  });

  const code = readFileSync(0, 'utf-8');
  const lang = process.argv[2] || 'plaintext';

  // STDOUT is read by the ruby-plugin
  console.log(
    highlighter.codeToHtml(code, {
      theme: 'github-light',
      lang
    })
  );
}

highlight();
