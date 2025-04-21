import { Link } from 'react-router-dom'

export default function Home({ members }) {
  return (
    <main className="main-container">
      <h1>Gruppemedlemmer</h1>
      <div className="member-list">
        {members.map((member) => (
          <Link to="/daniel" key={member._id} className="member-link">
            <div className="member-card">
              <img src={member.imageUrl} alt={member.name} width="150" />
              <h2>{member.name}</h2>
              <p>{member.email}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
