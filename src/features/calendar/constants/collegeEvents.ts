export type CollegeEventCategory =
  | 'hackathon'
  | 'ideathon'
  | 'workshop'
  | 'startup_seminar'
  | 'innovation_challenge'
  | 'incubation_event'
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
  startup_seminar: {
    label: 'Startup Seminar',
    bgVar: 'var(--cal-seminar-bg)',
    borderVar: 'var(--cal-seminar-border)',
    textVar: 'var(--cal-seminar-text)',
    dotColor: '#15803d',
    icon: 'Mic',
  },
  innovation_challenge: {
    label: 'Innovation Challenge',
    bgVar: 'var(--post-status-failure-bg)',
    borderVar: 'var(--post-status-failure-border)',
    textVar: 'var(--post-status-failure-indicator)',
    dotColor: '#dc2626',
    icon: 'Target',
  },
  incubation_event: {
    label: 'Incubation Event',
    bgVar: 'var(--cal-hackathon-bg)',
    borderVar: 'var(--cal-hackathon-border)',
    textVar: 'var(--cal-hackathon-text)',
    dotColor: '#0d9488',
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
