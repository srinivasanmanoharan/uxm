interface PerformanceEntry {
  // user timing
  detail?: object
}

type EntryType =
  | 'element'
  | 'first-input'
  | 'largest-contentful-paint'
  | 'layout-shift'
  | 'longtask'
  | 'mark'
  | 'measure'
  | 'navigation'
  | 'paint'
  | 'resource'
  | 'event'

type NetworkInformation = {
  effectiveType: 'slow-2g' | '2g' | '3g' | '4g'
  rtt: number
  downlink: number
}

interface Navigator {
  deviceMemory: number
  connection: NetworkInformation
  mozConnection: NetworkInformation
  webkitConnection: NetworkInformation
}

interface Performance {
  mark(markName: string, markOptions?: object): PerformanceEntry | undefined
  measure(measureName: string, startOrMeasureOptions?: string | object, endMark?: string): PerformanceEntry | undefined
}
