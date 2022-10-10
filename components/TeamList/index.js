import React, { useState, useEffect } from 'react'
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import { Loading } from '@components/DataStates'
import Teams from './Teams'
import SeasonHeader from '@components/SeasonHeader'

const DriverList = () => {

  const checkSeason = () => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem("season")
    }
  }

  const d = new Date()
  const year = d.getFullYear()
  const [season, setSeason] = useState(checkSeason() === null ? year : checkSeason())

  const fetchRaces = (season) => {
    setSeason(season)
    sessionStorage.setItem("season", season);
  }

  const { data, error } = useSWR(`/api/standings/teams/${season}`, fetcher)

  useEffect(() => {

  },[season])

  return(
    <>
      <SeasonHeader selectSeason={fetchRaces} current={season}/>
      <div className="px-4 py-12 w-full md:w-3/4 lg:w-1/2">
        {
          data ? (
            <>
              <Teams data={data.standings} />
            </>
          )
          :
          (
            <Loading>
              <span className="text-sm">Loading...</span>
            </Loading>
          )
        }
      </div>
    </>
  )
}

export default DriverList