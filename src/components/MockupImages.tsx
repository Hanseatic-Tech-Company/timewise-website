
import React, { useEffect } from 'react';

const createTimeTrackingMockup = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  // Set canvas dimensions
  canvas.width = 800;
  canvas.height = 500;
  
  // Background
  ctx.fillStyle = '#f8f9fa';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Header
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, 60);
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, 60);
  ctx.lineTo(canvas.width, 60);
  ctx.stroke();
  
  // Logo area
  ctx.fillStyle = '#3c9158';
  ctx.font = 'bold 18px Arial';
  ctx.fillText('Timewise', 20, 35);
  
  // Navigation - simplified wireframe style
  ctx.strokeStyle = '#e2e8f0';
  const navItems = ['Dashboard', 'Time Tracking', 'Vacations', 'Reports', 'Settings'];
  navItems.forEach((item, i) => {
    const x = 150 + i * 100;
    const width = 80;
    ctx.strokeRect(x, 20, width, 20);
    
    ctx.fillStyle = '#475569';
    ctx.font = '12px Arial';
    ctx.fillText(item, x + 5, 35);
  });
  
  // Sidebar
  ctx.fillStyle = '#f9fafb';
  ctx.fillRect(0, 60, 200, canvas.height - 60);
  ctx.strokeStyle = '#e2e8f0';
  ctx.beginPath();
  ctx.moveTo(200, 60);
  ctx.lineTo(200, canvas.height);
  ctx.stroke();
  
  // Sidebar menu items - wireframe style
  const menuItems = ['My Tasks', 'Time Entries', 'Request Leave', 'Team Overview', 'Reports'];
  menuItems.forEach((item, i) => {
    const y = 90 + i * 40;
    ctx.strokeStyle = '#e2e8f0';
    ctx.strokeRect(20, y - 15, 160, 30);
    
    ctx.fillStyle = '#475569';
    ctx.font = '12px Arial';
    ctx.fillText(item, 30, y);
  });
  
  // Main content - Time tracking widget
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(220, 80, 560, 150);
  ctx.strokeStyle = '#d1d5db';
  ctx.lineWidth = 1;
  ctx.strokeRect(220, 80, 560, 150);
  
  // Time tracking header
  ctx.fillStyle = '#1e293b';
  ctx.font = 'bold 14px Arial';
  ctx.fillText('Today\'s Time Tracking', 240, 110);
  
  // Timer - wireframe style
  ctx.strokeStyle = '#d1d5db';
  ctx.strokeRect(240, 130, 120, 40);
  ctx.font = 'bold 20px Arial';
  ctx.fillStyle = '#3c9158';
  ctx.fillText('07:42:15', 260, 158);
  
  // Timer controls - wireframe style
  ctx.strokeStyle = '#3c9158';
  ctx.strokeRect(380, 130, 40, 40);
  
  ctx.fillStyle = '#3c9158';
  ctx.beginPath();
  ctx.moveTo(395, 140);
  ctx.lineTo(395, 160);
  ctx.lineTo(405, 150);
  ctx.fill();
  
  // Task info - wireframe style
  ctx.strokeStyle = '#d1d5db';
  ctx.strokeRect(440, 130, 320, 40);
  ctx.fillStyle = '#475569';
  ctx.font = '12px Arial';
  ctx.fillText('Current task: Website development', 450, 150);
  ctx.fillText('Started at: 09:15 AM', 450, 165);
  
  // Recent time entries
  ctx.fillStyle = '#1e293b';
  ctx.font = 'bold 14px Arial';
  ctx.fillText('Recent Time Entries', 240, 260);
  
  // Table headers - wireframe style
  ctx.strokeStyle = '#d1d5db';
  ctx.strokeRect(240, 270, 540, 30);
  
  // Table headers
  ctx.fillStyle = '#64748b';
  ctx.font = '12px Arial';
  ctx.fillText('Task', 260, 290);
  ctx.fillText('Duration', 440, 290);
  ctx.fillText('Date', 540, 290);
  
  // Table rows - wireframe style
  const entries = [
    { task: 'UI Design', duration: '2h 15m', date: 'Today' },
    { task: 'Client Meeting', duration: '1h 30m', date: 'Today' },
    { task: 'Backend Development', duration: '4h 20m', date: 'Yesterday' },
    { task: 'Documentation', duration: '1h 45m', date: 'Yesterday' }
  ];
  
  entries.forEach((entry, i) => {
    const y = 300 + i * 40;
    ctx.strokeStyle = '#d1d5db';
    ctx.strokeRect(240, y, 540, 40);
    
    ctx.fillStyle = '#475569';
    ctx.font = '12px Arial';
    ctx.fillText(entry.task, 260, y + 25);
    ctx.fillText(entry.duration, 440, y + 25);
    ctx.fillText(entry.date, 540, y + 25);
  });
};

const createVacationMockup = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  // Set canvas dimensions
  canvas.width = 800;
  canvas.height = 500;
  
  // Background
  ctx.fillStyle = '#f8f9fa';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Header
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, 60);
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, 60);
  ctx.lineTo(canvas.width, 60);
  ctx.stroke();
  
  // Calendar header - wireframe style
  ctx.strokeStyle = '#d1d5db';
  ctx.strokeRect(50, 80, 700, 60);
  
  // Month navigation
  ctx.fillStyle = '#1e293b';
  ctx.font = 'bold 16px Arial';
  ctx.fillText('July 2023', 365, 115);
  
  // Calendar grid
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const cellWidth = 100;
  const cellHeight = 80;
  
  // Draw day headers
  ctx.fillStyle = '#64748b';
  ctx.font = '12px Arial';
  days.forEach((day, i) => {
    ctx.fillText(day, 50 + i * cellWidth + cellWidth / 2 - 15, 170);
  });
  
  // Draw calendar grid - wireframe style
  for (let week = 0; week < 5; week++) {
    for (let day = 0; day < 7; day++) {
      const x = 50 + day * cellWidth;
      const y = 180 + week * cellHeight;
      
      // Cell background - wireframe style
      ctx.strokeStyle = '#d1d5db';
      ctx.strokeRect(x, y, cellWidth, cellHeight);
      
      // Date number
      const date = week * 7 + day - 5; // Offset to start from 1st of month
      if (date > 0 && date <= 31) {
        ctx.fillStyle = '#1e293b';
        ctx.font = '12px Arial';
        ctx.fillText(date.toString(), x + 10, y + 20);
      }
      
      // Highlight vacation days (for example) - wireframe style
      if ((date >= 15 && date <= 19) || date === 24) {
        ctx.strokeStyle = '#3c9158';
        ctx.strokeRect(x + 10, y + 30, cellWidth - 20, 20);
        
        ctx.fillStyle = '#3c9158';
        ctx.font = '10px Arial';
        ctx.fillText('Vacation', x + 25, y + 45);
      }
      
      // Highlight today
      if (date === 12) {
        ctx.strokeStyle = '#3c9158';
        ctx.lineWidth = 2;
        ctx.strokeRect(x + 2, y + 2, cellWidth - 4, cellHeight - 4);
      }
    }
  }
  
  // Vacation stats - wireframe style
  ctx.strokeStyle = '#d1d5db';
  ctx.lineWidth = 1;
  ctx.strokeRect(600, 180, 150, 120);
  
  ctx.fillStyle = '#1e293b';
  ctx.font = 'bold 14px Arial';
  ctx.fillText('Vacation Balance', 620, 200);
  
  // Stats items - wireframe style
  const stats = [
    { label: 'Available', value: '15 days' },
    { label: 'Used', value: '5 days' },
    { label: 'Planned', value: '7 days' }
  ];
  
  stats.forEach((stat, i) => {
    const y = 230 + i * 20;
    ctx.strokeStyle = '#d1d5db';
    ctx.strokeRect(620, y - 15, 110, 20);
    
    ctx.fillStyle = '#475569';
    ctx.font = '12px Arial';
    ctx.fillText(`${stat.label}: ${stat.value}`, 630, y);
  });
};

const createComplianceMockup = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  // Set canvas dimensions
  canvas.width = 800;
  canvas.height = 500;
  
  // Background
  ctx.fillStyle = '#f8f9fa';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Header
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, 60);
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, 60);
  ctx.lineTo(canvas.width, 60);
  ctx.stroke();
  
  // Compliance report title
  ctx.fillStyle = '#1e293b';
  ctx.font = 'bold 20px Arial';
  ctx.fillText('Compliance Dashboard', 50, 100);
  
  // Status summary cards - wireframe style
  const cards = [
    { title: 'Working Hours', status: 'Compliant', color: '#3c9158' },
    { title: 'Break Times', status: 'Compliant', color: '#3c9158' },
    { title: 'Overtime', status: 'Warning', color: '#eab308' },
    { title: 'Leave Management', status: 'Compliant', color: '#3c9158' }
  ];
  
  cards.forEach((card, i) => {
    const x = 50 + i * 190;
    const y = 120;
    
    // Card background - wireframe style
    ctx.strokeStyle = '#d1d5db';
    ctx.strokeRect(x, y, 170, 100);
    
    // Card title
    ctx.fillStyle = '#1e293b';
    ctx.font = 'bold 14px Arial';
    ctx.fillText(card.title, x + 15, y + 30);
    
    // Status indicator - wireframe style
    ctx.strokeStyle = card.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x + 25, y + 60, 8, 0, 2 * Math.PI);
    ctx.stroke();
    
    // Status text
    ctx.fillStyle = card.color;
    ctx.font = '14px Arial';
    ctx.fillText(card.status, x + 45, y + 65);
  });
  
  // Detailed compliance section
  ctx.fillStyle = '#1e293b';
  ctx.font = 'bold 16px Arial';
  ctx.fillText('Compliance Details', 50, 250);
  
  // Regulations table - wireframe style header
  ctx.strokeStyle = '#d1d5db';
  ctx.strokeRect(50, 260, 700, 30);
  
  // Table headers
  ctx.fillStyle = '#64748b';
  ctx.font = '12px Arial';
  ctx.fillText('Regulation', 60, 280);
  ctx.fillText('Status', 400, 280);
  ctx.fillText('Details', 550, 280);
  
  // Table rows - wireframe style
  const regulations = [
    { name: 'Maximum Working Hours', status: 'Compliant', value: '39.5h avg / 40h limit' },
    { name: 'Minimum Break Time', status: 'Compliant', value: '32min avg / 30min required' },
    { name: 'Vacation Entitlement', status: 'Compliant', value: '28 days / 20 required' },
    { name: 'Overtime Calculation', status: 'Warning', value: '2 employees > 10h/week' },
    { name: 'Night Work Limits', status: 'Compliant', value: '0 violations' }
  ];
  
  regulations.forEach((reg, i) => {
    const y = 290 + i * 40;
    
    // Row background - wireframe style
    ctx.strokeStyle = '#d1d5db';
    ctx.strokeRect(50, y, 700, 40);
    
    ctx.fillStyle = '#1e293b';
    ctx.font = '12px Arial';
    ctx.fillText(reg.name, 60, y + 25);
    
    ctx.fillStyle = reg.status === 'Compliant' ? '#3c9158' : '#eab308';
    ctx.fillText(reg.status, 400, y + 25);
    
    ctx.fillStyle = '#475569';
    ctx.fillText(reg.value, 550, y + 25);
  });
};

const createAnalyticsMockup = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  // Set canvas dimensions
  canvas.width = 800;
  canvas.height = 500;
  
  // Background
  ctx.fillStyle = '#f8f9fa';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Header
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, 60);
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, 60);
  ctx.lineTo(canvas.width, 60);
  ctx.stroke();
  
  // Analytics title
  ctx.fillStyle = '#1e293b';
  ctx.font = 'bold 20px Arial';
  ctx.fillText('Productivity Analytics', 50, 100);
  
  // Period selector - wireframe style
  ctx.strokeStyle = '#d1d5db';
  ctx.strokeRect(600, 80, 150, 30);
  ctx.fillStyle = '#475569';
  ctx.font = '12px Arial';
  ctx.fillText('Last 30 days ▼', 620, 100);
  
  // Main chart area - wireframe style
  ctx.strokeStyle = '#d1d5db';
  ctx.strokeRect(50, 120, 700, 200);
  
  // Chart title
  ctx.fillStyle = '#1e293b';
  ctx.font = 'bold 14px Arial';
  ctx.fillText('Working Hours by Department', 70, 145);
  
  // X axis
  ctx.strokeStyle = '#d1d5db';
  ctx.beginPath();
  ctx.moveTo(70, 290);
  ctx.lineTo(730, 290);
  ctx.stroke();
  
  // Y axis
  ctx.beginPath();
  ctx.moveTo(70, 160);
  ctx.lineTo(70, 290);
  ctx.stroke();
  
  // X axis labels
  const departments = ['Engineering', 'Design', 'Marketing', 'Sales', 'Support'];
  departments.forEach((dept, i) => {
    const x = 140 + i * 120;
    ctx.fillStyle = '#64748b';
    ctx.font = '10px Arial';
    ctx.fillText(dept, x - 30, 310);
  });
  
  // Y axis labels and grid lines
  for (let i = 0; i <= 5; i++) {
    const y = 290 - i * 25;
    ctx.fillStyle = '#64748b';
    ctx.font = '10px Arial';
    ctx.fillText((i * 10).toString() + 'h', 40, y + 5);
    
    // Grid line - wireframe style
    ctx.strokeStyle = '#e2e8f0';
    ctx.setLineDash([2, 2]);
    ctx.beginPath();
    ctx.moveTo(70, y);
    ctx.lineTo(730, y);
    ctx.stroke();
    ctx.setLineDash([]);
  }
  
  // Bar chart data
  const data = [42, 35, 30, 38, 25];
  
  // Draw bars - wireframe style
  departments.forEach((dept, i) => {
    const x = 140 + i * 120;
    const barHeight = data[i] * 2.5;
    const barWidth = 60;
    
    // Bar outline
    ctx.strokeStyle = '#3c9158';
    ctx.lineWidth = 2;
    ctx.strokeRect(x - barWidth/2, 290 - barHeight, barWidth, barHeight);
    
    // Crosshatch pattern
    ctx.strokeStyle = '#3c9158';
    ctx.lineWidth = 0.5;
    
    // Vertical lines
    for (let j = 0; j <= barWidth; j += 8) {
      ctx.beginPath();
      ctx.moveTo(x - barWidth/2 + j, 290 - barHeight);
      ctx.lineTo(x - barWidth/2 + j, 290);
      ctx.stroke();
    }
    
    // Value label
    ctx.fillStyle = '#1e293b';
    ctx.font = 'bold 10px Arial';
    ctx.fillText(data[i].toString() + 'h', x - 10, 290 - barHeight - 10);
  });
  
  // Productivity summary cards - wireframe style
  const cards = [
    { title: 'Avg. Productivity', value: '87%', change: '+3%' },
    { title: 'Avg. Daily Hours', value: '7.5h', change: '-0.2h' },
    { title: 'Project Completion', value: '94%', change: '+5%' }
  ];
  
  cards.forEach((card, i) => {
    const x = 50 + i * 235;
    const y = 340;
    
    // Card outline
    ctx.strokeStyle = '#d1d5db';
    ctx.lineWidth = 1;
    ctx.strokeRect(x, y, 215, 100);
    
    // Card title
    ctx.fillStyle = '#64748b';
    ctx.font = '12px Arial';
    ctx.fillText(card.title, x + 15, y + 30);
    
    // Card value
    ctx.fillStyle = '#1e293b';
    ctx.font = 'bold 20px Arial';
    ctx.fillText(card.value, x + 15, y + 70);
    
    // Change indicator
    const isPositive = card.change.startsWith('+');
    ctx.fillStyle = isPositive ? '#3c9158' : '#ef4444';
    ctx.font = '12px Arial';
    ctx.fillText(card.change, x + 100, y + 70);
  });
};

const createDashboardMockup = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  // Set canvas dimensions
  canvas.width = 800;
  canvas.height = 500;
  
  // Background
  ctx.fillStyle = '#f8f9fa';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Header
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, 60);
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, 60);
  ctx.lineTo(canvas.width, 60);
  ctx.stroke();
  
  // Logo area
  ctx.fillStyle = '#3c9158';
  ctx.font = 'bold 16px Arial';
  ctx.fillText('Timewise', 20, 35);
  
  // Navigation - wireframe style
  ctx.strokeStyle = '#d1d5db';
  const navItems = ['Dashboard', 'Time Tracking', 'Vacations', 'Reports', 'Settings'];
  navItems.forEach((item, i) => {
    const x = 150 + i * 100;
    const width = 80;
    ctx.strokeRect(x, 20, width, 20);
    
    ctx.fillStyle = i === 0 ? '#3c9158' : '#475569';
    ctx.font = '12px Arial';
    ctx.fillText(item, x + 5, 35);
    
    if (i === 0) {
      // Active indicator
      ctx.fillStyle = '#3c9158';
      ctx.fillRect(150, 55, 80, 3);
    }
  });
  
  // User area - wireframe style
  ctx.strokeStyle = '#d1d5db';
  ctx.strokeRect(730, 15, 30, 30);
  
  // Dashboard title
  ctx.fillStyle = '#1e293b';
  ctx.font = 'bold 20px Arial';
  ctx.fillText('Dashboard', 50, 100);
  
  // Welcome message
  ctx.fillStyle = '#475569';
  ctx.font = '14px Arial';
  ctx.fillText('Welcome back, Alex! Here\'s your activity summary.', 50, 130);
  
  // Summary cards - wireframe style
  const cards = [
    { title: 'Hours This Week', value: '32.5h', target: '40h target' },
    { title: 'Projects Active', value: '4', target: '2 due this week' },
    { title: 'Vacation Days', value: '15', target: '7 planned' },
    { title: 'Team Utilization', value: '87%', target: '+2% from last week' }
  ];
  
  cards.forEach((card, i) => {
    const x = 50 + i * 190;
    const y = 150;
    
    // Card outline
    ctx.strokeStyle = '#d1d5db';
    ctx.lineWidth = 1;
    ctx.strokeRect(x, y, 170, 100);
    
    // Card title
    ctx.fillStyle = '#64748b';
    ctx.font = '12px Arial';
    ctx.fillText(card.title, x + 15, y + 30);
    
    // Card value
    ctx.fillStyle = '#1e293b';
    ctx.font = 'bold 22px Arial';
    ctx.fillText(card.value, x + 15, y + 70);
    
    // Target text
    ctx.fillStyle = '#64748b';
    ctx.font = '10px Arial';
    ctx.fillText(card.target, x + 15, y + 90);
  });
  
  // Recent activity section
  ctx.fillStyle = '#1e293b';
  ctx.font = 'bold 16px Arial';
  ctx.fillText('Recent Activity', 50, 280);
  
  // Activity list - wireframe style
  const activities = [
    { icon: '🕒', text: 'Logged 6.5 hours on Project Alpha', time: '2 hours ago' },
    { icon: '📅', text: 'Vacation request approved for July 15-19', time: 'Yesterday' },
    { icon: '📊', text: 'Monthly report generated and sent to management', time: 'Yesterday' },
    { icon: '⚠️', text: 'Overtime alert: Team members approaching threshold', time: '2 days ago' }
  ];
  
  // Activity list header - wireframe style
  ctx.strokeStyle = '#d1d5db';
  ctx.strokeRect(50, 290, 530, 30);
  
  // Activity list items - wireframe style
  activities.forEach((activity, i) => {
    const y = 320 + i * 45;
    
    // Item outline
    ctx.strokeStyle = '#d1d5db';
    ctx.strokeRect(50, y, 530, 45);
    
    // Activity text
    ctx.fillStyle = '#1e293b';
    ctx.font = '12px Arial';
    ctx.fillText(activity.text, 80, y + 20);
    
    // Activity time
    ctx.fillStyle = '#64748b';
    ctx.font = '10px Arial';
    ctx.fillText(activity.time, 80, y + 35);
  });
  
  // Quick actions section - wireframe style
  ctx.strokeStyle = '#d1d5db';
  ctx.strokeRect(600, 280, 150, 180);
  
  ctx.fillStyle = '#1e293b';
  ctx.font = 'bold 14px Arial';
  ctx.fillText('Quick Actions', 620, 300);
  
  // Action buttons - wireframe style
  const actions = ['Add time entry', 'Request leave', 'Generate report', 'Team overview'];
  actions.forEach((action, i) => {
    const y = 330 + i * 30;
    
    ctx.strokeStyle = '#3c9158';
    ctx.strokeRect(620, y - 15, 110, 25);
    
    ctx.fillStyle = '#3c9158';
    ctx.font = '12px Arial';
    ctx.fillText('+ ' + action, 630, y);
  });
};

const MockupImages: React.FC = () => {
  useEffect(() => {
    // Find all canvas elements
    const dashboardCanvas = document.getElementById('dashboard-mockup') as HTMLCanvasElement;
    const timeTrackingCanvas = document.getElementById('time-tracking-mockup') as HTMLCanvasElement;
    const vacationCanvas = document.getElementById('vacation-calendar-mockup') as HTMLCanvasElement;
    const complianceCanvas = document.getElementById('compliance-report-mockup') as HTMLCanvasElement;
    const analyticsCanvas = document.getElementById('analytics-dashboard-mockup') as HTMLCanvasElement;
    
    // Create mockups
    if (dashboardCanvas) createDashboardMockup(dashboardCanvas);
    if (timeTrackingCanvas) createTimeTrackingMockup(timeTrackingCanvas);
    if (vacationCanvas) createVacationMockup(vacationCanvas);
    if (complianceCanvas) createComplianceMockup(complianceCanvas);
    if (analyticsCanvas) createAnalyticsMockup(analyticsCanvas);
    
    // Save canvas images to the public URLs
    if (dashboardCanvas) {
      try {
        const img = dashboardCanvas.toDataURL('image/png');
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = img;
        link.as = 'image';
        document.head.appendChild(link);
        
        // Replace image src with canvas data URL
        const dashboardImg = document.querySelector('img[src="/dashboard-mockup.png"]') as HTMLImageElement;
        if (dashboardImg) dashboardImg.src = img;
      } catch (e) {
        console.error('Error creating dashboard mockup:', e);
      }
    }
    
    if (timeTrackingCanvas) {
      try {
        const img = timeTrackingCanvas.toDataURL('image/png');
        const timeTrackingImg = document.querySelector('img[src="/time-tracking-mockup.png"]') as HTMLImageElement;
        if (timeTrackingImg) timeTrackingImg.src = img;
      } catch (e) {
        console.error('Error creating time tracking mockup:', e);
      }
    }
    
    if (vacationCanvas) {
      try {
        const img = vacationCanvas.toDataURL('image/png');
        const vacationImg = document.querySelector('img[src="/vacation-calendar-mockup.png"]') as HTMLImageElement;
        if (vacationImg) vacationImg.src = img;
      } catch (e) {
        console.error('Error creating vacation mockup:', e);
      }
    }
    
    if (complianceCanvas) {
      try {
        const img = complianceCanvas.toDataURL('image/png');
        const complianceImg = document.querySelector('img[src="/compliance-report-mockup.png"]') as HTMLImageElement;
        if (complianceImg) complianceImg.src = img;
      } catch (e) {
        console.error('Error creating compliance mockup:', e);
      }
    }
    
    if (analyticsCanvas) {
      try {
        const img = analyticsCanvas.toDataURL('image/png');
        const analyticsImg = document.querySelector('img[src="/analytics-dashboard-mockup.png"]') as HTMLImageElement;
        if (analyticsImg) analyticsImg.src = img;
      } catch (e) {
        console.error('Error creating analytics mockup:', e);
      }
    }
  }, []);
  
  return (
    <div className="hidden">
      <canvas id="dashboard-mockup" width="800" height="500"></canvas>
      <canvas id="time-tracking-mockup" width="800" height="500"></canvas>
      <canvas id="vacation-calendar-mockup" width="800" height="500"></canvas>
      <canvas id="compliance-report-mockup" width="800" height="500"></canvas>
      <canvas id="analytics-dashboard-mockup" width="800" height="500"></canvas>
    </div>
  );
};

export default MockupImages;
