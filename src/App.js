import { Routes, Route } from 'react-router-dom';

import Slider from './routes/slide/Slider';
import Detail from './routes/detail/Detail';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Slider />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
