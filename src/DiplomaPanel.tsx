import { Link, useNavigate } from "react-router";
import { useContext, useEffect } from "react";
import { DiplomaContext } from "./main";

export const DiplomaPanel = () => {
  const { diploma, setDiploma } = useContext(DiplomaContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!diploma?.id) navigate("/diploma-choice");
  }, []);

  return (
    <div className="flex flex-row items-center justify-between gap-2 mx-2 my-4">
      {/* <Icon className="h-8 w-8" strokeWidth={1.75} /> */}
      <p className="text-center text-sm font-semibold text-blue-50">
        {diploma.id}: {diploma.name}
      </p>
      <Link
        to={"/diploma-choice"}
        onClick={() => setDiploma({})}
        className="text-center text-sm text-blue-500"
      >
        Reselect diploma
      </Link>
    </div>
  );
};
