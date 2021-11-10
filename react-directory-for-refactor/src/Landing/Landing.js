import Header from './Header';
import Archive from './Archive';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';

const articleObject = [
  {
      title: "Issue Twenty - The Southwest",
      article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel voluptate eos nisi necessitatibus aperiam dolorem ut eveniet quae dolores quisquam nulla, cumque tenetur blanditiis modi tempora excepturi error veniam suscipit dicta praesentium reiciendis illo obcaecati odit inventore minima. Pariatur facilis, excepturi! Facilis cumque dicta reiciendis nam accusantium cum pariatur sunt accusamus voluptas eaque sapiente totam dolorum nulla eligendi molestiae, quidem odit repellat temporibus quae ipsa aut placeat modi sint doloribus. Ipsum nisi veritatis, facere doloribus. Nihil veritatis corporis eaque odio.",
      image: "images/article_1.jpg",
  },
  {
      title: "Issue Nineteen - Camping",
      article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel voluptate eos nisi necessitatibus aperiam dolorem ut eveniet quae dolores quisquam nulla, cumque tenetur blanditiis modi tempora excepturi error veniam suscipit dicta praesentium reiciendis illo obcaecati odit inventore minima. Pariatur facilis, excepturi! Facilis cumque dicta reiciendis nam accusantium cum pariatur sunt accusamus voluptas eaque sapiente totam dolorum nulla eligendi molestiae, quidem odit repellat temporibus quae ipsa aut placeat modi sint doloribus. Ipsum nisi veritatis, facere doloribus. Nihil veritatis corporis eaque odio.",
      image: "images/article_2.jpg",
  },
  {
      title: "Issue Eighteen - Food",
      article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel voluptate eos nisi necessitatibus aperiam dolorem ut eveniet quae dolores quisquam nulla, cumque tenetur blanditiis modi tempora excepturi error veniam suscipit dicta praesentium reiciendis illo obcaecati odit inventore minima. Pariatur facilis, excepturi! Facilis cumque dicta reiciendis nam accusantium cum pariatur sunt accusamus voluptas eaque sapiente totam dolorum nulla eligendi molestiae, quidem odit repellat temporibus quae ipsa aut placeat modi sint doloribus. Ipsum nisi veritatis, facere doloribus. Nihil veritatis corporis eaque odio.",
      image: "images/article_3.jpg",
  },
];

function Landing() {
    const articleArray = [];
    let articles = articleObject.map((element, index) => (
        articleArray.push(<Archive title={element.title} article={element.article} image={element.image} index={index}/>)
    ))
    return ( 
        <>

<Header />

<section>
<h2>From the Archive</h2>

<div class="grid-wrapper articles">
{articleArray}
{/* <Archive title={articleObject[0].title} article={articleObject[0].article} image={articleObject[0].image}/>
<Archive title={articleObject[1].title} article={articleObject[1].article} image={articleObject[1].image}/>
<Archive title={articleObject[2].title} article={articleObject[2].article} image={articleObject[2].image}/> */}
</div>
</section>

<About />

<Gallery />

<Contact />

        </>
    )
}

export default Landing