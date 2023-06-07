import { render } from "@testing-library/react";
import HeaderComponent from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("logo should load on header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <HeaderComponent />
      </Provider>
    </StaticRouter>
  );
  //
  //console.log(header);
  const logo=header.getByTestId("logo");
  //console.log(logo);
  expect(logo.src).toBe("http://localhost/dummy.png")
});

test("cart should have 0 items", () => {
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <HeaderComponent />
        </Provider>
      </StaticRouter>
    );
    //
    //console.log(header);
    const cart=header.getByTestId("cart");
    //
    //console.log(cart);
    expect(cart.innerHTML).toBe("Cart(0)")
  });
