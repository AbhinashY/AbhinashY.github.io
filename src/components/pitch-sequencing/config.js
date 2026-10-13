// Shared configuration for the pitch sequencing project section.

export const SOURCE_NOTE =
  'Source: Baseball Savant / Statcast; 2023–2026 regular season; Orioles pitchers.'

// `safe` matches the file names produced by the analysis (Last_First).
export const PITCHERS = [
  { safe: 'Bradish_Kyle', name: 'Kyle Bradish' },
  { safe: 'Young_Brandon', name: 'Brandon Young' },
  { safe: 'Rogers_Trevor', name: 'Trevor Rogers' },
  { safe: 'Bassitt_Chris', name: 'Chris Bassitt' },
  { safe: 'Baz_Shane', name: 'Shane Baz' },
]

const HANDEDNESS_SERIES = [
  { key: 'support_L', label: 'vs LHB', color: '#f59e0b' },
  { key: 'support_R', label: 'vs RHB', color: '#d1d5db' },
]

export const VIEW_ORDER = ['handedness', 'twoStrike', 'count']

export const VIEWS = {
  handedness: {
    label: 'Left vs right',
    linkLabel: 'Left vs right chart',
    heading: 'left- vs right-handed hitters',
    description:
      'The six pitch pairs whose usage differs most between left- and right-handed hitters.',
    supportNote:
      'Support is the share of plate appearances that contain the pitch pair.',
    dataSuffix: 'handedness',
    plotSuffix: 'handedness_comparison',
    diffKey: 'abs_diff',
    series: HANDEDNESS_SERIES,
  },
  twoStrike: {
    label: 'Two strikes',
    linkLabel: 'Two-strike chart',
    heading: 'left vs right with two strikes',
    description:
      'The same left/right comparison, limited to plate appearances with two strikes.',
    supportNote:
      'Support is the share of two-strike plate appearances that contain the pitch pair.',
    dataSuffix: 'two_strike_handedness',
    plotSuffix: 'two_strike_handedness_comparison',
    diffKey: 'abs_diff',
    series: HANDEDNESS_SERIES,
  },
  count: {
    label: 'By count',
    linkLabel: 'Count chart',
    heading: 'pitch transitions by count',
    description:
      'The six pitch-to-pitch transitions that change most depending on whether the hitter is ahead, the count is even, or the pitcher is ahead.',
    supportNote:
      'Support is the share of pitch-to-pitch transitions within each count group.',
    dataSuffix: 'count_transition',
    plotSuffix: 'count_transition_comparison',
    diffKey: 'range',
    series: [
      { key: 'support_hitter_ahead', label: 'hitter ahead', color: '#f59e0b' },
      { key: 'support_even', label: 'even', color: '#7a7a7a' },
      { key: 'support_pitcher_ahead', label: 'pitcher ahead', color: '#f3f4f6' },
    ],
  },
}

export const PITCH_CODES = [
  ['FF', 'Four-seam fastball'],
  ['SI', 'Sinker'],
  ['FC', 'Cutter'],
  ['SL', 'Slider'],
  ['ST', 'Sweeper'],
  ['CU', 'Curveball'],
  ['CH', 'Changeup'],
  ['FS', 'Splitter'],
  ['KC', 'Knuckle curve'],
]

// Row counts printed in the footnote of each original plot.
export const ROWS_USED = {
  Bradish_Kyle: {
    handedness: 'L = 24, R = 16',
    twoStrike: 'L = 17, R = 15',
    count: 'hitter ahead = 21, even = 22, pitcher ahead = 17',
  },
  Young_Brandon: {
    handedness: 'L = 40, R = 35',
    twoStrike: null,
    count: 'hitter ahead = 40, even = 33, pitcher ahead = 33',
  },
  Rogers_Trevor: {
    handedness: 'L = 25, R = 25',
    twoStrike: 'L = 25, R = 24',
    count: 'hitter ahead = 25, even = 25, pitcher ahead = 25',
  },
  Bassitt_Chris: {
    handedness: 'L = 40, R = 37',
    twoStrike: 'L = 24, R = 23',
    count: 'hitter ahead = 37, even = 36, pitcher ahead = 38',
  },
  Baz_Shane: {
    handedness: 'L = 25, R = 17',
    twoStrike: 'L = 18, R = 16',
    count: 'hitter ahead = 24, even = 23, pitcher ahead = 24',
  },
}

export const FINDINGS = [
  {
    pitcher: 'Bradish_Kyle',
    title: 'Kyle Bradish',
    views: ['handedness'],
    text: 'Slider into slider appears in 38.5% of plate appearances against right-handed hitters but only 7.5% against lefties, the widest left/right gap among the core starters. Against lefties he leans on the curveball instead: curveball into four-seam shows up in 17.9% of those plate appearances, versus 1.0% against righties.',
  },
  {
    pitcher: 'Young_Brandon',
    title: 'Brandon Young',
    views: ['handedness'],
    text: 'Four-seam into splitter appears in 32.8% of plate appearances against left-handed hitters and 9.5% against righties. Righties get sliders instead: slider into slider is 23.1% against righties and 0.8% against lefties.',
  },
  {
    pitcher: 'Rogers_Trevor',
    title: 'Trevor Rogers',
    views: ['handedness', 'count'],
    text: 'Four-seam into changeup appears in 32.5% of plate appearances against righties and 13.1% against lefties. When he is ahead in the count, four-seam into four-seam makes up 29.5% of his pitch-to-pitch transitions, compared with 16.9% in even counts.',
  },
  {
    pitcher: 'Bassitt_Chris',
    title: 'Chris Bassitt',
    views: ['handedness', 'count'],
    text: 'Sinker into sweeper appears in 17.1% of plate appearances against right-handed hitters and 0% against lefties. Sinker into sinker is 24.3% of his transitions when the hitter is ahead, versus 13.4% when the pitcher is ahead, the biggest count gap among the core starters.',
  },
  {
    pitcher: 'Baz_Shane',
    title: 'Shane Baz',
    views: ['handedness'],
    text: 'Four-seam into knuckle curve appears in 38.0% of plate appearances against left-handed hitters and 20.5% against righties. Four-seam into changeup shows up only against lefties: 21.0% versus 0%.',
  },
]

export function pct(value) {
  return `${(value * 100).toFixed(1)}%`
}

export function formatPair(pair) {
  return pair ? pair.replace('->', '→') : '—'
}
