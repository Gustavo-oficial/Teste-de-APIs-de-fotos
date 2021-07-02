import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ReactDOM from "react-dom";
import { Popover } from "@varld/popover";
import TypeWriter from "./components/Typewriter";
import "./styles.css";

const typeWriter = [
  "Bem vindo!",
  "Encontre fotos de animais...",
  "Temos fotos de gatinhos,",
  "De cachorros",
  "E belas raposas.",
];

function App() {
  const [Gatos1, setGatos1] = useState([]);
  const [Gatos2, setGatos2] = useState([]);
  const [Gatos3, setGatos3] = useState([]);

  useEffect(() => {
    listarGatos1();
    listarGatos2();
    listarGatos3();
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const listarGatos1 = () => {
    fetch(`https://aws.random.cat/meow`)
      .then((response) => response.json())
      .then((gato) => {
        setGatos1(gato.file);
      })
      .catch((err) => console.error(err));
  };

  const listarGatos2 = () => {
    fetch(`https://aws.random.cat/meow`)
      .then((response) => response.json())
      .then((gato) => {
        setGatos2(gato.file);
      })
      .catch((err) => console.error(err));
  };

  const listarGatos3 = () => {
    fetch(`https://aws.random.cat/meow`)
      .then((response) => response.json())
      .then((gato) => {
        setGatos3(gato.file);
      })
      .catch((err) => console.error(err));
  };

  const reiniciarPágina = () => {
    document.location.reload(true);
  };

  return (
    <div className="App">
      <div>
        <header className="header">
          <div className="header-widht">
            <div className="header-left">
              <img
                src="https://conexaodecor.com/wp-content/uploads/2020/09/Linha-de-moveis-em-estilo-industrial-pensada-para-pets-na-revista-digital-sobre-decoracao-Conexao-Decor.MESA-LATERAL-OVEL-scaled.jpg?x89370"
                className="header-left-img"
              ></img>
              <p className="header-left-p">A página mais fofa do seu dia!</p>
            </div>
            <div className="header-right">
              <div class="Title">
                <h1>
                  Felix
                  <div class="Title__highlight"></div>
                </h1>
                <div class="Title__underline"></div>
                <div aria-hidden class="Title__filled">
                  Felix
                </div>
              </div>
              <div class="Title">
                <h1>
                  Miranda
                  <div class="Title__highlight"></div>
                </h1>
                <div class="Title__underline"></div>
                <div aria-hidden class="Title__filled">
                  Miranda
                </div>
              </div>
              <div class="Title">
                <h1>
                  Nicolas
                  <div class="Title__highlight"></div>
                </h1>
                <div class="Title__underline"></div>
                <div aria-hidden class="Title__filled">
                  Nicolas
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="container">
        <div className="container-top">
          <div className="typewriter-holder">
            <p id="a">
              <TypeWriter data={typeWriter} />
            </p>
          </div>
        </div>
        <div className="container-middle">
          <div className="tras-imagem">
            <p className="titulo-imagem">Gato José</p>
            <img className="bichos-imagens" src={Gatos1}></img>
          </div>
          <div className="tras-imagem">
            <p className="titulo-imagem">Gato Roberto</p>
            <img className="bichos-imagens" src={Gatos2}></img>
          </div>
          <div className="tras-imagem">
            <p className="titulo-imagem">Gato Romildo</p>
            <img className="bichos-imagens" src={Gatos3}></img>
          </div>
        </div>
      </div>

      <button className="prettybutton" onClick={handleShow}>
        Alterar senha
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Altere sua senha!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Apenas envie uma senha nova se tiver certeza da mudança!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Popover
            popover={({ close }) => {
              return (
                <div className="d-flex justify-content-center flex-column align-items-center">
                  Realmente deseja alterar a senha?
                  <div className="d-flex div-popup">
                    <Button
                      variant="success"
                      onClick={() => {
                        reiniciarPágina();

                        handleClose();
                      }}
                      className="popup"
                    >
                      Sim
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => close()}
                      className="popup"
                    >
                      Não
                    </Button>
                  </div>
                </div>
              );
            }}
          >
            <Button variant="success">Alterar</Button>
          </Popover>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
