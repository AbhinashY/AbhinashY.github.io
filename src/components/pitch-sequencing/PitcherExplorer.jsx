import { useState } from 'react'
import BarChart from './BarChart.jsx'
import {
  PITCHERS,
  ROWS_USED,
  SOURCE_NOTE,
  VIEWS,
  VIEW_ORDER,
  pct,
} from './config.js'
import { getChart, getPlot } from './data.js'

export default function PitcherExplorer({ pitcher, view, onChange }) {
  const [mode, setMode] = useState('chart')

  const config = VIEWS[view]
  const pitcherInfo = PITCHERS.find((p) => p.safe === pitcher)
  const chart = getChart(pitcher, view)
  const plotUrl = getPlot(pitcher, view)
  const rowsUsed = ROWS_USED[pitcher]?.[view]

  // The JSON lists the smallest gap first; the charts show the widest gap on top.
  const rows = chart.rows
    ? [...chart.rows].sort((a, b) => b[config.diffKey] - a[config.diffKey])
    : []
  const top = rows[0]
  const showPlot = mode === 'plot' && Boolean(plotUrl)
  const title = `${pitcherInfo.name}: ${config.heading}`

  return (
    <div className="ps-explorer" id="pitch-explorer">
      <h3>Explore each pitcher</h3>

      <div className="ps-controls">
        <div className="ps-group" role="group" aria-label="Pitcher">
          {PITCHERS.map((p) => (
            <button
              key={p.safe}
              type="button"
              className="ps-chip"
              aria-pressed={p.safe === pitcher}
              onClick={() => onChange({ pitcher: p.safe, view })}
            >
              {p.name}
            </button>
          ))}
        </div>
        <div className="ps-group" role="group" aria-label="Chart type">
          {VIEW_ORDER.map((id) => (
            <button
              key={id}
              type="button"
              className="ps-chip"
              aria-pressed={id === view}
              onClick={() => onChange({ pitcher, view: id })}
            >
              {VIEWS[id].label}
            </button>
          ))}
        </div>
      </div>

      <div className="ps-panel">
        <div className="ps-panel-head">
          <div>
            <h4>{title}</h4>
            <p className="ps-muted">{config.description}</p>
          </div>
          <div className="ps-group" role="group" aria-label="Display">
            <button
              type="button"
              className="ps-chip"
              aria-pressed={!showPlot}
              onClick={() => setMode('chart')}
            >
              Interactive chart
            </button>
            <button
              type="button"
              className="ps-chip"
              aria-pressed={showPlot}
              disabled={!plotUrl}
              onClick={() => setMode('plot')}
            >
              Original plot
            </button>
          </div>
        </div>

        {top && (
          <p className="ps-callout">
            <strong>{top.label}</strong> shows the widest gap:{' '}
            {config.series.map((s) => `${pct(top[s.key])} ${s.label}`).join(', ')}.
          </p>
        )}

        {showPlot ? (
          <figure className="ps-figure">
            <a href={plotUrl} target="_blank" rel="noreferrer">
              <img src={plotUrl} alt={title} loading="lazy" />
            </a>
          </figure>
        ) : rows.length > 0 ? (
          <BarChart rows={rows} series={config.series} label={title} />
        ) : (
          <p className="ps-muted">No chart data for this view yet.</p>
        )}

        {!plotUrl && (
          <p className="ps-muted ps-small">
            There is no original plot for this view yet, so only the interactive chart is shown.
          </p>
        )}

        <details className="ps-details">
          <summary>View the data</summary>
          <div className="ps-tablewrap">
            <table>
              <thead>
                <tr>
                  <th scope="col">Pitch pair</th>
                  {config.series.map((s) => (
                    <th scope="col" key={s.key}>
                      {s.label}
                    </th>
                  ))}
                  <th scope="col">Gap</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    {config.series.map((s) => (
                      <td key={s.key}>{pct(row[s.key])}</td>
                    ))}
                    <td>{(row[config.diffKey] * 100).toFixed(1)} pts</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {chart.downloadUrl && (
            <p className="ps-small">
              <a href={chart.downloadUrl} download={chart.fileName}>
                Download this data as JSON
              </a>
            </p>
          )}
        </details>

        <p className="ps-footnote">
          {config.supportNote} Only the six most distinctive pairs are shown, not a full pitch mix.
          {rowsUsed ? ` Rows used: ${rowsUsed}.` : ''} {SOURCE_NOTE}
        </p>
      </div>
    </div>
  )
}
