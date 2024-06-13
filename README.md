# BTB - Homework

## Overview

The project is a display and filtering of Rick and Morty characters, admin can click on the character card and get extra information about the selected character.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/ShimonChay/BTB-home-work.git

   ```

2. Enter the BTB-Client folder and run:

   ```sh
   npm install
   npm run dev
   ```
   The client should run on http://localhost:5173

3. Enter the BTB-Sever folder and run:

   ```sh
   npm install
   npm run dev
   ```
   The server should run on http://localhost:3000


## Notes

1. The process of identification and authorization happens only through the     server. Without the server the app will not work.
2. The server handle corss only on port 5173. If the port already taken, the server may not work with another port.

## Implementations
1. <u>**Login and Logout**</u>: Utilize a simple JWT token and set cookies for persistent login across page reloads. Reloading the page will not log you out. To logout, use the dedicated logout button. Note that there is a 'login' route for token creation and a 'me' route to retrieve user roles.
2. <u>**Filtering**</u>: You can filter by any criteria, with the primary filter being character names. The system also suggests existing names to aid your search. To initiate a search, click the search button located on the right. Other filters update automatically as you type or select options.
the other filters, is automatically search while typing or selecting a filter.
3. <u>**Debounce**</u>: During searches for suggestions or results, numerous unnecessary requests may be sent. To mitigate this, we implement debounce. Requests are sent to the server after a brief delay, ensuring that the user has finished entering the search term.
4. <u>**Pagination**</u>: The Rick and Morty API limits responses to a maximum of 20 results per page. To navigate to the next page, click the desired page number located at the bottom of the page. Assuming character data is not frequently updated, a mapping system stores results for each page to reduce unnecessary requests.


