import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Event from './AgendaList/event.js'

export default function Event({ event }) {
  const eventData = JSON.parse(event)

  return (
    <div className="daily-agenda">
      <Event event={eventData} />
    </div>
  )
}

Agenda.propTypes = {
  event: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('event-show')
  const data = node.getAttribute('data')
  ReactDOM.render(
    <Event event={data} />,
    document.body.appendChild(document.createElement('div')),
  )
})