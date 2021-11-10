
function Archive(props) {
  
  // let articles = props.articles.map((title, article, image, index) => {
  //   return <Article title={title} article={article} image={image} index={index}/>
  // }) 

  return ( 

  <article class="col-third">
    <img src={props.image} alt=""/>
    <div>
      <h3>{props.title}</h3>
      <p>{props.article}</p>
      <button>Read More</button>
    </div>
  </article>

    )
}
    
export default Archive