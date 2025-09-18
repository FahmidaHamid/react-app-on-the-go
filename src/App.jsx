import "./App.css";
import { Suspense } from "react";
import Countries from "./components/countries/Countries";
const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all"
).then((res) => res.json());

function App() {
  return (
    <>
      <h1>React World on the Go...</h1>
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
