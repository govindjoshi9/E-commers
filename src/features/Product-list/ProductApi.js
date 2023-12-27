
export function fetchAllProduct() {
  return new Promise(async (resolve) => {
    //Not hard coded
    const response = await fetch(" http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchAllProductByFilter(filter) {
  // filter = {'catager': 'smartphone'}
  let queryString = '';
  for (let key in filter) {
    queryString +=`${key} = ${filter[key]}&`
  }

  return new Promise(async (resolve) => {
    //Not hard coded
    const response = await fetch(" http://localhost:8080/products?" + queryString);
    const data = await response.json();
    // console.log(response)
    resolve({ data });
  });
}
