# launch-ts

# setup
Clone repo to your local machine, enter directory and install dependencies
```
git clone <path-to-repo>
cd ts-launch
npm install
```
Build the app and run development server:

```
npm run start
```

## app

App demonstrates basic service - hook - view flow for fetching data and updating the view.
View is very rudimentary and is there for demo purposses only.

- Service is reusable trough out the app and exposes different calls of the service. At the moment `fetchLaunchesByDate` is exposed. It is written in vanila js so it is independent from framework and lifecycles.
- Hook is using the service and returns its responses with the useEffect hook.
- View uses the hook and renders different ui based on the hook response


### Service

`launchService` is responsible for all fetching from `https://launchlibrary.net/1.3/` endpoint.
Implemented is only one call, and that is to fetch launches by date.
`networking` service exposes a request fetch call (currently only supports GET calls)

Future implementation:
- implement paginated calls
- implement filtering calls by agencies and success in launchService
- implement other request methods

### Hook

`useLaunchesByDate` - accepts FromTo type dates object and makes the service call. Service call is made in useEffect on every date change.
Once service call is fulfiled in apropriate callbacks we are setting the response state with ResponseObject type.

## View
In view, App component, we are first setting the dates from today to next three months. 
`moment` library is usd for all date instantiations and manipulations.
App has two states, dates and datesToFetch. `dates` is used for input values, and `datesToFetch` for `useLaunchesByDate` hook.
`res` as a response from `useLaunchesByDate` hook has ResponseObject properties for ui controll flow, `isLoading`, `data`, `error`
By changing from and to dates, and clicking fetch data, `datesToFetch` will update and hook will initiate a new call,
