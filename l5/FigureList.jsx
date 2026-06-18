import { useState } from "react";
import BasicFigure from "./BasicFigure";

function FigureList() {
  const [pics, setPics] = useState([
    {
      img: "https://picsum.photos/150",
      text: "Image 1",
    },
  ]);

  return (
    <div>
      <button
        onClick={() =>
          setPics([
            ...pics,
            {
              img: "https://picsum.photos/150?" + pics.length,
              text: "Image " + (pics.length + 1),
            },
          ])
        }
      >
        Add
      </button>

      <button onClick={() => setPics(pics.slice(0, -1))}>
        Remove
      </button>

      <div style={{ display: "flex" }}>
        {pics.map((p, i) => (
          <BasicFigure
            key={i}
            img={p.img}
            text={p.text}
          />
        ))}
      </div>
    </div>
  );
}

export default FigureList;
