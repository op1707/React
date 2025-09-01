import Sidebar from './common-components/Sidebar'
import Header from './common-components/Header'
import AppointmentSection from './screens/Appointments/ApointmentCardSection'
import { AppointBodySection } from './screens/Appointments/AppoinmentBodySection'
function App() {

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header userName="Vendor" userRole="Admin" />
        
        {/* Main Content */}
        <div className="flex-1 overflow-auto bg-gray-50">
          <AppointBodySection/>
          <AppointmentSection />
        </div>
      </div>
    </div>
  )
}

export default App
