const NotFound = () => {
  const gradient = `linear-gradient(45deg, rgba(255,232,232,1) 0%, rgba(255,241,225,1) 16%, rgba(253,255,215,1) 33%, rgba(223,255,223,1) 49%, rgba(226,234,255,1) 65%, rgba(235,225,255,1) 82%, rgba(255,237,251,1) 100%)`;

  return (
    <div
      className="w-full h-screen flex flex-col justify-center text-center items-center mt-[-4rem] bg-cover"
      style={{ background: gradient }}
    >
      <h1 className="text-[5rem] font-bold">😭 Not Found 😭</h1>
      <h2 className="text-[1.5rem]">Nothing over here</h2>
    </div>
  );
};

export default NotFound;
