import coreSummary from '../../data/pitch-sequencing/pitcher_summary_core.json'
import fullSummary from '../../data/pitch-sequencing/pitcher_summary_report.json'
import { VIEWS } from './config.js'

// Vite resolves these globs at build time, so asset URLs respect the site's base path.
const chartData = import.meta.glob('../../data/pitch-sequencing/charts/*.json', {
  eager: true,
  import: 'default',
})
const chartDownloads = import.meta.glob('../../data/pitch-sequencing/charts/*.json', {
  eager: true,
  query: '?url',
  import: 'default',
})
const plotUrls = import.meta.glob('../../assets/pitch-sequencing/plots/*.png', {
  eager: true,
  import: 'default',
})

function byFileName(modules) {
  return Object.fromEntries(
    Object.entries(modules).map(([path, value]) => [path.split('/').pop(), value]),
  )
}

const charts = byFileName(chartData)
const downloads = byFileName(chartDownloads)
const plots = byFileName(plotUrls)

export function getChart(safeName, view) {
  const fileName = `${safeName}_${VIEWS[view].dataSuffix}_chart_data.json`
  return {
    fileName,
    rows: charts[fileName] ?? null,
    downloadUrl: downloads[fileName] ?? null,
  }
}

export function getPlot(safeName, view) {
  return plots[`${safeName}_${VIEWS[view].plotSuffix}.png`] ?? null
}

export function getSummaryPlot(name) {
  return plots[`${name}.png`] ?? null
}

export { coreSummary, fullSummary }
