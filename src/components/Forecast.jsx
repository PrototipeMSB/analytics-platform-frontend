import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Forecast = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState('Товар 4');
  const [forecastPeriod, setForecastPeriod] = useState('4 недели');

  // Цвета для консистентности с Dashboard
  const colors = {
    teal: '#007C89',   // Бирюзовый для активного элемента и заголовков
    purple: '#6E5DC6', // Фиолетовый для кнопки
  };

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
    headerTitle: {
      color: '#1a1a1a',
      margin: '0 0 10px 0',
      fontSize: '28px',
      fontWeight: '700'
    },
    headerSubtitle: {
      color: '#666666',
      fontSize: '14px',
      margin: 0
    },
    controls: {
      display: 'flex',
      gap: '15px',
      alignItems: 'center'
    },
    selectContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px'
    },
    selectLabel: {
      fontSize: '12px',
      color: '#666666',
      marginBottom: '4px'
    },
    select: {
      border: '1px solid #cccccc',
      borderRadius: '4px',
      padding: '8px 35px 8px 12px',
      fontSize: '14px',
      background: '#ffffff',
      color: '#333333',
      cursor: 'pointer',
      minWidth: '200px'
    },
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: '30px',
      marginBottom: '30px'
    },
    card: {
      background: '#ffffff',
      padding: '25px',
      borderRadius: '8px',
      border: '1px solid #e0e0e0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    },
    wideCard: {
      gridColumn: '1 / -1',
      background: '#ffffff',
      padding: '30px',
      borderRadius: '8px',
      border: '1px solid #e0e0e0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    },
    cardTitle: {
      color: colors.teal, // БИРЮЗОВЫЙ цвет для заголовка карточки
      margin: '0 0 20px 0',
      fontSize: '24px',
      fontWeight: '800'
    },
    chartContainer: {
      height: '350px',
      position: 'relative',
      padding: '20px 0 40px 60px'
    },
    yAxis: {
      position: 'absolute',
      left: '0',
      top: '0',
      bottom: '40px',
      width: '50px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingRight: '10px',
      borderRight: '1px solid #e0e0e0'
    },
    yAxisLabel: {
      position: 'absolute',
      left: '10px',
      bottom: '150px',
      width: '80px',
      color: '#666666',
      fontSize: '12px',
      textAlign: 'center',
      transform: 'rotate(-90deg)',
      transformOrigin: 'top left',
      whiteSpace: 'nowrap'
    },
    yLabel: {
      color: '#666666',
      fontSize: '12px',
      textAlign: 'right',
      fontWeight: '500'
    },
    xAxis: {
      position: 'absolute',
      left: '60px',
      right: '0',
      bottom: '0',
      height: '40px',
      borderTop: '1px solid #e0e0e0',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 0 0 0'
    },
    xLabelContainer: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between'
    },
    xLabel: {
      color: '#666666',
      fontSize: '12px',
      textAlign: 'center',
      width: '60px',
      flexShrink: 0
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '15px',
      marginTop: '30px'
    },
    button: {
      padding: '10px 20px',
      borderRadius: '4px',
      border: 'none',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    primaryButton: {
      background: '#0066cc',
      color: '#ffffff'
    },
    purpleButton: {
      background: colors.purple, // ФИОЛЕТОВАЯ кнопка
      color: '#ffffff'
    },
    secondaryButton: {
      background: '#f0f0f0',
      color: '#333333',
      border: '1px solid #cccccc'
    },
    factorsContainer: {
      marginTop: '20px'
    },
    factorRow: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '15px'
    },
    factorBarContainer: {
      flex: 1,
      marginLeft: '15px',
      height: '24px',
      background: '#f0f0f0',
      borderRadius: '12px',
      overflow: 'hidden',
      position: 'relative'
    },
    factorBar: {
      height: '100%',
      borderRadius: '12px',
      position: 'absolute',
      left: 0,
      top: 0
    },
    factorLabel: {
      fontSize: '14px',
      color: '#333333',
      minWidth: '150px'
    },
    factorValue: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#333333',
      marginLeft: '10px',
      minWidth: '50px'
    },
    tableContainer: {
      marginTop: '40px'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse'
    },
    th: {
      textAlign: 'left',
      padding: '12px 15px',
      borderBottom: '2px solid #e0e0e0',
      color: '#666666',
      fontSize: '14px',
      fontWeight: '600'
    },
    td: {
      padding: '15px',
      borderBottom: '1px solid #f0f0f0',
      fontSize: '14px',
      color: '#333333'
    },
    accuracyGood: {
      color: '#00a86b',
      fontWeight: '600'
    },
    linkButton: {
      color: '#0066cc',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500',
      textDecoration: 'underline'
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

  // Данные по месяцам - с четким разделением на факт и прогноз
  const monthlyData = [
    { month: 'янв.25', actual: 8700, forecast: null },
    { month: 'фев.25', actual: 7800, forecast: null },
    { month: 'мар.25', actual: 3800, forecast: null },
    { month: 'апр.25', actual: 8500, forecast: null },
    { month: 'май.25', actual: 4000, forecast: null },
    { month: 'июн.25', actual: 7400, forecast: 7400 },
    { month: 'июл.25', actual: null, forecast: 9000 },
    { month: 'авг.25', actual: null, forecast: 8400 },
    { month: 'сен.25', actual: null, forecast: 7890 },
    { month: 'окт.25', actual: null, forecast: 5200 },
    { month: 'ноя.25', actual: null, forecast: 3400 },
    { month: 'дек.25', actual: null, forecast: 5600 }
  ];

  const factors = [
    { name: 'Сезонность', value: 89, color: '#4F46E5' },
    { name: 'Тренд роста', value: 52, color: '#0EA5E9' },
    { name: 'История продаж', value: 27, color: '#10B981' },
    { name: 'Акции на товар', value: 8, color: '#F59E0B' }
  ];

  const forecastHistory = [
    { date: '01.03.2025', accuracy: 88.2, period: '30 дн.' },
    { date: '15.04.2025', accuracy: 85.4, period: '14 дн.' },
    { date: '07.08.2025', accuracy: 91.3, period: '30 дн.' }
  ];

  // Максимальное значение для масштабирования графика
  const maxValue = 10000;

  // Размеры области графика
  const chartWidth = 1080;
  const chartHeight = 250;

  // Функция для форматирования чисел на оси Y
  const formatYAxisValue = (value) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}K`;
    }
    return value.toFixed(0);
  };

  // Значения для оси Y
  const yAxisValues = [10000, 7000, 5000, 2000, 0];

  // Навигация
  const navigateToHome = () => navigate('/');
  const navigateToReports = () => navigate('/reports');
  const navigateToForecasts = () => {};
  const navigateToUpload = () => navigate('/upload');
  const navigateToSettings = () => navigate('/settings');

  // Получаем индекс разделителя (после 6 месяцев фактических данных)
  const dividerIndex = 6; // После июня

  // Функция для получения точек для фактических данных
  const getActualPoints = () => {
    const points = [];
    const widthPerPoint = chartWidth / (monthlyData.length - 1);
    
    monthlyData.forEach((item, i) => {
      if (item.actual !== null && i < dividerIndex) {
        const x = i * widthPerPoint;
        const y = chartHeight - (item.actual / maxValue) * chartHeight;
        points.push({ 
          x, 
          y, 
          value: item.actual,
          month: item.month
        });
      }
    });
    
    return points;
  };

  // Функция для получения точек для прогноза
  const getForecastPoints = () => {
    const points = [];
    const widthPerPoint = chartWidth / (monthlyData.length-1);
    
    monthlyData.forEach((item, i) => {
      if (item.forecast !== null && i >= dividerIndex - 1) {
        // Используем dividerIndex - 1, чтобы включить точку июня как начало прогноза
        const x = i * widthPerPoint;
        const y = chartHeight - (item.forecast / maxValue) * chartHeight;
        points.push({ 
          x, 
          y, 
          value: item.forecast,
          month: item.month
        });
      }
    });
    
    return points;
  };

  // Получаем точки для фактических данных и прогноза
  const actualPoints = getActualPoints();
  const forecastPoints = getForecastPoints();

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <div style={styles.sidebarItem} onClick={navigateToHome}>
          📊 Аналитика
        </div>
        <div style={styles.sidebarItem} onClick={navigateToReports}>
          📋 Отчеты
        </div>
        <div style={{...styles.sidebarItem, ...styles.sidebarItemActive}} onClick={navigateToForecasts}>
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
        <div style={styles.topBar}>
          <h1 style={styles.pageTitle}>Прогнозы</h1>
          <div style={styles.userInfo}>
            <div style={styles.userName}>Иванов И.</div>
            <div style={styles.userAvatar}>ИИ</div>
          </div>
        </div>

        <div style={styles.contentArea}>
          <div style={styles.header}>
            <div>
              <h2 style={styles.headerTitle}>Прогноз спроса</h2>
              <p style={styles.headerSubtitle}>
                Выберите товар или категорию и период для построения прогноза
              </p>
            </div>
            <div style={styles.controls}>
              <div style={styles.selectContainer}>
                <div style={styles.selectLabel}>Выберите товар или категорию:</div>
                <select 
                  style={styles.select}
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                >
                  <option value="Товар 1">Товар 1</option>
                  <option value="Товар 2">Товар 2</option>
                  <option value="Товар 3">Товар 3</option>
                  <option value="Товар 4">Товар 4</option>
                </select>
              </div>
              <div style={styles.selectContainer}>
                <div style={styles.selectLabel}>Прогноз на:</div>
                <select 
                  style={styles.select}
                  value={forecastPeriod}
                  onChange={(e) => setForecastPeriod(e.target.value)}
                >
                  <option value="1 неделя">1 неделя</option>
                  <option value="2 недели">2 недели</option>
                  <option value="4 недели">4 недели</option>
                  <option value="1 месяц">1 месяц</option>
                  <option value="3 месяца">3 месяца</option>
                </select>
              </div>
            </div>
          </div>

          <div style={styles.wideCard}>
            <h3 style={styles.cardTitle}>Прогноз спроса на {selectedProduct}</h3>
            
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
                (спрос, шт)
              </div>

              {/* Ось X с подписями месяцев */}
              <div style={styles.xAxis}>
                <div style={styles.xLabelContainer}>
                  {monthlyData.map((item, index) => (
                    <div key={index} style={styles.xLabel}>
                      {item.month}
                    </div>
                  ))}
                </div>
              </div>

              {/* Графическая область */}
              <div style={{
                position: 'absolute',
                left: '60px',
                right: '20px',
                top: '0',
                bottom: '40px'
              }}>
                {/* Горизонтальные линии сетки */}
                {[0, 0.25, 0.5, 0.75, 1.0].map((percent, i) => (
                  <div key={i} style={{
                    position: 'absolute',
                    left: '0',
                    right: '0',
                    top: `${percent * 100}%`,
                    borderTop: '1px solid #f0f0f0',
                    height: '1px'
                  }} />
                ))}
                
                {/* Вертикальная линия-разделитель */}
                <div style={{
                  position: 'absolute',
                  left: `${(dividerIndex / monthlyData.length) * 100}%`,
                  top: '-10px',
                  bottom: '-10px',
                  borderLeft: '2px solid #333333',
                  zIndex: 10
                }} />
                
                {/* SVG для всех линий */}
                <svg width="100%" height="100%" style={{ position: 'absolute', overflow: 'visible' }}>
                  {/* Линия фактических данных (первые 6 месяцев) - СПЛОШНАЯ СИНЯЯ */}
                  {actualPoints.length > 0 && (
                    <polyline
                      points={actualPoints.map(p => `${p.x},${p.y}`).join(' ')}
                      fill="none"
                      stroke="#0066cc"
                      strokeWidth="3"
                    />
                  )}
                  
                  {/* Линия прогноза (последние 6 месяцев) - ПУНКТИР СЕРЫЙ */}
                  {forecastPoints.length > 0 && (
                    <polyline
                      points={forecastPoints.map(p => `${p.x},${p.y}`).join(' ')}
                      fill="none"
                      stroke="#666666"
                      strokeWidth="3"
                      strokeDasharray="5,5"
                    />
                  )}
                  
                  {/* Точки и подписи для фактических данных */}
                  {actualPoints.map((point, i) => (
                    <g key={`actual-${i}`}>
                      <circle
                        cx={point.x}
                        cy={point.y}
                        r="6"
                        fill="#0066cc"
                        stroke="#ffffff"
                        strokeWidth="2"
                      />
                      <text
                        x={point.x}
                        y={point.y - 15}
                        textAnchor="middle"
                        fontSize="11px"
                        fontWeight="600"
                        fill="#0066cc"
                      >
                        {point.value}
                      </text>
                    </g>
                  ))}
                  
                  {/* Точки и подписи для прогноза */}
                  {forecastPoints.map((point, i) => (
                    <g key={`forecast-${i}`}>
                      <circle
                        cx={point.x}
                        cy={point.y}
                        r="6"
                        fill="#666666"
                        stroke="#ffffff"
                        strokeWidth="2"
                      />
                      <text
                        x={point.x}
                        y={point.y - 15}
                        textAnchor="middle"
                        fontSize="11px"
                        fontWeight="600"
                        fill="#666666"
                      >
                        {point.value}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>
            </div>

            {/* Легенда */}
            <div style={styles.legendContainer}>
              <div style={styles.legendItem}>
                <div style={{...styles.legendColor, backgroundColor: '#0066cc'}}></div>
                <span>Фактические продажи</span>
              </div>
              <div style={styles.legendItem}>
                <div style={{...styles.legendColor, backgroundColor: '#666666'}}></div>
                <span>Прогноз ML-модели</span>
              </div>
            </div>
            
            <div style={styles.buttonContainer}>
              <button style={{...styles.button, ...styles.primaryButton}}>
                <span>ОБНОВИТЬ</span>
              </button>
              <button style={{...styles.button, ...styles.purpleButton}}>
                <span>Экспортировать прогноз</span>
              </button>
            </div>
          </div>

          <div style={styles.gridContainer}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Что повлияло на прогноз?</h3>
              
              <div style={styles.factorsContainer}>
                {factors.map((factor, index) => (
                  <div key={index} style={styles.factorRow}>
                    <div style={styles.factorLabel}>{factor.name}</div>
                    <div style={styles.factorBarContainer}>
                      <div 
                        style={{
                          ...styles.factorBar,
                          width: `${Math.min(factor.value, 100)}%`,
                          background: factor.color
                        }}
                      />
                    </div>
                    <div style={styles.factorValue}>{factor.value}%</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Таблица предыдущих прогнозных запросов</h3>
              <p style={{ color: '#666666', fontSize: '14px', marginBottom: '15px' }}>
                (по выбранному товару/категории)
              </p>
              
              <div style={styles.tableContainer}>
                <table style={styles.table}>
                  <thead>
                    <tr>
                      <th style={styles.th}>Дата</th>
                      <th style={styles.th}>Точность</th>
                      <th style={styles.th}>Период</th>
                      <th style={styles.th}>Действие</th>
                    </tr>
                  </thead>
                  <tbody>
                    {forecastHistory.map((item, index) => (
                      <tr key={index}>
                        <td style={styles.td}>{item.date}</td>
                        <td style={{...styles.td, ...styles.accuracyGood}}>{item.accuracy}%</td>
                        <td style={styles.td}>{item.period}</td>
                        <td style={styles.td}>
                          <button style={styles.linkButton}>
                            Просмотр документа
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;