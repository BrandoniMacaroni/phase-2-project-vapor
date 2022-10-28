import React from "react";

function App() {

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/add-games">
          <GameForm />
        </Route>
        <Route path="/games">
          <GamesPage />
        </Route>
        <Route exact path="/home">
          <body>
            <div>HOME</div>
          </body>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
