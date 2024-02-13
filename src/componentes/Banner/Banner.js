import './Banner.css'

function Banner() {
    //JSX o react vai entender e criar o DOM correspondente
    return (
        <header className='banner'>
            <img src="/imagens/banner.png" alt="O banner principal do Organo" />
        </header>
    )
}

export default Banner