import { createContext, useContext, useState } from 'react'

interface ITimelineContext {
  activeId: string
  setActiveId: (id: string) => void
}

export const TimelineCtx = createContext<ITimelineContext>({
  activeId: '',
  setActiveId: () => {}
})

export const useTimelineCtx = () => useContext(TimelineCtx)
