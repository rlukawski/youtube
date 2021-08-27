import { useEffect, useRef, useState } from "react";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Streams from "./components/Streams";

// import "./App.scss";

import Icon from "./components/Icon";
import Brand from "./components/Brand";

import Stream from "./components/Stream";

import codeAndCreateIcon from "./icons/code-and-create-icon.jpg";
import sadhguruIcon from "./icons/sadhguru-icon.jpg";
import sadhguruPLIcon from "./icons/sadhguruPL-icon.jpg";
import moreleIcon from "./icons/moreletv-icon.jpg";
import ishaIcon from "./icons/isha-foundation-icon.jpg";
import dandapaniIcon from "./icons/dandapaniLLC-icon.jpg";
import traversyIcon from "./icons/traversy-media-icon.jpg";

import stream1Img from "./streams/c-bool-golden-rules/stream.jpg";
import stream2Img from "./streams/tina-mother-within/stream.jpg";
import stream3Img from "./streams/sia-courage-to-change/stream.jpg";
import stream4Img from "./streams/rag-n-bone-human/stream.jpg";
import stream5Img from "./streams/sadhguru-manifest/stream.jpg";
import stream6Img from "./streams/pharell-williams-freedom/stream.jpg";
import stream7Img from "./streams/will-smith-black-suits/stream.jpg";
import stream8Img from "./streams/imagine-dragons-whatever/stream.jpg";
import stream9Img from "./streams/coldplay-adventure-of-a-lifetime/stream.jpg";
import stream10Img from "./streams/katy-perry-dark-horse/stream.jpg";
import stream11Img from "./streams/ed-sheeran-shape-of-you/stream.jpg";

function App() {
  const asideRef = useRef();
  const [asideActive, setAsideActive] = useState(0);

  useEffect(() => {
    if (asideActive) {
      asideRef.current.classList.add("show");
      asideRef.current.classList.add("active");
    } else {
      asideRef.current.classList.remove("active");
    }
  }, [asideActive]);

  const videoItems = Streams.map((item) => {
    return (
      <div className="video-item">
        <Link className="item-link" to={`/watch?v=${item.id}`}>
          <img src={item.image} className="item-img" alt="item" />
          <div className="item-desc">
            <h3 className="desc-title">{item.title}</h3>
            <span className="desc-author">{item.author}</span>
            <br />
            <span className="desc-views">{item.viewsSmall} views</span>
            <span className="desc-time">{item.releaseAgo}</span>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-start">
          <Icon
            icon="hamburger"
            className="navbar-hamburger"
            onClick={() => setAsideActive(true)}
          />

          <Brand className="navbar-logo" />
        </div>
        <div className="navbar-mid">
          <div className="navbar-search">
            <input
              type="text"
              className="search-input"
              placeholder="Search"
            ></input>
            <label className="search-label">
              <Icon icon="search" />
            </label>
          </div>

          <Icon icon="mic" className="navbar-mic" />
        </div>
        <div className="navbar-end">
          <Icon icon="camera" />
          <Icon icon="menu" />
          <Icon icon="notification" />
          <div className="navbar-user">R</div>
        </div>
      </nav>

      <aside
        className="aside"
        onTransitionEnd={() => {
          if (!asideActive) {
            asideRef.current.classList.remove("show");
          }
        }}
        ref={asideRef}
      >
        <div className="aside-main">
          <div className="main-header">
            <Icon icon="hamburger" onClick={() => setAsideActive(false)} />
            <Brand />
          </div>
          <ul className="main-content">
            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="home" className="item-icon" />
                <span className="item-text">Home</span>
              </a>
            </li>
            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="explore" className="item-icon" />
                <span className="item-text">Explore</span>
              </a>
            </li>
            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="subscriptions" className="item-icon" />
                <span className="item-text">Subscriptions</span>
              </a>
            </li>
            <li className="content-item item-separator"></li>
            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="library" className="item-icon" />
                <span className="item-text">Library</span>
              </a>
            </li>
            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="history" className="item-icon" />
                <span className="item-text">History</span>
              </a>
            </li>
            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="your-videos" className="item-icon" />
                <span className="item-text">Your videos</span>
              </a>
            </li>
            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="watch-later" className="item-icon" />
                <span className="item-text">Watch later</span>
              </a>
            </li>
            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="live" className="item-icon" />
                <span className="item-text">Mix</span>
              </a>
            </li>

            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="liked-videos" className="item-icon" />
                <span className="item-text">Liked videos</span>
              </a>
            </li>
            <li className="content-item item-separator"></li>

            <li className="content-item item-section">Subscriptions</li>
            <li className="content-item item-subscription">
              <a href="#1" className="item-link">
                <img src={sadhguruIcon} className="item-img" alt="sadhguru" />
                <span className="item-text">Sadhguru</span>
              </a>
            </li>
            <li className="content-item item-subscription">
              <a href="#1" className="item-link">
                <img
                  src={codeAndCreateIcon}
                  className="item-img"
                  alt="Code And Create"
                />
                <span className="item-text">Code And Create</span>
              </a>
            </li>
            <li className="content-item item-subscription">
              <a href="#1" className="item-link">
                <img
                  src={moreleIcon}
                  className="item-img"
                  alt="Code And Create"
                />
                <span className="item-text">moreleTV</span>
              </a>
            </li>
            <li className="content-item item-subscription">
              <a href="#1" className="item-link">
                <img
                  src={sadhguruPLIcon}
                  className="item-img"
                  alt="Sadhguru Polska"
                />
                <span className="item-text">Sadhguru Polska</span>
              </a>
            </li>
            <li className="content-item item-subscription">
              <a href="#1" className="item-link">
                <img
                  src={ishaIcon}
                  className="item-img"
                  alt="Code And Create"
                />
                <span className="item-text">Isha Foundation</span>
              </a>
            </li>
            <li className="content-item item-subscription">
              <a href="#1" className="item-link">
                <img
                  src={dandapaniIcon}
                  className="item-img"
                  alt="Code And Create"
                />
                <span className="item-text">DandapaniLLC</span>
              </a>
            </li>
            <li className="content-item item-subscription">
              <a href="#1" className="item-link">
                <img
                  src={traversyIcon}
                  className="item-img"
                  alt="Code And Create"
                />
                <span className="item-text">Traversy Media</span>
              </a>
            </li>
            <li className="content-item item-more">
              <a href="#1" className="item-link">
                <Icon icon="show-more" className="item-icon" />
                <span className="item-text">Show 8 more</span>
              </a>
            </li>
            <li className="content-item item-separator"></li>
            <li className="content-item item-section">More from youtube</li>
            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="youtube-premium" className="item-icon" />
                <span className="item-text">YouTube Premium</span>
              </a>
            </li>
            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="movies" className="item-icon" />
                <span className="item-text">Movies</span>
              </a>
            </li>
            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="gaming" className="item-icon" />
                <span className="item-text">Gaming</span>
              </a>
            </li>
            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="live" className="item-icon" />
                <span className="item-text">Live</span>
              </a>
            </li>
            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="sports" className="item-icon" />
                <span className="item-text">Sports</span>
              </a>
            </li>
            <li className="content-item item-separator"></li>
            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="settings-2" className="item-icon" />
                <span className="item-text">Settings</span>
              </a>
            </li>
            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="report-history" className="item-icon" />
                <span className="item-text">Report history</span>
              </a>
            </li>
            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="help" className="item-icon" />
                <span className="item-text">Help</span>
              </a>
            </li>
            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="send-feedback" className="item-icon" />
                <span className="item-text">Send feedback</span>
              </a>
            </li>
            <li className="content-item item-separator"></li>
            <li className="content-item item-footer">
              <ul className="footer-links">
                <li className="footer-item">
                  <a href="#1" className="footer-link">
                    About
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#1" className="footer-link">
                    Press
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#1" className="footer-link">
                    Copyright
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#1" className="footer-link">
                    Contact us
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#1" className="footer-link">
                    Creators
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#1" className="footer-link">
                    Advertise
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#1" className="footer-link">
                    Developers
                  </a>
                </li>
              </ul>
              <ul className="footer-links">
                <li className="footer-item">
                  <a href="#1" className="footer-link">
                    Terms
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#1" className="footer-link">
                    Privacy
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#1" className="footer-link">
                    Policy &amp; Safety
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#1" className="footer-link">
                    How YouTube works
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#1" className="footer-link">
                    Test new features
                  </a>
                </li>
              </ul>
              <div className="footer-copyright">&copy; 2021 Google LLC</div>
            </li>
          </ul>
        </div>
      </aside>

      <div className="content">
        <div className="content-main">
          <Route path="/watch" component={Stream} />
        </div>
        <div className="content-right">
          {videoItems}
          <div className="video-item">
            <img src={stream1Img} className="item-img" alt="item"></img>
            <div className="item-desc">
              <h3 className="desc-title">C-BooL - Golden Rules</h3>
              <span className="desc-author">C-BooL</span>
              <br />
              <span className="desc-views">9.7M views</span>
              <span className="desc-time">4 months ago</span>
            </div>
          </div>
          <div className="video-item">
            <img src={stream2Img} className="item-img" alt="item"></img>
            <div className="item-desc">
              <h3 className="desc-title">
                Tina Turner - Mother Within (Heavenly Home) - 'Beyond'
              </h3>
              <span className="desc-author">TINA Turner Blog</span>
              <br />
              <span className="desc-views">2.4M views</span>
              <span className="desc-time">6 years ago</span>
            </div>
          </div>
          <div className="video-item">
            <img src={stream3Img} className="item-img" alt="item"></img>
            <div className="item-desc">
              <h3 className="desc-title">
                Sia - Courage To Change (Official Music Video)
              </h3>
              <span className="desc-author">Sergey Tyapaev</span>
              <br />
              <span className="desc-views">14M views</span>
              <span className="desc-time">6 months ago</span>
            </div>
          </div>
          <div className="video-item">
            <img src={stream4Img} className="item-img" alt="item"></img>
            <div className="item-desc">
              <h3 className="desc-title">
                Rag'n'Bone Man - Human (Official Video)
              </h3>
              <span className="desc-author">Rag'n'Bone Man</span>
              <br />
              <span className="desc-views">1.3B views</span>
              <span className="desc-time">5 years ago</span>
            </div>
          </div>
          <div className="video-item">
            <img src={stream5Img} className="item-img" alt="item"></img>
            <div className="item-desc">
              <h3 className="desc-title">
                Sadhguru On How to Manifest What you Really Want
              </h3>
              <span className="desc-author">Sadhguru</span>
              <br />
              <span className="desc-views">12M views</span>
              <span className="desc-time">1 year ago</span>
            </div>
          </div>
          <div className="video-item">
            <img src={stream6Img} className="item-img" alt="item"></img>
            <div className="item-desc">
              <h3 className="desc-title">Pharell Williams - Freedom (Video)</h3>
              <span className="desc-author">Pharell Williams</span>
              <br />
              <span className="desc-views">114M views</span>
              <span className="desc-time">6 years ago</span>
            </div>
          </div>
          <div className="video-item">
            <img src={stream7Img} className="item-img" alt="item"></img>
            <div className="item-desc">
              <h3 className="desc-title">
                Will Smith - Black Suits Comin' (Nod Ya Head) ft. TRÂ-Knox
              </h3>
              <span className="desc-author">WillSmithVEVO</span>
              <br />
              <span className="desc-views">12M views</span>
              <span className="desc-time">11 years ago</span>
            </div>
          </div>
          <div className="video-item">
            <img src={stream8Img} className="item-img" alt="item"></img>
            <div className="item-desc">
              <h3 className="desc-title">
                Imagine Dragons - Whatever It Takes
              </h3>
              <span className="desc-author">ImagineDragons</span>
              <br />
              <span className="desc-views">70M views</span>
              <span className="desc-time">4 years ago</span>
            </div>
          </div>
          <div className="video-item">
            <img src={stream9Img} className="item-img" alt="item"></img>
            <div className="item-desc">
              <h3 className="desc-title">
                Coldplay - Adventure Of A Lifetime (Official Video)
              </h3>
              <span className="desc-author">Coldplay</span>
              <br />
              <span className="desc-views">1.2B views</span>
              <span className="desc-time">6 years ago</span>
            </div>
          </div>
          <div className="video-item">
            <img src={stream10Img} className="item-img" alt="item"></img>
            <div className="item-desc">
              <h3 className="desc-title">
                Katy Perry - Dark Horse (Official) ft. Juicy J
              </h3>
              <span className="desc-author">Katy Perry</span>
              <br />
              <span className="desc-views">3.1B views</span>
              <span className="desc-time">7 years ago</span>
            </div>
          </div>
          <div className="video-item">
            <img src={stream11Img} className="item-img" alt="item"></img>
            <div className="item-desc">
              <h3 className="desc-title">
                Ed Sheeran - Shape of You (Official Music Video)
              </h3>
              <span className="desc-author">Ed Sheeran</span>
              <br />
              <span className="desc-views">5.4B views</span>
              <span className="desc-time">4 years ago</span>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
