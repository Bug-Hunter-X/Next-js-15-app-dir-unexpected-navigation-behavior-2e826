# Next.js 15 App Directory Unexpected Navigation Behavior

This repository demonstrates an unexpected behavior when navigating between pages in the Next.js 15 App Directory.  The issue is that sometimes a page will render with the content from a previous page in the navigation history.  This seems to occur intermittently and is difficult to reproduce reliably.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate between different pages in the app directory.  You may need to navigate multiple times or in a specific order to trigger the bug.

## Expected Behavior

Each page should render its own unique content without showing the contents of previously visited pages.

## Actual Behavior

Intermittently, a page will render with the content from a previous page.

## Potential Causes

* **Caching:** Some sort of aggressive caching might be causing this issue.
* **React Reconciliation:** A potential issue with React's reconciliation process.
* **Server-Side Rendering:** A problem with how pages are rendered on the server.

## Workaround

(Temporary workaround included in this repo)

## Additional Notes

This issue only started after upgrading to Next.js 15 and using the App Router. 
The problem is intermittent and hard to reliably reproduce.
