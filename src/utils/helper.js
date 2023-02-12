export function filterData(searchInput, restuarantState) {
    console.log(searchInput);
    const filteredData = restuarantState.filter((res) =>
      res?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
    );
    console.log("filtereddata");
    console.log(filteredData);
    return filteredData;
  }
  