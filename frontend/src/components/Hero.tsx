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
    <div className="bg-zinc-950 text-stone-50 flex flex-col justify-center items-center h-screen">
      <p className="text-xl ms-2">Hey, I'm Laura</p>
      <h1 className="text-8xl">Full-Stack</h1>
      <h1 className="text-indigo-600 text-8xl">Developer</h1>
      <div
        className="cursor-pointer flex items-center justify-center border-2 border-indigo-600 rounded-3xl py-2 px-4 mt-4 hover:bg-indigo-600 hover:text-white transition-colors duration-300"
        onClick={downloadTxtFile}
      >
        <svg
          className="fill-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="20"
          height="20"
        >
          <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
        </svg>
        <button id="downloadBtn" value="download" className="cursor-pointer ms-2">
          Download Resume
        </button>
      </div>
    </div>
  );
}

export default Hero;
