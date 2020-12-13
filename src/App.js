import React, { useState } from "react";
import "./styles.css";
import logo from "../buisness.svg";

const fashion = [
  {
    name: "Anaysa",
    followers: "11.3M subscribers",
    link: "https://www.youtube.com/user/iloveindianmakeup",
    "img-link":
      "https://www.theindianwire.com/wp-content/uploads/2019/06/Shruti-Arjun-Anand-1.png"
  },
  {
    name: "Sejal Kumar",
    followers: "1.3M subscribers",
    link: "https://www.youtube.com/user/sejalkumar7",
    "img-link":
      "https://www.theindianwire.com/wp-content/uploads/2019/06/Sejal-Kumar.png"
  },
  {
    name: "Malvika Sitlani ",
    followers: "650K subscribers",
    link: "https://www.youtube.com/channel/UCurIxpcdDLU8sgHKN2TXJHw",
    "img-link":
      "https://www.theindianwire.com/wp-content/uploads/2019/06/Malvika-Sitlani.png"
  },
  {
    name: "Komal Pandey",
    followers: "968K subscribers",
    link: "https://www.youtube.com/channel/UCx2JNgWJPPTBODN-U56O-tg",
    "img-link":
      "https://www.theindianwire.com/wp-content/uploads/2019/06/Komal-Pandey-1.png"
  },
  {
    name: "Shanice Shrestha",
    followers: "626K subscribers",
    link: "https://www.youtube.com/channel/UCCLzJP8T09kuoy3OGPHNs5g",
    "img-link":
      "https://i2.wp.com/socialsuccessor.club/wp-content/uploads/2020/06/Shanice-Shrestha-instagram.jpg?fit=640%2C421&ssl=1"
  }
];
const moto = [
  {
    name: "Mumbiker Nikhil",
    followers: "3.52M subscribers",
    link: "https://www.youtube.com/channel/UCNn6AaHharXIbkRleXGboiQ",
    "img-link":
      "https://www.theindianwire.com/wp-content/uploads/2019/06/Shruti-Arjun-Anand-1.png"
  },
  {
    name: "Mohammed Salim Khan",
    followers: "1.35M subscribers",
    link: "https://www.youtube.com/channel/UC15sF31QE-7rooIlSKnTq_w",
    "img-link":
      "https://www.theindianwire.com/wp-content/uploads/2019/06/Shruti-Arjun-Anand-1.png"
  },
  {
    name: "RiderGirl Vishakha",
    followers: "747K subscribers",
    link: "https://www.youtube.com/channel/UCz3bPLqJMACZj9h5bClFVFA",
    "img-link":
      "https://www.theindianwire.com/wp-content/uploads/2019/06/Shruti-Arjun-Anand-1.png"
  },
  {
    name: "Jasminder Singh",
    followers: "2.57M subscribers",
    link: "https://www.youtube.com/user/jsfilmsindia",
    "img-link":
      "https://www.theindianwire.com/wp-content/uploads/2019/06/Shruti-Arjun-Anand-1.png"
  },
  {
    name: "Priyanka Kochhar",
    followers: "60.4K subscribers",
    link: "https://www.youtube.com/channel/UCiPXLJN9rn0w8jTzaSPK8iQ",
    "img-link":
      "https://www.theindianwire.com/wp-content/uploads/2019/06/Shruti-Arjun-Anand-1.png"
  }
];
export default function App() {
  const [fashionPeople, setFasion] = useState("Select The Section");
  const [fashionFollowers, setFasionFollowers] = useState("");
  const [fashionLinks, setFasionlinks] = useState("");
  const [MotoPeople, setMoto] = useState("");
  const [MotoFollowers, setMotoFollowers] = useState("");
  const [MotoLinks, setMotolinks] = useState("");
  function fashionHandler(event) {
    return fashion.forEach((item) => {
      var newValue = item["name"];
      var newFollowers = item["followers"];
      setFasion(newValue);
      setFasionFollowers(newFollowers);
      setFasionlinks(item["link"]);
    });

    //  fashion.forEach((item)=>{
    //    var newValue = item["name"];
    //    setFasion(newValue);
    //  })
  }
  // function motoHandler() {
  //   return(
  //     moto.forEach((item)=>{
  //       var newValue = item["name"];
  //       var newFollowers = item["followers"]
  //        setMoto(newValue);
  //        setMotoFollowers(newFollowers);
  //     })

  // )
  // }
  // function food() {}
  // function game() {}

  return (
    <div className="App">
      <nav class="navigation container">
        <div className="nav-brand">
          <h1>World-Of-Yotube-Creators</h1>
        </div>
      </nav>

      <div className="center-image">
        <img src={logo} />
      </div>
      <div className="about container container-fluid">
        <h2>ABOUT-YOUTUBE</h2>
        <p>
          YouTube is an American online video-sharing platform headquartered in
          San Bruno, California. Three former PayPal employees—Chad Hurley,
          Steve Chen, and Jawed Karim—created the service in February 2005.
          Google bought the site in November 2006 for US$1.65 billion; YouTube
          now operates as one of Google's subsidiaries. YouTube allows users to
          upload, view, rate, share, add to playlists, report, comment on
          videos, and subscribe to other users. It offers a wide variety of
          user-generated and corporate media videos. Available content includes
          video clips, TV show clips, music videos, short and documentary films,
          audio recordings, movie trailers, live streams, and other content such
          as video blogging, short original videos, and educational videos. Most
          of the content on YouTube is uploaded by individuals, but media
          corporations including CBS, the BBC, Vevo, and Hulu offer some of
          their material via YouTube as part of the YouTube partnership program.
          Unregistered users can watch, but not upload, videos on the site,
          while registered users are permitted to upload an unlimited number of
          videos and add comments to videos. Age-restricted videos are available
          only to registered users affirming themselves to be at least 18 years
          old.
        </p>
      </div>
      <div className="mission container container-fluid">
        <h2>OUR-MISSION</h2>
        <p>
          Keeping in mind about Yotube platform , In India There is tremendous
          growth in field of youtube and social influencing. Seeing many
          Influencers and their popularity , Young Generation are also dreaming
          and proceeding to make their carrer in Youtube world. So basically we
          help intrested people's to know more about Youtube and how to make
          their carrer in it. We provide details of basic Yotuber's and their
          playlist where they can go and watch their videos and can learn what
          things actually required to succeed in it.
        </p>
      </div>
      <div className="working container container-fluid">
        <h2>CHECKOUT-YOUR-INTEREST</h2>

        <div className="buttons-div">
          <button
            onClick={() => {
              fashionHandler();
            }}
            className="buttons"
          >
            Fashion-Vlogging
          </button>
          {/* <button onClick={()=>{motoHandler()}} className="buttons">
            Moto-Vlogging
          </button> */}
          {/* <button onClick={food} className="buttons">
            Food-Vlogging
          </button>
          <button onClick={game} className="buttons">
            Gamer's-Zone
          </button> */}
        </div>
        <div
          className="button-description"
          style={{ border: "1px solid black", padding: "0.7rem" }}
        >
          <p>
            {fashionPeople}
            <br></br>
            {fashionFollowers}
            <br></br>
          </p>
          <button className="buttons">
            <a
              href={fashionLinks}
              target="_blank"
              style={{ textDecoration: "none", color: "whitesmoke" }}
            >
              View Channel
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
