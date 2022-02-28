import "./App.css"
import Address from "./component/profile/Address";
import FullName from "./component/profile/FullName";
import ProfilePhoto from "./component/profile/ProfilePhoto"

function App() {
  return(
    <div className = "App">
      <FullName />
    <ProfilePhoto />
    <Address/>

    </div>

  )
}export default App ;