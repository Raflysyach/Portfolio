# Garuda Darma Ekapratama: Manual Test Cases

- **Application:** https://index.garudadarmaekapratama.com/
- Fill in **Actual Result** and **Status** (Pass / Fail / Blocked) as you execute each case. Log failures with `bug-report-template.md`.

## Navigation and Content

| ID | Scenario | Steps | Expected Result | Priority | Actual Result | Status |
| --- | --- | --- | --- | --- | --- | --- |
| NAV-01 | Menu links | Click every item in the header and mobile menu | Each link goes to the right section or page | High | | |
| NAV-02 | Anchor scrolling | Click About Us, Clients, Contact Us | Smooth scroll to the right section, correct offset below the sticky header | Medium | | |
| NAV-03 | Services page | Open Services and "Learn more about us" | Pages load with correct content | Medium | | |
| NAV-04 | Content accuracy | Read the Home page for typos and duplicated text | No typos; Vision and Mission read distinctly | Low | | |

## Contact and Links

| ID | Scenario | Steps | Expected Result | Priority | Actual Result | Status |
| --- | --- | --- | --- | --- | --- | --- |
| CON-01 | Contact form, valid data | Fill Name, Email, Address, Phone, Message and send | Success confirmation; message received | High | | |
| CON-02 | Contact form, empty submit | Click Send with empty fields | Required-field validation | High | | |
| CON-03 | Invalid email and phone | Enter `abc` as email and letters as phone | Validation message | Medium | | |
| CON-04 | Long and special input | Paste 5,000 characters and symbols into Message | Handled safely, no layout break | Low | | |
| CON-05 | WhatsApp buttons | Click "Schedule a Call Now" (header) and the footer WhatsApp icon | Both open WhatsApp with the same, correctly formatted number | High | | |
| CON-06 | Email link | Click the envelope icon | Opens the mail client with the correct address | High | | |
| CON-07 | Social links | Click Facebook, YouTube, TikTok, LinkedIn | Each opens the correct profile in a new tab | Medium | | |
| CON-08 | Map | Scroll to the embedded map | Map loads and shows the right location | Low | | |

## Responsive and Compatibility

| ID | Scenario | Steps | Expected Result | Priority | Actual Result | Status |
| --- | --- | --- | --- | --- | --- | --- |
| UI-01 | Viewports | Test at 375 px, 768 px, and 1440 px widths | No overflow; images and text scale | High | | |
| UI-02 | Browsers | Chrome, Firefox, Edge, Safari if available | Same behavior and appearance | Medium | | |
| UI-03 | Page speed | Run Lighthouse on mobile | Note performance and accessibility scores | Low | | |

## Candidate Findings to Confirm in a Browser

Seen while reading the page's HTML, **not yet confirmed**. Check each in a real browser, and report only what reproduces.

1. The header "Schedule a Call Now" link points to `wa.me/082118270571` (leading zero), while the footer uses `wa.me/6282118270571`. WhatsApp expects the international format, so the header link may not open a chat.
2. The email icon links to `http://info@garudadarmaekapratama.com`, which is not a `mailto:` link, so it may not open a mail client.
3. The second Mission bullet repeats the Vision statement.
4. The footer shows "© 2025", while the page was modified in 2026.
5. "Schedule a Call Now" appears twice in the page source (likely desktop and mobile menus); confirm only one is visible per viewport.
