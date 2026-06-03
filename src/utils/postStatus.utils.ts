export type PostStatusTag = 'success' | 'failure' | null;

export function getPostStatusClasses(statusTag?: PostStatusTag): {
  containerClasses: string;
  borderClasses: string;
  badgeClasses: string;
  badgeLabel: string;
} {
  if (statusTag === 'success') {
    return {
      containerClasses: 'bg-[var(--post-status-success-bg)]',
      borderClasses: 'border-l-4 border-l-[var(--post-status-success-indicator)]',
      badgeClasses: 'bg-green-100 text-green-800 border border-green-200',
      badgeLabel: '✓ Success',
    };
  }

  if (statusTag === 'failure') {
    return {
      containerClasses: 'bg-[var(--post-status-failure-bg)]',
      borderClasses: 'border-l-4 border-l-[var(--post-status-failure-indicator)]',
      badgeClasses: 'bg-rose-100 text-rose-800 border border-rose-200',
      badgeLabel: '✕ Failure',
    };
  }

  return {
    containerClasses: '',
    borderClasses: '',
    badgeClasses: '',
    badgeLabel: '',
  };
}

export function deriveStatusTag(tags: string[] = []): PostStatusTag {
  const lowerTags = tags.map((t) => t.toLowerCase());
  if (lowerTags.includes('success')) return 'success';
  if (lowerTags.includes('failure')) return 'failure';
  return null;
}
