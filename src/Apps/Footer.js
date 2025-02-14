import '../css/App.css'
import '../css/Footer.css'

export function Footer() {
    return (
        <>
            <div className="footer-box">
                <h3>
                    This website was made with React.js
                </h3>
                <ImageLink />


            </div>


        </>
    )
}

export function ImageLink() {
    return (
        <>
            <img src="" onClick="toLinkedin()" />
            <img src="" onClick="toGithub()" />

            <img src="" onClick="toEmail()" />
        </>
    )

}

function toLinkedin() {

}
function toGitHub() {

}
function toEmail() {

}