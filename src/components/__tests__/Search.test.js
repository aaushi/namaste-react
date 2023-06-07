import { StaticRouter } from "react-router-dom/server";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { render, waitFor,screen, fireEvent
 } from "@testing-library/react";
import { RESTAURANT_DATA } from "../../mocks/data";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("search results on homepage", async () => {
  //jest.spyOn(console, 'error').mockImplementation(jest.fn());
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  //const shimmer=body.getByTestId('shimmer')
  //const search=body.getByTestId('search')
  //expect(shimmer).toBeInTheDocument();
  await waitFor(() => expect(body.getByTestId("search")));
  const restuarantList=body.getByTestId('res-list');
  expect(restuarantList.children.length).toBe(15)
});

test("Search for Shop", async () => {
 //jest.spyOn(console, 'error').mockImplementation(jest.fn());
 const body = render(
  <StaticRouter>
    <Provider store={store}>
      <Body />
    </Provider>
  </StaticRouter>
);
//const shimmer=body.getByTestId('shimmer')
//const search=body.getByTestId('search')
//expect(shimmer).toBeInTheDocument();
await waitFor(() => expect(body.getByTestId("search")));
const input=body.getByTestId('search-input');
fireEvent.change(input,{target:{
  value:"shop"
}})
const searchbtn=body.getByTestId("search")
fireEvent.click(searchbtn);
//const restuarantList=body.getByTestId('res-list');
//expect(restuarantList.children.length).toBe(10)

});
