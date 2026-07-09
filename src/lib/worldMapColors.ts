/** Cyan choropleth palette aligned with brand #22d3ee */
const CYAN = {
  darkest: '#0e7490',
  dark: '#0891b2',
  brand: '#22d3ee',
  medium: '#06b6d4',
  light: '#67e8f9',
  lighter: '#a5f3fc',
} as const

export const DEFAULT_COUNTRY_FILL = '#e5e7eb'

/** Active / supported markets — varying cyan shades like the reference map */
const ACTIVE_COUNTRIES: Record<string, string> = {
  // North America
  us: CYAN.darkest,
  ca: CYAN.brand,
  mx: CYAN.medium,

  // South America
  br: CYAN.dark,
  ar: CYAN.lighter,
  cl: CYAN.light,
  co: CYAN.medium,
  pe: CYAN.light,

  // Europe
  gb: CYAN.brand,
  ie: CYAN.light,
  fr: CYAN.dark,
  de: CYAN.darkest,
  es: CYAN.medium,
  it: CYAN.brand,
  pt: CYAN.light,
  nl: CYAN.medium,
  be: CYAN.light,
  ch: CYAN.dark,
  at: CYAN.medium,
  pl: CYAN.brand,
  se: CYAN.light,
  no: CYAN.lighter,
  fi: CYAN.light,
  dk: CYAN.lighter,
  cz: CYAN.medium,
  ro: CYAN.light,
  gr: CYAN.medium,
  hu: CYAN.light,

  // Middle East
  sa: CYAN.medium,
  ae: CYAN.light,
  il: CYAN.brand,
  tr: CYAN.medium,

  // Africa
  eg: CYAN.light,
  ng: CYAN.brand,
  za: CYAN.medium,
  ke: CYAN.medium,
  ma: CYAN.light,
  sd: CYAN.lighter,

  // Asia Pacific
  in: CYAN.darkest,
  cn: CYAN.light,
  jp: CYAN.brand,
  kr: CYAN.medium,
  sg: CYAN.dark,
  th: CYAN.medium,
  vn: CYAN.light,
  id: CYAN.medium,
  my: CYAN.light,
  ph: CYAN.light,
  au: CYAN.dark,
  nz: CYAN.brand,
}

export function getCountryFill(code: string): string {
  if (code.startsWith('_')) return DEFAULT_COUNTRY_FILL
  return ACTIVE_COUNTRIES[code] ?? DEFAULT_COUNTRY_FILL
}
