
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
  
  // Navigation
  ctx.fillStyle = '#475569';
  ctx.font = '14px Arial';
  const navItems = ['Dashboard', 'Time Tracking', 'Vacations', 'Reports', 'Settings'];
  navItems.forEach((item, i) => {
    ctx.fillText(item, 150 + i * 100, 35);
  });
  
  // Sidebar
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 60, 200, canvas.height - 60);
  ctx.strokeStyle = '#e2e8f0';
  ctx.beginPath();
  ctx.moveTo(200, 60);
  ctx.lineTo(200, canvas.height);
  ctx.stroke();
  
  // Sidebar menu items
  ctx.fillStyle = '#475569';
  const menuItems = ['My Tasks', 'Time Entries', 'Request Leave', 'Team Overview', 'Reports'];
  menuItems.forEach((item, i) => {
    ctx.fillText(item, 20, 100 + i * 40);
  });
  
  // Main content - Time tracking widget
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(220, 80, 560, 150);
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 1;
  ctx.strokeRect(220, 80, 560, 150);
  
  // Time tracking header
  ctx.fillStyle = '#1e293b';
  ctx.font = 'bold 16px Arial';
  ctx.fillText('Today\'s Time Tracking', 240, 110);
  
  // Timer
  ctx.font = 'bold 36px Arial';
  ctx.fillText('07:42:15', 240, 170);
  
  // Timer controls
  ctx.fillStyle = '#3c9158';
  ctx.beginPath();
  ctx.arc(400, 160, 20, 0, 2 * Math.PI);
  ctx.fill();
  
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.moveTo(395, 150);
  ctx.lineTo(395, 170);
  ctx.lineTo(410, 160);
  ctx.fill();
  
  // Task info
  ctx.fillStyle = '#475569';
  ctx.font = '14px Arial';
  ctx.fillText('Current task: Website development', 440, 150);
  ctx.fillText('Started at: 09:15 AM', 440, 170);
  
  // Recent time entries
  ctx.fillStyle = '#1e293b';
  ctx.font = 'bold 16px Arial';
  ctx.fillText('Recent Time Entries', 240, 260);
  
  // Time entries table
  const entries = [
    { task: 'UI Design', duration: '2h 15m', date: 'Today' },
    { task: 'Client Meeting', duration: '1h 30m', date: 'Today' },
    { task: 'Backend Development', duration: '4h 20m', date: 'Yesterday' },
    { task: 'Documentation', duration: '1h 45m', date: 'Yesterday' }
  ];
  
  // Table headers
  ctx.fillStyle = '#64748b';
  ctx.font = '14px Arial';
  ctx.fillText('Task', 240, 290);
  ctx.fillText('Duration', 440, 290);
  ctx.fillText('Date', 540, 290);
  
  // Table rows
  ctx.fillStyle = '#475569';
  entries.forEach((entry, i) => {
    const y = 320 + i * 40;
    ctx.fillText(entry.task, 240, y);
    ctx.fillText(entry.duration, 440, y);
    ctx.fillText(entry.date, 540, y);
    
    // Row divider
    ctx.strokeStyle = '#e2e8f0';
    ctx.beginPath();
    ctx.moveTo(240, y + 10);
    ctx.lineTo(760, y + 10);
    ctx.stroke();
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
  
  // Calendar header
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(50, 80, 700, 60);
  ctx.strokeStyle = '#e2e8f0';
  ctx.strokeRect(50, 80, 700, 60);
  
  // Month navigation
  ctx.fillStyle = '#1e293b';
  ctx.font = 'bold 18px Arial';
  ctx.fillText('July 2023', 365, 115);
  
  // Calendar grid
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const cellWidth = 100;
  const cellHeight = 80;
  
  // Draw day headers
  ctx.fillStyle = '#64748b';
  ctx.font = '14px Arial';
  days.forEach((day, i) => {
    ctx.fillText(day, 50 + i * cellWidth + cellWidth / 2 - 15, 170);
  });
  
  // Draw calendar grid
  for (let week = 0; week < 5; week++) {
    for (let day = 0; day < 7; day++) {
      const x = 50 + day * cellWidth;
      const y = 180 + week * cellHeight;
      
      // Cell background
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(x, y, cellWidth, cellHeight);
      ctx.strokeStyle = '#e2e8f0';
      ctx.strokeRect(x, y, cellWidth, cellHeight);
      
      // Date number
      const date = week * 7 + day - 5; // Offset to start from 1st of month
      if (date > 0 && date <= 31) {
        ctx.fillStyle = '#1e293b';
        ctx.font = '14px Arial';
        ctx.fillText(date.toString(), x + 10, y + 20);
      }
      
      // Highlight vacation days (for example)
      if ((date >= 15 && date <= 19) || date === 24) {
        ctx.fillStyle = '#3c9158';
        ctx.fillRect(x + 10, y + 30, cellWidth - 20, 20);
        
        ctx.fillStyle = '#ffffff';
        ctx.font = '12px Arial';
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
  
  // Vacation stats
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(600, 180, 150, 120);
  ctx.strokeStyle = '#e2e8f0';
  ctx.strokeRect(600, 180, 150, 120);
  
  ctx.fillStyle = '#1e293b';
  ctx.font = 'bold 14px Arial';
  ctx.fillText('Vacation Balance', 620, 200);
  
  ctx.fillStyle = '#475569';
  ctx.font = '14px Arial';
  ctx.fillText('Available: 15 days', 620, 230);
  ctx.fillText('Used: 5 days', 620, 250);
  ctx.fillText('Planned: 7 days', 620, 270);
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
  ctx.font = 'bold 24px Arial';
  ctx.fillText('Compliance Dashboard', 50, 100);
  
  // Status summary cards
  const cards = [
    { title: 'Working Hours', status: 'Compliant', color: '#3c9158' },
    { title: 'Break Times', status: 'Compliant', color: '#3c9158' },
    { title: 'Overtime', status: 'Warning', color: '#eab308' },
    { title: 'Leave Management', status: 'Compliant', color: '#3c9158' }
  ];
  
  cards.forEach((card, i) => {
    const x = 50 + i * 190;
    const y = 120;
    
    // Card background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(x, y, 170, 100);
    ctx.strokeStyle = '#e2e8f0';
    ctx.strokeRect(x, y, 170, 100);
    
    // Card title
    ctx.fillStyle = '#1e293b';
    ctx.font = 'bold 16px Arial';
    ctx.fillText(card.title, x + 15, y + 30);
    
    // Status indicator
    ctx.fillStyle = card.color;
    ctx.beginPath();
    ctx.arc(x + 25, y + 60, 10, 0, 2 * Math.PI);
    ctx.fill();
    
    // Status text
    ctx.fillStyle = '#475569';
    ctx.font = '16px Arial';
    ctx.fillText(card.status, x + 45, y + 65);
  });
  
  // Detailed compliance section
  ctx.fillStyle = '#1e293b';
  ctx.font = 'bold 18px Arial';
  ctx.fillText('Compliance Details', 50, 250);
  
  // Regulations table
  const regulations = [
    { name: 'Maximum Working Hours', status: 'Compliant', value: '39.5h avg / 40h limit' },
    { name: 'Minimum Break Time', status: 'Compliant', value: '32min avg / 30min required' },
    { name: 'Vacation Entitlement', status: 'Compliant', value: '28 days / 20 required' },
    { name: 'Overtime Calculation', status: 'Warning', value: '2 employees > 10h/week' },
    { name: 'Night Work Limits', status: 'Compliant', value: '0 violations' }
  ];
  
  // Table headers
  ctx.fillStyle = '#64748b';
  ctx.font = '14px Arial';
  ctx.fillText('Regulation', 50, 280);
  ctx.fillText('Status', 400, 280);
  ctx.fillText('Details', 550, 280);
  
  // Table rows
  regulations.forEach((reg, i) => {
    const y = 310 + i * 40;
    
    ctx.fillStyle = '#1e293b';
    ctx.font = '14px Arial';
    ctx.fillText(reg.name, 50, y);
    
    ctx.fillStyle = reg.status === 'Compliant' ? '#3c9158' : '#eab308';
    ctx.fillText(reg.status, 400, y);
    
    ctx.fillStyle = '#475569';
    ctx.fillText(reg.value, 550, y);
    
    // Row divider
    ctx.strokeStyle = '#e2e8f0';
    ctx.beginPath();
    ctx.moveTo(50, y + 10);
    ctx.lineTo(750, y + 10);
    ctx.stroke();
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
  ctx.font = 'bold 24px Arial';
  ctx.fillText('Productivity Analytics', 50, 100);
  
  // Period selector
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(600, 80, 150, 30);
  ctx.strokeStyle = '#e2e8f0';
  ctx.strokeRect(600, 80, 150, 30);
  ctx.fillStyle = '#475569';
  ctx.font = '14px Arial';
  ctx.fillText('Last 30 days ▼', 620, 100);
  
  // Main chart area
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(50, 120, 700, 200);
  ctx.strokeStyle = '#e2e8f0';
  ctx.strokeRect(50, 120, 700, 200);
  
  // Chart title
  ctx.fillStyle = '#1e293b';
  ctx.font = 'bold 16px Arial';
  ctx.fillText('Working Hours by Department', 70, 145);
  
  // X axis
  ctx.strokeStyle = '#e2e8f0';
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
    ctx.font = '12px Arial';
    ctx.fillText(dept, x - 30, 310);
  });
  
  // Y axis labels
  for (let i = 0; i <= 5; i++) {
    const y = 290 - i * 25;
    ctx.fillStyle = '#64748b';
    ctx.font = '12px Arial';
    ctx.fillText((i * 10).toString() + 'h', 40, y + 5);
    
    // Grid line
    ctx.strokeStyle = '#e2e8f0';
    ctx.beginPath();
    ctx.moveTo(70, y);
    ctx.lineTo(730, y);
    ctx.stroke();
  }
  
  // Bar chart data
  const data = [42, 35, 30, 38, 25];
  
  // Draw bars
  departments.forEach((dept, i) => {
    const x = 140 + i * 120;
    const barHeight = data[i] * 2.5;
    const barWidth = 60;
    
    // Bar
    const gradient = ctx.createLinearGradient(0, 290, 0, 290 - barHeight);
    gradient.addColorStop(0, '#3c9158');
    gradient.addColorStop(1, '#3c9158aa');
    ctx.fillStyle = gradient;
    ctx.fillRect(x - barWidth/2, 290 - barHeight, barWidth, barHeight);
    
    // Value label
    ctx.fillStyle = '#1e293b';
    ctx.font = 'bold 12px Arial';
    ctx.fillText(data[i].toString() + 'h', x - 10, 290 - barHeight - 10);
  });
  
  // Productivity summary cards
  const cards = [
    { title: 'Avg. Productivity', value: '87%', change: '+3%' },
    { title: 'Avg. Daily Hours', value: '7.5h', change: '-0.2h' },
    { title: 'Project Completion', value: '94%', change: '+5%' }
  ];
  
  cards.forEach((card, i) => {
    const x = 50 + i * 235;
    const y = 340;
    
    // Card background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(x, y, 215, 100);
    ctx.strokeStyle = '#e2e8f0';
    ctx.strokeRect(x, y, 215, 100);
    
    // Card title
    ctx.fillStyle = '#64748b';
    ctx.font = '14px Arial';
    ctx.fillText(card.title, x + 15, y + 30);
    
    // Card value
    ctx.fillStyle = '#1e293b';
    ctx.font = 'bold 28px Arial';
    ctx.fillText(card.value, x + 15, y + 70);
    
    // Change indicator
    const isPositive = card.change.startsWith('+');
    ctx.fillStyle = isPositive ? '#3c9158' : '#ef4444';
    ctx.font = '14px Arial';
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
  ctx.font = 'bold 18px Arial';
  ctx.fillText('Timewise', 20, 35);
  
  // Navigation
  ctx.fillStyle = '#475569';
  ctx.font = '14px Arial';
  const navItems = ['Dashboard', 'Time Tracking', 'Vacations', 'Reports', 'Settings'];
  navItems.forEach((item, i) => {
    ctx.fillStyle = i === 0 ? '#3c9158' : '#475569';
    ctx.fillText(item, 150 + i * 100, 35);
    
    if (i === 0) {
      // Active indicator
      ctx.fillStyle = '#3c9158';
      ctx.fillRect(150, 55, 80, 3);
    }
  });
  
  // User area
  ctx.beginPath();
  ctx.arc(750, 30, 20, 0, 2 * Math.PI);
  ctx.fillStyle = '#e2e8f0';
  ctx.fill();
  
  // Dashboard title
  ctx.fillStyle = '#1e293b';
  ctx.font = 'bold 24px Arial';
  ctx.fillText('Dashboard', 50, 100);
  
  // Welcome message
  ctx.fillStyle = '#475569';
  ctx.font = '16px Arial';
  ctx.fillText('Welcome back, Alex! Here\'s your activity summary.', 50, 130);
  
  // Summary cards
  const cards = [
    { title: 'Hours This Week', value: '32.5h', target: '40h target' },
    { title: 'Projects Active', value: '4', target: '2 due this week' },
    { title: 'Vacation Days', value: '15', target: '7 planned' },
    { title: 'Team Utilization', value: '87%', target: '+2% from last week' }
  ];
  
  cards.forEach((card, i) => {
    const x = 50 + i * 190;
    const y = 150;
    
    // Card background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(x, y, 170, 100);
    ctx.strokeStyle = '#e2e8f0';
    ctx.strokeRect(x, y, 170, 100);
    
    // Card title
    ctx.fillStyle = '#64748b';
    ctx.font = '14px Arial';
    ctx.fillText(card.title, x + 15, y + 30);
    
    // Card value
    ctx.fillStyle = '#1e293b';
    ctx.font = 'bold 28px Arial';
    ctx.fillText(card.value, x + 15, y + 70);
    
    // Target text
    ctx.fillStyle = '#64748b';
    ctx.font = '12px Arial';
    ctx.fillText(card.target, x + 15, y + 90);
  });
  
  // Recent activity section
  ctx.fillStyle = '#1e293b';
  ctx.font = 'bold 18px Arial';
  ctx.fillText('Recent Activity', 50, 280);
  
  // Activity list
  const activities = [
    { icon: '🕒', text: 'Logged 6.5 hours on Project Alpha', time: '2 hours ago' },
    { icon: '📅', text: 'Vacation request approved for July 15-19', time: 'Yesterday' },
    { icon: '📊', text: 'Monthly report generated and sent to management', time: 'Yesterday' },
    { icon: '⚠️', text: 'Overtime alert: Team members approaching threshold', time: '2 days ago' }
  ];
  
  activities.forEach((activity, i) => {
    const y = 310 + i * 45;
    
    // Activity icon
    ctx.font = '18px Arial';
    ctx.fillText(activity.icon, 50, y);
    
    // Activity text
    ctx.fillStyle = '#1e293b';
    ctx.font = '14px Arial';
    ctx.fillText(activity.text, 80, y);
    
    // Activity time
    ctx.fillStyle = '#64748b';
    ctx.font = '12px Arial';
    ctx.fillText(activity.time, 80, y + 20);
    
    // Divider
    if (i < activities.length - 1) {
      ctx.strokeStyle = '#e2e8f0';
      ctx.beginPath();
      ctx.moveTo(50, y + 30);
      ctx.lineTo(750, y + 30);
      ctx.stroke();
    }
  });
  
  // Quick actions section
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(600, 280, 150, 180);
  ctx.strokeStyle = '#e2e8f0';
  ctx.strokeRect(600, 280, 150, 180);
  
  ctx.fillStyle = '#1e293b';
  ctx.font = 'bold 16px Arial';
  ctx.fillText('Quick Actions', 620, 300);
  
  const actions = ['Add time entry', 'Request leave', 'Generate report', 'Team overview'];
  actions.forEach((action, i) => {
    const y = 330 + i * 30;
    
    ctx.fillStyle = '#3c9158';
    ctx.font = '14px Arial';
    ctx.fillText('+ ' + action, 620, y);
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
