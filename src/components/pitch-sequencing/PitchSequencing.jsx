import { useState } from 'react'
import './PitchSequencing.css'
import PitcherExplorer from './PitcherExplorer.jsx'
import SummaryPlots from './SummaryPlots.jsx'
import SummaryTable from './SummaryTable.jsx'
import { FINDINGS, PITCHERS, PITCH_CODES, SOURCE_NOTE, VIEWS } from './config.js'

export default function PitchSequencing() {
  const [selection, setSelection] = useState({
    pitcher: PITCHERS[0].safe,
    view: 'handedness',
  })

  return (
    <section className="section ps" id="pitch-sequencing">
      <h2>Baseball Pitch Sequence Analysis</h2>
      <p className="ps-lede">
        Do pitchers change their pitch order depending on who is hitting and what the count is? I
        looked at consecutive pitch pairs, like a four-seam fastball followed by a changeup, for
        Orioles pitchers. I compared how often each pair appears against left- and right-handed
        hitters, with two strikes, and when the hitter or the pitcher is ahead in the count.
      </p>
      <p className="ps-muted">{SOURCE_NOTE} Tools: Python, Pandas, SQL.</p>

      <div className="ps-block">
        <h3>How to read the charts</h3>
        <ul className="ps-guide">
          <li>A pitch pair like FF → SI means a four-seam fastball followed by a sinker.</li>
          <li>LHB and RHB are left- and right-handed batters.</li>
          <li>
            Support is the share of plate appearances that contain the pair. In the count charts,
            it is the share of pitch-to-pitch transitions within each count group.
          </li>
          <li>
            Each chart shows the six pairs with the biggest gap for that pitcher, not a full pitch
            mix.
          </li>
        </ul>
        <details className="ps-details">
          <summary>Pitch codes</summary>
          <dl className="ps-codes">
            {PITCH_CODES.map(([code, name]) => (
              <div key={code}>
                <dt>{code}</dt>
                <dd>{name}</dd>
              </div>
            ))}
          </dl>
        </details>
      </div>

      <div className="ps-block">
        <h3>What stood out</h3>
        <ul className="ps-findings">
          {FINDINGS.map((finding) => (
            <li key={finding.pitcher}>
              <h4>{finding.title}</h4>
              <p>{finding.text}</p>
              <p className="ps-finding-links">
                {finding.views.map((view) => (
                  <a
                    key={view}
                    href="#pitch-explorer"
                    onClick={() => setSelection({ pitcher: finding.pitcher, view })}
                  >
                    {VIEWS[view].linkLabel}
                  </a>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="ps-block">
        <SummaryPlots />
      </div>

      <div className="ps-block">
        <PitcherExplorer
          pitcher={selection.pitcher}
          view={selection.view}
          onChange={setSelection}
        />
      </div>

      <div className="ps-block">
        <SummaryTable />
      </div>

      <div className="ps-block">
        <h3>What to keep in mind</h3>
        <ul className="ps-guide">
          <li>
            The sample behind each split is small. Row counts are listed under every chart, and
            several splits use fewer than 20 rows, so treat the gaps as patterns worth exploring
            rather than settled tendencies.
          </li>
          <li>
            Two-strike gaps are smaller than the overall left/right gaps and rest on fewer rows.
          </li>
          <li>
            The charts show how often pairs appear, not whether they worked. They say nothing about
            outcomes like strikeouts or hard contact.
          </li>
        </ul>
      </div>
    </section>
  )
}
