import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          404
        </h1>

        <Link
          to="/"
          className="text-blue-400 hover:text-blue-300"
        >
          홈으로 이동
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;