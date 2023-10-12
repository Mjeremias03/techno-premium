const Galery = () => {
    return (
      <section className="flex w-[600px] h-[430px]">
        <div className="group w-[200px] h-[300px] overflow-hidden relative cursor-pointer">
          <img
            className="w-full h-full object-contain transform scale-90 opacity-50 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
            src="vite.svg"
            alt="15"
          />
        </div>
        <div className="group w-[200px] h-[300px] overflow-hidden relative cursor-pointer">
          <img
            className="w-full h-full object-contain transform scale-90 opacity-50 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
            src="vite.svg"
            alt="11"
          />
        </div>
        <div className="group w-[200px] h-[300px] overflow-hidden relative cursor-pointer">
          <img
            className="w-full h-full object-contain transform scale-90 opacity-50 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
            src="vite.svg"
            alt="14"
          />
        </div>
      </section>
    );
  };
  
  export default Galery;
  