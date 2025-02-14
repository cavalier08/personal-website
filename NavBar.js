import '../css/App.css'
import mimi from '../img/mimi-main.png'

export function NavBar() {

    return (
        <>
            <div className="navBar">
                <div className="buttonBox">
                    <img src={mimi} class="mimiPic" />

                    <div>
                        <button>
                            Main Page
                        </button>
                    </div>
                    <div>
                        <button>
                            Experiences
                        </button>
                    </div>




                    <div>
                        <button>
                            Projects                        </button>
                    </div>

                    <div>
                        <button>
                            Cat Gallery
                        </button>
                    </div>


                </div>
            </div>

        </>
    );


}

