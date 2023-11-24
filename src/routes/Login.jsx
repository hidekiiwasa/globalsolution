import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../scss/styles.css';
import imagemLogin from '../assets/login_image.svg';


function Login() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    email: '',
    senha: '',
  });
  
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let user = null;

    try {
      const response = await fetch("http://localhost:5000/usuario");
      if (response.ok) {
        const users = await response.json();

        for (let i = 0; i < users.length; i++) {
          const use = users[i];

          if (use.email == usuario.email && use.senha == usuario.senha) {
            user = use;
            break;
          }

        }

        if (user) {
          sessionStorage.setItem('usuarioLogado', JSON.stringify(user));
          setTimeout(() => {
            navigate('/');
          }, 3000);

        } else {
          setUsuario({
              email: "",
              senha: "",
            });
          alert("Dados incorretos")
        }
      } else {
        setUsuario({
          email: "",
          senha: "",
        });
        alert("Erro ao tentar fazer login");
        
      }
    } catch (error) {
      console.log(error)
      alert("Algo deu errado")
    }
  };


  return (
    <>
      <div className="corpoContainer">
        <div className="loginContainer">
          <div className="formImage">
            <img src={imagemLogin} />
          </div>
          <div className="formContainer">
            <form onSubmit={handleSubmit}>
              <legend>Login</legend>
              <div className='inputs'>
                <div className="inputContainer">
                  <label htmlFor="email">E-mail</label>
                  <input type="email" id='email' value={usuario.email} name="email" placeholder="Digite seu e-mail" onChange={handleChange} required />
                </div>
                <div className="inputContainer">
                  <label htmlFor="password">Senha</label>
                  <input type="password" id='senha' value={usuario.senha} name="senha" placeholder="Digite sua senha" onChange={handleChange} required />
                </div>
              </div>
              <div className='botaoContainer'>
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login