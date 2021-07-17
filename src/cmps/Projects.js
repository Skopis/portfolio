import Minesweeper from "../imgs/minesweeper.gif"
import Memegenerator from "../imgs/memegenerator.gif"
import WeTask from "../imgs/wetask.gif"
import Appsus from "../imgs/appsus.gif"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

const Projects = () => {

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0
  };
  return (
    <div id="projects" className="projects-container container">
      <div className="my-carusel">
        <Slider {...settings}>
          <div className="proj">
            <img src={WeTask} />
            <div className="my-card-body">
              <h5 className="">WeTask - Mar 30, 2021</h5>
              <p className="lowercase">An advanced Project management tool, inspired by Trello</p>
              <p className="">Vue, Vuex, Sass and Web Sockets</p>
              <a href="https://wetaskbiggerr.herokuapp.com/" target="_blank" rel="noreferrer" className="btn btn-primary">Check it out!</a>
            </div>
          </div>
          <div className="proj">
            <img src={Appsus} />
            <div className="my-card-body">
              <h5 className="">Appsus - Feb 28, 2021</h5>
              <p className="lowercase">Send Emails, create Notes and search for Books! Inspired by Google Apps</p>
              <p className="">Vue and Vuex</p>
              <a href="https://skopis.github.io/Appsus/" target="_blank" rel="noreferrer" className="btn btn-primary">Check it out!</a>
            </div>
          </div>
          <div className="proj">
            <img src={Memegenerator} />
            <div className="my-card-body">
              <h5 className="">Meme Generator - Feb 15, 2021</h5>
              <p className="lowercase">Create Memes to add humor to your day!</p>
              <p className="">JavaScript Vanila</p>
              <a href="https://skopis.github.io/meme-generator/" target="_blank" rel="noreferrer" className="btn btn-primary">Check it out!</a>
            </div>
          </div>
          <div className="proj">
            <img src={Minesweeper} />
            <div className="my-card-body">
              <h5 className="">Minesweeper - Jan 21, 2021</h5>
              <p className="lowercase">Inspired by the game we all know and love</p>
              <p className="">JavaScript Vanila</p>
              <a href="https://skopis.github.io/Minesweeper/" target="_blank" rel="noreferrer" className="btn btn-primary">Check it out!</a>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Projects