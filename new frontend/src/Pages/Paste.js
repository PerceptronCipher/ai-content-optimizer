function Paste() {
  return (
    <div className="paste">
      <h1>Paste your Content</h1>
      <textarea placeholder="Paste your caption, tweet, blog or blog content here"></textarea>
      <p className="q">Select Tone</p>
      <div className="dropdown-container">
        <select>
          <option>Professional</option>
          <option>Friendly</option>
          <option>Formal</option>
          <option>Assertive</option>
        </select>

        <select>
          <option>Platform</option>
          <option>Short</option>
          <option>Meduim</option>
          <option>Detailed</option>
        </select>

        <select>
          <option>Audience</option>
          <option>Accept</option>
          <option>Decline</option>
          <option>Request clarification</option>
          <option>Follow Up</option>
        </select>
      </div>
      <div>
        <button className="b3">Optimize & Schedule</button>
      </div>
    </div>
  );
}
export default Paste;
