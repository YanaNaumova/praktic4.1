function EventsComponent() {
  return (
    <div>
      <h1 onClick={() => console.log("click")}>Header1</h1>
      <h1
        onDoubleClick={() => {
          console.log("double click");
        }}
      >
        Header2
      </h1>
      <h1
        onMouseDown={() => console.log("Кнопка нажата")}
        onMouseUp={() => {
          console.log("Кнопка отжата");
        }}
      >
        Header3
      </h1>
      <h1
        onMouseOver={() => {
          console.log("наведен");
        }}
        onMouseOut={() => console.log("отведен")}
      >
        Header4
      </h1>
      <h1
        onMouseMove={() => {
          console.log("водим курсором");
        }}
      >
        Header5
      </h1>
    </div>
  );
}

export default EventsComponent;
