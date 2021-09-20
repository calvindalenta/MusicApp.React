![Build Status](https://github.com/calvindalenta/MusicApp.React/actions/workflows/main.yml/badge.svg)

### [Visit the live web app](https://muscloud-lsy6w4sjoa-as.a.run.app/)
------------
# How I worked on this project
My goal was to learn React and automatically build, test, and deploy the project (CI/CD).

- I built this project based on [Levani's ART design on Dribbble](https://dribbble.com/shots/7687430-Music-Web-App-UI/attachments/425702?mode=media).
- The first thing I did was replicating the design by only using HTML and CSS: [Preview](https://calvindalenta.github.io/MusicApp.Static/).
- I needed backend to fetch music tracks and images. [So I made this backend project](https://github.com/calvindalenta/MusicApp.Api)
- I added some interactivity and statefulness using React.
- I added some tests for individual components.
- Setup CI/CD.

# How to navigate this project
- Custom audio player: Example code for [mobile](https://github.com/calvindalenta/MusicApp.React/blob/master/src/features/footer/MobilePlayer.tsx) and [desktop](https://github.com/calvindalenta/MusicApp.React/blob/master/src/features/footer/DesktopPlayer.tsx)
- This app fetches data before ReactDOM.render even called: Example for [the dispatch call](https://github.com/calvindalenta/MusicApp.React/blob/master/src/index.tsx) and [data transformation](https://github.com/calvindalenta/MusicApp.React/blob/master/src/slices/trackSlice.ts)
- Main view: [Example Code](https://github.com/calvindalenta/MusicApp.React/blob/master/src/features/body/Body.tsx)
- Unit tests: [Example test](https://github.com/calvindalenta/MusicApp.React/blob/master/src/features/footer/PlayPauseButton.test.tsx)
  
# Why I build the project this way
- I used Redux as a state management library since many React developers default to Redux for state management.
- Material UI is a great library that provides you with solid pre-styled components that will get the job done faster. However, I still needed to customize some of the components to make this app look unique.
- Testing is an essential part of production applications. This app uses React Testing Library and Jest to unit test its essential features.
- Continuous Integration and Deployment (CI/CD) is one of the reasons I built this project. GitHub Actions makes it easy to automate software workflows and it's easy to set up since i'm hosting this repository in Github.

# If I had more time I would change this
- Use React Context as my state management solution instead of Redux.
- Refactor some of the code. Especially [this Footer.tsx file](https://github.com/calvindalenta/MusicApp.React/blob/master/src/features/footer/Footer.tsx) and [this MobilePlayer.tsx](https://github.com/calvindalenta/MusicApp.React/blob/master/src/features/footer/MobilePlayer.tsx)
- Test using Enzyme.
- Add end-to-end tests with Cypress.