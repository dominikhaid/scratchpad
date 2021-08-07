import React, { useState, useEffect } from "react";
import { Sidebar, Menu, Icon, Button, Transition } from "semantic-ui-react";

export default function SecundaryMobile(props) {
  if (!process.browser) {
    console.debug("SecundaryMobile", props);
  }

  const [button, setButton] = useState({
    animation: "pulse",
    duration: 500,
    visible: false,
  });

  useEffect(() => {
    setButton({
      animation: "pulse",
      duration: 800,
      visible: true,
    });
    return () => {
      setButton({
        animation: "pulse",
        duration: 200,
        visible: false,
      });
    };
  }, []);

  if (props.visible) {
    let selector = document.querySelector("main");
    if (selector) selector.classList.remove("dimmable");
    document.querySelector("#__next").classList.add("dimmedRoot");
  } else {
    let selector = document.querySelector("main");
    if (selector) selector.classList.add("dimmable");
    document.querySelector("#__next").classList.remove("dimmedRoot");
  }

  return (
    <>
      <Transition
        animation={button.animation}
        duration={button.duration}
        visible={button.visible}
      >
        <Button
          className={props.visible ? "active" : ""}
          id="mobile-toggle-secundary"
          onClick={() => props.setVisible(!props.visible)}
        >
          <Icon className={props.visible ? "close icon" : props.icon} />
        </Button>
      </Transition>

      <Sidebar
        id={props.id ? props.id : "secondaryMenu"}
        as={Menu}
        className={"no-dimm"}
        animation="overlay"
        icon={"labeled"}
        direction="right"
        inverted
        onHide={() => props.setVisible(false)}
        vertical
        visible={props.visible}
        width="thin"
      >
        {props.renderItems.map((element) => {
          return element;
        })}
      </Sidebar>
    </>
  );
}
