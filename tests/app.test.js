const test = require('node:test');
const assert = require('node:assert/strict');
const { calculateDashboardMetrics, sprintOneData, statusTone } = require('../src/app.js');

test('calculates Sprint 1 dashboard metrics from operating data', () => {
  assert.deepEqual(calculateDashboardMetrics(sprintOneData), {
    confirmedTeams: 3,
    venueReadiness: 80,
    matchesScheduled: 3,
    openAlerts: 3
  });
});

test('derives status tone for common operations states', () => {
  assert.equal(statusTone('Verified'), 'positive');
  assert.equal(statusTone('Awaiting referee'), 'warning');
  assert.equal(statusTone('Draft'), 'neutral');
});

test('supports alternate tournament data sets', () => {
  const metrics = calculateDashboardMetrics({
    teams: [
      { status: 'Verified' },
      { status: 'Payment pending' }
    ],
    fixtures: [
      { title: 'Alpha vs Beta' },
      { title: 'Closing ceremony' }
    ],
    venueChecks: [true, false, false, true],
    alerts: ['Need scorer']
  });

  assert.equal(metrics.confirmedTeams, 1);
  assert.equal(metrics.venueReadiness, 50);
  assert.equal(metrics.matchesScheduled, 1);
  assert.equal(metrics.openAlerts, 1);
});
