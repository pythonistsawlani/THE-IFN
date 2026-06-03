import { COLLEGE_EVENT_CATEGORIES } from '../constants/collegeEvents';

export function EventTypeLegend() {
  return (
    <div className="flex flex-wrap gap-4 p-4 bg-white border border-gray-200 rounded-lg justify-center">
      {Object.entries(COLLEGE_EVENT_CATEGORIES).map(([key, config]) => {
        if (key === 'other') return null;
        return (
          <div key={key} className="flex items-center gap-2 text-sm font-medium">
            <span
              className="w-3.5 h-3.5 rounded-full border"
              style={{
                backgroundColor: config.bgVar || 'var(--muted)',
                borderColor: config.borderVar || 'var(--border)',
              }}
            />
            <span className="text-gray-700">{config.label}</span>
          </div>
        );
      })}
    </div>
  );
}
