import Layout from '@components/Layout'

const Item = ({ label, bg }) => {
  return(
    <div className="flex py-2 items-center">
      <div className={`h-6 w-6 rounded-full mr-2 ${bg}`}/>
      <span className="text-sm">{label}</span>
    </div>
  )
}

const Home = () => {

  const scale =['0', '100', '200', '300', '400', '500', '600', '700', '800', '900']

  return (
    <Layout>
      <div className="p-4">
        <select className="tag py-0.5 px-3 select" placeholder="Select...">
          <option selected value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
      <div
        className={'grid grid-cols-5 gap-4 w-full'}
      >
        <div>
          <h5 className="text-xl font-bold mb-4">Gray</h5>
          <Item label={`gray 0`} bg={'bg-gray-0'}/>
          <Item label={`gray 100`} bg={'bg-gray-100'}/>
          <Item label={`gray 200`} bg={'bg-gray-200'}/>
          <Item label={`gray 300`} bg={'bg-gray-300'}/>
          <Item label={`gray 400`} bg={'bg-gray-400'}/>
          <Item label={`gray 500`} bg={'bg-gray-500'}/>
          <Item label={`gray 600`} bg={'bg-gray-600'}/>
          <Item label={`gray 700`} bg={'bg-gray-700'}/>
          <Item label={`gray 800`} bg={'bg-gray-800'}/>
          <Item label={`gray 900`} bg={'bg-gray-900'}/>
        </div>
        <div>
          <h5 className="text-xl font-bold mb-4">Primary</h5>
          <Item label={`primary 0`} bg={'bg-primary-0'}/>
          <Item label={`primary 100`} bg={'bg-primary-100'}/>
          <Item label={`primary 200`} bg={'bg-primary-200'}/>
          <Item label={`primary 300`} bg={'bg-primary-300'}/>
          <Item label={`primary 400`} bg={'bg-primary-400'}/>
          <Item label={`primary 500`} bg={'bg-primary-500'}/>
          <Item label={`primary 600`} bg={'bg-primary-600'}/>
          <Item label={`primary 700`} bg={'bg-primary-700'}/>
          <Item label={`primary 800`} bg={'bg-primary-800'}/>
          <Item label={`primary 900`} bg={'bg-primary-900'}/>
        </div>
        <div>
          <h5 className="text-xl font-bold mb-4">Success</h5>
          <Item label={`success 0`} bg={'bg-success-0'}/>
          <Item label={`success 100`} bg={'bg-success-100'}/>
          <Item label={`success 200`} bg={'bg-success-200'}/>
          <Item label={`success 300`} bg={'bg-success-300'}/>
          <Item label={`success 400`} bg={'bg-success-400'}/>
          <Item label={`success 500`} bg={'bg-success-500'}/>
          <Item label={`success 600`} bg={'bg-success-600'}/>
          <Item label={`success 700`} bg={'bg-success-700'}/>
          <Item label={`success 800`} bg={'bg-success-800'}/>
          <Item label={`success 900`} bg={'bg-success-900'}/>
        </div>
        <div>
          <h5 className="text-xl font-bold mb-4">Warning</h5>
          <Item label={`warning 0`} bg={'bg-warning-0'}/>
          <Item label={`warning 100`} bg={'bg-warning-100'}/>
          <Item label={`warning 200`} bg={'bg-warning-200'}/>
          <Item label={`warning 300`} bg={'bg-warning-300'}/>
          <Item label={`warning 400`} bg={'bg-warning-400'}/>
          <Item label={`warning 500`} bg={'bg-warning-500'}/>
          <Item label={`warning 600`} bg={'bg-warning-600'}/>
          <Item label={`warning 700`} bg={'bg-warning-700'}/>
          <Item label={`warning 800`} bg={'bg-warning-800'}/>
          <Item label={`warning 900`} bg={'bg-warning-900'}/>
        </div>
        <div>
          <h5 className="text-xl font-bold mb-4">Info</h5>
          <Item label={`info 0`} bg={'bg-info-0'}/>
          <Item label={`info 100`} bg={'bg-info-100'}/>
          <Item label={`info 200`} bg={'bg-info-200'}/>
          <Item label={`info 300`} bg={'bg-info-300'}/>
          <Item label={`info 400`} bg={'bg-info-400'}/>
          <Item label={`info 500`} bg={'bg-info-500'}/>
          <Item label={`info 600`} bg={'bg-info-600'}/>
          <Item label={`info 700`} bg={'bg-info-700'}/>
          <Item label={`info 800`} bg={'bg-info-800'}/>
          <Item label={`info 900`} bg={'bg-info-900'}/>
        </div>
      </div>
    </Layout>
  )
}

export default Home
