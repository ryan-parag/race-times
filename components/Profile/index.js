import React from 'react'
import useSWR from 'swr'
import fetcher from '@utils/fetcher'
import moment from 'moment'
import Tag from '@components/Tag'
import Flag from '@components/Flag'
import Link from 'next/link'
import { Loading } from '@components/DataStates'

const ListItem = ({border, label, children}) => {
  return(
    <div className={`flex items-center justify-between py-2 px-4 ${border && 'border-b border-gray-100 dark:border-gray-600'}`}>
      <span>{label}</span>
      <div className="font-bold">{children}</div>
    </div>
  )
}

export const Driver = ({id}) => {

  const { data, error } = useSWR(`/api/drivers/${id}`, fetcher)

  return(
    <>
      {
        data ? (
          <>
            <div className="text-sm text-mono-black-60 dark:text-mono-white-60 mb-4">
              <Link href={'/standings'}>
                <a className="hover:underline">Standings</a>
              </Link>
              <span className="mx-1">/</span>
              <span className="font-bold text-black dark:text-white">{data.profile.firstName} {data.profile.lastName}</span>
            </div>
            <div className="flex flex-col md:flex-row items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl md:text-5xl font-black">{data.profile.firstName} {data.profile.lastName}</h1>
                <span className="text-sm text-mono-black-60 dark:text-mono-white-60">Born {moment(data.profile.dob).format('LL')}</span>
              </div>
              <div className="inline-flex items-center pt-4">
                <Tag ghost>{data.profile.number}</Tag>
                <Tag ml={'1'} mr={'1'} ghost>{data.profile.code}</Tag>
                <Flag nation={data.profile.country}/>
              </div>
            </div>
            <div className="rounded-md border border-gray-100 dark:border-gray-600">
              <ListItem label="Status" border>
                {
                  data.profile.active ? (
                    <Tag ghost type="success">Active</Tag>
                  )
                  :
                  (
                    <Tag type="secondary">Inactive</Tag>
                  )
                }
              </ListItem>
              {
                data.profile.active && (
                  <>
                    <ListItem label="Current Team" border>
                      {
                        data.profile.active.Constructors.map(team => (
                          <span className="ml-1" key={team.constructorId}>{team.name}</span>
                        ))
                      }
                    </ListItem>
                    <ListItem label="Current Rank" border>
                      {data.profile.active.position}
                    </ListItem>
                  </>
                )
              }
              <ListItem label="Nationality">
                <div className="inline-flex items-center">
                  <Flag nation={data.profile.country}/>
                  <span className="ml-1">{data.profile.country}</span>
                </div>
              </ListItem>
            </div>
          </>
        )
        :
        <Loading>
          Loading...
        </Loading>
      }
    </>
  )
}

export const Team = ({id}) => {

  const { data, error } = useSWR(`/api/teams/${id}`, fetcher)

  return(
    <>
      {
        data ? (
          <>
            <div className="text-sm text-mono-black-60 dark:text-mono-white-60 mb-4">
              <Link href={'/standings'}>
                <a className="hover:underline">Standings</a>
              </Link>
              <span className="mx-1">/</span>
              <span className="font-bold text-black dark:text-white">{data.constructor.name}</span>
            </div>
            <div className="mb-4">
              <img
                src={`/static/teams/${data.constructor.id}.png`}
                className="bg-white p-2 w-14 h-14 overflow-hidden rounded-full"
                onError={(e) => (e.currentTarget.src = '/static/teams/default.png')}
              />
            </div>
            <div className="flex flex-col md:flex-row items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl md:text-5xl font-black">{data.constructor.name}</h1>
              </div>
              <div className="inline-flex items-center pt-4">
                <Flag nation={data.constructor.country}/>
              </div>
            </div>
            <div className="rounded-md border border-gray-100 dark:border-gray-600">
              <ListItem label="Status" border>
                {
                  data.constructor.active ? (
                    <Tag ghost type="success">Active</Tag>
                  )
                  :
                  (
                    <Tag type="secondary">Inactive</Tag>
                  )
                }
              </ListItem>
              {
                data.constructor.active && (
                  <>
                    <ListItem label="Current Rank" border>
                      {data.constructor.active.position}
                    </ListItem>
                  </>
                )
              }
              <ListItem label="Nationality">
                <div className="inline-flex items-center">
                  <Flag nation={data.constructor.country}/>
                  <span className="ml-1">{data.constructor.country}</span>
                </div>
              </ListItem>
            </div>
          </>
        )
        :
        <Loading>
          Loading...
        </Loading>
      }
    </>
  )
}