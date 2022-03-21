export default async (req,res) => {

  const {
    query: { team },
  } = req

  const response = await fetch(`https://ergast.com/api/f1/constructors/${team}.json`);
  const info = await response.json();
  const data = info.MRData.ConstructorTable.Constructors[0]

  const d = new Date()
  const year = d.getFullYear()

  const activeResponse = await fetch(`https://ergast.com/api/f1/${year}/constructorStandings.json`);
  const activeStandings = await activeResponse.json();
  const activeData = activeStandings.MRData.StandingsTable.StandingsLists[0]

  const obj = activeData.ConstructorStandings.find(activeData => activeData.Constructor.constructorId === data.constructorId);

  const constructor = {
    id: data.constructorId,
    name: data.name,
    country: data.nationality,
    active: obj ? obj : false
  }

  res.status(200).json({ constructor });
}