
import React, { useEffect, useRef } from 'react';

const createTimeTrackingMockup = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  // Set canvas dimensions
  canvas.width = 800;
  canvas.height = 500;
  
  // Color scheme
  const colors = {
    primary: '#3c9158',
    border: '#e2e8f0',
    bg: '#ffffff',
    accent: '#64748b',
    highlight: '#3c9158'
  };
  
  // Header bar
  ctx.fillStyle = colors.bg;
  ctx.fillRect(0, 0, canvas.width, 60);
  ctx.strokeStyle = colors.border;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, 60);
  ctx.lineTo(canvas.width, 60);
  ctx.stroke();
  
  // Logo/brand indicator (simplified shape instead of text)
  ctx.fillStyle = colors.primary;
  ctx.fillRect(20, 20, 40, 20);
  
  // Navigation icons (dots instead of text)
  for (let i = 0; i < 5; i++) {
    const x = 150 + i * 60;
    ctx.beginPath();
    ctx.arc(x, 30, 5, 0, Math.PI * 2);
    ctx.fillStyle = i === 1 ? colors.primary : colors.accent;
    ctx.fill();
  }
  
  // Sidebar
  ctx.fillStyle = '#f9fafb';
  ctx.fillRect(0, 60, 80, canvas.height - 60);
  ctx.strokeStyle = colors.border;
  ctx.beginPath();
  ctx.moveTo(80, 60);
  ctx.lineTo(80, canvas.height);
  ctx.stroke();
  
  // Sidebar icons (rectangles instead of text)
  for (let i = 0; i < 5; i++) {
    const y = 100 + i * 50;
    ctx.fillStyle = i === 0 ? colors.primary : colors.accent;
    ctx.fillRect(30, y, 20, 20);
  }
  
  // Main content - Time tracking widget
  ctx.fillStyle = colors.bg;
  ctx.fillRect(100, 80, 680, 150);
  ctx.strokeStyle = colors.border;
  ctx.lineWidth = 1;
  ctx.strokeRect(100, 80, 680, 150);
  
  // Timer - modern digital style
  ctx.strokeStyle = colors.border;
  ctx.strokeRect(130, 110, 180, 80);
  
  // Timer indicator lines
  ctx.strokeStyle = colors.primary;
  ctx.lineWidth = 3;
  
  // Hours
  ctx.beginPath();
  ctx.moveTo(160, 150);
  ctx.lineTo(190, 150);
  ctx.stroke();
  
  // Minutes
  ctx.beginPath();
  ctx.moveTo(200, 150);
  ctx.lineTo(245, 150);
  ctx.stroke();
  
  // Seconds
  ctx.beginPath();
  ctx.moveTo(255, 150);
  ctx.lineTo(280, 150);
  ctx.stroke();
  
  // Play button - simple triangle
  ctx.fillStyle = colors.primary;
  ctx.beginPath();
  ctx.moveTo(350, 130);
  ctx.lineTo(350, 170);
  ctx.lineTo(380, 150);
  ctx.closePath();
  ctx.fill();
  
  // Task info area
  ctx.strokeStyle = colors.border;
  ctx.lineWidth = 1;
  ctx.strokeRect(420, 110, 340, 80);
  
  // Task progress bar
  ctx.fillStyle = '#f1f5f9';
  ctx.fillRect(440, 140, 300, 20);
  ctx.fillStyle = colors.primary;
  ctx.fillRect(440, 140, 200, 20);
  
  // Recent time entries table
  const tableY = 250;
  
  // Table grid - modern style with just lines instead of full borders
  ctx.strokeStyle = colors.border;
  
  // Header line
  ctx.beginPath();
  ctx.moveTo(100, tableY);
  ctx.lineTo(780, tableY);
  ctx.stroke();
  
  // Column dividers
  for (let i = 1; i < 3; i++) {
    const x = 100 + (i * 680 / 3);
    ctx.beginPath();
    ctx.moveTo(x, tableY);
    ctx.lineTo(x, tableY + 200);
    ctx.stroke();
  }
  
  // Row dividers
  for (let i = 1; i < 5; i++) {
    const y = tableY + (i * 40);
    ctx.beginPath();
    ctx.moveTo(100, y);
    ctx.lineTo(780, y);
    ctx.stroke();
  }
  
  // Data visualization in cells
  for (let row = 0; row < 4; row++) {
    // First column - task indicator
    ctx.fillStyle = row % 2 === 0 ? colors.primary : colors.accent;
    ctx.fillRect(120, tableY + 10 + (row * 40), 40, 20);
    
    // Second column - duration bar
    const barWidth = [120, 80, 180, 60][row];
    ctx.fillStyle = '#f1f5f9';
    ctx.fillRect(340, tableY + 15 + (row * 40), 200, 10);
    ctx.fillStyle = colors.primary;
    ctx.fillRect(340, tableY + 15 + (row * 40), barWidth, 10);
    
    // Third column - date indicator
    ctx.fillStyle = colors.accent;
    ctx.fillRect(650, tableY + 15 + (row * 40), row < 2 ? 30 : 60, 10);
  }
};

const createVacationMockup = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  // Set canvas dimensions
  canvas.width = 800;
  canvas.height = 500;
  
  // Color scheme
  const colors = {
    primary: '#3c9158',
    border: '#e2e8f0',
    bg: '#ffffff',
    accent: '#64748b',
    highlight: '#3c9158',
    lightBg: '#f1f5f9'
  };
  
  // Header
  ctx.fillStyle = colors.bg;
  ctx.fillRect(0, 0, canvas.width, 60);
  ctx.strokeStyle = colors.border;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, 60);
  ctx.lineTo(canvas.width, 60);
  ctx.stroke();
  
  // Calendar header panel
  ctx.fillStyle = colors.bg;
  ctx.fillRect(50, 80, 700, 50);
  ctx.strokeStyle = colors.border;
  ctx.strokeRect(50, 80, 700, 50);
  
  // Month navigation arrows
  // Left arrow
  ctx.beginPath();
  ctx.moveTo(100, 105);
  ctx.lineTo(85, 105);
  ctx.lineTo(95, 95);
  ctx.closePath();
  ctx.fillStyle = colors.accent;
  ctx.fill();
  
  // Right arrow
  ctx.beginPath();
  ctx.moveTo(700, 105);
  ctx.lineTo(715, 105);
  ctx.lineTo(705, 95);
  ctx.closePath();
  ctx.fillStyle = colors.accent;
  ctx.fill();
  
  // Center indicator
  ctx.fillStyle = colors.accent;
  for (let i = 0; i < 3; i++) {
    ctx.fillRect(380 + i * 20, 105, 10, 2);
  }
  
  // Calendar grid
  const gridStartY = 150;
  const cellWidth = 100;
  const cellHeight = 70;
  const rows = 5;
  const cols = 7;
  
  // Days of week indicators (small rectangles instead of text)
  for (let col = 0; col < cols; col++) {
    ctx.fillStyle = colors.accent;
    ctx.fillRect(50 + col * cellWidth + cellWidth/2 - 10, gridStartY - 20, 20, 4);
  }
  
  // Draw calendar grid with modern styling
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = 50 + col * cellWidth;
      const y = gridStartY + row * cellHeight;
      
      // Cell background
      ctx.fillStyle = colors.bg;
      ctx.fillRect(x, y, cellWidth, cellHeight);
      
      // Cell border (thinner, more modern look)
      ctx.strokeStyle = colors.border;
      ctx.lineWidth = 0.5;
      ctx.strokeRect(x, y, cellWidth, cellHeight);
      
      // Date indicator (small square in corner)
      if ((row * cols + col) >= 5 && (row * cols + col) < 36) {
        ctx.fillStyle = colors.accent;
        ctx.fillRect(x + 10, y + 10, 6, 6);
      }
      
      // Highlight vacation days with colored bars
      if ((row === 2 && col >= 1 && col <= 5) || (row === 3 && col === 2)) {
        ctx.fillStyle = colors.primary;
        ctx.fillRect(x + 10, y + 30, cellWidth - 20, 10);
      }
      
      // Highlight today
      if (row === 1 && col === 5) {
        ctx.strokeStyle = colors.primary;
        ctx.lineWidth = 2;
        ctx.strokeRect(x + 2, y + 2, cellWidth - 4, cellHeight - 4);
      }
    }
  }
  
  // Vacation balance panel
  ctx.fillStyle = colors.bg;
  ctx.fillRect(600, 150, 150, 120);
  ctx.strokeStyle = colors.border;
  ctx.lineWidth = 1;
  ctx.strokeRect(600, 150, 150, 120);
  
  // Stats visualization
  const stats = [
    { value: 0.75 }, // Available
    { value: 0.25 }, // Used
    { value: 0.35 }  // Planned
  ];
  
  stats.forEach((stat, i) => {
    const y = 180 + i * 30;
    
    // Progress bar background
    ctx.fillStyle = colors.lightBg;
    ctx.fillRect(620, y, 110, 10);
    
    // Progress value
    ctx.fillStyle = i === 0 ? colors.primary : (i === 1 ? colors.accent : '#9333ea');
    ctx.fillRect(620, y, 110 * stat.value, 10);
    
    // Label indicator
    ctx.fillStyle = i === 0 ? colors.primary : (i === 1 ? colors.accent : '#9333ea');
    ctx.fillRect(620, y - 10, 10, 3);
  });
};

const createComplianceMockup = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  // Set canvas dimensions
  canvas.width = 800;
  canvas.height = 500;
  
  // Color scheme
  const colors = {
    primary: '#3c9158',
    border: '#e2e8f0',
    bg: '#ffffff',
    accent: '#64748b',
    highlight: '#3c9158',
    warning: '#eab308',
    lightBg: '#f1f5f9'
  };
  
  // Header
  ctx.fillStyle = colors.bg;
  ctx.fillRect(0, 0, canvas.width, 60);
  ctx.strokeStyle = colors.border;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, 60);
  ctx.lineTo(canvas.width, 60);
  ctx.stroke();
  
  // Panel title indicator
  ctx.fillStyle = colors.accent;
  ctx.fillRect(50, 100, 80, 4);
  
  // Status summary cards
  const cards = [
    { status: true, color: colors.primary },
    { status: true, color: colors.primary },
    { status: false, color: colors.warning },
    { status: true, color: colors.primary }
  ];
  
  cards.forEach((card, i) => {
    const x = 50 + i * 190;
    const y = 120;
    
    // Card background
    ctx.fillStyle = colors.bg;
    ctx.fillRect(x, y, 170, 100);
    ctx.strokeStyle = colors.border;
    ctx.lineWidth = 1;
    ctx.strokeRect(x, y, 170, 100);
    
    // Card title indicator
    ctx.fillStyle = colors.accent;
    ctx.fillRect(x + 15, y + 20, 60, 2);
    
    // Status indicator
    ctx.strokeStyle = card.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x + 25, y + 60, 8, 0, 2 * Math.PI);
    ctx.stroke();
    
    // Status indicator fill
    if (card.status) {
      ctx.fillStyle = card.color;
      ctx.beginPath();
      ctx.arc(x + 25, y + 60, 5, 0, 2 * Math.PI);
      ctx.fill();
    }
    
    // Status label indicator
    ctx.fillStyle = card.color;
    for (let j = 0; j < 3; j++) {
      ctx.fillRect(x + 45 + j * 15, y + 60, 10, 2);
    }
  });
  
  // Regulations table
  const tableY = 250;
  
  // Table header
  ctx.fillStyle = colors.bg;
  ctx.fillRect(50, tableY, 700, 30);
  ctx.strokeStyle = colors.border;
  ctx.strokeRect(50, tableY, 700, 30);
  
  // Header column indicators
  const cols = [0.15, 0.5, 0.7];
  cols.forEach(col => {
    ctx.fillStyle = colors.accent;
    ctx.fillRect(50 + 700 * col, tableY + 15, 40, 2);
  });
  
  // Table rows
  const regulations = [
    { status: true, color: colors.primary, value: 0.7 },
    { status: true, color: colors.primary, value: 0.8 },
    { status: true, color: colors.primary, value: 0.9 },
    { status: false, color: colors.warning, value: 0.2 },
    { status: true, color: colors.primary, value: 1.0 }
  ];
  
  regulations.forEach((reg, i) => {
    const y = tableY + 30 + i * 40;
    
    // Row background
    ctx.fillStyle = i % 2 === 0 ? colors.lightBg : colors.bg;
    ctx.fillRect(50, y, 700, 40);
    ctx.strokeStyle = colors.border;
    ctx.strokeRect(50, y, 700, 40);
    
    // Name column indicator
    ctx.fillStyle = colors.accent;
    ctx.fillRect(70, y + 20, 100, 2);
    
    // Status column
    ctx.fillStyle = reg.color;
    ctx.beginPath();
    ctx.arc(400, y + 20, 6, 0, 2 * Math.PI);
    ctx.fill();
    
    // Value column - progress bar
    ctx.fillStyle = colors.lightBg;
    ctx.fillRect(550, y + 15, 150, 10);
    ctx.fillStyle = reg.color;
    ctx.fillRect(550, y + 15, 150 * reg.value, 10);
  });
};

const createAnalyticsMockup = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  // Set canvas dimensions
  canvas.width = 800;
  canvas.height = 500;
  
  // Color scheme
  const colors = {
    primary: '#3c9158',
    border: '#e2e8f0',
    bg: '#ffffff',
    accent: '#64748b',
    highlight: '#3c9158',
    lightBg: '#f1f5f9'
  };
  
  // Header
  ctx.fillStyle = colors.bg;
  ctx.fillRect(0, 0, canvas.width, 60);
  ctx.strokeStyle = colors.border;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, 60);
  ctx.lineTo(canvas.width, 60);
  ctx.stroke();
  
  // Analytics title indicator
  ctx.fillStyle = colors.accent;
  ctx.fillRect(50, 100, 120, 4);
  
  // Period selector
  ctx.strokeStyle = colors.border;
  ctx.strokeRect(600, 90, 150, 30);
  
  // Selector dropdown icon
  ctx.fillStyle = colors.accent;
  ctx.beginPath();
  ctx.moveTo(730, 100);
  ctx.lineTo(740, 100);
  ctx.lineTo(735, 110);
  ctx.fill();
  
  // Chart area
  ctx.fillStyle = colors.bg;
  ctx.fillRect(50, 140, 700, 200);
  ctx.strokeStyle = colors.border;
  ctx.strokeRect(50, 140, 700, 200);
  
  // Chart grid
  // Horizontal grid lines
  for (let i = 1; i < 5; i++) {
    const y = 140 + i * 40;
    ctx.strokeStyle = colors.border;
    ctx.setLineDash([2, 2]);
    ctx.beginPath();
    ctx.moveTo(50, y);
    ctx.lineTo(750, y);
    ctx.stroke();
    ctx.setLineDash([]);
  }
  
  // Bar chart data
  const barData = [0.7, 0.5, 0.4, 0.65, 0.35];
  const barLocations = [120, 220, 330, 440, 550];
  
  // Draw bars
  barData.forEach((value, i) => {
    const x = barLocations[i];
    const height = value * 170;
    
    // Bar outline
    ctx.strokeStyle = colors.primary;
    ctx.lineWidth = 2;
    ctx.strokeRect(x - 30, 300 - height, 60, height);
    
    // Bar hatching
    ctx.strokeStyle = colors.primary;
    ctx.lineWidth = 0.5;
    
    // Crosshatch pattern
    for (let j = 0; j <= 60; j += 8) {
      ctx.beginPath();
      ctx.moveTo(x - 30 + j, 300 - height);
      ctx.lineTo(x - 30 + j, 300);
      ctx.stroke();
    }
    
    // X-axis indicator
    ctx.fillStyle = colors.accent;
    ctx.fillRect(x - 15, 310, 30, 2);
  });
  
  // X and Y axis
  ctx.strokeStyle = colors.border;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(50, 300);
  ctx.lineTo(750, 300);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(50, 140);
  ctx.lineTo(50, 300);
  ctx.stroke();
  
  // Y axis markers
  for (let i = 0; i <= 4; i++) {
    const y = 300 - i * 40;
    ctx.fillStyle = colors.accent;
    ctx.fillRect(40, y, 5, 1);
  }
  
  // Summary cards
  const cards = [
    { value: 0.87, change: '+0.03' },
    { value: 0.75, change: '-0.02' },
    { value: 0.94, change: '+0.05' }
  ];
  
  cards.forEach((card, i) => {
    const x = 50 + i * 235;
    const y = 360;
    
    // Card outline
    ctx.fillStyle = colors.bg;
    ctx.fillRect(x, y, 215, 100);
    ctx.strokeStyle = colors.border;
    ctx.strokeRect(x, y, 215, 100);
    
    // Card title indicator
    ctx.fillStyle = colors.accent;
    ctx.fillRect(x + 15, y + 20, 80, 2);
    
    // Card value visualization - circular progress
    ctx.lineWidth = 5;
    ctx.strokeStyle = colors.lightBg;
    ctx.beginPath();
    ctx.arc(x + 50, y + 60, 20, 0, Math.PI * 2);
    ctx.stroke();
    
    ctx.strokeStyle = colors.primary;
    ctx.beginPath();
    ctx.arc(x + 50, y + 60, 20, -Math.PI/2, Math.PI * 2 * card.value - Math.PI/2);
    ctx.stroke();
    
    // Value text indicator
    ctx.fillStyle = colors.accent;
    ctx.font = 'bold 14px Arial';
    ctx.fillText((card.value * 100).toFixed(0) + '%', x + 40, y + 65);
    
    // Change indicator
    const isPositive = card.change.startsWith('+');
    ctx.fillStyle = isPositive ? colors.primary : '#ef4444';
    ctx.font = '12px Arial';
    ctx.fillText(card.change, x + 100, y + 65);
    
    // Change arrow
    if (isPositive) {
      ctx.beginPath();
      ctx.moveTo(x + 130, y + 65);
      ctx.lineTo(x + 130, y + 55);
      ctx.lineTo(x + 135, y + 60);
      ctx.closePath();
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.moveTo(x + 130, y + 55);
      ctx.lineTo(x + 130, y + 65);
      ctx.lineTo(x + 135, y + 60);
      ctx.closePath();
      ctx.fill();
    }
  });
};

const createDashboardMockup = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  // Set canvas dimensions
  canvas.width = 800;
  canvas.height = 500;
  
  // Color scheme
  const colors = {
    primary: '#3c9158',
    border: '#e2e8f0',
    bg: '#ffffff',
    accent: '#64748b',
    highlight: '#3c9158',
    lightBg: '#f1f5f9'
  };
  
  // Header
  ctx.fillStyle = colors.bg;
  ctx.fillRect(0, 0, canvas.width, 60);
  ctx.strokeStyle = colors.border;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, 60);
  ctx.lineTo(canvas.width, 60);
  ctx.stroke();
  
  // Logo area - geometric shape instead of text
  ctx.fillStyle = colors.primary;
  ctx.fillRect(20, 20, 40, 20);
  
  // Navigation icons
  const navItems = ['Dashboard', 'Time Tracking', 'Vacations', 'Reports', 'Settings'];
  navItems.forEach((item, i) => {
    const x = 150 + i * 100;
    
    // Nav indicator
    ctx.fillStyle = i === 0 ? colors.primary : colors.accent;
    ctx.fillRect(x, 30, 20, 3);
    
    if (i === 0) {
      // Active indicator
      ctx.fillStyle = colors.primary;
      ctx.fillRect(150, 55, 50, 3);
    }
  });
  
  // User avatar - simple circle
  ctx.strokeStyle = colors.border;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(745, 30, 15, 0, Math.PI * 2);
  ctx.stroke();
  
  // Dashboard title indicator
  ctx.fillStyle = colors.accent;
  ctx.fillRect(50, 100, 80, 4);
  
  // Welcome message indicator - lines instead of text
  for (let i = 0; i < 3; i++) {
    ctx.fillStyle = colors.accent;
    ctx.fillRect(50 + i * 70, 130, 60, 2);
  }
  
  // Summary cards
  const cards = [
    { title: 'Hours', value: 0.8, target: 0.4 },
    { title: 'Projects', value: 4, target: 0.2 },
    { title: 'Vacation', value: 0.75, target: 0.7 },
    { title: 'Team', value: 0.87, target: 0.02 }
  ];
  
  cards.forEach((card, i) => {
    const x = 50 + i * 190;
    const y = 150;
    
    // Card background
    ctx.fillStyle = colors.bg;
    ctx.fillRect(x, y, 170, 100);
    ctx.strokeStyle = colors.border;
    ctx.strokeRect(x, y, 170, 100);
    
    // Card title indicator
    ctx.fillStyle = colors.accent;
    ctx.fillRect(x + 15, y + 20, 40, 2);
    
    // Card value visualization
    if (i === 1) {
      // Projects - dots
      for (let j = 0; j < card.value; j++) {
        ctx.fillStyle = colors.primary;
        ctx.beginPath();
        ctx.arc(x + 20 + j * 20, y + 60, 5, 0, Math.PI * 2);
        ctx.fill();
      }
    } else {
      // Other cards - progress bars
      ctx.fillStyle = colors.lightBg;
      ctx.fillRect(x + 15, y + 60, 140, 10);
      ctx.fillStyle = colors.primary;
      
      // For numeric values, convert to visualization percentage
      const percentage = typeof card.value === 'number' ? card.value : 0.7;
      ctx.fillRect(x + 15, y + 60, 140 * percentage, 10);
    }
    
    // Target text indicator
    ctx.fillStyle = colors.accent;
    ctx.fillRect(x + 15, y + 80, 60, 2);
  });
  
  // Recent activity section
  ctx.fillStyle = colors.accent;
  ctx.fillRect(50, 280, 100, 3);
  
  // Activity list
  const activityListWidth = 530;
  
  // Activity list header
  ctx.fillStyle = colors.bg;
  ctx.fillRect(50, 290, activityListWidth, 30);
  ctx.strokeStyle = colors.border;
  ctx.strokeRect(50, 290, activityListWidth, 30);
  
  // Header column indicators
  [0.1, 0.6, 0.9].forEach(pos => {
    ctx.fillStyle = colors.accent;
    ctx.fillRect(50 + pos * activityListWidth, 305, 30, 2);
  });
  
  // Activity list items
  const activities = [
    { icon: '🕒', indicator: colors.primary },
    { icon: '📅', indicator: '#7c3aed' },
    { icon: '📊', indicator: '#2563eb' },
    { icon: '⚠️', indicator: '#f97316' }
  ];
  
  activities.forEach((activity, i) => {
    const y = 320 + i * 45;
    
    // Item background
    ctx.fillStyle = i % 2 === 0 ? colors.lightBg : colors.bg;
    ctx.fillRect(50, y, activityListWidth, 45);
    ctx.strokeStyle = colors.border;
    ctx.strokeRect(50, y, activityListWidth, 45);
    
    // Activity type indicator
    ctx.fillStyle = activity.indicator;
    ctx.fillRect(65, y + 15, 15, 15);
    
    // Activity content lines
    ctx.fillStyle = colors.accent;
    ctx.fillRect(100, y + 15, 300, 2);
    ctx.fillRect(100, y + 30, 150, 2);
    
    // Activity time indicator
    ctx.fillStyle = colors.accent;
    ctx.fillRect(450, y + 20, 80, 2);
  });
  
  // Quick actions panel
  ctx.fillStyle = colors.bg;
  ctx.fillRect(600, 290, 150, 180);
  ctx.strokeStyle = colors.border;
  ctx.strokeRect(600, 290, 150, 180);
  
  // Panel title
  ctx.fillStyle = colors.accent;
  ctx.fillRect(620, 310, 80, 3);
  
  // Action buttons
  const actions = ['Add time', 'Request', 'Report', 'Team'];
  actions.forEach((action, i) => {
    const y = 340 + i * 30;
    
    // Button outline
    ctx.strokeStyle = colors.primary;
    ctx.strokeRect(620, y, 110, 20);
    
    // Button icon - plus sign
    ctx.fillStyle = colors.primary;
    ctx.fillRect(630, y + 10, 10, 2);
    if (i === 0) {
      ctx.fillRect(634, y + 6, 2, 10);
    }
    
    // Button text indicator
    ctx.fillStyle = colors.primary;
    ctx.fillRect(650, y + 10, 70, 2);
  });
};

const MockupImages: React.FC = () => {
  const canvasesRendered = useRef(false);
  
  useEffect(() => {
    if (canvasesRendered.current) return;
    
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
    
    // Convert canvases to image sources
    setTimeout(() => {
      updateImageSources();
      canvasesRendered.current = true;
    }, 500);
  }, []);
  
  const updateImageSources = () => {
    try {
      updateImgSrc('dashboard-mockup', '/dashboard-mockup.png');
      updateImgSrc('time-tracking-mockup', '/time-tracking-mockup.png');
      updateImgSrc('vacation-calendar-mockup', '/vacation-calendar-mockup.png');
      updateImgSrc('compliance-report-mockup', '/compliance-report-mockup.png');
      updateImgSrc('analytics-dashboard-mockup', '/analytics-dashboard-mockup.png');
      
      console.log("All mockup images updated successfully!");
    } catch (e) {
      console.error('Error updating image sources:', e);
    }
  };
  
  const updateImgSrc = (canvasId: string, imgSrc: string) => {
    try {
      const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
      if (!canvas) {
        console.error(`Canvas not found: ${canvasId}`);
        return;
      }
      
      const dataUrl = canvas.toDataURL('image/png');
      
      // Find all images with this source and update them
      const images = document.querySelectorAll(`img[src="${imgSrc}"]`);
      
      if (images.length === 0) {
        // If no images are found, create a link preload to ensure the data URL is available
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = dataUrl;
        link.as = 'image';
        document.head.appendChild(link);
        
        // Also add this to sessionStorage for faster retrieval
        sessionStorage.setItem(imgSrc, dataUrl);
      }
      
      images.forEach((img: Element) => {
        (img as HTMLImageElement).src = dataUrl;
        console.log(`Updated image source for ${imgSrc}`);
      });
    } catch (e) {
      console.error(`Error updating image source for ${canvasId}:`, e);
    }
  };
  
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
