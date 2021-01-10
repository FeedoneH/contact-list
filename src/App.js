import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { Contacts } from "./containers/contacts/Contacts";
import { AddContact } from "./containers/addContact/AddContact";
import { EditContact } from "./containers/editContact/editContact";
import "./App.scss";

function App() {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/">
          <Redirect to="/contacts" />
        </Route>
        <Route exact path="/contacts" component={Contacts} />
        <Route path="/contacts/new" component={AddContact} />
        <Route path="/contacts/edit/:id" component={EditContact} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
