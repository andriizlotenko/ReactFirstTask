import Profile from "./components/Profile";
import "./App.css";

function App() {
  const users = [
    { name: "Semen Petlyrik", role: "Frontend Developer" },
    { name: "Vovka Monopoliya", role: "Backend Developer" },
    { name: "Yaroslav Grivna", role: "UI/UX Designer" },
    { name: "DJ Aleg", role: "Project Manager" },
    { name: "Geralt Witcher", role: "QA Engineer" },
    { name: "Fiona Shrek", role: "DevOps Engineer" },
  ];

  return (
    <div className="app">
      <h1>User Profiles</h1>
      <div className="profiles-container">
        {users.map((user, index) => (
          <Profile key={index} name={user.name} role={user.role} />
        ))}
      </div>
    </div>
  );
}

export default App;
