import http from "k6/http";
import { check, group, sleep } from "k6";
import { Rate } from "k6/metrics";

export let options = {
    stages: [
        { target: 1, duration: "1m" },
    ]
};

export default function () {
    let response = http.get("https://google.com/");
    
    let req = http.get("https://www.youtube.com/")

    sleep(Math.random() * 3 + 2);
}
