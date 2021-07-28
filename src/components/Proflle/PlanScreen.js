function PlanScreen() {
  return (
    <div className="h-40 overflow-y-scroll scrollbar-hide">
      <div className="flex justify-between p-5 opacity-80 hover:opacity-100">
        <div className="cursor-pointer hover:underline">
          <h5>Basic</h5>
          <h6>720 HD</h6>
        </div>

        <button className="rounded px-5 py-2 text-lg text-white bg-redPrimary border-none cursor-pointer">Subcribe</button>
      </div>
      <div className="flex justify-between p-5 opacity-80 hover:opacity-100">
        <div className="cursor-pointer hover:underline">
          <h5>Standard</h5>
          <h6>1024 HD</h6>
        </div>

        <button className="rounded px-5 py-2 text-lg text-white bg-redPrimary border-none cursor-pointer">Subcribe</button>
      </div>
      <div className="flex justify-between p-5 opacity-80 hover:opacity-100">
        <div className="cursor-pointer hover:underline">
          <h5>Premium</h5>
          <h6>4K + HDR</h6>
        </div>

        <button className="rounded px-5 py-2 text-lg text-white bg-redPrimary border-none cursor-pointer">Subcribe</button>
      </div>
    </div>
  );
}

export default PlanScreen;
