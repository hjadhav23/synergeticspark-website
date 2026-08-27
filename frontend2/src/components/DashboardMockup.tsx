const metrics = [
  { label: "Cloud Infrastructure", value: 96 },
  { label: "Software Delivery", value: 94 },
  { label: "Support Services", value: 98 },
];

export default function DashboardMockup() {
  return (
    <div className="dashboard-mockup">
      <div className="dashboard-header">
        <div className="dashboard-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span className="dashboard-title">Enterprise Operations Dashboard</span>
      </div>

      <div className="dashboard-body">
        {metrics.map((m) => (
          <div className="dashboard-metric" key={m.label}>
            <div className="dashboard-metric-top">
              <span>{m.label}</span>
              <span>{m.value}%</span>
            </div>
            <div className="dashboard-bar">
              <div className="dashboard-bar-fill" style={{ width: `${m.value}%` }} />
            </div>
          </div>
        ))}

        <div className="dashboard-badges">
          <div className="dashboard-badge">
            <span className="dashboard-badge-value">99.9%</span>
            <span className="dashboard-badge-label">Uptime</span>
          </div>
          <div className="dashboard-badge">
            <span className="dashboard-badge-value">24/7</span>
            <span className="dashboard-badge-label">Support</span>
          </div>
        </div>
      </div>
    </div>
  );
}
