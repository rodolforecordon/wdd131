document.addEventListener('DOMContentLoaded', () => {
  const activities = [
    { date: '2025-10-18', activity: 'Temple Visit', location: 'Lisbon Temple' },
    { date: '2025-11-08', activity: 'Service Project: Park Cleanup', location: 'City Park' },
    { date: '2025-11-22', activity: 'Sports Night: Futsal', location: 'Ward Building' },
    { date: '2025-12-13', activity: 'Christmas Caroling', location: 'Neighborhood' },
    { date: '2025-12-20', activity: 'End-of-Year Party', location: "Bishop's House" },
  ];

  // Convert date strings to Date objects for sorting
  const processedActivities = activities.map((act) => ({
    ...act,
    date: new Date(act.date),
  }));

  const tableBody = document.getElementById('activities-table');

  if (tableBody) {
    processedActivities.forEach((activity) => {
      const row = document.createElement('tr');

      const dateCell = document.createElement('td');
      dateCell.textContent = activity.date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC', // Ensure date is not shifted by local timezone
      });
      row.appendChild(dateCell);

      row.innerHTML += `<td>${activity.activity}</td><td>${activity.location}</td>`;

      tableBody.appendChild(row);
    });
  }
});
