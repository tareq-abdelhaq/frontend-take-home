# Frontend Take-Home: Shipping Loads Table

## Overview

Build a web application that displays a table of shipping loads with filtering and pagination capabilities.

**Estimated Time:** 3-4 hours

## Task Requirements

Create a client-side application that:

1. **Displays a table** showing shipping load data with the following columns:
   - Load ID
   - Origin
   - Destination
   - Status
   - Date
   - Weight
   - Carrier
   - Price

2. **Implements filtering** with:
   - Text search input (searches across Load ID, Origin, and Destination)
   - Status dropdown (populated from API)
   - Carrier dropdown (populated from API)

3. **Implements pagination** with:
   - Previous/Next buttons
   - Display current page and total pages
   - 10 items per page

4. **Handles different states** appropriately throughout the application lifecycle

## Technology Stack

You may use any frontend framework or library of your choice:

## Getting Started

### 1. Start the Mock API Server

```bash
cd server
npm install
npm start
```

The API will be available at `http://localhost:3001`

### 2. Create Your Client Application

The `client/` folder is empty and ready for your implementation. Initialize your project with your preferred setup.

## API Documentation

### Base URL
```
http://localhost:3001/api
```

### Endpoints

#### 1. Get Loads (Paginated & Filtered)
```
GET /api/loads
```

**Query Parameters:**
| Parameter | Type   | Required | Description                                    |
|-----------|--------|----------|------------------------------------------------|
| page      | number | No       | Page number (default: 1)                       |
| limit     | number | No       | Items per page (default: 10)                   |
| status    | number | No       | Filter by status ID (e.g., 5943)               |
| carrier   | number | No       | Filter by carrier ID (e.g., 7284)              |
| search    | string | No       | Search in ID, origin, destination              |

**Example Request:**
```
GET /api/loads?page=1&limit=10&status=5943&carrier=7284&search=Los
```

**Response:**
```json
{
  "data": [
    {
      "id": "LD001",
      "origin": "Los Angeles, CA",
      "destination": "Phoenix, AZ",
      "status": 8261,
      "date": "2025-09-15",
      "weight": 15000,
      "carrier": 7284,
      "price": 1250.00
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "totalItems": 50,
    "totalPages": 5,
    "hasNextPage": true,
    "hasPreviousPage": false
  }
}
```

#### 2. Get Status Options
```
GET /api/statuses
```

**Response:**
```json
[
  { "id": 1827, "label": "Pending" },
  { "id": 5943, "label": "In Transit" },
  { "id": 8261, "label": "Delivered" },
  { "id": 3405, "label": "Cancelled" }
]
```

**Note:** Use `id` in API requests and display `label` to users.

#### 3. Get Carrier Options
```
GET /api/carriers
```

**Response:**
```json
[
  { "id": 7284, "label": "FedEx" },
  { "id": 2931, "label": "UPS" },
  { "id": 6507, "label": "DHL" },
  { "id": 4163, "label": "USPS" },
  { "id": 9845, "label": "J.B. Hunt" },
  { "id": 1592, "label": "Schneider" },
  { "id": 8736, "label": "Swift Transportation" }
]
```

**Note:** Use `id` in API requests and display `label` to users.

## Evaluation Criteria

Your submission will be evaluated based on:

- **Code Quality**: Clean, readable, and well-organized code
- **React/Framework Best Practices**: Proper use of hooks, state management, component structure
- **API Integration**: Effective handling of async operations and API responses
- **User Experience**: Intuitive interface, proper loading states, error handling
- **State Management**: Handling different application states (loading, error, empty, success)
- **Git Usage**: Clear commit history with meaningful messages
- **Testing**: Implementation approach and coverage (if applicable)

## Tips for Success

- **Focus on Core Functionality**: Prioritize the required features (table, filtering, pagination) over additional features
- **Handle Edge Cases**: Consider loading states, error states, empty results, and API failures
- **Keep It Simple**: Use straightforward solutions; avoid over-engineering
- **Code Organization**: Structure your components and logic in a maintainable way
- **Responsive Design**: Ensure the table works on different screen sizes (bonus points)
- **Performance**: Consider optimization for larger datasets if time permits
- **Document Your Decisions**: In your client README, explain any trade-offs or architectural decisions

## What to Focus On

Given the 3-4 hour time constraint:

**Must Have:**
- All three API endpoints integrated
- Functional filtering and pagination
- Proper error and loading states
- Clean, readable code

**Nice to Have (if time permits):**
- Unit/integration tests
- Debounced search input
- URL state management (filters persist in URL)
- Responsive design
- Loading skeletons
- Accessibility improvements

## Submission

### Getting Started

1. **Fork this repository** to your own GitHub account
2. **Clone your fork** to your local machine
3. Complete the assignment in your forked repository
4. **Submit the URL** of your forked repository (e.g., `https://github.com/your-username/frontend-take-home`)

**Important:**
- ⚠️ **DO NOT create a Pull Request** to this original repository
- Work only in your forked repository
- Make sure your repository is **public** so we can review it

### What to Include

Please provide:
1. All source code in the `client/` folder
2. A brief README in `client/` with:
   - Instructions to run your application
   - Any libraries/dependencies used
   - Any assumptions or decisions you made
   - Additional improvements or optimizations you would implement given more time
