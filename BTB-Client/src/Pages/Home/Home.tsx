import { FC, useEffect, useState } from "react";
import axios from "axios";
import CardsWrapper from "../../components/CardsWrapper/CardsWrapper";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filters from "../../components/FiltersWrapper/FiltersWrapper";
import Pagination from "../../components/Pagination/Pagination";
import { ICharacter } from "../../types/Character";
import { SEARCH_DELAY } from "../../const/global";
import "./Home.style.css";
import { useDialog } from "../../hooks/useDialog/useDialog";
import { TEXT } from "../../const/text";
import { useHistory } from "react-router-dom";
import { LOGIN_PAGE } from "../../const/routes";

const Home: FC = () => {
  const { setContent, setIsOpen } = useDialog();
  const history = useHistory();

  const [characters, setCharacters] = useState<ICharacter[]>();
  const [nameFilter, setNameFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState("");
  const [pagesMap, setPagesMap] = useState<Map<number, ICharacter[]>>(
    new Map()
  );

  const fetchData = async (page = 1) => {
    try {
      axios
        .get(
          `https://rickandmortyapi.com/api/character?page=${page}${nameFilter}${filters}`
        )
        .then(res => {
          setCharacters(res.data.results);
          setTotalPages(res.data.info.pages);
          setPagesMap(prev => new Map(prev.set(page, res.data.results)));
        });
    } catch (error) {
      setIsOpen(true);
      setContent(<h3>{TEXT.HOME.FETCH_DATA_ERROR}</h3>);
    }
  };

  useEffect(() => {
    const savedData = pagesMap.get(currentPage);
    savedData ? setCharacters(savedData) : fetchData(currentPage);
  }, [currentPage, nameFilter, filters]);

  const updateNameFilter = (input: string) => {
    restData();
    setNameFilter(input ? `&name=${input}` : "");
  };

  const updateFilters = (filters: string) => {
    restData();
    setFilters(filters);
  };

  const restData = () => {
    setCurrentPage(1);
    setPagesMap(new Map());
  };

  const logoutHandler = () => {
    axios
      .post("http://localhost:3000/logout", null, { withCredentials: true })
      .then(() => {
        history.push(LOGIN_PAGE)
      })
      .catch(() => {
        setIsOpen(true);
        setContent(<h3>{TEXT.LOGOUT.ERROR_MSG}</h3>);
      });
  };

  return (
    <>
      <div className="homeHeader">
        <button className="logout" onClick={logoutHandler}>
          Logout
        </button>
      </div>
      <div className="homeContent">
        <SearchBar
          updateData={input => updateNameFilter(input)}
          delay={SEARCH_DELAY}
        />
        <Filters updateFilters={filters => updateFilters(filters)} />
        <CardsWrapper characters={characters} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
};

export default Home;
