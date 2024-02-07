import React, { useEffect, useState } from "react";
import { View } from "react-native";

import Navbars from "./components/Navbars";
import Characters from "./components/Characters";
import Paginacion from "./components/Paginacion";

type InfoType = {
  prev: string | null;
  next: string | null;
};


function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState<InfoType>({ prev: null, next: null });


  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacter = (url: string) => {
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error));
  };


  useEffect(() => {
    fetchCharacter(initialUrl);
  }, []);

  const onPrevious = () => {
    if (info && info.prev) {
        fetchCharacter(info.prev);
    }
};


const onNext = () => {
  if (info && info.next) {
      fetchCharacter(info.next);
  }
};


  return (
    <>
      <Navbars brand="Rick and Morty" />
      <View style={{ flex: 1, marginTop: 50 }}>
        <Paginacion prev={info?.prev} next={info?.next} onPrevious={onPrevious} onNext={onNext}/>
        <Characters characters={characters}/>
        {/* Aquí deberías renderizar el componente Paginacion, no Paginación */}
        <Paginacion prev={info?.prev} next={info?.next} onPrevious={onPrevious} onNext={onNext}/>
      </View>
    </>
  );
}

export default App;
