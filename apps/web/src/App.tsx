import Header from "./components/layout/Header/Header";

function App() {
  return (
    <div className="bg-background text-foreground font-display transition-colors duration-300 min-h-screen">
      <Header />
      <h1 className="text-3xl font-bold underline">Hello Novarate!</h1>
    </div>
  );
}

export default App;
