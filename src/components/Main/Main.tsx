import React, { FC, useEffect, useState } from "react";
import "./Main.scss";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import { data } from "../../CardData/data";
import BugReportIcon from "@mui/icons-material/BugReport";
import Card from "../Card/Card";

const Main: FC = () => {
  const [blockView, setblockView] = useState<boolean>(true);
  const [listView, setListView] = useState<boolean>(false);
  const [all, setAll] = useState<boolean>(true);
  const [scrollPostion, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      setScrollPosition(window.scrollY);
    });
  }, [window.scrollY]);

  console.log(scrollPostion);

  const handleblockViewView = () => {
    setblockView(!blockView);
    setListView(!listView);
  };

  const handleListView = () => {
    setListView(!listView);
    setblockView(!blockView);
  };

  return (
    <div className="main">
      <div className="cards">
        <h1>Cards</h1>
        <div className="notification_wrapper">
          <CircleNotificationsIcon />
          <p>5</p>
        </div>
      </div>

      <div className="card_info">
        <button>+Add new card</button>
        <div className="card_options">
          <ul>
            <li>Physical Cards</li>
            <li>Virtual Cards</li>
            <li>Employees</li>
          </ul>
        </div>

        <div className="card_render">
          <div className="left">
            <p className={all ? "active" : "not_active"}>All</p>
            <p className={!all ? "active" : "not_active"}>cards</p>
          </div>
          <div className="right">
            <WidgetsIcon
              className={blockView ? "active" : "not_active"}
              onClick={handleblockViewView}
            />
            <ViewHeadlineIcon
              className={listView ? "active" : "not_active"}
              onClick={handleListView}
            />
            <SearchIcon />
          </div>
        </div>
        <div className={blockView ? "cards_block" : "cards_list"}>
          {data.slice(0, data.length / 2).map((card, index) => (
            <Card
              spenditure={card.spenditure}
              name={card.name}
              cardNumber={card.cardNumber}
              key={index}
            />
          ))}

          {scrollPostion > window.innerHeight &&
            setTimeout(() => {
              data
                .slice(data.length / 2)
                .map((card, index) => (
                  <Card
                    spenditure={card.spenditure}
                    name={card.name}
                    cardNumber={card.cardNumber}
                    key={index}
                  />
                ));
            }, 100)}
        </div>
      </div>
      <div className="chat">
        <ChatIcon />
      </div>
      <div className="bug">
        <BugReportIcon />
      </div>
    </div>
  );
};

export default Main;
