export type CollegeEventCategory =
  | 'hackathon'
  | 'ideathon'
  | 'workshop'
  | 'seminar'
  | 'demoday'
  | 'mentorship'
  | 'deadline'
  | 'other';

export interface CollegeEventCategoryConfig {
  label: string;
  bgVar: string;
  borderVar: string;
  textVar: string;
  dotColor: string;
  icon: string;
}

export const COLLEGE_EVENT_CATEGORIES: Record<
  CollegeEventCategory,
  CollegeEventCategoryConfig
> = {
  hackathon: {
    label: 'Hackathon',
    bgVar: 'var(--cal-hackathon-bg)',
    borderVar: 'var(--cal-hackathon-border)',
    textVar: 'var(--cal-hackathon-text)',
    dotColor: '#2563eb',
    icon: 'Zap',
  },
  ideathon: {
    label: 'Ideathon',
    bgVar: 'var(--cal-ideathon-bg)',
    borderVar: 'var(--cal-ideathon-border)',
    textVar: 'var(--cal-ideathon-text)',
    dotColor: '#a21caf',
    icon: 'Lightbulb',
  },
  workshop: {
    label: 'Tech Workshop',
    bgVar: 'var(--cal-workshop-bg)',
    borderVar: 'var(--cal-workshop-border)',
    textVar: 'var(--cal-workshop-text)',
    dotColor: '#c2410c',
    icon: 'Wrench',
  },
  seminar: {
    label: 'Seminar / Talk',
    bgVar: 'var(--cal-seminar-bg)',
    borderVar: 'var(--cal-seminar-border)',
    textVar: 'var(--cal-seminar-text)',
    dotColor: '#15803d',
    icon: 'Mic',
  },
  demoday: {
    label: 'Demo Day',
    bgVar: 'var(--cal-demoday-bg)',
    borderVar: 'var(--cal-demoday-border)',
    textVar: 'var(--cal-demoday-text)',
    dotColor: '#b45309',
    icon: 'Presentation',
  },
  mentorship: {
    label: 'Mentorship',
    bgVar: 'var(--cal-hackathon-bg)',
    borderVar: 'var(--cal-hackathon-border)',
    textVar: 'var(--cal-hackathon-text)',
    dotColor: '#0891b2',
    icon: 'Users',
  },
  deadline: {
    label: 'Deadline',
    bgVar: 'var(--cal-ideathon-bg)',
    borderVar: 'var(--cal-ideathon-border)',
    textVar: 'var(--cal-ideathon-text)',
    dotColor: '#dc2626',
    icon: 'AlertCircle',
  },
  other: {
    label: 'Other',
    bgVar: 'var(--muted)',
    borderVar: 'var(--border)',
    textVar: 'var(--foreground)',
    dotColor: '#9ca3af',
    icon: 'Calendar',
  },
};
