function LoadingScreen() {
  return (
    <div className="min-w-screen flex justify-center items-center z-30">
      <div className="loader bg-white p-3 rounded-full space-x-3 flex">
        <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
        <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
        <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}

export default LoadingScreen;
