import { Route, Routes } from 'react-router-dom'
import { defaultRoutes } from './routes'

const Navigation = () => {
  return (
    <Routes>
      {defaultRoutes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </Routes>
  )
}

export default Navigation
