import http from 'k6/http';
import { sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  // Key configurations for spike in this section
  stages: [
    { duration: '2m', target: 120 }, // fast ramp-up to a high point
    // No plateau
    { duration: '1m', target: 0 }, // quick ramp-down to 0 users
  ],
};

export default () => {
  const urlRes = http.get('https://www.w3schools.com/js/js_functions.asp');
  sleep(1);
  // MORE STEPS
  // Add only the processes that will be on high demand
  // Step1
  // Step2
  // etc.
};

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}