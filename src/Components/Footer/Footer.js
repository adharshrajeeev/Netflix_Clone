import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <footer class="center size-60">
    <div className="social-medias">
       
    </div>

    <ul class="columns flex-wrap">
        <li class="column is-25">
            <a href="/"><span>Perguntas frequentes</span></a>
        </li>
        <li class="column is-25">
            <a href="/"><span>Centro de ajuda</span></a>
        </li>
        <li class="column is-25">
            <a href="/"><span>Conta</span></a>
        </li>
        <li class="column is-25">
            <a href="/"><span>Imprensa</span></a>
        </li>
        <li class="column is-25">
            <a href="/"><span>Relações com investidores</span></a>
        </li>
        <li class="column is-25">
            <a href="/"><span>Carreiras</span></a>
        </li>
        <li class="column is-25">
            <a href="/"><span>Cartão pré-pago</span></a>
        </li>
        <li class="column is-25">
            <a href="/"><span>Formas de assistir</span></a>
        </li>
        <li class="column is-25">
            <a href="/"><span>Termos de uso</span></a>
        </li>
        <li class="column is-25">
            <a href="/"><span>Privacidade</span></a>
        </li>
        <li class="column is-25">
            <a href="/"><span>Preferências de cookies</span></a>
        </li>
        <li class="column is-25">
            <a href="/"><span>Informações corporativas</span></a>
        </li>
        <li class="column is-25">
            <a href="/"><span>Entre em contato</span></a>
        </li>
        <li class="column is-25">
            <a href="/"><span>Teste de velocidade</span></a>
        </li>
        <li class="column is-25">
            <a href="/"><span>Originais Netflix</span></a>
        </li>
    </ul>
    <div id="lang-selection">
        <i class="fa fa-globe" aria-hidden="true"></i>
        <select tabindex="0">
            <option value="en">English</option>
            <option selected value="pt">Português</option>
        </select>
    </div>

    <p id="company">Netflix Brasil</p>
</footer>
  )
}

export default Footer