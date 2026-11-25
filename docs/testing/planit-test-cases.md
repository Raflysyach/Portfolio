# PlanIt: Manual Test Cases

- **Application:** https://plan-it-pi-five.vercel.app/ (source: https://github.com/Raflysyach/PlanIt)
- **Note:** the hosted backend is offline, so cases that need the API must be run locally (`planit-backend` + `planit-frontend`, see the repo README).
- Fill in **Actual Result** and **Status** (Pass / Fail / Blocked) as you execute each case. Log failures with `bug-report-template.md`.

## Authentication

| ID | Scenario | Steps | Expected Result | Priority | Actual Result | Status |
| --- | --- | --- | --- | --- | --- | --- |
| AUTH-01 | Register with valid data | Open Sign Up, fill all fields with valid values, submit | Account is created and the user is signed in | High | | |
| AUTH-02 | Register with an existing email | Register using an email that already exists | Clear error that the email or username already exists | High | | |
| AUTH-03 | Register with empty fields | Submit the form with every field empty | Required-field messages, no request accepted | High | | |
| AUTH-04 | Register with invalid email format | Enter `abc` or `abc@` as the email | Validation message, account not created | Medium | | |
| AUTH-05 | Register with a very short password | Enter a 1 to 3 character password | Rejected, or clear rule shown | Medium | | |
| AUTH-06 | Login with valid credentials | Log in with a registered account | Signed in, navbar reflects logged-in state | High | | |
| AUTH-07 | Login with a wrong password | Use a valid email and a wrong password | Generic "invalid credentials" error, no sign-in | High | | |
| AUTH-08 | Login with an unregistered email | Use an email that was never registered | Generic error, no sign-in | Medium | | |
| AUTH-09 | Google sign-in | Click "Continue with Google" and complete consent | Redirected back and signed in | Medium | | |
| AUTH-10 | Logout and session | Log out, then press the browser Back button | Protected pages are not accessible after logout | High | | |

## Venues and Organizers

| ID | Scenario | Steps | Expected Result | Priority | Actual Result | Status |
| --- | --- | --- | --- | --- | --- | --- |
| BRW-01 | Browse venues list | Open Venues | Venue cards load with name, location, price, rating | High | | |
| BRW-02 | Filter by category | Select each category in turn | Only matching venues shown; counts are correct | High | | |
| BRW-03 | Filter by location | Tick one, then several locations | Results match the selected locations | Medium | | |
| BRW-04 | Combine filters | Apply category, location, rating, capacity, and price together | Results satisfy every filter; empty state shown if none | High | | |
| BRW-05 | Reset filters | Apply filters, click Reset | All filters clear and the full list returns | Medium | | |
| BRW-06 | Price slider boundaries | Move the slider to its minimum and maximum | List updates correctly at both extremes | Medium | | |
| BRW-07 | Open a detail page | Click a venue card | Detail page shows correct data for that item | High | | |
| BRW-08 | Invalid detail ID | Open `/detail/99999` and `/detail/abc` | Friendly not-found handling, no crash | Medium | | |

## Booking and Checkout

| ID | Scenario | Steps | Expected Result | Priority | Actual Result | Status |
| --- | --- | --- | --- | --- | --- | --- |
| BKG-01 | Book while logged out | Start checkout without signing in | Redirected to login or prompted to sign in | High | | |
| BKG-02 | Happy path | Select a package, fill details, choose payment, confirm | Booking is created with a booking code and appears in My Bookings | High | | |
| BKG-03 | Step navigation | Go forward and back between steps | Entered data is preserved | Medium | | |
| BKG-04 | Price calculation | Add base package, optional add-ons, and platform fee | Total and 30% down payment are calculated correctly | High | | |
| BKG-05 | Empty required fields | Continue from Details with empty fields | Blocked with clear messages | High | | |
| BKG-06 | Guests boundary values | Enter 0, -1, 1, a very large number, and text | Invalid values rejected | Medium | | |
| BKG-07 | Event date in the past | Pick a past date | Rejected or warned | Medium | | |
| BKG-08 | Double submit | Click Confirm twice quickly | Only one booking is created | High | | |
| BKG-09 | Refresh during checkout | Reload mid-flow | Behavior is sensible; no corrupt booking | Medium | | |
| BKG-10 | Cancel a booking | Cancel from My Bookings or Booking Detail | Status changes to Cancelled everywhere it is shown | High | | |

## Reviews, Profile, and Other Pages

| ID | Scenario | Steps | Expected Result | Priority | Actual Result | Status |
| --- | --- | --- | --- | --- | --- | --- |
| REV-01 | Submit a review | Rate and comment on a venue | Review appears on the detail page; rating and count update | Medium | | |
| REV-02 | Review with empty text or no rating | Submit incomplete review | Validation message | Medium | | |
| REV-03 | Very long or special-character review | Paste 2,000+ characters and symbols such as `<script>` | Saved and displayed safely, layout intact | Medium | | |
| PRF-01 | Update profile | Change profile data and save | Changes persist after reload | Medium | | |
| FAV-01 | Favorites | Add and remove a favorite | List and icon states stay in sync | Low | | |
| NAV-01 | Navbar and routing | Click every navbar and footer link | No broken routes | Medium | | |

## Responsive and Compatibility

| ID | Scenario | Steps | Expected Result | Priority | Actual Result | Status |
| --- | --- | --- | --- | --- | --- | --- |
| UI-01 | Mobile layout | Test at 375 px, 768 px, and 1440 px widths | No overflow or overlap; filters remain usable | High | | |
| UI-02 | Browsers | Chrome, Firefox, Edge, Safari if available | Same behavior and appearance | Medium | | |

## Risk Areas to Verify (from reading the source code)

These are hypotheses from a code read, **not confirmed bugs**. Run each one, and only report it if you can reproduce it.

1. **Price comes from the URL.** Checkout reads `price`, `package`, and `type` from query parameters. Try changing `?price=` and see whether the total, down payment, and saved booking follow the edited value.
2. **Booking access control.** `GET /bookings/:id` and `PATCH /bookings/:id/status` take only an ID. Check whether a logged-in user can open or cancel another user's booking by changing the ID.
3. **Input validation.** Register and login DTOs have no validation rules. Check what the API accepts for empty, malformed, or oversized fields.
4. **Reviews without a booking.** Check whether a user who never booked a venue can still review it, and whether duplicate reviews are allowed.
5. **Seed endpoints.** `POST /venues/seed` and `POST /organizers/seed` are public. Check what happens when they are called repeatedly (duplicate data).
