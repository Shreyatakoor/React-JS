function BasicFigure({ img, text }) {
  return (
    <div style={{ margin: 10 }}>
      <img
        src={img}
        width="150"
        style={{ borderRadius: "10px" }}
      />
      <p>{text}</p>
    </div>
  );
}

export default BasicFigure;
