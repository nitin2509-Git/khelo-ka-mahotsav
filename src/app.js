const sprintOneData = {
  modules: [
    {
      name: 'Team Registration',
      status: 'Live',
      owner: 'Growth Ops',
      description: 'Capture team profiles, player counts, sport categories, and verification status.'
    },
    {
      name: 'Fixture Builder',
      status: 'Pilot',
      owner: 'Tournament Desk',
      description: 'Publish day-one fixtures with court, time, opponent, and match-state visibility.'
    },
    {
      name: 'Venue Readiness',
      status: 'Live',
      owner: 'Ground Ops',
      description: 'Track court setup, equipment availability, first-aid, signage, and volunteer staffing.'
    },
    {
      name: 'Ops Alerts',
      status: 'Live',
      owner: 'Command Center',
      description: 'Highlight blocker-level issues so organizers can resolve them before match time.'
    }
  ],
  teams: [
    { name: 'Chennai Chargers', sport: 'Kabaddi', players: 12, status: 'Verified' },
    { name: 'Jaipur Javelins', sport: 'Athletics', players: 8, status: 'Documents pending' },
    { name: 'Pune Panthers', sport: 'Football', players: 16, status: 'Verified' },
    { name: 'Kochi Kings', sport: 'Volleyball', players: 10, status: 'Payment pending' },
    { name: 'Delhi Dynamos', sport: 'Basketball', players: 9, status: 'Verified' }
  ],
  fixtures: [
    { time: '09:00', title: 'Opening ceremony', venue: 'Main Arena', state: 'Ready' },
    { time: '10:00', title: 'Chennai Chargers vs Pune Panthers', venue: 'Court A', state: 'Lineups locked' },
    { time: '11:30', title: 'Delhi Dynamos vs Kochi Kings', venue: 'Court B', state: 'Awaiting referee' },
    { time: '13:00', title: 'Athletics heats', venue: 'Track 1', state: 'Equipment check' }
  ],
  venueChecks: [true, true, true, false, true],
  alerts: [
    'Assign backup referee for Court B by 10:45.',
    'Collect missing ID proofs from Jaipur Javelins.',
    'Confirm volleyball net height after warmups.'
  ]
};

function calculateDashboardMetrics(data = sprintOneData) {
  const confirmedTeams = data.teams.filter((team) => team.status === 'Verified').length;
  const venueReadiness = Math.round((data.venueChecks.filter(Boolean).length / data.venueChecks.length) * 100);

  return {
    confirmedTeams,
    venueReadiness,
    matchesScheduled: data.fixtures.filter((fixture) => fixture.title.includes(' vs ') || fixture.title.includes('heats')).length,
    openAlerts: data.alerts.length
  };
}

function statusTone(status) {
  const normalized = status.toLowerCase();
  if (normalized.includes('verified') || normalized.includes('ready') || normalized.includes('live')) return 'positive';
  if (normalized.includes('pending') || normalized.includes('awaiting') || normalized.includes('check')) return 'warning';
  return 'neutral';
}

function createBadge(label) {
  const badge = document.createElement('span');
  badge.className = `badge badge--${statusTone(label)}`;
  badge.textContent = label;
  return badge;
}

function renderDashboard(data = sprintOneData, root = document) {
  const metrics = calculateDashboardMetrics(data);
  root.getElementById('metricTeams').textContent = metrics.confirmedTeams;
  root.getElementById('metricReadiness').textContent = `${metrics.venueReadiness}%`;
  root.getElementById('metricMatches').textContent = metrics.matchesScheduled;
  root.getElementById('metricAlerts').textContent = metrics.openAlerts;

  const moduleGrid = root.getElementById('moduleGrid');
  moduleGrid.innerHTML = '';
  data.modules.forEach((module) => {
    const card = document.createElement('article');
    card.className = 'module-card';
    card.innerHTML = `<div class="module-card__top"><h3>${module.name}</h3></div><p>${module.description}</p><small>Owner: ${module.owner}</small>`;
    card.querySelector('.module-card__top').append(createBadge(module.status));
    moduleGrid.append(card);
  });

  const fixtureTimeline = root.getElementById('fixtureTimeline');
  fixtureTimeline.innerHTML = '';
  data.fixtures.forEach((fixture) => {
    const item = document.createElement('article');
    item.className = 'timeline__item';
    item.innerHTML = `<time>${fixture.time}</time><div><h3>${fixture.title}</h3><p>${fixture.venue}</p></div>`;
    item.querySelector('div').append(createBadge(fixture.state));
    fixtureTimeline.append(item);
  });

  const opsBriefing = root.getElementById('opsBriefing');
  opsBriefing.innerHTML = '';
  data.alerts.forEach((alert) => {
    const item = document.createElement('li');
    item.textContent = alert;
    opsBriefing.append(item);
  });

  const teamRows = root.getElementById('teamRows');
  teamRows.innerHTML = '';
  data.teams.forEach((team) => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${team.name}</td><td>${team.sport}</td><td>${team.players}</td><td></td>`;
    row.lastElementChild.append(createBadge(team.status));
    teamRows.append(row);
  });
}

if (typeof document !== 'undefined') {
  renderDashboard();
}

if (typeof module !== 'undefined') {
  module.exports = { calculateDashboardMetrics, statusTone, sprintOneData };
}
