import { useMemo, useState } from 'react'
import dayjs from 'dayjs'
import { CaretLeft, CaretRight } from 'phosphor-react'
import {
  CalendarActions,
  CalendarBody,
  CalendarContainer,
  CalendarHeader,
  CalendarTitle,
  Calendarday,
} from './styles'
import { getWeekDays } from '../../utils/get-week-days'

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs().set('date', 1)
  })

  function handlePreviousMonth() {
    const previusMonthDate = currentDate.subtract(1, 'month')
    setCurrentDate(previusMonthDate)
  }

  function handleNextMonth() {
    const previusMonthDate = currentDate.add(1, 'month')
    setCurrentDate(previusMonthDate)
  }

  const currentMonth = currentDate.format('MMMM')
  const currentYear = currentDate.format('YYYY')

  const shortWeekDays = getWeekDays({ short: true })

  // Evitar redenrizacoes desnecessarias
  const calendarWeeks = useMemo(() => {
    const daysInMonthArray = Array.from({
      length: currentDate.daysInMonth(),
    }).map((_, i) => {
      return currentDate.set('date', i + 1)
    })

    const firstWeekDay = currentDate.get('day')

    const previousMonthFillArray = Array.from({
      length: firstWeekDay,
    })
      .map((_, i) => {
        return currentDate.subtract(i + 1, 'day')
      })
      .reverse()

    return [...previousMonthFillArray, ...daysInMonthArray]
  }, [currentDate])

  console.log(calendarWeeks)

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          {currentMonth} <span>{currentYear}</span>
        </CalendarTitle>
        <CalendarActions>
          <button onClick={handlePreviousMonth} title="Previous month">
            <CaretLeft />
          </button>
          <button onClick={handleNextMonth} title="Next month">
            <CaretRight />
          </button>
        </CalendarActions>
      </CalendarHeader>
      <CalendarBody>
        <thead>
          <tr>
            {shortWeekDays.map((weekDay) => (
              <th key={weekDay}>{weekDay}.</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <Calendarday>1</Calendarday>
            </td>
            <td>
              <Calendarday>2</Calendarday>
            </td>
            <td>
              <Calendarday disabled={true}>3</Calendarday>
            </td>
          </tr>
          <tr>
            <td>
              <Calendarday>1</Calendarday>
            </td>
            <td>
              <Calendarday>1</Calendarday>
            </td>
            <td>
              <Calendarday>1</Calendarday>
            </td>
            <td>
              <Calendarday>1</Calendarday>
            </td>
            <td>
              <Calendarday>2</Calendarday>
            </td>
            <td>
              <Calendarday disabled={true}>3</Calendarday>
            </td>
          </tr>
        </tbody>
      </CalendarBody>
    </CalendarContainer>
  )
}
