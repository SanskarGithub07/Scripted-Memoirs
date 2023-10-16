import "../Styles/Compose.css";

export default function Compose() {
  return (
    <>
      <div className="compose-body">
        <div className="fetch">
          <h1 className="compose-heading">Day</h1>
          <h1 className="compose-heading">Date</h1>
          <h1 className="compose-heading">Time</h1>
        </div>
        <div className="compose-form">
          <div className="compose-title">
            <input type="text" placeholder="Title" name="title" />
          </div>

          <textarea
            className="compose-article"
            placeholder="Article"
            name="article"
          ></textarea>

          <div className="compose-button">
            <button type="submit">Store</button>
          </div>
        </div>
      </div>
    </>
  );
}
