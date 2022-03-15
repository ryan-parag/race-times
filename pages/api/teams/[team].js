export default async (req,res) => {

  const {
    query: { team },
  } = req

  const response = await fetch(`https://ergast.com/api/f1/constructors/${team}.json`);
  const info = await response.json();
  const data = info.MRData.ConstructorTable.Constructors[0]

  const constructor = {
    id: data.constructorId,
    name: data.name
  }

  res.status(200).json({ constructor });
}