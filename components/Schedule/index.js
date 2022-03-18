import React, { useState, useEffect } from 'react'
import TitleHeader from '@components/Schedule/TitleHeader'
import Filters from '@components/Filters'
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import Events from '@components/Schedule/Events'
import { Loading } from '@components/DataStates'

const Schedule = () => {

  const filters = ['Upcoming', 'Completed', 'All']
  const [active, setActive] = useState(filters[0])

  const d = new Date()
  const year = d.getFullYear()
  const [season, setSeason] = useState(year)

  const fetchRaces = (event) => {
    const value = event.target.value
    setSeason(value)
  }

  const { data, error } = useSWR(`/api/races/${season}`, fetcher)

  useEffect(() => {

  },[season])

  return(
    <>
      <TitleHeader selectSeason={fetchRaces}/>
      <Filters options={filters} active={active} change={setActive}/>
      {
        data ? (
          <Events data={data.races.races} filter={active} season={season} />
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