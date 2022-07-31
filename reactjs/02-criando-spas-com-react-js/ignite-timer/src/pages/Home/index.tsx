import { createContext, useEffect, useState } from 'react'
import { HandPalm, Play } from 'phosphor-react'
import { differenceInSeconds } from 'date-fns'

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'

// controlled / uncontrolled

// controlled mantem os valores dos inputs nos estados e a aplicação fica o monitorando.

// uncontrolled busca a informação dos inputs somente quando a gente for usar elas.

/**
 * Prop Drilling -> Quando a gente tem MUITAS propriedades APENAS para comunicação entre componentes.
 * Context API -> Permite compartilharmos informações entre VÁRIOS componentes ao mesmo tempo. Utilizar quando tiver mais de 3 informação
 */

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptDate?: Date
  finishedDate?: Date
}

interface CycleContextType {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  markCurrentCycleAsFinished: () => void
}

export const CyclesContext = createContext({} as CycleContextType)

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  // function handleCreateNewCycle(data: NewCycleFormData) {
  //   const newCycle: Cycle = {
  //     id: String(new Date().getTime()),
  //     task: data.task,
  //     minutesAmount: data.minutesAmount,
  //     startDate: new Date(),
  //   }
  //   setCycles((state) => [...state, newCycle])
  //   setActiveCycleId(newCycle.id)
  //   setAmountSecondsPassed(0)
  //   reset()
  // }

  function handleInterruptCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptDate: new Date() }
        }
        return cycle
      }),
    )

    setActiveCycleId(null)
  }

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  // Observando campos
  // const task = watch('task')
  // const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form /* onSubmit={handleSubmit(handleCreateNewCycle)} */>
        <CyclesContext.Provider
          value={{
            activeCycle,
            activeCycleId,
            markCurrentCycleAsFinished,
          }}
        >
          {/* <NewCycleForm /> */}
          <Countdown />
        </CyclesContext.Provider>
        {activeCycle ? (
          <StopCountdownButton onClick={handleInterruptCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type="submit" /* disabled={isSubmitDisabled} */>
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
