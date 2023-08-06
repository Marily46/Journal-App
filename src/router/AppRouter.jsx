
import { Route, Routes } from 'react-router-dom'
import { AucthRoute } from '../auth/routes/AucthRoute'
import { JournalRoutes } from '../journal/routes/JournalRoutes'

export const AppRouter = () => {
  return (
    <Routes>

        {/* Login y Registro */}
        <Route path="/auth/*" element={ <AucthRoute /> } />

        {/* JournalApp */}
        <Route path="/*" element={ <JournalRoutes /> } />

        
    </Routes>
    
  )
}
