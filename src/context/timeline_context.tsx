import { createContext } from 'react'

interface ITimelineContext {
  activeId: number
  setActiveId: (id: number) => void
}

export const TimelineCtx = createContext<ITimelineContext>({
  activeId: 0,
  setActiveId: () => {}
})
