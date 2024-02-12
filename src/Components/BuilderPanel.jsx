import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const BuilderPanel = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Tabs
      selectedIndex={activeTab}
      onSelect={(index) => setActiveTab(index)}
      className={`flex h-5/6 w-full flex-col gap-0 pt-10`}
    >
      <TabList
        className={`flex w-full items-center justify-between gap-4 focus:outline-none`}
      >
        <Tab
          className={`cursor-pointer rounded-t-lg px-3 py-2 duration-200 ease-in-out hover:bg-purewhite hover:opacity-50 focus:outline-none ${activeTab === 0 ? "bg-purewhite text-black-100" : "text-black-25 hover:text-black-75"}`}
        >
          <p>Pas 1</p>
        </Tab>
        <Tab
          className={`cursor-pointer rounded-t-lg px-3 py-2 duration-200 ease-in-out hover:bg-purewhite hover:opacity-50 focus:outline-none ${activeTab === 1 ? "bg-purewhite text-black-100" : "text-black-25 hover:text-black-75"}`}
        >
          <p>Pas 2</p>
        </Tab>
        <Tab
          className={`cursor-pointer rounded-t-lg px-3 py-2 duration-200 ease-in-out hover:bg-purewhite hover:opacity-50 focus:outline-none ${activeTab === 2 ? "bg-purewhite text-black-100" : "text-black-25 hover:text-black-75"}`}
        >
          <p>Pas 3</p>
        </Tab>
        <Tab
          className={`cursor-pointer rounded-t-lg px-3 py-2 duration-200 ease-in-out hover:bg-purewhite hover:opacity-50 focus:outline-none ${activeTab === 3 ? "bg-purewhite text-black-100" : "text-black-25 hover:text-black-75"}`}
        >
          <p>Pas 4</p>
        </Tab>
        <Tab
          className={`cursor-pointer rounded-t-lg px-3 py-2 duration-200 ease-in-out hover:bg-purewhite hover:opacity-50 focus:outline-none ${activeTab === 4 ? "bg-purewhite text-black-100" : "text-black-25 hover:text-black-75"}`}
        >
          <p>Pas 5</p>
        </Tab>
      </TabList>

      <TabPanel
        className={`flex h-5/6 w-full flex-col items-end justify-center gap-4 bg-purewhite p-6`}
      >
        <h3 className="w-full">Selecciona el teu moble</h3>
        <p className="w-full">
          Comencem! Aquí pots seleccionar el teu tipus de moble per dissenyar
          les seves dimensions, qualitats i acabats.
        </p>
        <form className="flex h-full w-full items-center justify-center">
          {/* Aquí puedes añadir los campos para el formulario de la <h5></h5>Paso 1 */}
          <input
            type="select"
            className="m-0 bg-white p-0 focus:outline-none"
          />
        </form>
        <button className="flex items-center justify-center gap-4 duration-300 ease-in-out">
          <p>Continuar</p>
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </TabPanel>

      <TabPanel
        className={`flex w-full flex-col items-end justify-center gap-4 bg-purewhite p-6`}
      >
        <h3 className="w-full">Prendre mides</h3>
        <p className="w-full">
          Ara et demanarem que medeixis el teu espai o que ens donis les mides
          que necessitis per tal de poder construir el teu moble a mida.
        </p>
        <form className="flex h-full w-full items-center justify-center">
          {/* Aquí puedes añadir los campos para el formulario de la <h5></h5>Paso 1 */}
          <input
            type="select"
            className="m-0 bg-white p-0 focus:outline-none"
          />
        </form>
        <button className="flex items-center justify-center gap-4 duration-300 ease-in-out">
          <p>Continuar</p>
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </TabPanel>

      <TabPanel
        className={`flex h-5/6 w-full flex-col items-end justify-center gap-4 bg-purewhite p-6`}
      >
        <h3 className="w-full">Tipus de fusta</h3>
        <p className="w-full">
          Depenen del tipus de fusta que vulguis tindrà unes propietats,
          qualitats i acabats diferents. Nosaltres t&apos;ajudem a escollir el
          material que necessites.
        </p>
        <form className="flex h-full w-full items-center justify-center">
          {/* Aquí puedes añadir los campos para el formulario de la <h5></h5>Paso 1 */}
          <input
            type="select"
            className="m-0 bg-white p-0 focus:outline-none"
          />
        </form>
        <button className="flex items-center justify-center gap-4 duration-300 ease-in-out">
          <p>Continuar</p>
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </TabPanel>

      <TabPanel
        className={`flex h-5/6 w-full flex-col items-end justify-center gap-4 bg-purewhite p-6`}
      >
        <h3 className="w-full">Selecciona els acabats</h3>
        <p className="w-full">
          Ja gairebé tenim tot el moble muntat. Només necessitem saber quin
          acabat és el que vols. Aquí tens les opcions.
        </p>
        <form className="flex h-full w-full items-center justify-center">
          {/* Aquí puedes añadir los campos para el formulario de la <h5></h5>Paso 1 */}
          <input
            type="select"
            className="m-0 bg-white p-0 focus:outline-none"
          />
        </form>
        <button className="flex items-center justify-center gap-4 duration-300 ease-in-out">
          <p>Continuar</p>
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </TabPanel>

      <TabPanel
        className={`flex h-5/6 w-full flex-col items-end justify-center gap-4 bg-purewhite p-6`}
      >
        <h3 className="w-full">Finalitzar el disseny del teu moble</h3>
        <p className="w-full">
          Ara et demanarem les teves dades per poder contactar amb tu. Si tens
          algun altre dubte, et deixem un camp per explicar-nos allò que et
          falta per especificar. També tenim un camp per que puguis enviar un
          arxiu explicatiu del moble com un dibuix a mà, un croquis, etc...
        </p>
        <form className="flex h-full w-full items-center justify-center">
          {/* Aquí puedes añadir los campos para el formulario de la <h5></h5>Paso 1 */}
          <input
            type="select"
            className="m-0 bg-white p-0 focus:outline-none"
          />
        </form>
        <button className="flex items-center justify-center gap-4 duration-300 ease-in-out">
          <p>Enviar</p>
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </TabPanel>
    </Tabs>
  );
};

export default BuilderPanel;
