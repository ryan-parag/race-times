export default async (req,res) => {

  const response = await fetch(`https://ergast.com/api/f1/seasons.json?limit=100`);
  const results = await response.json();
  const data = results.MRData.SeasonTable

  const seasons = []

  data.Seasons.map(item => {

    seasons.push(item.season)
  })

  res.status(200).json({ seasons });
}