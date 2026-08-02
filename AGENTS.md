<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# コーディング規約

- リンクには生の `<a>` タグを使わず、必ず `next/link` の `Link` コンポーネントを使うこと（外部リンクも `target="_blank"` / `rel="noopener noreferrer"` を付けて `Link` で実装する）。
