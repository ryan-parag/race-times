export default async (req,res) => {

  const {
    query: { driver },
  } = req

  const response = await fetch(`https://ergast.com/api/f1/drivers/${driver}.json`);
  const info = await response.json();
  const data = info.MRData.DriverTable.Drivers[0]

  const profile = {
    id: data.driverId,
    code: data.code,
    number: data.permanentNumber,
    firstName: data.givenName,
    lastName: data.familyName,
    dob: data.dateOfBirth,
    country: data.nationality
  }

  res.status(200).json({ profile });
}