import React from 'react';
import './Footer.css'

const Footer = () => {
    return(<footer className="pied-de-page">
        <h1>Website</h1>
        <ul className='liste-1'>
            <li>Naruto ?</li>
            <li>One piece?</li>
            <li>Snk ?</li>
        </ul>
        <ul className='liste-2'>
            <li>NE CLIQUE PAS LA!</li>
            <li>Mentions légales</li>
            <li>Conditions générales d'utilistation</li>
        </ul>
        <ul className='liste-3'>
            <li>Politique de confidentialité.</li>
            <li>Qui somme-nous?</li>
            <li>A propos de nous ?</li>
        </ul>
    </footer>
    )
}
export default Footer;