import "./styles.css";

function Holistic() {

  
  return (
    <div class="container">
      <video class="input_video"></video>
      <canvas class="output_canvas" width="1280px" height="720px"></canvas>
      <div class="loading">
        <div class="spinner"></div>
        <div class="message">
          Loading
        </div>
      </div>
      <div class="control-panel"></div>
      <div class='square-box'>
        <div class="landmark-grid-container"></div>
      </div>
    </div>
  )
}

export default Holistic