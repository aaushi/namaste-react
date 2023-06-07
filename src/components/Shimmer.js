const Shimmer = () => {
  return (
    <div className="restuarant-list" data-testid="shimmer">
      {Array(10)
        .fill("")
        .map((e,index) => (
          <div key={Math.random()} className="shimmer-card"></div>
        ))}
    </div>
  );
};
export default Shimmer;
