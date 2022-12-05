import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className="max-w-xl mx-auto shadow border-b py-4">
      <div className="grid place-content-center py-4">
        <div className="font-bold text-2xl tracking-wider py-4">
          <h1>Unauthorized</h1>
        </div>
        <p>You don't have access to the requested page.</p>
        <br />
        <div
          className="rounded text-white font-semibold bg-blue-400
            hover:bg-blue-700 px-6 py-2 shadow border-b-2"
        >
          <button onClick={goBack}>Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
