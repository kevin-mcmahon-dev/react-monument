
import './Blog.css';
import './Style.css';
import Navbar from '../Navbar.js';
import Footer from '../Footer.js';
import Header from './Header.js';
import Article from './Article.js';
import Sidebar from './Sidebar.js';
import Comment from './Comment.js';

// import './Landing.css';

function Blog() {
    return (
    <div className="blog-page">
        <Navbar /> 
        <Header />

	<div class="wrap grid-wrapper">
		<Article />
        <Sidebar />	
	</div>
    <Comment />
	{/* <section class="comment">
		<div class="wrap">
		<h2>Leave a Comment</h2>
			<form>
				<input type="text" placeholder="Name" class="col-half"/>
				<input type="email" placeholder="Email" class="col-half"/>
				<textarea name="" id="" cols="30" rows="10" placeholder="Comment"></textarea>
				<button type="submit">Submit</button>
			</form>
		</div>
	</section> */}

    <Footer />
    </div>
  );
}

export default Blog;
