import React, { useState, useEffect } from 'react'
import TitleHeader from '@components/Schedule/TitleHeader'
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import Events from '@components/Schedule/Events'
import { Loading } from '@components/DataStates'

const Schedule = () => {

  const d = new Date()
  const year = d.getFullYear()
  const [season, setSeason] = useState(year)

  const { data, error } = useSWR(`/api/races/${season}`, fetcher)

  const fetchRaces = (event) => {
    const value = event.target.value
    setSeason(value)
  }

  useEffect(() => {

  },[season])

  return(
    <>
      <TitleHeader selectSeason={fetchRaces}/>
      {
        data ? (
          <>
            <Events data={data.races} season={season} />
          </>
        )
        :
        (
          <Loading>
            <span className="text-sm">Loading...</span>
          </Loading>
        )
      }
    </>
  )
}

export default Schedule