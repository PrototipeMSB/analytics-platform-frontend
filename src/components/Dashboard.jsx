import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedPeriod, setSelectedPeriod] = useState('30 дн.');

  // Цветовая гамма как в макете
  const colors = {
    purple: '#6E5DC6', // Фиолетовый для графика текущего месяца
    teal: '#007C89',   // Бирюзовый для трендовой линии и выделения
    gray: '#cccccc',   // Серый для предыдущего месяца
    metric1: '#4F46E5', // Индиго для первой метрики
    metric2: '#0EA5E9', // Голубой для второй метрики
    metric3: '#10B981', // Зеленый для третьей метрики
    metric4: '#F59E0B', // Оранжевый для четвертой метрики
    positive: '#10B981', // Зеленый для положительных изменений
    negative: '#EF4444', // Красный для отрицательных изменений
  };

  // Стили как на рисунке
  const styles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      background: '#f5f7fa',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    sidebar: {
      width: '220px',
      background: '#ffffff',
      borderRight: '1px solid #e0e0e0',
      paddingTop: '20px'
    },
    sidebarItem: {
      padding: '15px 25px',
      color: '#333333',
      fontSize: '16px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      borderLeft: '4px solid transparent'
    },
    sidebarItemActive: {
      background: colors.teal, // БИРЮЗОВЫЙ фон для активного элемента
      color: '#ffffff', // БЕЛЫЙ текст для активного элемента
      fontWeight: '600',
      borderLeft: `4px solid ${colors.teal}`
    },
    mainContent: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    },
    topBar: {
      background: '#ffffff',
      padding: '15px 30px',
      borderBottom: '1px solid #e0e0e0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    pageTitle: {
      color: '#1a1a1a',
      margin: '0',
      fontSize: '24px',
      fontWeight: '700'
    },
    userInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      color: '#666666'
    },
    userName: {
      fontWeight: '600',
      fontSize: '14px'
    },
    userAvatar: {
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      background: '#e6f2ff',
      color: '#0066cc',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '600',
      fontSize: '14px'
    },
    contentArea: {
      padding: '30px',
      flex: 1
    },
    header: {
      marginBottom: '30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    },
    title: {
      color: '#1a1a1a',
      margin: '0 0 10px 0',
      fontSize: '28px',
      fontWeight: '700'
    },
    periodSelector: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      color: '#666666',
      fontSize: '14px'
    },
    periodSelect: {
      border: '1px solid #cccccc',
      borderRadius: '4px',
      padding: '6px 12px',
      fontSize: '14px',
      background: '#ffffff',
      cursor: 'pointer',
      minWidth: '100px'
    },
    periodOption: {
      padding: '8px 12px'
    },
    metricsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '20px',
      marginBottom: '30px'
    },
    metricCard: {
      background: '#ffffff',
      padding: '20px',
      borderRadius: '8px',
      border: '1px solid #e0e0e0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      position: 'relative',
      overflow: 'hidden'
    },
    metricCardBorder: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px'
    },
    metricLabel: {
      color: '#666666',
      fontSize: '14px',
      marginBottom: '10px',
      fontWeight: '500'
    },
    metricValue: {
      color: '#1a1a1a',
      fontSize: '28px',
      fontWeight: '700',
      marginBottom: '8px'
    },
    metricChange: {
      fontSize: '14px',
      fontWeight: '600'
    },
    positiveChange: {
      color: colors.positive
    },
    negativeChange: {
      color: colors.negative
    },
    fullWidthCard: {
      background: '#ffffff',
      padding: '20px',
      borderRadius: '8px',
      border: '2px solid #e0e0e0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      marginBottom: '30px'
    },
    sectionTitle: {
      color: colors.teal, // БИРЮЗОВЫЙ цвет для заголовков разделов
      margin: '0 0 20px 0',
      fontSize: '24px',
      fontWeight: '800'
    },
    chartContainer: {
      height: '300px',
      position: 'relative',
      padding: '20px 0 40px 40px'
    },
    yAxis: {
      position: 'absolute',
      left: '0',
      top: '0',
      bottom: '40px',
      width: '55px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingRight: '10px',
      borderRight: '1px solid #e0e0e0'
    },
    yAxisLabel: {
      position: 'absolute',
      left: '0',
      bottom: '120px',
      width: '40px',
      color: '#666666',
      fontSize: '11px',
      textAlign: 'center',
      transform: 'rotate(-90deg)',
      transformOrigin: 'top left',
      whiteSpace: 'nowrap'
    },
    yLabel: {
      color: '#666666',
      fontSize: '12px',
      textAlign: 'right'
    },
    xAxis: {
      position: 'absolute',
      left: '40px',
      right: '0',
      bottom: '0',
      height: '40px',
      borderTop: '1px solid #e0e0e0',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 0 0 0',
      overflowX: 'auto'
    },
    xLabelContainer: {
      display: 'flex',
      minWidth: '1140px' // Ширина соответствует графику
    },
    xLabel: {
      color: '#666666',
      fontSize: '11px',
      textAlign: 'center',
      width: '38px', // 1140px / 30 = 38px
      flexShrink: 0
    },
    bottomSection: {
      display: 'grid',
      gridTemplateColumns: '3fr 2fr',
      gap: '30px'
    },
    chartCard: {
      background: '#ffffff',
      padding: '20px',
      borderRadius: '8px',
      border: '1px solid #e0e0e0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    },
    topProductsList: {
      listStyle: 'none',
      padding: '0',
      margin: '0'
    },
    topProductItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 0',
      borderBottom: '1px solid #f0f0f0'
    },
    topProductName: {
      color: '#333333',
      fontSize: '14px',
      fontWeight: '500'
    },
    topProductValue: {
      color: '#1a1a1a',
      fontSize: '16px',
      fontWeight: '600'
    },
    topProductPercent: {
      color: '#666666',
      fontSize: '12px'
    },
    showAllButton: {
      background: 'none',
      border: 'none',
      color: '#0066cc',
      fontSize: '14px',
      cursor: 'pointer',
      padding: '10px 0 0 0',
      fontWeight: '500'
    },
    legendContainer: {
      display: 'flex',
      gap: '20px',
      marginTop: '20px',
      fontSize: '14px'
    },
    legendItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    legendColor: {
      width: '16px',
      height: '16px',
      borderRadius: '3px'
    }
  };

  // Данные для графика - 30 дней
  const salesData = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    current: [
      128349.38, 410169.73, 164883.53, 329244.80, 365507.45,
      277930.69, 375739.73, 602903.09, 228449.23, 106781.84,
      452303.64, 451319.44, 254428.69, 230214.00, 508538.75,
      359381.66, 122885.38, 153802.81, 557579.02, 527968.20,
      456444.06, 172298.97, 178119.32, 554253.10, 513391.87,
      298870.38, 128026.97, 498764.63, 616359.47, 555152.46
    ][i],
    previous: [
      400158.05, 83754.98, 613831.09, 543511.76, 133406.13,
      585492.94, 313616.40, 236764.01, 232929.03, 508640.56,
      483967.70, 315822.36, 333334.32, 99281.57, 434605.02,
      205184.79, 369546.06, 201264.97, 414479.85, 547312.80,
      84637.36, 187944.34, 101385.72, 296630.48, 589141.27,
      304181.66, 542035.46, 143740.22, 274231.46, 373601.64
    ][i]
  }));

  const topProducts = [
    { id: 4, name: 'Товар 4', value: 924933, percent: '8.74%' },
    { id: 16, name: 'Товар 16', value: 916666, percent: '8.66%' },
    { id: 17, name: 'Товар 17', value: 852284, percent: '8.06%' },
    { id: 20, name: 'Товар 20', value: 841132, percent: '7.95%' },
    { id: 14, name: 'Товар 14', value: 793697, percent: '7.50%' }
  ];

  // Данные для круговой диаграммы (категории)
  const categoryData = [
    { name: 'Электроника', value: 35, color: '#8b5cf6' },
    { name: 'Одежда', value: 25, color: '#3b82f6' },
    { name: 'Косметика', value: 20, color: '#10b981' },
    { name: 'Бытовая техника', value: 15, color: '#f59e0b' },
    { name: 'Прочее', value: 5, color: '#ef4444' }
  ];

  // Навигация
  const navigateToHome = () => navigate('/');
  const navigateToReports = () => navigate('/reports');
  const navigateToForecasts = () => navigate('/forecasts');
  const navigateToUpload = () => navigate('/upload');
  const navigateToSettings = () => navigate('/settings');

  // Форматирование чисел
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  // Максимальное значение для масштабирования графика
  const maxValue = Math.max(...salesData.map(item => Math.max(item.current, item.previous)));

  // Функция для расчета координат линии в пикселях
  const getLinePoints = (data, maxValue, width, height) => {
    return data.map((item, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = (item.current / maxValue) * height;
      return `${x},${y}`;
    }).join(' ');
  };

  // Функция для расчета координат линии предыдущего месяца
  const getPreviousLinePoints = (data, maxValue, width, height) => {
    return data.map((item, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = (item.previous / maxValue) * height;
      return `${x},${y}`;
    }).join(' ');
  };

  // Размеры области графика
  const chartWidth = 1110;
  const chartHeight = 220;

  // Функция для расчета линейной регрессии (тренда)
  const calculateLinearRegression = (data) => {
    const n = data.length;
    
    // Суммы для расчета коэффициентов линейной регрессии
    let sumX = 0;
    let sumY = 0;
    let sumXY = 0;
    let sumX2 = 0;
    
    // X - это индекс точки (0, 1, 2, ...)
    // Y - это значение current
    data.forEach((item, i) => {
      const x = i;
      const y = item.current;
      sumX += x;
      sumY += y;
      sumXY += x * y;
      sumX2 += x * x;
    });
    
    // Расчет коэффициентов линейной регрессии y = a + bx
    const b = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const a = (sumY - b * sumX) / n;
    
    return { a, b }; // Возвращаем коэффициенты
  };

  // Получаем коэффициенты линейной регрессии
  const regression = calculateLinearRegression(salesData);

  // Функция для расчета координат трендовой линии
  const getTrendLinePoints = () => {
    // Рассчитываем y для первой и последней точек по уравнению линейной регрессии
    const firstY = regression.a + regression.b * 0; // x = 0 для первой точки
    const lastY = regression.a + regression.b * (salesData.length - 1); // x = n-1 для последней точки
    
    // Преобразуем значения в координаты на графике
    const y1 = (firstY / maxValue) * chartHeight;
    const y2 = (lastY / maxValue) * chartHeight;
    
    return {
      x1: 0,
      y1: y1,
      x2: chartWidth,
      y2: y2
    };
  };

  const trendLine = getTrendLinePoints();

  // Функция для расчета сегментов круговой диаграммы
  const calculatePieSegments = () => {
    let currentAngle = 0;
    const segments = [];
    
    categoryData.forEach(item => {
      const angle = (item.value / 100) * 360;
      segments.push({
        ...item,
        startAngle: currentAngle,
        endAngle: currentAngle + angle
      });
      currentAngle += angle;
    });
    
    return segments;
  };

  const pieSegments = calculatePieSegments();

  // Функция для преобразования углов в координаты дуги
  const getArcPath = (cx, cy, radius, startAngle, endAngle) => {
    const startRad = (startAngle - 90) * Math.PI / 180;
    const endRad = (endAngle - 90) * Math.PI / 180;
    
    const x1 = cx + radius * Math.cos(startRad);
    const y1 = cy + radius * Math.sin(startRad);
    const x2 = cx + radius * Math.cos(endRad);
    const y2 = cy + radius * Math.sin(endRad);
    
    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
    
    return `M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
  };

  // Функция для форматирования чисел на оси Y
  const formatYAxisValue = (value) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(0)}M`;
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}K`;
    }
    return value.toFixed(0);
  };

  // Вычисляем значения для оси Y
  const yAxisValues = [maxValue, maxValue * 0.75, maxValue * 0.5, maxValue * 0.25, 0];

  // Обработчик изменения периода
  const handlePeriodChange = (event) => {
    setSelectedPeriod(event.target.value);
  };

  // Рассчитаем среднюю выручку для информации
  const averageCurrent = salesData.reduce((sum, item) => sum + item.current, 0) / salesData.length;
  const averagePrevious = salesData.reduce((sum, item) => sum + item.previous, 0) / salesData.length;
  const growthPercentage = ((averageCurrent - averagePrevious) / averagePrevious) * 100;

  return (
    <div style={styles.container}>
      {/* Боковая панель */}
      <div style={styles.sidebar}>
        <div style={{...styles.sidebarItem, ...styles.sidebarItemActive}}>
          📊 Аналитика
        </div>
        <div style={styles.sidebarItem} onClick={navigateToReports}>
          📋 Отчеты
        </div>
        <div style={styles.sidebarItem} onClick={navigateToForecasts}>
          🔮 Прогнозы
        </div>
        <div style={styles.sidebarItem} onClick={navigateToUpload}>
          📤 Загрузка данных
        </div>
        <div style={styles.sidebarItem} onClick={navigateToSettings}>
          ⚙️ Настройки
        </div>
      </div>

      <div style={styles.mainContent}>
        {/* Шапка с пользователем */}
        <div style={styles.topBar}>
          <h1 style={styles.pageTitle}>Бизнес-аналитика</h1>
          <div style={styles.userInfo}>
            <div style={styles.userName}>Иванов И.</div>
            <div style={styles.userAvatar}>ИИ</div>
          </div>
        </div>

        <div style={styles.contentArea}>
          {/* Заголовок и период */}
          <div style={styles.header}>
            <div>
              <h2 style={styles.title}>Обзор показателей</h2>
              <div style={styles.periodSelector}>
                <span>Период:</span>
                <select 
                  value={selectedPeriod}
                  onChange={handlePeriodChange}
                  style={styles.periodSelect}
                >
                  <option value="7 дн.">7 дн.</option>
                  <option value="14 дн.">14 дн.</option>
                  <option value="30 дн.">30 дн.</option>
                  <option value="90 дн.">90 дн.</option>
                  <option value="365 дн.">365 дн.</option>
                </select>
              </div>
            </div>
          </div>

          {/* Основные метрики с цветными верхними границами */}
          <div style={styles.metricsGrid}>
            <div style={styles.metricCard}>
              <div style={{...styles.metricCardBorder, backgroundColor: colors.metric1}}></div>
              <div style={styles.metricLabel}>Выручка</div>
              <div style={styles.metricValue}>10 580 620 руб.</div>
              <div style={{...styles.metricChange, ...styles.positiveChange}}>+12,5% м/м</div>
            </div>
            
            <div style={styles.metricCard}>
              <div style={{...styles.metricCardBorder, backgroundColor: colors.metric2}}></div>
              <div style={styles.metricLabel}>Средний чек</div>
              <div style={styles.metricValue}>4 256 руб.</div>
              <div style={{...styles.metricChange, ...styles.positiveChange}}>+3,2% м/м</div>
            </div>
            
            <div style={styles.metricCard}>
              <div style={{...styles.metricCardBorder, backgroundColor: colors.metric3}}></div>
              <div style={styles.metricLabel}>Активные клиенты</div>
              <div style={styles.metricValue}>1 847 чел.</div>
              <div style={{...styles.metricChange, ...styles.positiveChange}}>+5,7% м/м</div>
            </div>
            
            <div style={styles.metricCard}>
              <div style={{...styles.metricCardBorder, backgroundColor: colors.metric4}}></div>
              <div style={styles.metricLabel}>Конверсия</div>
              <div style={styles.metricValue}>18,4%</div>
              <div style={{...styles.metricChange, ...styles.negativeChange}}>-2,5% м/м</div>
            </div>
          </div>

          {/* График Динамика продаж на всю ширину */}
          <div style={styles.fullWidthCard}>
            <h3 style={styles.sectionTitle}>Динамика продаж</h3>
            
            <div style={styles.chartContainer}>
              {/* Ось Y с меткой */}
              <div style={styles.yAxis}>
                {yAxisValues.map((value, index) => (
                  <div key={index} style={styles.yLabel}>
                    {formatYAxisValue(value)}
                  </div>
                ))}
              </div>
              
              {/* Метка оси Y */}
              <div style={styles.yAxisLabel}>
                (Выручка, руб.)
              </div>

              {/* Ось X с подписями для каждого дня */}
              <div style={styles.xAxis}>
                <div style={styles.xLabelContainer}>
                  {salesData.map((item, index) => (
                    <div key={index} style={styles.xLabel}>
                      День {item.day}
                    </div>
                  ))}
                </div>
              </div>

              {/* Графическая область */}
              <div style={{
                position: 'absolute',
                left: '40px',
                right: '0',
                top: '0',
                bottom: '40px',
                padding: '0 20px'
              }}>
                {/* Горизонтальные линии сетки */}
                {[0, 1, 2, 3, 4].map(i => (
                  <div key={i} style={{
                    position: 'absolute',
                    left: '0',
                    right: '0',
                    top: `${i * 25}%`,
                    borderTop: '1px solid #f0f0f0'
                  }} />
                ))}
                
                {/* SVG для всех линий */}
                <svg width="100%" height="100%" style={{ position: 'absolute' }}>
                  {/* Линия текущего месяца - ФИОЛЕТОВАЯ */}
                  <polyline
                    points={getLinePoints(salesData, maxValue, chartWidth, chartHeight)}
                    fill="none"
                    stroke={colors.purple}
                    strokeWidth="3"
                  />
                  
                  {/* Линия предыдущего месяца */}
                  <polyline
                    points={getPreviousLinePoints(salesData, maxValue, chartWidth, chartHeight)}
                    fill="none"
                    stroke={colors.gray}
                    strokeWidth="3"
                    strokeDasharray="5,5"
                  />
                  
                  {/* Трендовая линия - БИРЮЗОВАЯ (рассчитанная через линейную регрессию) */}
                  <line
                    x1={trendLine.x1}
                    y1={trendLine.y1}
                    x2={trendLine.x2}
                    y2={trendLine.y2}
                    stroke={colors.teal}
                    strokeWidth="1.5"
                    strokeDasharray="3,3"
                  />
                </svg>
              </div>
            </div>

            {/* Легенда с обновленными цветами */}
            <div style={styles.legendContainer}>
              <div style={styles.legendItem}>
                <div style={{...styles.legendColor, backgroundColor: colors.purple}}></div>
                <span>Текущий месяц</span>
              </div>
              <div style={styles.legendItem}>
                <div style={{...styles.legendColor, backgroundColor: colors.gray}}></div>
                <span>Предыдущий месяц</span>
              </div>
              <div style={styles.legendItem}>
                <div style={{
                  ...styles.legendColor,
                  backgroundColor: colors.teal
                }}></div>
                <span>Трендовая линия</span>
              </div>
            </div>
          </div>

          {/* Блок с топ товарами и круговой диаграммой */}
          <div style={styles.bottomSection}>
            {/* Топ товаров */}
            <div style={styles.chartCard}>
              <h3 style={styles.sectionTitle}>Топ-5 товаров по выручке</h3>
              
              <ul style={styles.topProductsList}>
                {topProducts.map(product => (
                  <li key={product.id} style={styles.topProductItem}>
                    <div>
                      <div style={styles.topProductName}>{product.name}</div>
                      <div style={styles.topProductPercent}>{product.percent}</div>
                    </div>
                    <div style={styles.topProductValue}>
                      {formatNumber(product.value)} руб.
                    </div>
                  </li>
                ))}
              </ul>
              
              <button style={styles.showAllButton}>
                ...[Показать все]
              </button>
            </div>

            {/* Круговая диаграмма */}
            <div style={styles.chartCard}>
              <h3 style={styles.sectionTitle}>Распределение по категориям</h3>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                height: '260px'
              }}>
                {/* Диаграмма */}
                <div style={{
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <svg width="160" height="160" viewBox="0 0 160 160">
                    {pieSegments.map((segment, index) => (
                      <path
                        key={index}
                        d={getArcPath(80, 80, 60, segment.startAngle, segment.endAngle)}
                        fill={segment.color}
                        stroke="#ffffff"
                        strokeWidth="2"
                      />
                    ))}
                    {/* Центральный круг */}
                    <circle cx="80" cy="80" r="25" fill="#ffffff" />
                    <text
                      x="80"
                      y="80"
                      textAnchor="middle"
                      dy="4"
                      fontSize="12"
                      fontWeight="600"
                      fill="#333333"
                    >
                      100%
                    </text>
                  </svg>
                </div>
                
                {/* Легенда */}
                <div style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  {categoryData.map((item, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '12px'
                    }}>
                      <div style={{
                        width: '10px',
                        height: '10px',
                        backgroundColor: item.color,
                        borderRadius: '2px'
                      }}></div>
                      <div style={{ flex: 1, color: '#333333' }}>{item.name}</div>
                      <div style={{ color: '#666666', fontWeight: '600' }}>{item.value}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;