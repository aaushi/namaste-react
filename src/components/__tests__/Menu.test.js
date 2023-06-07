import { StaticRouter } from "react-router-dom/server";
import RestuarantMenu from "../RestuarantMenu";
import HeaderComponent from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { render, waitFor,screen, fireEvent
 } from "@testing-library/react";
import { MENU_DATA } from "../../mocks/data";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test("Add items to cart", async () => {

    const body = render(
      <StaticRouter>
        <Provider store={store}>
            <HeaderComponent/>
          <RestuarantMenu />
        </Provider>
      </StaticRouter>
    );
    
    await waitFor(() => expect(body.getByTestId("menu")));
    const addButton=body.getByTestId('add-btn');
    fireEvent.click(addButton[0]);
    const cart=body.getByTestId('cart');

    expect(cart.innerHTML).toBe(1)
  });