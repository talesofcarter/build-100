import React from "react";
import { Nav } from "./components/Nav";

function App(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-[#faf9f5] px-4 py-12">
      <div className="mx-auto w-full max-w-md">
        <Nav />
      </div>
    </main>
  );
}

export default App;
