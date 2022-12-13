import './SocialNetworks.css'

const SocialNetworks = () => {
    const ListaRedes = [
      { id: 1 , urlName: "Instagram" , url:'https://www.instagram.com/lucianavivarelli/'},
      { id: 2 , urlName: "GitHub" , url:'https://github.com/LucianaVivarelli'},
      { id: 3 , urlName: "Linkedin" , url:'https://www.linkedin.com/in/lucianavivarelli/'},
      { id: 4 , urlName: "WebSite" , url:'https://www.google.com'},
      { id: 5 , urlName: "Pinterest" , url:'https://www.pinterest.com'}
    ]

    const LinksRedes = ListaRedes.map((props) => 
    <div key={props.id} className ="Links-Content">
        <a href={props.url}>{props.urlName}</a>
    </div>
    )
    return(
        <>
        {LinksRedes}
        </>
    )
}

export default SocialNetworks