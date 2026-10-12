import { useState } from 'react'
import { coreSummary, fullSummary } from './data.js'
import { formatPair } from './config.js'

const GROUPS = {
  core: { label: 'Core starters', rows: coreSummary },
  all: { label: 'All analyzed pitchers', rows: fullSummary },
}

// Support differences in the summary files are signed. Positive means the first side is higher.
function gap(pair, support, positiveSide, negativeSide) {
  if (!pair || support == null) return '—'
  const side = support > 0 ? positiveSide : negativeSide
  return `${formatPair(pair)} (${side} +${Math.abs(support * 100).toFixed(1)} pts)`
}

export default function SummaryTable() {
  const [group, setGroup] = useState('core')
  const rows = GROUPS[group].rows

  return (
    <div>
      <h3>Pitcher summary</h3>
      <p className="ps-muted">
        One row per pitcher. A dash means there was not enough data to report that column.
      </p>
      <div className="ps-controls">
        <div className="ps-group" role="group" aria-label="Pitchers to list">
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
      </div>
      <div className="ps-tablewrap ps-summary">
        <table>
          <thead>
            <tr>
              <th scope="col">Pitcher</th>
              <th scope="col">Most common pair</th>
              <th scope="col">Top vs LHB</th>
              <th scope="col">Top vs RHB</th>
              <th scope="col">Biggest left/right gap</th>
              <th scope="col">Biggest count gap</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.pitcher_name_safe}>
                <th scope="row">{row.pitcher_name}</th>
                <td>{formatPair(row.top_overall_bigram)}</td>
                <td>{formatPair(row.top_vs_l_bigram)}</td>
                <td>{formatPair(row.top_vs_r_bigram)}</td>
                <td>
                  {gap(row.biggest_l_r_diff_bigram, row.biggest_l_r_diff_support, 'LHB', 'RHB')}
                </td>
                <td>
                  {gap(
                    row.biggest_hitter_vs_pitcher_diff,
                    row.biggest_hitter_vs_pitcher_support,
                    'hitter ahead',
                    'pitcher ahead',
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
