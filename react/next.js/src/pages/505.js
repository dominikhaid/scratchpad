import React from "react";
import { Header, Container, Icon, Divider, Segment } from "semantic-ui-react";

export default function DatabaseError(props) {
  return (
    <>
      <Container
        className="margin flex-con flex-center fluid"
        style={{ minHeight: "50%" }}
      >
        <Container
          className="flex-con flex-center"
          style={{ minHeight: "50%" }}
        >
          <Segment
            className="flex-con flex-center"
            style={{ maxWidth: "750px" }}
          >
            <div className="flex-item-4">
              <Icon.Group
                size="massive"
                style={{
                  borderRadius: "999px",
                  backgroundColor: "#d26f1c",
                  width: "165px",
                  height: "165px",
                  paddingTop: "1rem",
                }}
              >
                <Icon name="user secret" style={{ paddingLeft: "26px" }} />
                <Icon
                  corner="bottom right"
                  name="times circle"
                  style={{
                    borderRadius: "999px",
                    padding: "2rem",
                    paddingTop: "0.2rem",
                    height: "65px",
                    width: "65px",
                    paddingLeft: "0.2rem",
                    backgroundColor: "white",
                    color: "#d26f1c",
                  }}
                />
              </Icon.Group>
              <Header
                id="blogDes"
                as="h1"
                className={"text-center gluid margin-top"}
              >
                505
              </Header>
            </div>
            <p
              className="flex-item-4 margin-top border padding text-center margin-bottom"
              style={{ maxWidth: "450px" }}
            >
              Bei der Verbindung zur Website ist ein Fehler aufgetretten, bitte
              versuche es später erneut oder wende dich an den Administrator.
              <address className="flex-con flex-center text-center ">
                <Header as="h2" className="primaryColor flex-item-4">
                  Dominik Haid
                </Header>
                <p className="flex-item-4">
                  64367 Mühltal, Waschenbach
                  <br />
                  Zum Birkenwald 10
                </p>
                <Divider className="flex-item-4" />
                <p className="flex-item-4">
                  <Icon name="mail" />
                  <a href="mailto:info@dominikhaid.de">INFO@DOMINIKHAID.DE</a>
                </p>
                <p className="flex-item-4">
                  <Icon name="mobile alternate" />
                  <a href="tel:+49 6154-53361">+49 176-60423218&nbsp;</a>
                </p>
                <p className="flex-item-4">
                  <Icon name="phone square" />
                  <a href="tel:+49 6154-53361">+49 6154-53361</a>
                </p>
              </address>
            </p>
          </Segment>
        </Container>
      </Container>
    </>
  );
}
