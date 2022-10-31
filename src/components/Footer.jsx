import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <Link to="/" className="social-logo">
          <img src="/images/LOGO2.png" />
        </Link>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Empresa</h2>
            <Link to="/sign-up"></Link>
            <Link to="/">Volorericte</Link>
            <Link to="/">Comimus</Link>
            <Link to="/">Valor asperi</Link>
            <Link to="/">Destligent</Link>
            <Link to="/">Sumequis</Link>
          </div>
          <div className="footer-link-items">
            <h2>Educación</h2>
            <Link to="/sign-up"></Link>
            <Link to="/">Adit quidundamet</Link>
            <Link to="/">Optatemporum</Link>
            <Link to="/">Facest evente</Link>
            <Link to="/">Valorerupta quo</Link>
            <Link to="/">Dolendi taeribus</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Soluciones</h2>
            <Link to="/sign-up"></Link>
            <Link to="/">Dalesti assimetur</Link>
            <Link to="/">Volupta imoditatibu</Link>
            <Link to="/">Toritae porro</Link>
            <Link to="/">Endernatem</Link>
            <Link to="/">Conse laborporero</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contactos</h2>
            <Link to="/sign-up"></Link>
            <Link to="/">
              123 Deles Avenue, Volupta no 00, Toritae porro 1234567
            </Link>
            <Link to="/">123-987-3454566/55</Link>
            <Link to="/">contact@ejemplo.com</Link>
          </div>
        </div>
      </div>
      <p className="footer-subscription-text">BIENVENIDO A LA FAMILIA</p>
      <div className="input-areas">
        <form>
          <input type="email" name="email" className="footer-input"></input>
          <Button buttonStyle="btn--primary">{">"}</Button>
        </form>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">Ayuda</small>
          <small className="website-rights">Privacidad</small>
          <small className="website-rights">Términos</small>
          <div className="social-icons">
            <Link to="/" className="social-icon-link facebook">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="/" className="social-icon-link instagram">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="/" className="social-icon-link twitter">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="/" className="social-icon-link linkedin">
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
      <small className="website">
        Copyright xxxxx-xxxxxx Marca. All Rights Reserverd. All other trademarks
        are the property of their respective owners and are used with their
        permission
      </small>
    </div>
  );
}

export default Footer;
