import './App.css'; // Importando o arquivo de estilo
import styles from '../src/ App.module.css'


function App() {
  const containerStyle = { fontSize: '16px', padding: '20px', color: 'black', backgroundColor: 'lightcoral' };
  const titleStyle = { fontSize: '24px', color: 'blue' };

  return (
    
    <div className="container">
      <h1 className="title">Hello, World!</h1>

      <div style={containerStyle}>
        <h2 style={titleStyle}> Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
      </div>

      <div className={styles.container2}>
        <h3 className={styles.title2}>HELLO MEU WORLD</h3>
      </div>
    </div>
  );
}

export default App;