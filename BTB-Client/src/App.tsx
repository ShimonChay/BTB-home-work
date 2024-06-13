import { Redirect, Route, Switch } from "react-router-dom";
import RoutesMaster from "./Routes/RouterMaster";
import GenericPopup from "./components/GenericPopup/GenericPopup";
import { useDialog } from "./hooks/useDialog/useDialog";
import PrivateRoute from "./Routes/PrivateRoute";
import { FC } from "react";
import { useAuth } from "./hooks/useAuth/useAuth";

const App: FC = () => {
  const { isOpen, setIsOpen, content, setContent } = useDialog();
  const { isAuth } = useAuth()

  return (
    <>
      <Switch>
        {RoutesMaster.map((routeElement, index) => (
          <Route
            key={index}
            path={routeElement.path}
            render={() => (
              <PrivateRoute
                key={index}
                isPrivate={routeElement.isPrivate}
                isAuth={isAuth}
              >
                <routeElement.component />
              </PrivateRoute>
            )}
          />
        ))}
        <Redirect from="/" to="/home" />
      </Switch>
      <GenericPopup
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
          setContent(<></>);
        }}
        content={content}
      />
    </>
  );
}

export default App;
