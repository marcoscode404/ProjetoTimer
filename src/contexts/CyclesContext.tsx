import { createContext, ReactNode, useReducer, useState } from 'react'
import { ActionTypes, Cycle, cyclesReducer } from '../reducers/cycles'

// interface criar ciclo
interface CreateCycleData {
  task: string
  minutesAmount: number
}

// Typagem dos contextos
interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  interruptCurrentCycle: () => void
}

// criando variavel de Context
export const CyclesContext = createContext({} as CyclesContextType)

// interface para o children/ qualquer conteudo html é valido
interface CyclesContextProviderProps {
  children: ReactNode
}

// controlando varios estados por meio do reducer
export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(cyclesReducer, {
    cycles: [],
    activeCycleId: null,
  })
  // quando não houver nenhum ciclo na tela
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const { cycles, activeCycleId } = cyclesState

  // const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  // ciclo ativo
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  // funcção provisoria para passar o setAmountSecondsPassed para outro component
  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  // marca ciclo como finalizado
  function markCurrentCycleAsFinished() {
    dispatch({
      type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
      payload: {
        data: activeCycleId,
      },
    })
  }

  // criar um novo ciclo
  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch({
      type: ActionTypes.ADD_NEW_CYCLE,
      payload: {
        newCycle,
      },
    })

    // setCycles((state) => [...state, newCycle])
    setAmountSecondsPassed(0)
  }

  // interromper ciclo
  function interruptCurrentCycle() {
    dispatch({
      type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
      payload: {
        activeCycleId,
      },
    })
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
