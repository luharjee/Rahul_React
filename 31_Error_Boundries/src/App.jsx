import "./App.css";
import ErrorBoundry from "./ErrorBoundry";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  const showCustomError = ({ error }) => {
    return (
      <div>
        <h1>Ja nu na</h1>
      </div>
    );
  };

  return (
    <>
      <h1>Kaka Shree OP</h1>
      <ErrorBoundary fallbackRender={showCustomError}>
        <ErrorBoundry />
      </ErrorBoundary>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quia
        facilis praesentium dicta veniam ea iure consequatur et dolores voluptas
        est molestiae suscipit velit necessitatibus libero quas, ut accusamus
        nulla! Facilis soluta officiis fugiat omnis illum illo, quia in
        cupiditate velit id suscipit nemo beatae! Vero tempore distinctio
        dolores voluptatum quae quis, eos modi minima voluptas nesciunt incidunt
        praesentium itaque? Maiores ratione, eaque unde aut culpa rerum
        molestiae itaque architecto vero amet ex dolor explicabo veritatis
        provident praesentium perferendis? Rerum, expedita. Velit eveniet
        doloremque nemo, modi libero dolorum obcaecati possimus? Adipisci
        obcaecati, aut cumque ut odit suscipit repellendus unde dolores
        similique in corrupti qui saepe iste sint, nesciunt molestias? Corrupti
        laborum esse quam voluptatum ab repudiandae officiis sed suscipit
        doloremque? Reprehenderit explicabo fugit facere consequuntur saepe
        aspernatur, earum exercitationem doloremque minima deserunt recusandae
        soluta quasi repellendus architecto ab. Sed excepturi suscipit
        aspernatur accusantium eveniet aliquam id, neque repudiandae commodi
        natus.
      </p>
    </>
  );
}

export default App;
