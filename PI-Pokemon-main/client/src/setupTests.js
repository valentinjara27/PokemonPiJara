// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import Home from "./src/components/Home.jsx";
it("home to be truthy", () => {
    // Con toBeTruthy estamos diciendole a jest que esperamos que exista nuestro método
        expect(Home).toBeTruthy();
    });