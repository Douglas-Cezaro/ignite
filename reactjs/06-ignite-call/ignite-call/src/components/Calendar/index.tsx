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
  const shortWeekDays = getWeekDays({ short: true })
  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          Junho <span>2023</span>
        </CalendarTitle>
        <CalendarActions>
          <button>
            <CaretLeft />
          </button>
          <button>
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
