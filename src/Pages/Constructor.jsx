import BuilderPanel from "../Components/BuilderPanel";

export default function Constructor() {
  return (
    <div className="mt-20 flex h-screen w-full flex-col items-center justify-start gap-4">
      <h1>Constructor de mobles</h1>
      <h2>Dissenya el teu moble a la mida en 5 passos</h2>
      <BuilderPanel />
    </div>
  );
}
