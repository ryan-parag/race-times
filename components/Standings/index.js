import React, { useState, useEffect } from 'react'
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import { Loading } from '@components/DataStates'
import TitleHeader from '@components/Standings/TitleHeader'
import Drivers from '@components/Standings/Drivers'
import Teams from '@components/Standings/Teams'
import Filters from '@components/Filters'

const Standings = () => {

  const d = new Date()
  const year = d.getFullYear()
  const [season, setSeason] = useState(year)

  const filters = ['Drivers', 'Teams']
  const [active, setActive] = useState(filters[0])

  const fetchRaces = (event) => {
    const value = event.target.value
    setSeason(value)
  }

  const { data, error } = useSWR(`/api/standings/${active.toLowerCase()}/${season}`, fetcher)

  useEffect(() => {

  },[season])

  return(
    <>
      <TitleHeader selectSeason={fetchRaces}/>
      {
        data ? (
          <>
            <Filters options={filters} active={active} change={setActive}/>
            {
              active === 'Drivers' ? (
                <Drivers data={data.standings} />
              )
              :
              (
                <Teams data={data.standings} />
              )
            }
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

export default Standings