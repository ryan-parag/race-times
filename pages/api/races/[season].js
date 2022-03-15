export default async (req,res) => {

  const {
    query: { season },
  } = req

  const response = await fetch(`https://ergast.com/api/f1/${season}.json`);
  const schedule = await response.json();
  const data = schedule.MRData.RaceTable

  const races = {
    season: data.season,
    races: []
  }

  data.Races.map(item => {
    const race = {
      name: item.raceName,
      track: item.Circuit.circuitName,
      race: item.round,
      date: item.date,
      time: item.time,
      country: item.Circuit.Location.country,
      city: item.Circuit.Location.locality,
      id: item.Circuit.circuitId
    }
    races.races.push(race)
  })

  res.status(200).json({ races });
}