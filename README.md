# :space_invader: React Native Template ![npm]

An opinionated template to bootstrap your next React Native app with all the time-wasting packages you need to have.

Preconfigured with

- [React Navigation](https://reactnavigation.org/) for navigation and deeplinking.
- [react-i18next](https://github.com/i18next/react-i18next) internationalization.
- [Sentry](https://github.com/getsentry/sentry-react-native) for debugging in production.
- [AsyncStorage](https://github.com/react-native-community/async-storage) you're gonna install it anyway.
- [Redux](https://es.redux.js.org/) control global state for your app
- [Redux persist](https://github.com/rt2zz/redux-persist.git) persist data from redux.
- [Redux logger](https://github.com/LogRocket/redux-logger#install) view redux changes in real time


## Contents

- [Documentation](#documentation)
- [Getting Started](#getting-started)
- [Road Map](#road-map)
- [Optional Steps](#optional-steps)
- [Credits](#credits)

## Documentation

- [Libraries](#libraries)
- [Directory Structure](#directory-structure)

## Getting Started

Create a new project using the template.

- **Note:** the command will fail if you have the global legacy react-native-cli installed. Make sure you uninstall it first. More info at [react-native-community/cli](https://github.com/react-native-community/cli#about).

```bash
npx react-native init MyApp --template https://github.com/ehernandezlabelgrup/react-native-okoi-template.git
```

#### React Native <=> Template Version

| React Native | Template |
| ------------ | -------- |
| lasted       | 1.1.2    |

## Optional Steps

#### Connect To Sentry

This template comes with [Sentry](https://github.com/getsentry/sentry-react-native), but its disabled until you connect your account.

To connect your account (auto):

```bash
$ cd MyApp/

# For MacOS
$ npx sentry-wizard -i reactNative -p ios android

# Other Platforms
$ npx sentry-wizard -i reactNative -p android
```

Insert your sentry DSN in each [.env](https://github.com/osamaq/react-native-template/blob/ed37c213eacf0681c4f50f959bad170d46be0ed7/template/.env.prod#L5) file (dev, staging and production) and you're all done.

### React Navigation

Routing and navigation for your React Native apps Platform-specific look-and-feel with smooth animations and gestures.

### react-i18next

Localization using hooks. [React Native example](https://github.com/i18next/react-i18next/tree/master/example/react-native)

### Sentry

Benefitial in debugging issues that occur only in release builds. You can view error stack traces for unhandled exceptions. You can also choose to log specific errors in some catch blocks to study how often they occur in production.

### AsyncStorage

For caching simple data such as user preferences.

## Directory Structure

```
root
├── android
├── ios
└── src
    └── assets
    |   └── fonts
    |       └── OpenSans-Bold.ttf
    └── infrastructure
    |   └── api
    |   └── constants
    |   └── Errors
    |   └── hooks
    |   └── i18n
    |   └── redux
    |   └── theme
    └── navigation
    |   └── Navigation.js
    └── screen
    |   └── SplashScreen
            └── index.js
            └── SplashScreen.js
    
```
Thank you ❤️
