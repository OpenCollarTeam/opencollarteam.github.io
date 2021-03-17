import React, { useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import AppWelcome from "./AppWelcome";
import NotFound from "./NotFound";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import MarkdownDocViewer from "./MarkdownDocViewer";
import PluginAPIDocs from "./PluginAPIDocs";
import AddonsAPIDoc from "./AddonsAPIDoc";

function App() {
  const [dark, setDark] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  if (dark) {
    document.body.style = "background: black; color: white;";
  } else {
    document.body.style = "background: white; color: black;";
  }

  return (
    <div>
      <Navbar bg={dark ? "dark" : "light"} variant={dark ? "dark" : "light"}>
        <Navbar.Brand href="/">OpenCollar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="API">
            <NavDropdown.Item href="#/api/plugin">Plugin API Docs</NavDropdown.Item>
            <NavDropdown.Item href="#/api/addons">Addons API Docs</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#/docs/Complete-User-Guide">Complete User Guide</Nav.Link>
          <Nav.Link href="#/docs/Quick-User-Guide">Quick User Guide</Nav.Link>
        </Nav>
      </Navbar>
      <HashRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => {
              return <AppWelcome dark={dark} />;
            }}
          />
          <Route
            exact
            path="/docs/:doc"
            render={(props) => {
              return <MarkdownDocViewer dark={dark} {...props} />;
            }}
          />
          <Route
            exact
            path="/api/plugin"
            render={(props) => {
              return <PluginAPIDocs dark={dark} {...props} />;
            }}
          />
          <Route
            exact
            path="/api/addons"
            render={(props) => {
              return <AddonsAPIDoc dark={dark} {...props} />;
            }}
          />
          <Route
            path="*"
            render={(props) => {
              return <NotFound {...props} dark={dark} />;
            }}
          />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
