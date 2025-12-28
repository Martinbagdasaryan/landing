import type { IfovoritGame } from "./helper";

const randomPlayer = Math.floor(Math.random() * 10000);

const textAviadrim = (
  <div>
    Get ready for an exciting takeoff in the world of Aviafly, where your
    courage and intuition will be the key to your success. Discover new horizons
    with this exciting game.
    <br />
    <br />
    In classic mode you will make a withdrawal after the bet, but before the
    airplane crashes. Your winnings depend on the odds at which you made the
    withdrawal. Hurry to claim your winnings at the highest odds before the
    plane crashes!
    <br />
    <br />
    Trenball mode allows you to bet on the range in which the airplane will
    land. Your winnings will be determined automatically according to the range
    reached.
    <br />
    <br />
    Aviafly invites you to play both modes at the same time, feeling the
    adrenaline of the moment of takeoff and accepting the challenge of luck. Are
    you ready to become a winner in this exciting game? <br />
    <br />
    Immerse yourself in an exciting adventure with Aviafly!
  </div>
);
export const fovoritGame: IfovoritGame[] = [
  {
    gameName: "Avia Dream",
    gameTamlet:
      "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?auto=format&amp;fit=crop&amp;q=80&amp;w=800",
    gamesURL: `https://gateway.aviadream.org/games/launch?gameId=1&currency=DM&userId=${randomPlayer}&token=oaPoiasfpoiu23a&deviceType=1&language=en&partnerId=1&playMode=demo&hash=sf356DGDRGgfgt544`,
    gameInfo: {
      text: textAviadrim,
      playersType: "Multiplayer",
      rtp: "95%",
    },
  },
  {
    gameName: "Avia Dream",
    gameTamlet:
      "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&amp;fit=crop&amp;q=80&amp;w=800",
    gamesURL: `https://gateway.aviadream.org/games/launch?gameId=1&currency=DM&userId=${randomPlayer}&token=oaPoiasfpoiu23a&deviceType=1&language=en&partnerId=1&playMode=demo&hash=sf356DGDRGgfgt544`,
    gameInfo: {
      text: textAviadrim,
      playersType: "Multiplayer",
      rtp: "95%",
    },
  },
  {
    gameName: "Avia Dream",
    gameTamlet:
      "https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&amp;fit=crop&amp;q=80&amp;w=800",
    gamesURL: `https://gateway.aviadream.org/games/launch?gameId=1&currency=DM&userId=${randomPlayer}&token=oaPoiasfpoiu23a&deviceType=1&language=en&partnerId=1&playMode=demo&hash=sf356DGDRGgfgt544`,
    gameInfo: {
      text: textAviadrim,
      playersType: "Multiplayer",
      rtp: "95%",
    },
  },
  {
    gameName: "Avia Dream",
    gameTamlet:
      "https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?auto=format&amp;fit=crop&amp;q=80&amp;w=800",
    gamesURL: `https://gateway.aviadream.org/games/launch?gameId=1&currency=DM&userId=${randomPlayer}&token=oaPoiasfpoiu23a&deviceType=1&language=en&partnerId=1&playMode=demo&hash=sf356DGDRGgfgt544`,
    gameInfo: {
      text: textAviadrim,
      playersType: "Multiplayer",
      rtp: "95%",
    },
  },
];
