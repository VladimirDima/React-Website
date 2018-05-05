import React, {Component} from 'react';
import Nav from '../Nav.jsx'
import YouTube from 'react-youtube';

class Crud extends Component{
    render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
 
    return (
        <div>
        <div className="wrap-page">
          <Nav />
          
              <div className="cont-page">
              <h2 className="heading-page">CRUD</h2>
                  <YouTube
                    videoId="2g811Eo7K8U"
                    opts={opts}
                    onReady={this._onReady}
                  />
                  <p className="paragraph">Lorem impsum dolores sanctrioeres paalmos su ramoas.
                   Lorem impsum dolores sanctrioeres paalmos su ramoas. 
                   Lorem impsum dolores sanctrioeres paalmos su ramoas.
                   Lorem impsum dolores sanctrioeres paalmos su ramoas.
                   Lorem impsum dolores sanctrioeres paalmos su ramoas.</p>
               <h3 className="sub-title">Time stamps</h3>
                   <div class="ac-container">
                        <div>
                            <input id="ac-0" name="accordion-1" type="checkbox" />
                            <label for="ac-0">Read</label>
                            <article class="ac-small">
                                <p class="p2-legal">Create a challenge by choosing your fantasy football lineup and challenge your friends to beat it. Your players will score points based on their performance in actual football matches. The lineup which scores the most points wins the challenge.</p>
                            </article>
                        </div>
                        <div>
                            <input id="ac-1" name="accordion-1" type="checkbox" />
                            <label for="ac-1">Delete</label>
                            <article class="ac-small">
                                <p class="p2-legal">Your lineup consists of 4 players – a goalkeeper, defender, midfielder and striker. You can choose your lineup from the teams playing the next gameweek in one of our various leagues and competitions. Every calendar week consists of two game weeks, one from Friday to Monday and one from Tuesday to Thursday. Game weeks in cup tournaments are defined by the individual tournament. There are no salary caps or lineup restrictions.</p>
                            </article>
                        </div>
                        <div>
                            <input id="ac-0" name="accordion-1" type="checkbox" />
                            <label for="ac-0">Update</label>
                            <article class="ac-small">
                                <p class="p2-legal">Create a challenge by choosing your fantasy football lineup and challenge your friends to beat it. Your players will score points based on their performance in actual football matches. The lineup which scores the most points wins the challenge.</p>
                            </article>
                        </div>

</div>
              </div>

          </div>
        </div>
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

}

export default Crud