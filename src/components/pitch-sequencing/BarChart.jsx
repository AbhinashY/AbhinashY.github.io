import { pct } from './config.js'

// Grouped horizontal bars drawn with plain HTML/CSS so they stay crisp and responsive.
export default function BarChart({ rows, series, label }) {
  const largest = Math.max(
    0.01,
    ...rows.flatMap((row) => series.map((s) => row[s.key] ?? 0)),
  )
  const axisMax = Math.ceil(largest * 20) / 20

  return (
    <div className="pc" role="group" aria-label={label}>
      <ul className="pc-legend">
        {series.map((s) => (
          <li key={s.key}>
            <span className="pc-swatch" style={{ background: s.color }} />
            {s.label}
          </li>
        ))}
      </ul>
      <ol className="pc-rows">
        {rows.map((row) => (
          <li className="pc-row" key={row.label}>
            <span className="pc-label">{row.label}</span>
            <div className="pc-bars">
              {series.map((s) => {
                const value = row[s.key] ?? 0
                return (
                  <div className="pc-bar-line" key={s.key}>
                    <div className="pc-track">
                      <div
                        className="pc-bar"
                        style={{
                          width: `${(value / axisMax) * 100}%`,
                          background: s.color,
                        }}
                      />
                    </div>
                    <span className="pc-value">
                      <span className="sr-only">{s.label}: </span>
                      {pct(value)}
                    </span>
                  </div>
                )
              })}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
