import { useMemo } from 'react'
import worldMapRaw from '../../assets/world-map.svg?raw'
import { getCountryFill } from '../../lib/worldMapColors'

export const WORLD_MAP_VIEWBOX = {
  x: 30.767,
  y: 241.591,
  width: 784.077,
  height: 458.627,
} as const

export const worldMapViewBoxString = `${WORLD_MAP_VIEWBOX.x} ${WORLD_MAP_VIEWBOX.y} ${WORLD_MAP_VIEWBOX.width} ${WORLD_MAP_VIEWBOX.height}`

function resolveCountryCode(path: Element): string | null {
  const host = path.closest<SVGElement>('g[id], path[id]')
  const id = host?.id
  if (!id || id === 'world-map') return null
  return id.toLowerCase()
}

function colorizeWorldMap(svgText: string): string {
  const doc = new DOMParser().parseFromString(svgText, 'image/svg+xml')
  const svg = doc.querySelector('svg')
  if (!svg) return svgText

  svg.setAttribute('width', '100%')
  svg.setAttribute('height', '100%')
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet')
  svg.removeAttribute('x')
  svg.removeAttribute('y')

  doc.querySelectorAll('path').forEach((path) => {
    const code = resolveCountryCode(path)
    if (!code) return
    path.setAttribute('fill', getCountryFill(code))
    path.setAttribute('stroke', '#ffffff')
    path.setAttribute('stroke-width', '0.45')
  })

  return new XMLSerializer().serializeToString(svg)
}

export function worldToPercent(x: number, y: number) {
  const { x: vx, y: vy, width, height } = WORLD_MAP_VIEWBOX
  return {
    left: ((x - vx) / width) * 100,
    top: ((y - vy) / height) * 100,
  }
}

type WorldMapChoroplethProps = {
  className?: string
}

export function WorldMapChoropleth({ className }: WorldMapChoroplethProps) {
  const coloredSvg = useMemo(() => colorizeWorldMap(worldMapRaw), [])

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: coloredSvg }}
      aria-hidden
    />
  )
}
