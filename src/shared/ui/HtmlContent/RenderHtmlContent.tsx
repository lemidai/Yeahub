import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
  htmlContent: string;
};

export const RenderHtmlContent = ({ htmlContent }: Props) => {
  const [parsedContent, setParsedContent] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const cleanHtml = DOMPurify.sanitize(htmlContent, {
      ADD_TAGS: ['pre', 'code'],
      ADD_ATTR: ['class'],
    });

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = cleanHtml;

    const children: React.ReactNode[] = [];
    const nodes = tempDiv.childNodes;

    nodes.forEach((node, index) => {
      if (node.nodeName === 'PRE' && node.firstChild?.nodeName === 'CODE') {
        const codeElement = node.firstChild as HTMLElement;
        const code = codeElement.textContent || '';

        let language = 'text';
        const classNames = codeElement.className || '';
        const langMatch = classNames.match(/language-(\w+)/);
        if (langMatch) {
          language = langMatch[1];
        }

        const langMap: Record<string, string> = {
          typescriptreact: 'tsx',
          plaintext: 'javascript',
          js: 'javascript',
          ts: 'typescript',
        };
        language = langMap[language] || language;

        children.push(
          <SyntaxHighlighter
            key={index}
            language={language}
            style={atomDark}
            className="my-4 rounded-lg"
            showLineNumbers={false}
          >
            {code}
          </SyntaxHighlighter>
        );
      } else {
        children.push(
          <div
            key={index}
            dangerouslySetInnerHTML={{
              __html: (node as Element).outerHTML || node.textContent || '',
            }}
          />
        );
      }
    });

    setParsedContent(children);
  }, [htmlContent]);

  return <div>{parsedContent}</div>;
};
