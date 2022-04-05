import React from "react";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="blog_area">
      <div>
        <h4> Question-1 :What is the purpose of context API?</h4>
        <p>
          Answer-1: Context API is new feature that is added in version 16.3 of
          React. Context API is path for a React app to successfully generate
          global variables that can be passed around. This is the substitute to
          prop drilling or moving props from grandparent to child to parent, and
          so on. Context is also keep an eye on as an easier, lighter way to
          state management using Redux. The Context API is a React structure
          that enable to exchange unique details and assists in solving
          prop-drilling from all levels of any application.
        </p>
      </div>
      <div>
        <h4>Question-2 : What is Semantic tag and Example?</h4>
        <p>
          Answer-2: semantics tag is the most important features of HTML5 .
          Semantic HTML tag refers to the syntax that is made the HTML tag more
          comprehensible by better defining the several sections and setting and
          layout of web page. It makes web pages more informative, educative and
          flexible..allowing browsers and search engines to better illustrate
          content. In HTML part there are semantic elements or tag that can be
          used to define various parts of a web page:Example
          article,,details,,footer,,header,,main,,nav,,section,,summary,,mark,,time,,
          etc..
        </p>
      </div>
      <div>
        {" "}
        <h4>
          Question-3 : difference between Block Element vs Inline Element?
        </h4>
        <p>
          Answer-3 : Block Element: A block-level element always starts on a new
          line,and the browsers automatically add some space before and after
          the element. A block-level element always takes up the full width
          available.
        </p>
        <p>
          Inline Element : An inline element does not start on a new line. An
          inline element only takes up as much width as necessary.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
