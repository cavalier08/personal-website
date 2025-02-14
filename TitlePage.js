import '../css/App.css'
import '../css/TitlePage.css'
import mimi from '../img/mimi-main.png'

export function TitlePage() {
    return (
        <>
            <div class="background">
                <div className="titlePage">
                    <div className="titleBox">
                        <h1 className="title">Hi, I'm Chantal Zhang</h1>
                        <h3 className="subtitle">Waterloo Computer Science Class of '29</h3>
                        <LinkBox />

                    </div>
                    <div >
                        <img className="float-right found-full border-solid border-black mx-40" src={mimi}></img>
                    </div>


                </div >

            </div>


        </>
    );
}

export function LinkBox() {
    return (
        <>
            <div className="link-box">
                <a class="link" target="_blank" href="https://www.linkedin.com/in/chantal-zhang-267b5828a/">Linkedin</a>
                <a class="link" target="_blank" href="https://github.com/cavalier08/cavalier08">GitHub</a>
                <a class="link" href="">Email</a>

            </div>
        </>
    )
}