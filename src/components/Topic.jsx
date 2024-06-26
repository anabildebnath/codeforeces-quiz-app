import { Link } from "react-router-dom";
import classes from "../styles/Topic.module.css";

export default function Topic({ topicName, image, topicDescription ,bgColor}) {
  return (
    <div className={classes.topicContainer}>
      <Link to={`/videos/${topicName}`} className={classes.topicLink}>
        <img src={image} alt="" />
        <h1>{topicName}</h1>
        <p>{topicDescription}</p>
      </Link>
      <div className={classes.readMore}>
        <Link to="https://www.geeksforgeeks.org/" target="_blank">
          <h4>
            Read more
            {/* <span class="material-symbols-outlined">menu</span> not working because for some reason symbols class don't work but icons do*/}
          </h4>{" "}
        </Link>{" "}
        <span className={classes.logoSpan}>
          {" "}
          <span class="material-icons-outlined">read_more</span>
        </span>
      </div>
      <span
        className={classes.styleSpan1}
        style={{ backgroundColor: bgColor}}
      ></span>
    </div>
  );
}
