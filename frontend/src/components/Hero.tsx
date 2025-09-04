function Hero() {
  const downloadTxtFile = () => {
    const pdfUrl = "Ultimate-CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Garcineanu_Elena-Laura_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="text-stone-50 flex flex-col justify-center items-center text-center h-screen">
      <p className="text-xl ms-2 text-stone-400">Hello, I am</p>
      <h1 className="text-6xl font-bold mt-1 mb-2">Gârcineanu Elena-Laura</h1>
      <h1 className="text-stone-400 text-4xl">Full-Stack Developer</h1>
      <div className="flex justify-center items-center mt-2">
        <div className="fill-stone-50 w-8 h-8">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z" />
          </svg>
        </div>
        <h1>Romania</h1>
      </div>
      <div className="flex justify-center items-center gap-4 mt-3">
        <div
          className="cursor-pointer flex items-center justify-center border-2 border-stone-600 rounded-3xl py-2 px-4 hover:bg-stone-600 hover:text-white transition-colors duration-300"
          onClick={downloadTxtFile}
        >
          <button
            id="downloadBtn"
            value="download"
            className="cursor-pointer ms-2"
          >
            Download CV
          </button>
        </div>
        <div className="text-center bg-stone-600 border-2 border-stone-600 rounded-3xl py-2 px-4 hover:bg-zinc-950 hover:text-white transition-colors duration-300">
          <a href="#Contact">Contact info</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
