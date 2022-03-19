import React, { useState, useEffect } from 'react'
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import { Loading } from '@components/DataStates'
import TitleHeader from '@components/Standings/TitleHeader'
import Drivers from '@components/Standings/Drivers'

const Standings = () => {

  const d = new Date()
  const year = d.getFullYear()
  const [season, setSeason] = useState(year)

  const { data, error } = useSWR(`/api/standings/${season}`, fetcher)

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
          <Drivers data={data.standings} />
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

export default Standings