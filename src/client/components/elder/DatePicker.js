import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

const MONTHS = [
  '1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'
]
const WEEKDAYS_SHORT = ['日', '一', '二', '三', '四', '五', '六']

class DatePicker extends Component {
  constructor() {
    super()
    this.state = {
      from: undefined,
      to: undefined,
    }
    this.handleDayClick = this.handleDayClick.bind(this)
  }

  componentDidMount() {
    if (localStorage.getItem('elder')) {
      const elder = JSON.parse(localStorage.getItem('elder'))
      this.setState({ from: new Date(elder.inDate), to: new Date(elder.outDate) })
    }
  }

  componentWillUnmount() {
    const { from, to } = this.state
    let elder = localStorage.getItem('elder') ? JSON.parse(localStorage.getItem('elder')) : null
    elder.inDate = from
    elder.outDate = to
    elder.daysDiff = this.daysDiff(from, to)
    this.updateLocalStorage(elder)
  }

  updateLocalStorage(elder) {
    localStorage.setItem('elder', JSON.stringify(elder))
  }

  daysDiff(date1, date2) {
    const dt1 = new Date(date1);
    const dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24))
  }

  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state)
    this.setState(range);
  }

  render() {
    const { from, to } = this.state
    const modifiers = { start: from, end: to }
    return (
      <div className="date-table-picker">
        <DayPicker
          className="Selectable"
          months={MONTHS}
          weekdaysShort={WEEKDAYS_SHORT}
          firstDayOfWeek={0}
          canChangeMonth={false}
          numberOfMonths={3}
          disabledDays={[
            { before: new Date() }
          ]}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />
      </div>
    )
  }
}

export default DatePicker
