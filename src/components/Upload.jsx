import React from 'react';
import { useNavigate } from 'react-router-dom';

const Upload = () => {
  const navigate = useNavigate();

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
      background: '#e8f4ff',
      color: '#0066cc',
      fontWeight: '600',
      borderLeft: '4px solid #0066cc'
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
      flex: 1,
      maxWidth: '800px',
      margin: '0 auto',
      width: '100%'
    },
    uploadCard: {
      background: '#ffffff',
      borderRadius: '8px',
      border: '1px solid #e0e0e0',
      padding: '30px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    },
    uploadZone: {
      border: '2px dashed #cccccc',
      borderRadius: '8px',
      padding: '60px 30px',
      textAlign: 'center',
      marginBottom: '30px',
      background: '#fafafa'
    },
    uploadIcon: {
      fontSize: '48px',
      marginBottom: '20px',
      color: '#666666'
    },
    uploadText: {
      color: '#333333',
      fontSize: '16px',
      marginBottom: '8px'
    },
    uploadSubtext: {
      color: '#999999',
      fontSize: '14px',
      marginBottom: '20px'
    },
    uploadButton: {
      padding: '12px 24px',
      background: '#0066cc',
      color: '#ffffff',
      border: 'none',
      borderRadius: '6px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer'
    },
    filesTable: {
      width: '100%',
      borderCollapse: 'collapse',
      borderRadius: '6px',
      overflow: 'hidden',
      border: '1px solid #e0e0e0'
    },
    tableHeader: {
      background: '#f5f5f5',
      borderBottom: '1px solid #e0e0e0'
    },
    tableHeaderCell: {
      padding: '15px',
      textAlign: 'left',
      color: '#666666',
      fontSize: '14px',
      fontWeight: '600'
    },
    tableRow: {
      borderBottom: '1px solid #f0f0f0'
    },
    tableCell: {
      padding: '15px',
      color: '#333333',
      fontSize: '14px'
    },
    statusBadge: {
      padding: '4px 8px',
      borderRadius: '12px',
      fontSize: '12px',
      fontWeight: '600',
      display: 'inline-block'
    },
    statusProcessed: {
      background: '#e6f7f0',
      color: '#00a86b'
    }
  };

  // Навигация
  const navigateToHome = () => navigate('/');
  const navigateToReports = () => navigate('/reports');
  const navigateToForecasts = () => navigate('/forecasts');
  const navigateToUpload = () => {};
  const navigateToSettings = () => navigate('/settings');

  const uploadedFiles = [
    { name: 'sales_november.csv', date: '01.12.2024', status: 'Обработан' },
    { name: 'products.xlsx', date: '28.11.2024', status: 'Обработан' },
    { name: 'clients_october.csv', date: '25.11.2024', status: 'Обработан' }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <div style={styles.sidebarItem} onClick={navigateToHome}>
          📊 Аналитика
        </div>
        <div style={styles.sidebarItem} onClick={navigateToReports}>
          📋 Отчеты
        </div>
        <div style={styles.sidebarItem} onClick={navigateToForecasts}>
          🔮 Прогнозы
        </div>
        <div style={{...styles.sidebarItem, ...styles.sidebarItemActive}} onClick={navigateToUpload}>
          📤 Загрузка данных
        </div>
        <div style={styles.sidebarItem} onClick={navigateToSettings}>
          ⚙️ Настройки
        </div>
      </div>

      <div style={styles.mainContent}>
        <div style={styles.topBar}>
          <h1 style={styles.pageTitle}>Загрузка данных</h1>
          <div style={styles.userInfo}>
            <div style={styles.userName}>Иванов И.</div>
            <div style={styles.userAvatar}>ИИ</div>
          </div>
        </div>

        <div style={styles.contentArea}>
          <div style={styles.uploadCard}>
            <div style={styles.uploadZone}>
              <div style={styles.uploadIcon}>📁</div>
              <p style={styles.uploadText}>Перетащите файл сюда или нажмите для выбора</p>
              <p style={styles.uploadSubtext}>CSV, Excel (максимальный размер 10MB)</p>
              <button style={styles.uploadButton}>Выбрать файл</button>
            </div>

            <h3 style={{
              color: '#1a1a1a',
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '20px'
            }}>
              История загрузок
            </h3>

            <table style={styles.filesTable}>
              <thead style={styles.tableHeader}>
                <tr>
                  <th style={styles.tableHeaderCell}>Файл</th>
                  <th style={styles.tableHeaderCell}>Дата загрузки</th>
                  <th style={styles.tableHeaderCell}>Статус</th>
                </tr>
              </thead>
              <tbody>
                {uploadedFiles.map((file, index) => (
                  <tr key={index} style={styles.tableRow}>
                    <td style={styles.tableCell}>{file.name}</td>
                    <td style={styles.tableCell}>{file.date}</td>
                    <td style={styles.tableCell}>
                      <span style={{...styles.statusBadge, ...styles.statusProcessed}}>
                        ✅ {file.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;