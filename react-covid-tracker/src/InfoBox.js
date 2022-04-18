import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import './InfoBox.css'

function InfoBox({ title, active, isRed, cases, total, ...props }) {
  console.log('cases lala', cases)
  return (
    <Card
      className={`infoBox ${active && 'infoBox--selected'} ${
        isRed && 'infoBox--red'
      }`}
      onClick={props.onClick}
    >
      <CardContent>
        {/* title */}
        <Typography color='textSecondary' className='infoBox__title'>
          {title}
        </Typography>

        {/* number of cases */}
        <h2 className={`infoBox__cases ${!isRed && 'infoBox__cases--green'}`}>
          {cases}
        </h2>

        {/* total number of cases */}
        <Typography color='textSecondary' className='infoBox__total'>
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  )
}

export default InfoBox
