import React, {Component} from 'react';

interface AppStateIface {
  name: string;
}

interface AppPropsIface {
  children: React.ReactElement;
}

const AppContext = React.createContext<AppStateIface | null>(null);

export default class AppProvider<
  Props extends AppPropsIface,
  State extends AppStateIface
> extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  State: AppStateIface = {
    name: 'Name',
  };

  setName(name: State): void {
    this.setState(name);
  }

  render(): React.ReactNode {
    const {children} = this.props;
    return (
      <AppContext.Provider value={this.state}>
        <div id="app">{children}</div>
      </AppContext.Provider>
    );
  }
}

export {AppContext, AppProvider};
