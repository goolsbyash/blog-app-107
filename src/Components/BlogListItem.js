const blogPosts = [
  {
    blogDate: "11/12/20",
    blogTitle: "On the Street in Brooklyn",
    imgSrc: "../Images/blog-image-1",
    blogPost: `Cray ipsum, dolor sit amet consectetur adipisicing elit. Nunc mollis
  rhoncus est at sodales. Cras eu nibh sed felis commodo sollicitudin sit
  amet id eros. Mauris dapibus scelerisque sem, efficitur sodales ante
  aliquam non. Mauris scelerisque urna tincidunt, porttitor nisl eu,
  porttitor ipsum. Aenean vel mauris dolor. Sed massa ex, gravida id
  pretium nec, sollicitudin vitae velit. Nullam eu rhoncus mi. In iaculis
  nunc in magna pulvinar consectetur.`,
  },{
    blogDate: "11/11/20",
    blogTitle: "Vintage in Vogue",
    imgSrc: "../Images/blog-image-2.jpg",
    blogPost: `Selfies sunt, dolor sit amet consectetur adipisicing elit. Nunc mollis
  rhoncus est at sodales. Cras eu nibh sed felis commodo sollicitudin sit
  amet id eros. Mauris dapibus scelerisque sem, efficitur sodales ante
  aliquam non. Mauris scelerisque urna tincidunt, porttitor nisl eu,
  porttitor ipsum. Aenean vel mauris dolor. Sed massa ex, gravida id
  pretium nec, sollicitudin vitae velit. Nullam eu rhoncus mi. In iaculis
  nunc in magna pulvinar consectetur.`,
  },
];

function BlogListItem() {
  let blogItem = blogPosts.map((p) => {
    return (
      <div>
        <p> {p.blogDateblogDate}</p>
        <h2> {p.blogTitle}</h2>
        <img src={p.imgSrc} alt="blog post image"></img>
        <p>{p.blogPost}</p>
        <a>Continues ...</a>
      </div>
    );
  });
  return <div>{blogItem}</div>;
  return <section></section>;
}

export default BlogListItem;