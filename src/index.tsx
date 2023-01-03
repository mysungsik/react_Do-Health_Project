import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/UI/layout/layout";
import { Provider } from "react-redux";
import { store } from "./store";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <CookiesProvider>
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </Provider>
  </CookiesProvider>
);
