const Notification = (props) => {
  //  Write your code here.
  const { content, bgColor, color, url } = props;
  return (
    <div
      className="message"
      style={{
        backgroundColor: bgColor,
        color: color,
      }}
    >
      <img src={url} className="image" />
      <p className="para">{content}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <Notification
      content="Information Message"
      bgColor=" #0b69ff"
      color="white"
      url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
    />
    <Notification
      content="Success Message"
      bgColor="#2dca73"
      color="white"
      url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
    />
    <Notification
      content="Warning Message"
      bgColor="#ffb800"
      color="white"
      url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
    />
    <Notification
      content="Danger Message"
      bgColor="#ff0b37"
      color="white"
      url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
