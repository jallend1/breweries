import React from 'react';

const Home = () => {
  return (
    <>
      <div className="container">
        <blockquote
          className="center"
          cite="https://www.buzzfeednews.com/article/skbaer/brett-kavanaugh-likes-beer"
        >
          <h4>"I like beer."</h4>
          <footer>
            -- Brett Kavanaugh, Supreme Court Justice of the United States
            deeply embarrassing himself before an entire nation.
          </footer>
        </blockquote>
        <p>
          I like beer, but not in the shout about it and cry in a job interview
          the way Brett Kavanaugh does. I also like learning to code!
        </p>
        <p>
          And thanks to the good folks over at{' '}
          <a href="https://www.openbrewerydb.org/">Open Brewery DB</a>, my
          interests can be united at long last!
        </p>

        <p>
          I put together a quick little page presenting all the data they've
          compiled in an effort to give me something fun to learn ReactJS with,
          and to also play around a little bit with{' '}
          <a href="https://www.mapbox.com/maps/">Mapbox</a> because who doesn't
          love maps?!
        </p>
        <p>
          Also a special shout out should go to{' '}
          <a href="https://community.articulate.com/discussions/building-better-courses/50-us-states-transparent-png-and-two-colors">
            Kevin Thorn
          </a>{' '}
          for the images of all the states he uploaded for just such a purpose!
        </p>
      </div>
    </>
  );
};

export default Home;
