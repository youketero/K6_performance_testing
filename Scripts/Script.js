import http from "k6/http";
import { check, group, sleep } from "k6";
import { Rate } from "k6/metrics";

// A custom metric to track failure rate

// Options
export let options = {
    stages: [
        // Linearly ramp up from 1 to 50 VUs during first minute
        { target: 10, duration: "1m" },
        // Hold at 50 VUs for the next 3 minutes and 30 seconds
        { target: 10, duration: "3m30s" },
        // Linearly ramp down from 50 to 0 50 VUs over the last 30 seconds
        { target: 0, duration: "30s" }
        // Total execution time will be ~5 minutes
    ]
};

// Main function
export default function () {
    let response = http.get("https://google.com/");

    sleep(Math.random() * 3 + 2); // Random sleep between 2s and 5s
}