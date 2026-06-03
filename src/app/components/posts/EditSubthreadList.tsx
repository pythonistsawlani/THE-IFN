import { useState } from 'react';
import { PostEditEntry } from '../../../store/useAppStore';

interface EditSubthreadProps {
  entry: PostEditEntry;
  isOriginal: boolean;
}

export function EditSubthread({ entry, isOriginal }: EditSubthreadProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-l-2 border-l-amber-400 pl-4 py-3 ml-4 bg-amber-50/30 rounded-r-lg my-2">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-xs font-semibold px-2..5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
            {isOriginal ? '📄 Original post' : `✏️ Edit v${entry.version - 1}`}
          </span>
          <span className="text-xs text-gray-500">
            {new Date(entry.editedAt).toLocaleString()}
          </span>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs text-[#0033A0] hover:text-[#002880] font-medium transition-colors cursor-pointer"
        >
          {isExpanded ? 'Hide content' : 'Show content'}
        </button>
      </div>

      {/* Optional edit note */}
      {entry.editNote && (
        <p className="text-xs text-gray-600 italic mb-2">
          &quot;{entry.editNote}&quot;
        </p>
      )}

      {/* Collapsed content */}
      {isExpanded && (
        <div className="space-y-3 mt-3 pt-3 border-t border-amber-100 text-sm">
          <div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Title
            </span>
            <p className="text-gray-900 mt-0.5 font-medium">
              {entry.content.title}
            </p>
          </div>
          <div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Content
            </span>
            <p className="text-gray-700 mt-0.5 whitespace-pre-line leading-relaxed">
              {entry.content.content}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

interface EditSubthreadListProps {
  editHistory?: PostEditEntry[];
}

export function EditSubthreadList({ editHistory }: EditSubthreadListProps) {
  if (!editHistory || editHistory.length === 0) return null;

  const sorted = [...editHistory].sort((a, b) => a.version - b.version);

  return (
    <div className="mt-6 border-t border-gray-100 pt-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs font-semibold text-gray-500 px-2 flex items-center gap-1 uppercase tracking-wider">
          ✏️ Edit history ({sorted.length} {sorted.length === 1 ? 'version' : 'versions'})
        </span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      <div className="space-y-2">
        {sorted.map((entry) => (
          <EditSubthread
            key={entry.version}
            entry={entry}
            isOriginal={entry.version === 1}
          />
        ))}
      </div>
    </div>
  );
}
