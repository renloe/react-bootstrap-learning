import React from 'react';

const GetByRole = () => {
  return (
    <>
      <main aria-hidden="true">
        <button>Open dialog</button>
      </main>
      <div role="dialog">
        <button>Close dialog</button>
      </div>

      <div role="tablist">
        <button role="tab" aria-selected="true">
          Native
        </button>
        <button role="tab" aria-selected="false">
          React
        </button>
        <button role="tab" aria-selected="false">
          Cypress
        </button>
      </div>

      <section>
        <button role="checkbox" aria-checked="false">
          Gummy bears
        </button>
        <button role="checkbox" aria-checked="false">
          Whipped cream
        </button>
        <button role="checkbox" aria-checked="true">
          Sugar
        </button>
      </section>

      <nav>
        <a href="current/page" aria-current={true}>
          Thumbs up!
        </a>
        <a href="another/page">Thumbs down!</a>
      </nav>

      <section>
        <button aria-pressed="false">thumbs down</button>
        <button aria-pressed="true">thumbs up</button>
      </section>

      <nav>
        <ul style={{ listStyle: 'none' }}>
          <li>
            <a aria-expanded="false" aria-haspopup="true" href="...">
              Expandable Menu Item
            </a>
            <ul style={{ listStyle: 'none' }}>
              <li>
                <a href="#">Submenu Item 1</a>
              </li>
              <li>
                <a href="#">Submenu Item 1</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Regular Menu Item</a>
          </li>
        </ul>
      </nav>

      <section>
        <h1>Heading Level One</h1>
        <h2>First Heading Level Two</h2>
        <h3>Heading Level Three</h3>
        <div role="heading" aria-level="2">
          Second Heading Level Two
        </div>
      </section>

      <ul>
        <li role="alertdialog" aria-describedby="notification-id-1">
          <div>
            <button>Close</button>
          </div>
          <div id="notification-id-1">You have unread emails</div>
        </li>
        <li role="alertdialog" aria-describedby="notification-id-2">
          <div>
            <button>Close</button>
          </div>
          <div id="notification-id-2">Your session is about to expire</div>
        </li>
      </ul>
    </>
  );
};

export default GetByRole;
