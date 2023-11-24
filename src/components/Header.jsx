import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../scss/styles.css';

function Header() {
  const navigate = useNavigate();
  const [usuarioData, setUsuarioDado] = useState();
  const [logadoCheck, setLogado] = useState(false);

  useEffect(() => {
    const usuarioLogado = JSON.parse(sessionStorage.getItem('usuarioLogado'));
    
    if (usuarioLogado && usuarioLogado.nome && usuarioLogado.email) {
      setUsuarioDado( usuarioLogado );
      setLogado(true);
    } else {
      setLogado(false);
    }
  }, []);

  const handleLogout = async ()=>{
    sessionStorage.removeItem('usuarioLogado');
    setUsuarioDado(null);
    setLogado(false);
    alert("Você foi deslogado");
    navigate('/login');
  }

  return (
    <>
      <header>
        <div className="cabecalhoContainer">
          <span>HeartSync Cloud</span>
          {logadoCheck ? (
            <div className="usuarioInfo">
              <p>Bem vindo, {usuarioData.nome} ({usuarioData.email})</p>
              <button onClick={handleLogout}>LOGOUT</button>
            </div>
          ) : (
            <p>Por favor, faça login</p>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
