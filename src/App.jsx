import React from 'react';
import './App.css';

function App() {
  const meetings = [
    {
      name: 'Martin SARL - Point étape',
      duration: '6 min',
      participants: 2,
      creator: 'Raphael',
      type: 'Fichier',
      status: 'Transcript prêt',
      date: '28 oct. 2024, 14:43',
    },
    {
      name: 'MotoZoom: Difficultés financières',
      duration: '5 min',
      participants: 2,
      creator: 'Raphael',
      type: 'Fichier',
      status: 'Compte rendu prêt',
      date: '28 oct. 2024, 14:43',
    },
    {
      name: 'Dupuis SAS - Ouverture procédure',
      duration: '3 min',
      participants: 1,
      creator: 'Raphael',
      type: 'Fichier',
      status: 'Transcript prêt',
      date: '28 oct. 2024, 14:09',
    },
    {
      name: 'Dupuis Estate - Analyse dossier',
      duration: '3 min',
      participants: 1,
      creator: 'Raphael',
      type: 'Fichier',
      status: 'Transcript prêt',
      date: '28 oct. 2024, 14:08',
    },
    {
      name: 'Cabinet Legrand - Succession Moreau',
      duration: '12 min',
      participants: 3,
      creator: 'Sophie',
      type: 'Fichier',
      status: 'En traitement',
      date: '28 oct. 2024, 13:55',
    },
    {
      name: 'SCI Rivoli - Assemblée générale',
      duration: '45 min',
      participants: 7,
      creator: 'Thomas',
      type: 'Enregistrement',
      status: 'En attente',
      date: '28 oct. 2024, 11:30',
    },
  ];

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="logo">SCRAR</div>
        <ul className="menu">
          <li><i className="icon"></i>Accueil</li>
          <li><i className="icon"></i>Nouvelle réunion</li>
          <li className="active"><i className="icon"></i>Gestion des réunions</li>
        </ul>
        <ul className="bottom-menu">
          <li><i className="icon"></i>Bien démarrer</li>
          <li><i className="icon"></i>Paramètres</li>
        </ul>
      </aside>
      <main className="main-content">
        <header className="header">
          <h1>Gestion des réunions</h1>
          <button className="new-meeting-button">+ Nouvelle Réunion</button>
          <div className="search-bar">
            <input type="search" placeholder="Rechercher une réunion..." />
          </div>
          <div className="user-profile">RP</div>
        </header>
        <section className="meetings-list">
          <nav className="meetings-nav">
            <a href="#" className="active">Toutes les réunions</a>
            <a href="#">Mes réunions</a>
            <a href="#">Partagées avec moi</a>
          </nav>
          <table className="meetings-table">
            <thead>
              <tr>
                <th>Participants</th>
                <th>Créé par</th>
                <th>Type</th>
                <th>Statut</th>
                <th>Date de la réunion</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {meetings.map((meeting, index) => (
                <tr key={index}>
                  <td>
                    {meeting.name}<br />
                    {meeting.duration} • {meeting.participants} participants
                  </td>
                  <td>{meeting.creator}</td>
                  <td>{meeting.type}</td>
                  <td>{meeting.status}</td>
                  <td>{meeting.date}</td>
                  <td>→</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default App;
