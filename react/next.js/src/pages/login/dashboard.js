import React from "react";
import { Header, Container } from "semantic-ui-react";
import Head from "next/head";

export default function Dashboard() {
  console.debug("Dashboard");
  return (
    <React.Fragment>
      <Head>
        <title>Print & Screen-Design | Dashboard</title>
        <meta
          name="description"
          content="Zugang zu Adminitrativen Bereich von Dominik Haid, Print & Screen-Design, Website Verwaltung."
        />
      </Head>
      <Container fluid>
        <Header as="h1">Dashboard</Header>
      </Container>
    </React.Fragment>
  );
}
