import React from "react";
import { Icon, Container, Message } from "semantic-ui-react";

export default function SysMsg(props) {
  console.debug("SysMsg render", props);
  return props.userAuth.userData.msg.title ||
    props.userAuth.userData.msg.content ? (
    <Container className="sysMessage">
      <Message
        className={
          props.userAuth.userData.msg.type
            ? props.userAuth.userData.msg.type
            : "info"
        }
      >
        <Icon name="info" className="circle" />
        <Message.Content>
          {props.userAuth.userData.msg.title ? (
            <Message.Header>{props.userAuth.userData.msg.title}</Message.Header>
          ) : (
            <></>
          )}
          {props.userAuth.userData.msg.content ? (
            <div className="content">{props.userAuth.userData.msg.content}</div>
          ) : (
            <></>
          )}
        </Message.Content>
      </Message>
    </Container>
  ) : (
    <></>
  );
}
