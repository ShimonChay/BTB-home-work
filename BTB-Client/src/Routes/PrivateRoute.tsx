import { FC, ReactNode } from 'react';
import { Redirect } from 'react-router-dom';

interface PrivateRoute {
    children: ReactNode;
    isPrivate: boolean;
    isAuth: boolean;
}

const PrivateRoute: FC<PrivateRoute> = ({ children, isPrivate, isAuth }) => {
    if (isPrivate && !isAuth) {
        return <Redirect to="/login" />
    }

    return (
        <>
            {children}
        </>
    );
};

export default PrivateRoute;