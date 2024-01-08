import { memo, useEffect } from 'react';

const PageTitle = memo<{ title: string }>(({ title }) => {
  useEffect(() => {
    document.title = title ? `${title} · 九典 AI` : '九典 AI';
  }, [title]);

  return null;
});

export default PageTitle;
