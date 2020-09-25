import http from "k6/http";
import { check, group, sleep } from "k6";
import { Rate } from "k6/metrics";

// A custom metric to track failure rate

// Options

// Main function
export default function () {
    let response = http.get("https://google.com/");

    sleep(Math.random() * 3 + 2); // Random sleep between 2s and 5s
}