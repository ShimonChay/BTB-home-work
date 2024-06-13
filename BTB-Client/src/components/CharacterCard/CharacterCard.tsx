import { FC } from "react";
import "./CharacterCard.style.css";
import { ICharacter, Indication } from "../../types/Character";
import { useAdmin } from "../../hooks/useAdmin/useAdmin";
import { useDialog } from "../../hooks/useDialog/useDialog";

interface ICharacterCardProps {
  character: ICharacter;
  indications: Indication[];
}

const CharacterCard: FC<ICharacterCardProps> = ({ character, indications }) => {
  const { isAdmin } = useAdmin();
  const { setIsOpen, setContent } = useDialog();

  const popupCardContent = () => {
    return (
      <div className="adminContent">
        <h2 className="adminTitle">Admin Extra Info</h2>
        {Object.entries(character).map(([key, value]) => {
          if (Array.isArray(value)) {
            return (
              <div key={key} className="adminInfo">
                <strong className="title">{key}:</strong>
                <ul className="list">
                  {value.map((item, index) => (
                    <li key={index} className="listItem">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          } else if (typeof value === "object" && value !== null) {
            return (
              <div key={key} className="adminInfo">
                <strong className="title">{key}:</strong>
                <ul className="list">
                  {Object.entries(value).map(([subKey, subValue], subIndex) => (
                    <li key={subIndex} className="listItem">
                      {subKey}: <>{subValue}</>
                    </li>
                  ))}
                </ul>
              </div>
            );
          } else {
            return (
              <div key={key} className="adminInfo">
                <strong className="title">{key}:</strong> {value}
              </div>
            );
          }
        })}
      </div>
    );
  };
  
  const handleCardClicked = () => {
    if (isAdmin) {
      setIsOpen(true);
      setContent(popupCardContent());
    }
  };

  return (
    <>
      <div
        onClick={handleCardClicked}
        className={"card" + (isAdmin ? " clickableCard" : "")}
      >
        <img
          className="characterImg"
          src={character.image}
          alt="Character img"
        />
        <div className="indicationsArea">
          {indications &&
            indications.map((indication, index) => {
              return (
                <div key={index} className="cardIndication">
                  <div className="indItem">{indication.component}</div>
                  <div className="indName indItem">
                    {character[indication.name]}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default CharacterCard;
