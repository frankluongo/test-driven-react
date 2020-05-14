import React from "react";

const referralParams = "utm_source=test-driven-carousel&utem_medium=referral";
const getUsernameUrl = (username) =>
  `https://unsplash.com/@${username}?${referralParams}`;

const getAttribution = ({ name, username }) => (
  <>
    Photo by <a href={getUsernameUrl(username)}>{name}</a>{" "}
    <a href={`https://unsplash.com/>${referralParams}`}>Unsplash</a>
  </>
);

export default [
  {
    dscription: "Seattle",
    attribution: getAttribution({
      name: "Ganapathy Kumar",
      username: "gkumar2175",
    }),
    imgUrl:
      "https://images.unsplash.com/photo-1469321461812-afeb94496b27?w=1080&ixid=eyJhcHBfaWQiOjIzODE4fQ&s=568095e79ee2cb55a795ad454ac9cf5e",
  },
  {
    dscription: "Chicago",
    attribution: getAttribution({
      name: "Ganapathy Kumar",
      username: "gkumar2175",
    }),
    imgUrl:
      "https://images.unsplash.com/photo-1469321461812-afeb94496b27?w=1080&ixid=eyJhcHBfaWQiOjIzODE4fQ&s=568095e79ee2cb55a795ad454ac9cf5e",
  },
  {
    dscription: "Barcelona",
    attribution: getAttribution({
      name: "Ganapathy Kumar",
      username: "gkumar2175",
    }),
    imgUrl:
      "https://images.unsplash.com/photo-1469321461812-afeb94496b27?w=1080&ixid=eyJhcHBfaWQiOjIzODE4fQ&s=568095e79ee2cb55a795ad454ac9cf5e",
  },
  {
    dscription: "New York",
    attribution: getAttribution({
      name: "Ganapathy Kumar",
      username: "gkumar2175",
    }),
    imgUrl:
      "https://images.unsplash.com/photo-1469321461812-afeb94496b27?w=1080&ixid=eyJhcHBfaWQiOjIzODE4fQ&s=568095e79ee2cb55a795ad454ac9cf5e",
  },
  {
    dscription: "Rio de Janeiro",
    attribution: getAttribution({
      name: "Ganapathy Kumar",
      username: "gkumar2175",
    }),
    imgUrl:
      "https://images.unsplash.com/photo-1469321461812-afeb94496b27?w=1080&ixid=eyJhcHBfaWQiOjIzODE4fQ&s=568095e79ee2cb55a795ad454ac9cf5e",
  },
];
