export interface ILocation {
    name: string;
    url: string;

}

export interface ICharacterIndication {
    created: string;
    episode: string[];
    gender: string;
    id: number;
    image: string;
    name: string;
    species: string;
    status: string;
    type: string;
    url: string;
}

export interface ICharacter {
    created: string;
    episode: string[];
    gender: string;
    id: number;
    image: string;
    location: ILocation;
    name: string;
    origin: ILocation;
    species: string;
    status: string;
    type: string;
    url: string;
}

export type CharacterKeys = keyof ICharacterIndication

export type Indication = {
    name: CharacterKeys,
    component: JSX.Element
}