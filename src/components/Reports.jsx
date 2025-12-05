import React from 'react';
import { useNavigate } from 'react-router-dom';

const Reports = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      background: '#f8fafc',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    sidebar: {
      width: '250px',
      background: '#ffffff',
      borderRight: '1px solid #e2e8f0',
      padding: '20px 0',
      boxShadow: '1px 0 5px rgba(0, 0, 0, 0.05)'
    },
    sidebarItem: {
      padding: '15px 25px',
      color: '#4a5568',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'all 0.2s',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      textDecoration: 'none',
      borderLeft: '4px solid transparent',
      '&:hover': {
        backgroundColor: '#f7fafc'
      }
    },
    sidebarItemActive: {
      background: '#f0f9ff',
      color: '#0369a1',
      fontWeight: '600',
      borderLeft: '4px solid #0284c7'
    },
    mainContent: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    },
    topBar: {
      background: '#ffffff',
      padding: '15px 30px',
      borderBottom: '1px solid #e2e8f0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
    },
    pageTitle: {
      color: '#1e293b',
      margin: '0',
      fontSize: '24px',
      fontWeight: '700'
    },
    userInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      color: '#475569'
    },
    userName: {
      fontWeight: '600',
      fontSize: '14px'
    },
    userAvatar: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: '#e0f2fe',
      color: '#0369a1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '600',
      fontSize: '16px',
      border: '2px solid #bae6fd',
      cursor: 'pointer'
    },
    contentArea: {
      padding: '30px',
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    placeholderCard: {
      background: '#ffffff',
      padding: '50px',
      borderRadius: '12px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
      border: '1px solid #e2e8f0',
      textAlign: 'center',
      maxWidth: '500px',
      width: '100%'
    },
    placeholderIcon: {
      fontSize: '64px',
      marginBottom: '20px',
      color: '#cbd5e1'
    },
    placeholderTitle: {
      color: '#1e293b',
      fontSize: '24px',
      fontWeight: '600',
      marginBottom: '10px'
    },
    placeholderText: {
      color: '#64748b',
      fontSize: '16px',
      marginBottom: '30px',
      lineHeight: 1.5
    },
    backButton: {
      padding: '12px 24px',
      border: '1px solid #0284c7',
      borderRadius: '6px',
      background: '#0284c7',
      color: '#ffffff',
      fontSize: '14px',
      cursor: 'pointer',
      transition: 'all 0.2s',
      fontWeight: '500',
      '&:hover': {
        background: '#0369a1',
        borderColor: '#0369a1'
      }
    }
  };

  const navigateToHome = () => navigate('/');
  const navigateToReports = () => {};
  const navigateToForecasts = () => navigate('/forecasts');
  const navigateToUpload = () => navigate('/upload');
  const navigateToSettings = () => navigate('/settings');

  const handleAvatarClick = () => {
    alert('Профиль пользователя\nИванов Иван\nРоль: Аналитик\nРаздел: Отчеты');
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <div 
          style={styles.sidebarItem}
          onClick={navigateToHome}
          className="sidebar-link"
        >
          <span style={{ color: '#475569' }}>📊</span> Аналитика
        </div>
        <div 
          style={{...styles.sidebarItem, ...styles.sidebarItemActive}}
          onClick={navigateToReports}
          className="sidebar-link"
        >
          <span style={{ color: '#0284c7' }}>📋</span> Отчеты
        </div>
        <div 
          style={styles.sidebarItem}
          onClick={navigateToForecasts}
          className="sidebar-link"
        >
          <span style={{ color: '#475569' }}>🔮</span> Прогнозы
        </div>
        <div 
          style={styles.sidebarItem}
          onClick={navigateToUpload}
          className="sidebar-link"
        >
          <span style={{ color: '#475569' }}>📤</span> Загрузка данных
        </div>
        <div 
          style={styles.sidebarItem}
          onClick={navigateToSettings}
          className="sidebar-link"
        >
          <span style={{ color: '#475569' }}>⚙️</span> Настройки
        </div>
      </div>

      <div style={styles.mainContent}>
        <div style={styles.topBar}>
          <h1 style={styles.pageTitle}>Отчеты</h1>
          <div style={styles.userInfo}>
            <div style={styles.userName}>Иванов И.</div>
            <div 
              style={styles.userAvatar}
              onClick={handleAvatarClick}
              title="Профиль пользователя"
            >
              ИИ
            </div>
          </div>
        </div>

        <div style={styles.contentArea}>
          <div style={styles.placeholderCard}>
            <div style={styles.placeholderIcon}>📋</div>
            <h2 style={styles.placeholderTitle}>Раздел в разработке</h2>
            <p style={styles.placeholderText}>
              Функционал отчетов находится в стадии разработки. 
              Здесь будут доступны детализированные отчеты по продажам, 
              аналитика клиентов и экспорт данных в различные форматы.
            </p>
            <button 
              style={styles.backButton}
              onClick={navigateToHome}
            >
              ← Вернуться к аналитике
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;