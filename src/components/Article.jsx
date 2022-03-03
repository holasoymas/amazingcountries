// import af from "../img/af.svg";
import "../index.css";

const Article = (props) => {
  return (
    <>
      <article>
        <div className="container">
          <div className="article-wrapper">
            <img id="h-img" src={props.flag} alt="flag" />
          </div>
        </div>
      </article>
    </>
  );
};

export default Article;
