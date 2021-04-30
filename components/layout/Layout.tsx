import React, { Fragment }  from 'react';


type Props = {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <Fragment>
      <main>
        {children}
      </main>
    </Fragment>
  );
}

export default Layout;