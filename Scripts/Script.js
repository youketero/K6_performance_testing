<script>
import http from "k6/http";
import { check, group, sleep } from "k6";
import { Rate } from "k6/metrics";

export let options = {
    stages: [
        { target: 10, duration: "1m" },
        { target: 10, duration: "3m30s" },
        { target: 0, duration: "30s" }
    ]
};

export default function () {
    let response = http.get("https://google.com/");
    
    let req = http.get("https://www.youtube.com/")

    sleep(Math.random() * 3 + 2);
}
</script>
