import ShiftingDropDown from "./components/shifting-drop-down";

export default function Home() {
  return (
    <div className="max-w-screen-xl h-full p-4 mx-auto">
      <div className="w-full h-96 bg-green-400 flex items-center justify-center rounded-xl mb-4 text-5xl md:text-7xl font-bold text-secondary">
        Home
      </div>
      <div className="h-96 bg-emerald-50 flex flex-col items-center justify-center rounded-xl mb-4 text-5xl md:text-7xl border-2 border-emerald-400 font-bold text-secondary">
        <p className="text-emerald-400 text-center font-normal text-lg p-4">Testing shifting drop down nav</p>
        <ShiftingDropDown />
      </div>
      <div className="h-96 bg-green-400 flex items-center justify-center rounded-xl mb-4 text-5xl md:text-7xl font-bold text-secondary">
        Wda wda!!
      </div>
    </div>
  );
}
