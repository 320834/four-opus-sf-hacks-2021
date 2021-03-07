import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "What Was Before",
      artist: "Philanthrope, Leavv",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#27625F", "93D0B4"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9923",
    },
    {
      name: "Hereafter",
      artist: "Makzo",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#F0946F", "435B9B"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11770",
    },
  ];
}

export default chillHop;
