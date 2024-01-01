import { ToolButton } from './ToolButton';

export interface CopyButtonProps {
  code?: string | undefined;
  locale?: Record<string, string>;
}

export function CopyButton({ code, locale }: CopyButtonProps) {
  return (
    <ToolButton
      onClick={() => {
        navigator.clipboard
          .writeText(code || '')
          .then(() => {
            alert('Copy succeeded!');
          })
          .catch();
      }}
    >
      <svg fill="currentColor" viewBox="0 0 16 16">
        <path
          fillRule="evenodd"
          d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
        />
      </svg>
      {locale?.['copy'] || 'Copy'}
    </ToolButton>
  );
}
