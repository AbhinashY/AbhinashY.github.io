import { useState } from 'react'
import { getSummaryPlot } from './data.js'

const GROUPS = {
  core: { label: 'Core starters', prefix: 'core_biggest_' },
  all: { label: 'All analyzed pitchers', prefix: 'biggest_' },
}

const TABS = [
  {
    id: 'handedness_split',
    label: 'Left vs right',
    note: 'Each bar is the pitch pair with the biggest left/right gap for that pitcher. A longer bar means the pitcher changes his sequencing more depending on the hitter’s handedness.',
    alt: 'Bar chart ranking pitchers by their largest left versus right sequencing gap',
  },
  {
    id: 'two_strike_handedness_split',
    label: 'Two strikes',
    note: 'The same ranking, limited to two-strike plate appearances. The gaps are smaller here, so read them with extra care.',
    alt: 'Bar chart ranking pitchers by their largest two-strike left versus right sequencing gap',
  },
  {
    id: 'count_split',
    label: 'By count',
    note: 'Each bar is the pitch-to-pitch transition with the biggest gap between counts where the hitter is ahead and counts where the pitcher is ahead.',
    alt: 'Bar chart ranking pitchers by their largest hitter-ahead versus pitcher-ahead transition gap',
  },
]

export default function SummaryPlots() {
  const [group, setGroup] = useState('core')
  const [tabId, setTabId] = useState(TABS[0].id)

  const tab = TABS.find((t) => t.id === tabId)
  const groupInfo = GROUPS[group]
  const url = getSummaryPlot(`${groupInfo.prefix}${tab.id}`)

  return (
    <div>
      <h3>Across the staff</h3>
      <div className="ps-controls">
        <div className="ps-group" role="group" aria-label="Pitchers to compare">
          {Object.entries(GROUPS).map(([id, g]) => (
            <button
              key={id}
              type="button"
              className="ps-chip"
              aria-pressed={id === group}
              onClick={() => setGroup(id)}
            >
              {g.label}
            </button>
          ))}
        </div>
        <div className="ps-group" role="group" aria-label="Comparison">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              className="ps-chip"
              aria-pressed={t.id === tabId}
              onClick={() => setTabId(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
      <p className="ps-muted">{tab.note}</p>
      {url && (
        <figure className="ps-figure">
          <a href={url} target="_blank" rel="noreferrer">
            <img src={url} alt={`${groupInfo.label}: ${tab.alt}`} loading="lazy" />
          </a>
        </figure>
      )}
    </div>
  )
}
