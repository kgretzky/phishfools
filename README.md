# PhishFools

An over-the-top phishing prank to use with [Evilginx](https://github.com/kgretzky/evilginx2) phishing framework.

I made it for April Fools 2025 to bring back memories of the times when hacking was done for fun!

**[Evilginx Pro](https://evilginx.com) has been released! Find out [more](https://evilginx.com)**

## DEMO

Double-click the [index.html](index.html) file to see the prank in action.

## How to use?

The only thing, which needs injecting into the website is the [phishfools.js](phishfools.js) script. You can use the `js_inject` functionality of Evilginx to inject the script into the reverse proxied phishing page you set up.

## The phishlet

I've prepared a demo phishlet [phishfools_o365.yaml](phishfools_o365.yaml), which will enable itself automatically on the Microsoft 365 phishing page. You can use it directly with the [Evilginx](https://github.com/kgretzky/evilginx2) phishing framework.

You can make the prank work with other websites as well by injecting the contents of the [phishfools.js](phishfools.js) script into the `js_inject` section of any phishlet and make it inject itself on every page.

## Credits

I took direct inspiration from the amazing [spinningcat](https://github.com/orlyjamie/spinningcat) project, which made XSS demonstrations fun again by [Jamieson O'Reilly](https://www.linkedin.com/in/theonejvo/).

Music: Shakta - Lepton Head (Astrix Remix) 🎵
Edit made by me with vocals from Scooter - How Much Is The Fish?

## Contact

Made by Kuba Gretzky

Twitter: [@mrgretzky](https://x.com/mrgretzky)
LinkedIn: [kubagretzky](https://www.linkedin.com/in/kubagretzky/)
