import "/src/App.css";
import { useNavigate } from 'react-router-dom';

export default function Portfolio() {
    const navigate = useNavigate();

  return (
    <>
      <div className="EmptyContiner">
        <img src="./src/img/empty_site.png" alt="Emty Site" />
      <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </>
  );
}
