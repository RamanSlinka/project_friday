import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Registration from "./registration/Registration";
import Login from "./login/Login";
import PasswordRecovery from './passwordRecovery/PasswordRecovery';
import NewPassword from "./newPassword/NewPassword";
import Profile from "./profile/Profile";
import Error404 from "./Error404";
import TestPage from "./TestPage";

export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    PASSWORD_RECOVERY: '/passwordRecovery',
    NEW_PASSWORD: '/newPassword',
    PROFILE: '/profile',
    TEST_PAGE: '/testPage',

}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
                <Route path={'/'} exact render={() => <Redirect to={PATH.LOGIN}/>}/>
                <Route path={PATH.LOGIN} render={() => <Login/>}/>
                <Route path={PATH.REGISTRATION} render={() => <Registration/>}/>
                <Route path={PATH.PASSWORD_RECOVERY} render={() => <PasswordRecovery/>}/>
                <Route path={PATH.NEW_PASSWORD} render={() => <NewPassword/>}/>
                <Route path={PATH.PROFILE} render={() => <Profile/>}/>
                <Route path={PATH.TEST_PAGE} render={() => <TestPage/>}/>
                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    )
}

export default Routes
