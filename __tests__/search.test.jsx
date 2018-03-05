import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Search from "../src/search";
import ShowCard from "../src/showCard";
import Preload from "../data.json";

configure({ adapter: new Adapter() });
test("search render correctly", () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});

test("search render correctly baseed on search term ", () => {
  const component = shallow(<Search />);
  const searchTerm = "black";
  component.find("input").simulate("change", { target: { value: searchTerm } });
  const showCount = Preload.shows.filter(
    show => `${show.title}`.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
  );
  expect(component.find(ShowCard).length).toEqual(showCount.length);
});
// describe("A suite", () => {
//   it("should render without throwing an error", () => {
//     expect(shallow(<Search />).contains(<h1>svideo</h1>)).toBe(true);
//   });
// });
