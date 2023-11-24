import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Thumb from '../assets/image.png'
import loginPc from '../assets/undraw_sign_up_n6im.svg'
import loginMobile from '../assets/undraw_mobile_login_re_9ntv.svg'
import { MdHealthAndSafety } from "react-icons/md";
import { GiHealthDecrease } from "react-icons/gi";
import { RiMentalHealthFill } from "react-icons/ri";

function Home() {
  const [logadoCheck, setLogado] = useState(false);

  useEffect(() => {
    const usuarioLogado = JSON.parse(sessionStorage.getItem('usuarioLogado'));

    if (usuarioLogado && usuarioLogado.nome && usuarioLogado.email) {
      setLogado(true);
    } else {
      setLogado(false);
    }
  }, []);

  return (
    <>
      {logadoCheck ? (
        <div className="homeFlex">
          <div className="homeCenter">
            <div className="homeGrid">
              <main>
                <div className="imgContainer">
                  <img src={Thumb} alt="" />
                </div>
                <div className="sobreFlex">
                  <div className="tituloSolucaoContainer">
                    <h1>HeartSync Cloud</h1>
                  </div>
                  <div className="sobreSolucaoContainer">
                    <p>Um inovador dispositivo de monitoramento remoto de saúde envia dados vitais para a nuvem, permitindo o acompanhamento em tempo real e facilitando diagnósticos precoces para cuidados eficazes.</p>
                  </div>
                </div>
              </main>
              <aside>
                <div className="asideCaixa">
                  <h2>O que é a solução?</h2>
                  <p>Um dispositivo que calcula batimentos cardíacos e temperatura corporal em tempo real e manda os dados para uma plataforma de nuvem é uma solução de monitoramento remoto de saúde. Esses dispositivos são geralmente pequenos e vestíveis, como um relógio ou pulseira. Eles usam sensores para coletar dados sobre a saúde do usuário, como batimentos cardíacos, temperatura corporal, nível de oxigênio no sangue, etc. Esses dados são então enviados para uma plataforma de nuvem, onde podem ser analisados por profissionais de saúde.</p>
                </div>
                <div className="asideCaixa">
                  <h2>O que ela fará?</h2>
                  <p>Esses dispositivos podem ser usados para:</p>
                  <ul>
                    <li>Ajuda a identificar problemas de saúde rapidamente, como alterações nos batimentos cardíacos ou aumento da temperatura corporal, permitindo ações preventivas.</li>
                    <li>Aprimorar o diagnóstico e tratamento: Os dados coletados pelo dispositivo podem ser usados para ajudar os profissionais de saúde a diagnosticar e tratar doenças.</li>
                  </ul>
                </div>
                <div className="asideCaixa">
                  <h2>Como funciona?</h2>
                  <p>Os dispositivos de monitoramento remoto de saúde geralmente usam sensores para coletar dados sobre a saúde do usuário. Esses sensores podem ser de vários tipos, como sensores de temperatura, sensores de oxigênio no sangue, etc. Os dados coletados pelos sensores são então enviados para uma plataforma de nuvem, onde podem ser analisados por profissionais de saúde.</p>
                </div>
              </aside>
            </div>
            <section className="vantagensContainer">
              <div className="vantagemCaixa">
                <div className="icone">
                  <MdHealthAndSafety />
                </div>
                <div className="vantagemTexto">
                  <h3>Melhoria da qualidade dos cuidados:</h3>
                  <p>Dispositivos remotos de saúde melhoram cuidados ao monitorar pacientes em tempo real, detectando problemas precocemente.</p>
                </div>
              </div>
              <div className="vantagemCaixa">
                <div className="icone">
                  <GiHealthDecrease />
                </div>
                <div className="vantagemTexto">
                  <h3>Redução dos custos de saúde:</h3>
                  <p>Dispositivos remotos reduzem custos ao possibilitar cuidados em casa, diminuindo internações hospitalares dispendiosas.</p>
                </div>
              </div>
              <div className="vantagemCaixa">
                <div className="icone">
                  <RiMentalHealthFill />
                </div>
                <div className="vantagemTexto">
                  <h3>Melhoria da experiência do paciente:</h3>
                  <p>Dispositivos remotos oferecem controle da saúde ao paciente, melhorando a experiência do paciente.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : (
        <div className="usuarioNaoLogado">
          <img src={loginPc} alt="" />
          <Link to="/login">Login</Link>
          <img className="hide" src={loginMobile} alt="" />
        </div>
      )}
    </>
  );
}

export default Home;