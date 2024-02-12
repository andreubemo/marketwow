import ContactForm from "/src/Components/ContactForm.jsx";

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-start gap-20">
        <div
          style={{
            backgroundImage: "url('/img/portada-marketwow.webp')",
            backgroundSize: "cover",
          }}
          className="flex h-screen flex-col items-center justify-center p-12 pt-14"
        >
          <div className="flex w-11/12 flex-col items-start justify-center gap-4">
            <h5 className="text-purewhite">
              Escoles, families, hola a tothom!
            </h5>
            <h1 className="hidden text-purewhite">
              Benvingudes a la familia marketwow
            </h1>
            <h2 className="text-purewhite">
              Benvingudes a la familia marketwow
            </h2>
            <p className=" text-purewhite drop-shadow-md">
              Som l&apos;Alex i l&apos;Andreu, cofundadors de Marketwow.es. El
              nostre objectiu és transformar espais educatius en entorns
              innovadors, inspiradors i funcionals.
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </>
  );
}
