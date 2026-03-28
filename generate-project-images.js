const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'project-images');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const projects = [
  {
    file: 'lottery-cms.svg',
    title: 'Lottery Office CMS',
    accent: '#3B82F6',
    type: 'cms',
    items: ['Dashboard', 'Results', 'Prizes', 'Reports'],
    stats: [
      { label: 'Active Users', value: '12.5K' },
      { label: 'Total Draws', value: '2,340' },
      { label: 'Revenue', value: '฿84M' },
    ],
  },
  {
    file: 'supermarket-cms.svg',
    title: 'Supermarket CMS',
    accent: '#10B981',
    type: 'cms',
    items: ['Products', 'Categories', 'Promotions', 'Inventory'],
    stats: [
      { label: 'Products', value: '45,200' },
      { label: 'Orders', value: '8,720' },
      { label: 'Revenue', value: '฿12M' },
    ],
  },
  {
    file: 'logistic-tracking.svg',
    title: 'Logistic Tracking',
    accent: '#F59E0B',
    type: 'tracking',
    items: ['Shipments', 'Routes', 'Drivers', 'Fleet'],
    stats: [
      { label: 'Active Shipments', value: '3,842' },
      { label: 'Delivered', value: '28,500' },
      { label: 'On Time', value: '98.2%' },
    ],
  },
  {
    file: 'meeting-management.svg',
    title: 'Meeting Management',
    accent: '#8B5CF6',
    type: 'cms',
    items: ['Agendas', 'Minutes', 'Proposals', 'Reports'],
    stats: [
      { label: 'Meetings', value: '1,245' },
      { label: 'Agenda Items', value: '5,680' },
      { label: 'Documents', value: '3,420' },
    ],
  },
  {
    file: 'loan-management.svg',
    title: 'Loan Management',
    accent: '#EF4444',
    type: 'finance',
    items: ['Applications', 'Customers', 'Approvals', 'Reports'],
    stats: [
      { label: 'Active Loans', value: '4,580' },
      { label: 'Approved', value: '12,300' },
      { label: 'Portfolio', value: '฿2.1B' },
    ],
  },
  {
    file: 'pos-system.svg',
    title: 'Point of Sale',
    accent: '#06B6D4',
    type: 'pos',
    items: ['Orders', 'Menu', 'Tables', 'Payments'],
    stats: [
      { label: 'Today Sales', value: '฿284K' },
      { label: 'Orders', value: '1,420' },
      { label: 'Avg Ticket', value: '฿200' },
    ],
  },
  {
    file: 'trading-system.svg',
    title: 'Smart Trading',
    accent: '#22C55E',
    type: 'finance',
    items: ['Portfolio', 'Market', 'Orders', 'Research'],
    stats: [
      { label: 'Market Cap', value: '฿18.4T' },
      { label: 'Volume', value: '฿52B' },
      { label: 'SET Index', value: '1,428' },
    ],
  },
  {
    file: 'cash-deposit.svg',
    title: 'Cash Deposit',
    accent: '#2563EB',
    type: 'finance',
    items: ['Deposits', 'Withdrawals', 'Accounts', 'History'],
    stats: [
      { label: 'Transactions', value: '84,200' },
      { label: 'Volume', value: '฿450M' },
      { label: 'Success Rate', value: '99.9%' },
    ],
  },
];

function generateSVG(p) {
  const w = 800, h = 500;
  const sidebarW = 180;
  
  // Generate chart bars
  const barHeights = [65, 85, 45, 95, 70, 55, 80, 60, 90, 50, 75, 88];
  const barWidth = 36;
  const chartX = sidebarW + 40;
  const chartY = 280;
  const chartH = 120;
  
  const bars = barHeights.map((h, i) => {
    const x = chartX + i * (barWidth + 8);
    const barH = (h / 100) * chartH;
    const y = chartY + chartH - barH;
    const opacity = 0.3 + (h / 100) * 0.7;
    return `<rect x="${x}" y="${y}" width="${barWidth}" height="${barH}" rx="4" fill="${p.accent}" opacity="${opacity}" />`;
  }).join('\n    ');

  // Stat cards
  const statCards = p.stats.map((s, i) => {
    const x = sidebarW + 40 + i * 190;
    return `
    <rect x="${x}" y="80" width="170" height="80" rx="10" fill="white" stroke="#E5E7EB" stroke-width="1"/>
    <text x="${x + 16}" y="108" font-family="system-ui,sans-serif" font-size="11" fill="#9CA3AF" letter-spacing="0.5">${s.label.toUpperCase()}</text>
    <text x="${x + 16}" y="140" font-family="system-ui,sans-serif" font-size="26" font-weight="700" fill="#1F2937">${s.value}</text>`;
  }).join('');

  // Sidebar items
  const sideItems = p.items.map((item, i) => {
    const y = 140 + i * 44;
    const isActive = i === 0;
    return `
    ${isActive ? `<rect x="0" y="${y - 8}" width="${sidebarW}" height="36" rx="0" fill="${p.accent}" opacity="0.1"/>
    <rect x="0" y="${y - 8}" width="3" height="36" fill="${p.accent}"/>` : ''}
    <text x="44" y="${y + 13}" font-family="system-ui,sans-serif" font-size="13" font-weight="${isActive ? '600' : '400'}" fill="${isActive ? p.accent : '#6B7280'}">${item}</text>
    <rect x="16" y="${y}" width="16" height="16" rx="3" fill="${isActive ? p.accent : '#D1D5DB'}" opacity="${isActive ? 0.2 : 0.4}"/>`;
  }).join('');

  // Table rows
  const tableRows = [1,2,3].map((_, i) => {
    const y = 430 + i * 32;
    return `
    <rect x="${sidebarW + 40}" y="${y}" width="${w - sidebarW - 80}" height="28" rx="4" fill="${i % 2 === 0 ? '#F9FAFB' : 'white'}"/>
    <rect x="${sidebarW + 56}" y="${y + 8}" width="80" height="12" rx="3" fill="#E5E7EB"/>
    <rect x="${sidebarW + 200}" y="${y + 8}" width="60" height="12" rx="3" fill="#E5E7EB"/>
    <rect x="${sidebarW + 350}" y="${y + 8}" width="100" height="12" rx="3" fill="#E5E7EB"/>
    <rect x="${sidebarW + 520}" y="${y + 8}" width="40" height="12" rx="6" fill="${p.accent}" opacity="0.15"/>`;
  }).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
  <defs>
    <linearGradient id="sidebar-${p.file}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1E293B"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="${w}" height="${h}" fill="#F8FAFC" rx="12"/>
  
  <!-- Sidebar -->
  <rect width="${sidebarW}" height="${h}" fill="url(#sidebar-${p.file})" rx="12"/>
  <rect x="${sidebarW - 12}" width="12" height="${h}" fill="url(#sidebar-${p.file})"/>
  
  <!-- Logo area -->
  <rect x="16" y="20" width="36" height="36" rx="8" fill="${p.accent}"/>
  <text x="62" y="44" font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="white">${p.title.split(' ')[0]}</text>
  <text x="62" y="60" font-family="system-ui,sans-serif" font-size="10" fill="#94A3B8">${p.title.split(' ').slice(1).join(' ')}</text>
  
  <!-- Sidebar divider -->
  <line x1="16" y1="90" x2="${sidebarW - 16}" y2="90" stroke="#334155" stroke-width="1"/>
  <text x="16" y="118" font-family="system-ui,sans-serif" font-size="10" fill="#64748B" letter-spacing="1">MENU</text>
  
  ${sideItems}
  
  <!-- Top bar -->
  <rect x="${sidebarW}" y="0" width="${w - sidebarW}" height="56" fill="white" rx="0"/>
  <rect x="${sidebarW}" y="55" width="${w - sidebarW}" height="1" fill="#E5E7EB"/>
  <text x="${sidebarW + 24}" y="34" font-family="system-ui,sans-serif" font-size="16" font-weight="600" fill="#1F2937">${p.title}</text>
  
  <!-- Search bar -->
  <rect x="${w - 220}" y="16" width="180" height="28" rx="6" fill="#F1F5F9" stroke="#E2E8F0" stroke-width="1"/>
  <text x="${w - 206}" y="34" font-family="system-ui,sans-serif" font-size="11" fill="#94A3B8">Search...</text>
  
  <!-- Avatar -->
  <circle cx="${w - 30}" cy="28" r="14" fill="${p.accent}" opacity="0.2"/>
  <circle cx="${w - 30}" cy="24" r="5" fill="${p.accent}" opacity="0.5"/>
  <ellipse cx="${w - 30}" cy="34" rx="8" ry="5" fill="${p.accent}" opacity="0.3"/>
  
  <!-- Stat cards -->
  ${statCards}
  
  <!-- Chart section label -->
  <text x="${sidebarW + 40}" y="200" font-family="system-ui,sans-serif" font-size="14" font-weight="600" fill="#1F2937">Overview</text>
  <text x="${sidebarW + 40}" y="218" font-family="system-ui,sans-serif" font-size="11" fill="#9CA3AF">Monthly performance</text>
  
  <!-- Chart baseline -->
  <line x1="${chartX}" y1="${chartY + chartH}" x2="${chartX + 12 * (barWidth + 8)}" y2="${chartY + chartH}" stroke="#E5E7EB" stroke-width="1"/>
  
  <!-- Bars -->
  ${bars}
  
  <!-- Table section -->
  <text x="${sidebarW + 40}" y="420" font-family="system-ui,sans-serif" font-size="13" font-weight="600" fill="#1F2937">Recent Activity</text>
  ${tableRows}
</svg>`;
}

projects.forEach(p => {
  const svg = generateSVG(p);
  fs.writeFileSync(path.join(dir, p.file), svg);
  console.log(`Created ${p.file}`);
});

console.log('Done!');
