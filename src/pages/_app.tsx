import Button from "~/features/ui/components/Button";

export function App() {
  return (
    <div className="m-4 flex flex-col gap-4">
      <Button color="primary">Primary Button</Button>
      <Button color="secondary">Secondary Button</Button>
      <Button color="danger">Danger Button</Button>
      <Button color="info">Info Button</Button>
      <Button color="warn">Warn Button</Button>
    </div>
  );
}

export default App;
