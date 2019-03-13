import { Subscriber } from "rxjs";



const store = {
    getState() {
        return {
            topics: [
                "Java",
                "Js",
                "Scala",
                "Python"
            ],
            comments: [
                'java is my life',
                "js is new friend",
                "scala just for spark",
                "python is my new baby"
            ]
        }
    },
    subscribe() {

    },
    //..
}

export default store;