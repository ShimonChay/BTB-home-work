import { FC } from "react";
import "./CardsWrapper.style.css";
import CharacterCard from "../CharacterCard/CharacterCard";
import { ICharacter, Indication } from "../../types/Character";
import Man4Icon from "@mui/icons-material/Man4";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AnimationIcon from '@mui/icons-material/Animation';
import PersonIcon from '@mui/icons-material/Person';

interface CardsWrapperProps {
  characters?: ICharacter[];
}

const CardsWrapper: FC<CardsWrapperProps> = ({ characters }) => {
  const indications: Indication[] = [
    { name: "name", component: <PersonIcon /> },
    { name: "status", component: <AccessTimeIcon /> },
    { name: "species", component: <AnimationIcon />},
    { name: "gender", component: <Man4Icon />},
  ];
  return (
    <>
      <div className="cardsWrapper">
        {characters &&
          characters.map(character => {
            return (
              <CharacterCard
                key={character.id}
                character={character}
                indications={indications}
              />
            );
          })}
      </div>
    </>
  );
};

export default CardsWrapper;
