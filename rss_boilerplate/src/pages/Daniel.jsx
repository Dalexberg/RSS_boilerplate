import './Daniel.css'

export default function Daniel({ members }) {
  const daniel = members[0]
  if (!daniel) return <p>Laster...</p>
  const sortedLogs = [...(daniel.logs || [])].sort((a, b) => {
    return new Date(b.date) - new Date(a.date) 
  })
  

  return (
    <main className="daniel-container">
      <div className="profile-wrapper">
        <img className="daniel-image" src={daniel.imageUrl} alt={daniel.name} />
        
        <div className="profile-info">
          <h1>
          🦇 {daniel.name} 🦇
            </h1>
          <p className="bio">{daniel.bio}</p>

          <div className="interests">
            <h3>Interesser</h3>
            <ul>
              {daniel.interests?.map((interest, idx) => (
                <li key={idx}>{interest}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <hr className="divider" />
      <h2>🩸 Loggføringer</h2>
<table className="logg-table">
  <thead>
    <tr>
      <th>Dato</th>
      <th>Navn</th>
      <th>Loggtekst</th>
      <th>Tid brukt</th>
    </tr>
  </thead>
  <tbody>
  {sortedLogs.map((log, index) => (
    <tr key={index}>
      <td>{new Date(log.date).toLocaleDateString()}</td>
      <td>{daniel.name}</td>
      <td>{log.entry}</td>
      <td>{log.timeUsed || '-'}</td>
    </tr>
  ))}
</tbody>
</table>

    </main>
  )
}
