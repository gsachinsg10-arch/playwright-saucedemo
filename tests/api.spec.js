// IMPORTS FOR PLAYWRIGHT TEST
import{ test, expect } from '@playwright/test';

// API Test for GET request
test.skip("API Test  get", async ({ request }) => {

    // Send a GET request to the API endpoint
  const response = await request.get('https://restful-booker.herokuapp.com/booking');
   

  //get the status code and status text
  const status =  await response.status();
  //get the status text and response body   
    const statusText =  await response.statusText();
   //const responseBody =  await response.body();

//log the status code, status text and response body
   console.log ("statuse ", status);
   console.log ("statusText ", statusText);
  // console.log ("responseBody ", responseBody);

   //get json response body
   const jsonResponse = await response.json();
   console.log ("jsonResponse ", jsonResponse);
})


// API Test for GET request by ID
test("API Test get BY ID", async ({ request }) => {

// Send a GET request to the API endpoint with ID
  const response = await request.get('https://restful-booker.herokuapp.com/booking/2');

// Get the status code, status text, and JSON response
  const status = response.status();
  const statusText = response.statusText();
  const jsonResponse = await response.json();
// Log the status code, status text, and JSON response
  console.log("status", status);
  console.log("statusText", statusText);
  console.log("jsonResponse", jsonResponse);
// Assertions
  expect(status).toBe(200);
  expect(statusText).toBe("OK");
  expect(jsonResponse).toHaveProperty('firstname');
  expect(jsonResponse).toHaveProperty('lastname');
  expect(jsonResponse).toHaveProperty('totalprice');
  expect(jsonResponse).toHaveProperty('depositpaid');
  expect(jsonResponse).toHaveProperty('bookingdates');
});
