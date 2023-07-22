# NexaTech

Website for a fictional smart home automation product company.

![nexaTech](https://github.com/LucasSilbernagel/NexaTech/assets/57023164/aa45e652-fce3-47db-bb8c-9127e3a7d55e)

## Live Link

[https://nexa-tech.vercel.app/](https://nexa-tech.vercel.app/)

## Tech Stack

### Front End

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [react-icons](https://www.npmjs.com/package/react-icons)
- [date-fns](https://www.npmjs.com/package/date-fns)
- [react-infinite-scroller](https://www.npmjs.com/package/react-infinite-scroller)
- [react-intersection-observer](https://www.npmjs.com/package/react-intersection-observer)
- [react-responsive-carousel](https://www.npmjs.com/package/react-responsive-carousel)

### Content Management

- [Sanity](https://www.sanity.io/)

### Linting & Formatting

- [eslint-config-lucas-silbernagel](https://www.npmjs.com/package/eslint-config-lucas-silbernagel)

## Run Locally

### Prerequisites

In order to run this application locally, you must have node installed on your computer. To check if you already have it installed, enter `node -v` in your terminal. If you do not have node, you can install it here: https://nodejs.org/en/

### Clone the repository

Once you have confirmed that node is installed, `cd` into a folder on your computer and run the following command to clone the repository:

`git clone https://github.com/LucasSilbernagel/NexaTech.git`

Then `cd` into the project folder and open it in your code editor. For Visual Studio Code:

`cd NexaTech`
`code .`

### Install dependencies

To install all of the required dependencies, run `npm install`.

### Start up the app

- To start up the app locally, run `npm run dev` in your terminal. Your terminal should indicate a `localhost` URL at which you can view the app in your browser, most likely http://localhost:3000/.
- To add and edit content in Sanity Studio, visit http://localhost:3000/studio.
  - Note that you won't have access to sign into my Sanity studio, you will have to generate your own project ID:
    - Visit https://www.sanity.io/ and create an account if you don't already have one.
    - Follow the instructions to create a new project and make a note of the project ID.
    - In your code editor, search for `projectId` and replace the value there with your own Sanity project ID. This should be done in three files: `sanity.cli.ts`, `sanity.config.ts`, and `customClient.ts`.

## Testing

### Unit Tests

Unit tests are written with [Jest](https://jestjs.io/) and [react-testing-library](https://testing-library.com/).

Use `npm test` to run all unit tests, or use `npm test SomeFileToRun` to run a specific test file.
