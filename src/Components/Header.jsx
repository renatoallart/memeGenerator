import trollFace from '../Assets/trollFace.png'

export function Header() {
    return (
        <header className="header">
            <img
                src={trollFace}
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}