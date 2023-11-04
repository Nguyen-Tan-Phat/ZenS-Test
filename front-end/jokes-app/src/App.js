import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [jokes, setJokes] = useState([
    {
      id: 1,
      text: "Attending a wedding for the first time, Linh whispered to her mother, 'Why is the bride dressed in white?' 'Because white is the color of happiness, and today is the happiest day of her life,' her mother tried to explain, keeping it simple. The child thought about this for a moment, then said, 'So why’s the groom wearing black?'",
    },
    {
      id: 2,
      text: "An English professor wrote the words, 'Woman without her man is nothing' on the blackboard and directed his students to punctuate it correctly.The men wrote: 'Woman, without her man, is nothing.'The women wrote: 'Woman! Without her, man is nothing.'",
    },
    {
      id: 3,
      text: "Three guys stranded on a desert island find a magic lantern containing a genie, who grants them each one wish. The first guy wishes he was off the island and back home. The second guy wishes the same. The third guy says: 'I’m lonely. I wish my friends were back here.'",
    },
    {
      id: 4,
      text: "Two campers are walking through the woods when a huge brown bear suddenly appears in the clearing about 50 feet in front of them. The bear sees the campers and begins to head toward them. The first guy drops his backpack, digs out a pair of sneakers, and frantically begins to put them on. The second guy says, 'What are you doing? Sneakers won’t help you outrun that bear.' 'I don’t need to outrun the bear', the first guy says. 'I just need to outrun you.'",
    },
    {
      id: 5,
      text: "A guy is sitting at home when he hears a knock at the door. He opens the door and sees a snail on the porch. He picks up the snail and throws it as far as he can. Three years later there’s a knock on the door. He opens it and sees the same snail. The snail says, 'What the hell was that all about?'",
    },
  ]);
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0);
  const [votedJokes, setVotedJokes] = useState(new Set());
  const [showMessage, setShowMessage] = useState(false);

  const showNextJoke = () => {
    const nextIndex = currentJokeIndex + 1;
    if (nextIndex < jokes.length) {
      setCurrentJokeIndex(nextIndex);
    } else {
      setShowMessage(true);
    }
  };

  const handleVote = (like) => {
    const currentJoke = jokes[currentJokeIndex];
    if (!votedJokes.has(currentJoke.id)) {
      setVotedJokes(new Set(votedJokes).add(currentJoke.id));
      showNextJoke();
    }
  };

  return (
    <div>
      <header>
        <img
          src={process.env.PUBLIC_URL + "/NTP.jpg"}
          alt="Logo"
          class="logo"
        />
        <div class="handicraft">
          <h6>
            <span>Handicraft by</span>
            <br /> NTP
          </h6>
        </div>
        <img
          src={process.env.PUBLIC_URL + "/NTP_pic.jpg"}
          alt="Avatar"
          class="avatar"
        />
      </header>
      <div class="text-container">
        <h2>A joke a day keeps the doctor away</h2>
        <h6>If you joke the wrong way, your teeth have to pay. (Serious)</h6>
      </div>
      <div class="jokes">
        {showMessage ? (
          <div className="message-container">
            <p>That's all the jokes for today! Come back another day!</p>
          </div>
        ) : (
          <div className="jokes">
            <p>{jokes[currentJokeIndex].text}</p>
            <div className="horizontal-line"></div>
            <div>
              <button onClick={() => handleVote(true)} className="funny">
                This is Funny!
              </button>
              <button onClick={() => handleVote(false)} className="not-funny">
                This is not Funny.
              </button>
            </div>
          </div>
        )}
      </div>
      <div class="horizontal-line-2"></div>
      <div class="copyright">
        <p>
          This website is created as part of Hlsolusions program. The materials
          contained on this website are provided for general information only
          and do not constitute any form of advice. HLS assumes no
          responsibility for the accuracy of any particular statement and
          accepts no liability for any loss or damage which may arise from
          reliance on the information contained on this site.
        </p>
        <h6>Copyright 2021 HLS</h6>
      </div>
    </div>
  );
};

export default App;
