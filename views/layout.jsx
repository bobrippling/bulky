const React = require('react');
const Price = require('./price.jsx');

module.exports = ({ children, session, balance, user }) => (
  <html>
  <head>
    <title>Bulky - Powered by Scottcoin</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
    <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
    <link rel="manifest" href="/manifest.json"/>
    <meta name="msapplication-TileColor" content="#ffffff"/>
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
    <meta name="theme-color" content="#ffffff"/>
    <style>
    {`
      header div {
        overflow: hidden;
      }
      header div h1 {
        text-align: center;
      }
      header div h1 a {
        color: black;
        text-decoration: none;
      }
      header div p {
        animation: scroll 5s linear infinite;
      }
      @keyframes scroll {
        0% {
          transform:translate(110%, 0);
        }
        100% {
          transform:translate(-110%, 0);
        }
      }
    `}
    </style>
  </head>
  <body>
    <header>
      <div>
        <h1><a href="/">Bulky</a></h1>
        <p><small>Powered By Scottcoin</small></p>
      </div>
      {
        user != null && balance != null && (
          <form action="/transactions" method="GET">
            <br/>
            <button type="submit">
              {user.name} <Price priceInSatoshis={balance.availableAmount}/>
            </button>
          </form>
        )
      }
    </header>
    <hr/>
    {children}
    <hr/>
    <footer>
      <small>{session}</small>
    </footer>
  </body>
  </html>
);
