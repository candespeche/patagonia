import React from "react"
import style from "./footer.module.css"
import facebook from "../../assets/facebook.svg"
import twitter from "../../assets/twitter.svg"
import instagram from "../../assets/instagram.svg"
import youtube from "../../assets/youtube.svg"
import cart from "../../assets/cart.svg"
import mail from "../../assets/mail.svg"

function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.row}>
                <div className={style.squareGreen}>
                    <div className={style.circle}>
                        <a href="https://www.facebook.com/patagoniacerveza/"><img src={facebook} alt="facebook" /></a>
                    </div>
                </div>
                <div className={style.squareLightGreen}>
                    <div className={style.circle}>
                        <a href={'https://www.instagram.com/cervezapatagonia/'}><img src={instagram} alt="instagram" /></a>
                    </div>
                </div>
                <div className={style.squareGreen}>
                    <div className={style.circle}>
                        <a href="https://twitter.com/CvzaPatagonia"><img src={twitter} alt="twitter" /></a>
                    </div>
                </div>
            </div>

            <div className={style.row}>
                <div className={style.squareLightGreen}>
                    <div className={style.circle}>
                        <a href={'https://www.youtube.com/channel/UCkwAEzYPbHfzz9tXtOtj0cg'}><img src={youtube} alt="youtube" /></a>
                    </div>
                </div>
                <div className={style.squareGreen}>
                    <div className={style.circle}>
                        <a href="mailto:consultas@patagoniabrewingco.com"><img src={mail} alt="mail" /></a>
                    </div>
                </div>
                <div className={style.squareLightGreen}>
                    <div className={style.circle}>
                        <a href="https://www.craftsociety.com.ar/collections/patagonia-brewing-co"><img src={cart} alt="cart" /></a>
                    </div>
                </div>
            </div>
            <div className={style.terminos}>
                <h2>Términos y condiciones</h2>
                <h2>Políticas de privacidad</h2>
                <h2>Franquicias</h2>
                <h2>Tapinyourbeer</h2>
                <p>BEBER CON MODERACIÓN. PROHIBIDA SU VENTA A MENORES DE 18 AÑOS.
                    NO COMPARTA EL CONTENIDO CON MENORES</p>
            </div>
        </div>
    )
}

export default Footer;