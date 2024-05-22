import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'

export default function Chart({ coinData }) {
  const [timeData, setTimeData] = useState([])
  const [priceData, setPriceData] = useState([])

  useEffect(() => {
    const times = []
    const prices = []

    coinData.map((coin) => {
      let h = new Date(coin[0]).getHours()
      let m = new Date(coin[0]).getMinutes()
      let d = new Date(coin[0]).getDate()
      let month = new Date(coin[0]).getMonth()+1
      let y = new Date(coin[0]).getFullYear()
      h = (h < 10) ? '0' + h : h;
      m = (m < 10) ? '0' + m : m;
      d = (d < 10) ? '0' + d : d;
      month = (month < 10) ? '0' + month : month;
      const convertedTime = `${d}/${month}/${y} ${h}:${m}`;
      times.push(convertedTime)
      prices.push(coin[1])
    })
    setTimeData(times)
    setPriceData(prices)
  })


  return (
    <div>
      <Line
        data={{
          labels: timeData,
          datasets: [
            {

              label: 'USD',
              data: priceData,
              borderColor: ['rgb(0, 0, 255)']
            }
          ],
        }}
        height={450}
        width={1000}
      />
    </div>
  )
}