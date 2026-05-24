# VUW SODI Material Library Prototype

This is a static GitHub Pages prototype for a Victoria University of Wellington SODI Material Library catalogue. It lets students search donated materials, see available quantities, add materials to a booking tray, and make a local demo reservation.

## How to use with GitHub Pages

1. Unzip this folder.
2. Open GitHub Desktop.
3. Create a new repository or add these files to an existing repository.
4. Commit and publish the repository.
5. In GitHub, open **Settings → Pages**.
6. Set the source to the main branch and the root folder.
7. Wait for GitHub Pages to build, then open the live URL.

## Important prototype note

The booking system uses browser `localStorage`. This means bookings and stock changes are saved only on the device and browser being used. That is good for a class prototype because it works on GitHub Pages without a server.

For a real public system, replace the local storage logic with a shared database or a form service. Good next steps would be Google Sheets, Airtable, Firebase, Supabase, or a university-managed backend.

## Editing the material list

Open `js/app.js` and edit the `defaultMaterials` array. Each material has a name, category, available amount, unit, condition, location, use, weight estimate, description, and search tags.

## Included images

The two supplied images are stored in the `assets` folder:

- `vuw-logo.png`
- `sodi-library-poster.png`

## Files

- `index.html` — page structure
- `css/style.css` — visual design and responsive layout
- `js/app.js` — search, filters, stock counts, booking tray, local bookings, CSV export
- `assets/` — supplied image assets
