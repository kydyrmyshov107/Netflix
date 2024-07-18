import { useNavigate } from "react-router-dom";
import Arrow from "../../../../assets/icon/Arrow";
import scss from "./First.module.scss";
const First = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={scss.First}></div>
      <div className={scss.content}>
        <div>
          <h1>
            Фильмы, сериалы и многое другое без <br /> ограничений
          </h1>
          <h2>Смотрите где угодно. Отменить подписку можно в любое время.</h2>
        </div>
        <div
          onClick={() => navigate("/home", { replace: true })}
          className={scss.buttons}
        >
          <button>Далее</button>
          {/* <IconChevronsRight /> */}
          <Arrow />
        </div>
      </div>
    </>
  );
};

export default First;
