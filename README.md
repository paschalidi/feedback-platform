# feedback-platform

A simple enough feedback platform where in theory you could give feedback. 


## On how to run the app
Please clone the repository first.

### Install all the dependencies

```
yarn 
```

### Run the webapp locally

```
yarn start
```
This will build the storybook components lib that exist on the same repo and run the app.

### Run the storybook locally

```
yarn story
```

### Deploy 

```
cd packages/feedback-webbapp
yarn build
surge ./build
```
**NOTE**: The current implementation requires [surge](https://surge.sh/) to be installed globally on the machine.


## On the thought process I have been through

I am using [lerna](https://lerna.js.org/) to have a better isolation of my ui framework and the webapp.

If you take a look into the `package` folder you will see that there are two directories:
1. `ui-framework` contains the basic building blocks for the webapp. My goal here is to have no business logic in that `package` and therefore have it being reused across multiple apps. This way we can have better division of what is crucial for the app and what can be reused. 
2. `feedback-webbapp` contains the feedback platform according to the requirements and the design. 

### `ui-framework`

The `ui-framework` is a simple [storybook](https://storybook.js.org/). I used storybook to speedup my development, also I find that storybook helps me build better more clean and therefore more reusable components.
In here you can find components such as `Button`, `Grid`, `H1`, `H2` etc etc. Also there ar stories for each component and this will also help us maintain the project since it works as sort of documentation for future use.

#### Regarding the file structure 

* In the `src` you can find the React components and the styling of those.
* In the `tests` you can find the automated storyshoots.
* In the `stories` you can find the stories that descibe how the components can be used. 
* In the `public` the fonts and images that are being used around the project.
* `.storybook` and `.jest` are mere configuration folders. 

### `feedback-webbapp`

This package is where the webapp lives. You can see it [deployed](https://honesto.surge.sh). I am using CRA for this project.

#### Regarding the file structure 

I am leaning towards having very linear file structure with not that many sub-folders since I find it more easy to navigate around the project. 
I also like to create directories that contain features that means that each folder is either a feature that can stand alone or some configuration.

* In the `src` file you can find the components that build the whole application. 
    * `byMeFeedback` contains all the parts that are responsible for the view where you can see the feedback that you have given to your peers.
    * `infrastructure` contains the configuration of the redux store and th root configuration where `epics` and `reducers` gets combined.
    * `navigationBar` contains all the code that corresponds to the navigation bar
    * `questionnaire` contains the multi step form that is used for the users to provide feedback for their peers
    * `successFeedback` contains the screen with a success message when you finish answering all the questions 
    * `toMeFeedback` contains all the parts that are responsible for the view where you can see the feedback that you have received from your peers. 
* In the `public` folder you can find the boilerplate of CRA.


### On the stack 

I faced the fact that I had to mock the data in order to have a working application. Instead of hard coding the values onto a json file and importing it by resolving a promise I am using [my-json-server](https://my-json-server.typicode.com/) to create a REST api from which I pull the data.

Now that we dont have only synchronous calls in the app but also asynchronous I had to take the next decision. Choose between libraries like `redux-thunk`, `sagas` or `rx-js`. I am using `rx-js` and `redux-observables` for this project and the reason comes down to speed. I find myself best comfortable with this stack. 

For styling I am using the standard `styled-components` again the reason is speed of development.

### What would I do if I had more time

1. The styling is not pixel perfect neither responsive, I would spent more time into making everything looks as the design. 
2. There is no single line of tests, this is not really ideal for production code, in projects where down time is crucial I would test the code thoroughly with Jest and Puppeteer.

### What features are not included and why
1. There is no login/logout functionality. I had the discussion if this is needed or not, and we are suggesting that for the MVP version this is not a crucial logic to have.
2. Landing on the `share-feedback` root you cant see the peers that you have already given feedback to. This is again a feature that is not crucial for the user since they can use the core features of the app without having this bit of functionality. We left this for a future MVP.
3. Filling the questions for your peers you will realise that there are some bits of functionality missing.
    * there is no back button that will lead to the `share-feedback` page, this is again because of time limitations. The users can go to the back view using the navigation bar instead.
    * there is no flag that you could use to rate questions. This was negotiated out because of time limitations.
    * the SKIP this question functionality. You can skip a question by pressing the Next button instead but there is not SKIP button that will do so for you.
    * There is no progress bar that will show the progress of the questionnaire. In my point of view the app can live without this feature for the first MVP therefore it is not included.
    * When submitting the questionnaire the data are not being `POST`ed in any backend since backend doesnt exist.
4. On the screens where you can either see feedback you have given or received.   
    * There is no `NEW` functionality being included. We see this as a delighted feature that can be included in a later version. 
    * We also dont have the exact same styling in the components. Since the amount of information remains the same in both the designs and after informing the relevant partied for this I have continued with a much more simple design. Again what we try here is a pragmatic approach which wont negotiate any functionality but at the same time include all the amount of information that a user would need. 


###I hope you enjoy reviewing this project! Cheers to y'all 
 